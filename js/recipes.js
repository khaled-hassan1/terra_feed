// Recipes page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeItems = document.querySelectorAll('.recipe-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            recipeItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        });
    });
    
    // Recipe card interactions
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // View Recipe button functionality
    const viewRecipeButtons = document.querySelectorAll('.recipe-card .btn-primary');
    
    viewRecipeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.recipe-card');
            const recipeTitle = card.querySelector('.card-title').textContent;
            
            // Check if this button has a modal target
            const modalTarget = this.getAttribute('data-bs-target');
            if (!modalTarget) {
                // Create modal for recipe details
                showRecipeModal(card, recipeTitle);
            }
        });
    });
    
    // Recipe difficulty and rating system
    addRecipeRatings();
    
    // Recipe favorites functionality
    initializeFavorites();
});

function showRecipeModal(card, title) {
    const recipeData = getRecipeData(card);
    
    const modalHTML = `
        <div class="modal fade" id="recipeModal" tabindex="-1">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${card.querySelector('img').src}" class="img-fluid rounded mb-3" alt="${title}">
                                <div class="recipe-meta-modal">
                                    ${card.querySelector('.recipe-meta').innerHTML}
                                </div>
                                <div class="recipe-spices-modal mt-3">
                                    ${card.querySelector('.recipe-spices').innerHTML}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6>Ingredients:</h6>
                                <ul class="ingredients-list">
                                    ${recipeData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                </ul>
                                
                                <h6 class="mt-4">Nutritional Information:</h6>
                                <div class="nutrition-info">
                                    <div class="row">
                                        <div class="col-6"><small><strong>Calories:</strong> ${recipeData.nutrition.calories}</small></div>
                                        <div class="col-6"><small><strong>Protein:</strong> ${recipeData.nutrition.protein}</small></div>
                                        <div class="col-6"><small><strong>Carbs:</strong> ${recipeData.nutrition.carbs}</small></div>
                                        <div class="col-6"><small><strong>Fat:</strong> ${recipeData.nutrition.fat}</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-12">
                                <h6>Instructions:</h6>
                                <ol class="instructions-list">
                                    ${recipeData.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                                </ol>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-12">
                                <h6>Chef's Tips:</h6>
                                <div class="alert alert-info">
                                    <ul class="mb-0">
                                        ${recipeData.tips.map(tip => `<li>${tip}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" onclick="printRecipe()">
                            <i class="fas fa-print me-1"></i>Print Recipe
                        </button>
                        <button type="button" class="btn btn-outline-primary" onclick="shareRecipe('${title}')">
                            <i class="fas fa-share me-1"></i>Share
                        </button>
                        <button type="button" class="btn btn-primary" onclick="addToFavorites('${title}')">
                            <i class="fas fa-heart me-1"></i>Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('recipeModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
    modal.show();
    
    // Clean up modal after it's hidden
    document.getElementById('recipeModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

function getRecipeData(card) {
    const title = card.querySelector('.card-title').textContent;
    
    // Sample recipe data - in a real app, this would come from a database
    const recipes = {
        'Aromatic Chicken Curry': {
            ingredients: [
                '2 lbs chicken, cut into pieces',
                '2 tbsp TerraFeed Garam Masala',
                '1 tsp TerraFeed Turmeric',
                '4 green cardamom pods',
                '1 can coconut milk',
                '2 onions, sliced',
                '4 cloves garlic, minced',
                '1 inch ginger, grated',
                'Salt to taste',
                '2 tbsp cooking oil'
            ],
            instructions: [
                'Heat oil in a large pan and sauté onions until golden brown.',
                'Add minced garlic, grated ginger, and cardamom pods. Cook for 1 minute.',
                'Add garam masala and turmeric. Stir for 30 seconds until fragrant.',
                'Add chicken pieces and brown on all sides, about 5-7 minutes.',
                'Pour in coconut milk and bring to a simmer.',
                'Cover and cook for 25-30 minutes until chicken is tender.',
                'Season with salt and garnish with fresh cilantro.',
                'Serve hot with basmati rice or naan bread.'
            ],
            tips: [
                'Toast the garam masala in a dry pan for 30 seconds before adding for extra flavor.',
                'Marinate chicken in yogurt and spices for 2 hours for best results.',
                'Add a splash of cream at the end for extra richness.'
            ],
            nutrition: {
                calories: '320 per serving',
                protein: '28g',
                carbs: '12g',
                fat: '18g'
            }
        },
        'Ceylon Cinnamon Rolls': {
            ingredients: [
                '3 cups all-purpose flour',
                '1 packet active dry yeast',
                '1/4 cup warm water',
                '1/2 cup milk',
                '1/4 cup sugar',
                '1/4 cup butter',
                '1 egg',
                '1 tsp salt',
                '2 tbsp TerraFeed Ceylon Cinnamon',
                '1/2 cup brown sugar',
                'Powdered sugar for glaze'
            ],
            instructions: [
                'Dissolve yeast in warm water and let stand for 5 minutes.',
                'Mix flour, sugar, and salt in a large bowl.',
                'Add yeast mixture, warm milk, melted butter, and egg.',
                'Knead dough for 8-10 minutes until smooth and elastic.',
                'Place in greased bowl, cover, and let rise for 1 hour.',
                'Roll out dough into rectangle, brush with butter.',
                'Mix cinnamon and brown sugar, sprinkle over dough.',
                'Roll up tightly and cut into 12 pieces.',
                'Place in greased pan, let rise 30 minutes.',
                'Bake at 375°F for 25-30 minutes until golden.',
                'Cool slightly and drizzle with powdered sugar glaze.'
            ],
            tips: [
                'Use Ceylon cinnamon for a sweeter, more delicate flavor.',
                'Don\'t overbake - they should be golden but still soft.',
                'Brush with butter while warm for extra richness.'
            ],
            nutrition: {
                calories: '280 per roll',
                protein: '6g',
                carbs: '45g',
                fat: '9g'
            }
        }
    };
    
    return recipes[title] || {
        ingredients: ['Ingredients coming soon...'],
        instructions: ['Instructions coming soon...'],
        tips: ['Tips coming soon...'],
        nutrition: { calories: 'N/A', protein: 'N/A', carbs: 'N/A', fat: 'N/A' }
    };
}

function addRecipeRatings() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        const cardBody = card.querySelector('.card-body');
        const rating = Math.floor(Math.random() * 2) + 4; // Random rating between 4-5
        const ratingHTML = `
            <div class="recipe-rating mb-2">
                ${'★'.repeat(rating)}${'☆'.repeat(5-rating)}
                <small class="text-muted ms-1">(${Math.floor(Math.random() * 50) + 10} reviews)</small>
            </div>
        `;
        
        cardBody.insertAdjacentHTML('afterbegin', ratingHTML);
    });
}

