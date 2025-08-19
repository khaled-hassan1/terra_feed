// Wholesale page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Wholesale form handling
    const wholesaleForm = document.getElementById('wholesaleForm');
    if (wholesaleForm) {
        wholesaleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleWholesaleSubmission();
        });
    }
    
    // Pricing card interactions
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Category card interactions
    const categoryCards = document.querySelectorAll('.wholesale-category');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Get Quote buttons
    const quoteButtons = document.querySelectorAll('[data-translate="get_quote"]');
    
    quoteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.wholesale-category');
            const categoryTitle = card.querySelector('.card-title').textContent;
            
            // Pre-fill form with category information
            prefillWholesaleForm(categoryTitle);
            
            // Scroll to form
            document.querySelector('#wholesaleForm').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Contact Sales buttons
    const contactButtons = document.querySelectorAll('[data-translate="contact_sales"]');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.pricing-card');
            const tierTitle = card.querySelector('h5').textContent;
            const volume = card.querySelector('.card-header p').textContent;
            
            // Pre-fill form with tier information
            prefillWholesaleForm(null, tierTitle, volume);
            
            // Scroll to form
            document.querySelector('#wholesaleForm').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Benefits animation
    const benefitItems = document.querySelectorAll('.wholesale-benefit');
    
    const benefitObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.3 });
    
    benefitItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        benefitObserver.observe(item);
    });
    
    // Volume calculator
    initializeVolumeCalculator();
});

function handleWholesaleSubmission() {
    const formData = {
        companyName: document.getElementById('companyName').value,
        businessType: document.getElementById('businessType').value,
        contactName: document.getElementById('contactName').value,
        contactEmail: document.getElementById('contactEmail').value,
        phone: document.getElementById('phone').value,
        monthlyVolume: document.getElementById('monthlyVolume').value,
        spicesInterest: document.getElementById('spicesInterest').value,
        additionalInfo: document.getElementById('additionalInfo').value
    };
    
    // Validate required fields
    const requiredFields = ['companyName', 'businessType', 'contactName', 'contactEmail'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
        showAlert('error', 'Please fill in all required fields');
        return;
    }
    
    if (!isValidEmail(formData.contactEmail)) {
        showAlert('error', 'Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitButton = document.querySelector('#wholesaleForm button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Submitting...';
    
    setTimeout(() => {
        showAlert('success', 'Thank you for your inquiry! Our wholesale team will contact you within 24 hours.');
        document.getElementById('wholesaleForm').reset();
        
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        
        // Send confirmation email (simulation)
        sendConfirmationEmail(formData);
    }, 2000);
}

function prefillWholesaleForm(category, tier, volume) {
    if (category) {
        const businessTypeMap = {
            'Restaurant Solutions': 'restaurant',
            'Retail Solutions': 'retail',
            'Manufacturing Solutions': 'manufacturing'
        };
        
        const businessType = businessTypeMap[category];
        if (businessType) {
            document.getElementById('businessType').value = businessType;
        }
        
        // Add category to additional info
        const additionalInfo = document.getElementById('additionalInfo');
        additionalInfo.value = `Interested in ${category}. ` + additionalInfo.value;
    }
    
    if (tier && volume) {
        const volumeMap = {
            'Starter': '50-500',
            'Professional': '500-2000',
            'Enterprise': '2000+'
        };
        
        const volumeValue = volumeMap[tier];
        if (volumeValue) {
            document.getElementById('monthlyVolume').value = volumeValue;
        }
        
        // Add tier info to additional info
        const additionalInfo = document.getElementById('additionalInfo');
        additionalInfo.value = `Interested in ${tier} tier (${volume}). ` + additionalInfo.value;
    }
}

function initializeVolumeCalculator() {
    // Add volume calculator to the page
    const calculatorHTML = `
        <div class="volume-calculator mt-4 p-4 bg-light rounded">
            <h6>Volume Calculator</h6>
            <p class="small text-muted">Estimate your monthly spice needs</p>
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label small">Meals per day:</label>
                    <input type="number" class="form-control form-control-sm" id="mealsPerDay" value="100" min="1">
                </div>
                <div class="col-md-4">
                    <label class="form-label small">Avg spices per meal (oz):</label>
                    <input type="number" class="form-control form-control-sm" id="spicesPerMeal" value="0.5" step="0.1" min="0.1">
                </div>
                <div class="col-md-4">
                    <label class="form-label small">Estimated monthly volume:</label>
                    <input type="text" class="form-control form-control-sm" id="estimatedVolume" readonly>
                </div>
            </div>
        </div>
    `;
    
    const monthlyVolumeField = document.getElementById('monthlyVolume').parentNode;
    monthlyVolumeField.insertAdjacentHTML('afterend', calculatorHTML);
    
    // Calculator functionality
    const mealsInput = document.getElementById('mealsPerDay');
    const spicesInput = document.getElementById('spicesPerMeal');
    const volumeOutput = document.getElementById('estimatedVolume');
    
    function calculateVolume() {
        const mealsPerDay = parseFloat(mealsInput.value) || 0;
        const spicesPerMeal = parseFloat(spicesInput.value) || 0;
        const monthlyOz = mealsPerDay * spicesPerMeal * 30;
        const monthlyLbs = monthlyOz / 16;
        
        volumeOutput.value = `${monthlyLbs.toFixed(1)} lbs`;
        
        // Auto-select appropriate volume tier
        const monthlyVolumeSelect = document.getElementById('monthlyVolume');
        if (monthlyLbs < 500) {
            monthlyVolumeSelect.value = '50-500';
        } else if (monthlyLbs < 2000) {
            monthlyVolumeSelect.value = '500-2000';
        } else {
            monthlyVolumeSelect.value = '2000+';
        }
    }
    
    mealsInput.addEventListener('input', calculateVolume);
    spicesInput.addEventListener('input', calculateVolume);
    
    // Initial calculation
    calculateVolume();
}

function sendConfirmationEmail(formData) {
    // In a real application, this would send an actual email
    console.log('Sending confirmation email to:', formData.contactEmail);
    console.log('Form data:', formData);
    
    // Create a summary for the user
    const summary = `
        Company: ${formData.companyName}
        Business Type: ${formData.businessType}
        Contact: ${formData.contactName}
        Email: ${formData.contactEmail}
        Monthly Volume: ${formData.monthlyVolume}
        Spices of Interest: ${formData.spicesInterest}
    `;
    
    console.log('Inquiry Summary:', summary);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
    alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Pricing tier comparison
function compareTiers() {
    const comparisonModal = `
        <div class="modal fade" id="comparisonModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pricing Tier Comparison</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Starter</th>
                                        <th>Professional</th>
                                        <th>Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Volume Range</td>
                                        <td>50-500 lbs/month</td>
                                        <td>500-2000 lbs/month</td>
                                        <td>2000+ lbs/month</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>5-10%</td>
                                        <td>15-20%</td>
                                        <td>25-35%</td>
                                    </tr>
                                    <tr>
                                        <td>Packaging</td>
                                        <td>Basic</td>
                                        <td>Custom</td>
                                        <td>Custom Solutions</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery</td>
                                        <td>Standard</td>
                                        <td>Priority</td>
                                        <td>Express</td>
                                    </tr>
                                    <tr>
                                        <td>Support</td>
                                        <td>Email</td>
                                        <td>Phone + Account Manager</td>
                                        <td>24/7 + Dedicated Team</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', comparisonModal);
    const modal = new bootstrap.Modal(document.getElementById('comparisonModal'));
    modal.show();
    
    document.getElementById('comparisonModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Export functions for global use
window.compareTiers = compareTiers;