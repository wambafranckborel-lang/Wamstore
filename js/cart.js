// Cart Management - Wamstore

class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadCart();
    }
    
    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('wamstore-cart');
        if (saved) {
            this.items = JSON.parse(saved);
        }
        this.updateUI();
    }
    
    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('wamstore-cart', JSON.stringify(this.items));
        this.updateUI();
    }
    
    // Add item to cart
    addItem(productId, quantity = 1) {
        const product = getProductById(productId);
        if (!product) return;
        
        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                quantity: quantity,
                product: product
            });
        }
        
        this.saveCart();
        this.showNotification('Produit ajouté au panier !');
    }
    
    // Remove item from cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }
    
    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }
    
    // Get cart total
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
    
    // Get item count
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    // Clear cart
    clear() {
        this.items = [];
        this.saveCart();
    }
    
    // Update UI
    updateUI() {
        this.updateCartCount();
        this.updateCartSidebar();
    }
    
    // Update cart count badge
    updateCartCount() {
        const countElements = document.querySelectorAll('.cart-count, #cartItemCount');
        const count = this.getItemCount();
        
        countElements.forEach(element => {
            element.textContent = count;
        });
    }
    
    // Update cart sidebar
    updateCartSidebar() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItemsContainer) return;
        
        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <h3 data-translate="emptyCart">Votre panier est vide</h3>
                    <p data-translate="continueShopping">Continuez vos achats</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.product.image}" alt="${item.product.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.product.name}</div>
                        <div class="cart-item-price">${formatPrice(item.product.price)}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="cart.removeItem(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
        
        if (cartTotal) {
            cartTotal.textContent = formatPrice(this.getTotal());
        }
    }
    
    // Show notification
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
    
    // Get WhatsApp message
    getWhatsAppMessage() {
        const lang = window.currentLang ? window.currentLang() : 'fr';
        
        let message = lang === 'fr' 
            ? "Bonjour, je souhaite commander les articles suivants :\n\n"
            : "Hello, I would like to order the following items:\n\n";
        
        this.items.forEach((item, index) => {
            message += `${index + 1}. ${item.product.name}\n`;
            message += `   ${lang === 'fr' ? 'Quantité' : 'Quantity'}: ${item.quantity}\n`;
            message += `   ${lang === 'fr' ? 'Prix' : 'Price'}: ${formatPrice(item.product.price)}\n\n`;
        });
        
        message += `${lang === 'fr' ? 'TOTAL' : 'TOTAL'}: ${formatPrice(this.getTotal())}`;
        
        return encodeURIComponent(message);
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export cart instance
window.cart = cart;