function initializeFavorites() {
    // Load favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '[]');
    
    // Add favorite buttons to recipe cards
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent;
        const isFavorite = favorites.includes(title);
        
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = `btn btn-outline-danger btn-sm favorite-btn ${isFavorite ? 'active' : ''}`;
        favoriteBtn.innerHTML = `<i class="fas fa-heart"></i>`;
        favoriteBtn.onclick = () => toggleFavorite(title, favoriteBtn);
        
        const cardBody = card.querySelector('.card-body');
        const existingBtn = cardBody.querySelector('.btn-primary');
        existingBtn.parentNode.insertBefore(favoriteBtn, existingBtn);
    });
}

function toggleFavorite(title, button) {
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '[]');
    
    if (favorites.includes(title)) {
        favorites = favorites.filter(fav => fav !== title);
        button.classList.remove('active');
    } else {
        favorites.push(title);
        button.classList.add('active');
    }
    
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
}

function addToFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '[]');
    
    if (!favorites.includes(title)) {
        favorites.push(title);
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
        
        // Show success message
        showAlert('success', 'Recipe added to favorites!');
    } else {
        showAlert('info', 'Recipe is already in favorites!');
    }
}

function printRecipe() {
    window.print();
}

function shareRecipe(title) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this amazing recipe: ${title}`,
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showAlert('success', 'Recipe link copied to clipboard!');
        });
    }
}

function showAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'success' ? 'success' : type === 'info' ? 'info' : 'danger'} alert-dismissible fade show position-fixed`;
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

// Export functions for global use
window.addToFavorites = addToFavorites;
window.printRecipe = printRecipe;
window.shareRecipe = shareRecipe;