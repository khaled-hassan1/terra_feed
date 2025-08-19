// Spices page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const spiceItems = document.querySelectorAll('.spice-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            spiceItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        });
    });
    
    // Spice card interactions
    const spiceCards = document.querySelectorAll('.spice-card');
    
    spiceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Learn More button functionality
    const learnMoreButtons = document.querySelectorAll('.spice-card .btn-primary');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.spice-card');
            const spiceTitle = card.querySelector('.card-title').textContent;
            
            // Create modal for spice details
            showSpiceModal(card, spiceTitle);
        });
    });
    
    // Care tips animation
    const careTips = document.querySelectorAll('.care-tip');
    
    const careObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    careTips.forEach(tip => {
        tip.style.opacity = '0';
        tip.style.transform = 'translateY(30px)';
        tip.style.transition = 'all 0.6s ease';
        careObserver.observe(tip);
    });
});

function showSpiceModal(card, title) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal fade" id="spiceModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${card.querySelector('img').src}" class="img-fluid rounded mb-3" alt="${title}">
                            </div>
                            <div class="col-md-6">
                                <p><strong>Origin:</strong> ${card.querySelector('.spice-origin span').textContent}</p>
                                <p>${card.querySelector('.card-text').textContent}</p>
                                
                                <div class="spice-details-modal">
                                    ${card.querySelector('.spice-details').innerHTML}
                                </div>
                                
                                <div class="mt-4">
                                    <h6>Storage Instructions:</h6>
                                    <ul class="small">
                                        <li>Store in a cool, dry place</li>
                                        <li>Keep away from direct sunlight</li>
                                        <li>Use airtight containers</li>
                                        <li>Check expiration dates regularly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-12">
                                <h6>Nutritional Information (per 1 tsp):</h6>
                                <div class="row">
                                    <div class="col-md-3">
                                        <small><strong>Calories:</strong> 5-10</small>
                                    </div>
                                    <div class="col-md-3">
                                        <small><strong>Carbs:</strong> 1-2g</small>
                                    </div>
                                    <div class="col-md-3">
                                        <small><strong>Fiber:</strong> 0.5-1g</small>
                                    </div>
                                    <div class="col-md-3">
                                        <small><strong>Protein:</strong> 0.2-0.5g</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add to Quote</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('spiceModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('spiceModal'));
    modal.show();
    
    // Clean up modal after it's hidden
    document.getElementById('spiceModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Search functionality (if needed)
function searchSpices(query) {
    const spiceItems = document.querySelectorAll('.spice-item');
    const searchTerm = query.toLowerCase();
    
    spiceItems.forEach(item => {
        const title = item.querySelector('.card-title').textContent.toLowerCase();
        const description = item.querySelector('.card-text').textContent.toLowerCase();
        const origin = item.querySelector('.spice-origin').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || origin.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Export functions for global use
window.searchSpices = searchSpices;