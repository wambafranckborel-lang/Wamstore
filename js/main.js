// Main JavaScript - Wamstore

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
        });
    }
    
    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Cart sidebar toggle
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.getElementById('whatsappPopup').classList.remove('active');
        });
    }
    
    // WhatsApp popup
    const whatsappPopup = document.getElementById('whatsappPopup');
    const closePopup = document.getElementById('closePopup');
    
    // Show popup after 5 seconds
    setTimeout(() => {
        if (whatsappPopup && !sessionStorage.getItem('popup-shown')) {
            whatsappPopup.classList.add('active');
            overlay.classList.add('active');
            sessionStorage.setItem('popup-shown', 'true');
        }
    }, 5000);
    
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            whatsappPopup.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // WhatsApp form submission
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneInput = document.getElementById('phoneInput');
            const phone = phoneInput.value;
            
            if (phone) {
                const message = `Bonjour, je souhaite rejoindre votre groupe WhatsApp. Mon numéro: ${phone}`;
                window.open(`https://wa.me/237674172225?text=${encodeURIComponent(message)}`, '_blank');
                whatsappPopup.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }
    
    // Load featured products on homepage
    const featuredProductsGrid = document.getElementById('featuredProductsGrid');
    if (featuredProductsGrid) {
        loadFeaturedProducts();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update WhatsApp order link in cart
    updateCartWhatsAppLink();
});

// Load featured products
function loadFeaturedProducts() {
    const grid = document.getElementById('featuredProductsGrid');
    if (!grid) return;
    
    const featured = getFeaturedProducts(8);
    
    grid.innerHTML = featured.map(product => createProductCard(product)).join('');
}

// Create product card HTML
function createProductCard(product) {
    const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    const categoryName = getCategoryName(product.category, window.currentLang ? window.currentLang() : 'fr');
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${badge}
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> <span data-translate="addToCart">Ajouter</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Add to cart function
function addToCart(productId) {
    if (window.cart) {
        window.cart.addItem(productId);
    }
}

// Update cart WhatsApp link
function updateCartWhatsAppLink() {
    const checkInterval = setInterval(() => {
        const whatsappBtn = document.querySelector('.cart-footer .btn-primary');
        if (whatsappBtn && window.cart) {
            whatsappBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const message = window.cart.getWhatsAppMessage();
                window.open(`https://wa.me/237674172225?text=${message}`, '_blank');
            });
            clearInterval(checkInterval);
        }
    }, 100);
}

// Search functionality
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        // This would filter products in real implementation
        console.log('Searching for:', query);
    });
}

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe category cards and product cards
document.querySelectorAll('.category-card, .product-card, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Format numbers for display
function formatNumber(num) {
    return new Intl.NumberFormat('fr-FR').format(num);
}

// Copy to clipboard utility
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    });
}

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Export utilities
window.createProductCard = createProductCard;
window.addToCart = addToCart;
window.getUrlParameter = getUrlParameter;
window.formatNumber = formatNumber;
