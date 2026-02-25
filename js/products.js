// Products Database - Wamstore
// Produits fictifs réalistes pour toutes les catégories

const products = [
    // MODE HOMME
    {
        id: 1,
        name: "Costume 3 pièces élégant",
        category: "men-clothing",
        price: 45000,
        image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500",
        badge: "Nouveau",
        description: "Costume élégant 3 pièces, parfait pour les occasions formelles"
    },
    {
        id: 2,
        name: "Chemise Oxford Premium",
        category: "men-clothing",
        price: 12000,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
        description: "Chemise Oxford 100% coton, coupe slim"
    },
    {
        id: 3,
        name: "Baskets Sport Nike",
        category: "men-shoes",
        price: 35000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        badge: "Tendance",
        description: "Baskets Nike confortables et stylées"
    },
    {
        id: 4,
        name: "Montre Chronographe",
        category: "jewelry",
        price: 28000,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
        description: "Montre chronographe élégante avec bracelet en cuir"
    },
    
    // MODE FEMME
    {
        id: 5,
        name: "Robe Cocktail Élégante",
        category: "women-clothing",
        price: 22000,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
        badge: "Nouveau",
        description: "Robe de cocktail élégante, parfaite pour vos soirées"
    },
    {
        id: 6,
        name: "Ensemble Tailleur Femme",
        category: "women-clothing",
        price: 38000,
        image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
        description: "Ensemble tailleur professionnel, veste et pantalon"
    },
    {
        id: 7,
        name: "Escarpins à Talons",
        category: "women-shoes",
        price: 18000,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        description: "Escarpins élégants à talons hauts"
    },
    {
        id: 8,
        name: "Sac à Main Designer",
        category: "bags",
        price: 32000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        badge: "Tendance",
        description: "Sac à main de luxe en cuir véritable"
    },
    {
        id: 9,
        name: "Boucles d'oreilles Or",
        category: "jewelry",
        price: 15000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
        description: "Boucles d'oreilles en or 18 carats"
    },
    
    // MODE ENFANT
    {
        id: 10,
        name: "Ensemble Garçon Casual",
        category: "kids-clothing",
        price: 8500,
        image: "https://images.unsplash.com/photo-1519238109-f0c8e3e00e1e?w=500",
        description: "Ensemble t-shirt et short pour garçon"
    },
    {
        id: 11,
        name: "Robe Fille Princesse",
        category: "kids-clothing",
        price: 9500,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500",
        badge: "Nouveau",
        description: "Jolie robe de princesse pour petite fille"
    },
    {
        id: 12,
        name: "Baskets Enfant Lumineuses",
        category: "kids-shoes",
        price: 12000,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500",
        description: "Baskets lumineuses pour enfants, tailles 25-35"
    },
    
    // MAILLOTS DE FOOT
    {
        id: 13,
        name: "Maillot Real Madrid + Flocage",
        category: "jerseys",
        price: 18000,
        image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=500",
        badge: "Populaire",
        description: "Maillot officiel Real Madrid avec nom et numéro personnalisés"
    },
    {
        id: 14,
        name: "Maillot PSG Domicile",
        category: "jerseys",
        price: 17000,
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500",
        description: "Maillot PSG domicile, saison actuelle"
    },
    {
        id: 15,
        name: "Maillot Cameroun Lions",
        category: "jerseys",
        price: 16000,
        image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500",
        badge: "Nouveau",
        description: "Maillot officiel des Lions Indomptables du Cameroun"
    },
    
    // BEAUTÉ
    {
        id: 16,
        name: "Lait Corporel Fair & White",
        category: "beauty",
        price: 8500,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
        description: "Lait corporel éclaircissant et nourrissant 500ml"
    },
    {
        id: 17,
        name: "Parfum Sauvage Dior 100ml",
        category: "beauty",
        price: 45000,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        badge: "Premium",
        description: "Eau de toilette Sauvage by Dior, 100ml"
    },
    {
        id: 18,
        name: "Kit Maquillage Complet",
        category: "beauty",
        price: 28000,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500",
        description: "Kit de maquillage professionnel, 24 pièces"
    },
    
    // MAISON & DÉCO
    {
        id: 19,
        name: "Canapé 3 Places Moderne",
        category: "home",
        price: 185000,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
        description: "Canapé moderne 3 places en tissu gris"
    },
    {
        id: 20,
        name: "Table Basse Design",
        category: "home",
        price: 42000,
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500",
        description: "Table basse design en bois et verre"
    },
    {
        id: 21,
        name: "Aspirateur Voiture 2-en-1",
        category: "home",
        price: 25000,
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500",
        badge: "Promo",
        description: "Aspirateur + pompe à air pour voiture, multifonction"
    },
    {
        id: 22,
        name: "Tableau Décoratif Africain",
        category: "home",
        price: 15000,
        image: "https://images.unsplash.com/photo-1582561425926-b1ff4c3ff5d1?w=500",
        description: "Tableau africain moderne pour décoration murale"
    },
    
    // HIGH-TECH
    {
        id: 23,
        name: "Samsung Galaxy S23",
        category: "tech",
        price: 425000,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
        badge: "Nouveau",
        description: "Samsung Galaxy S23, 256GB, toutes couleurs"
    },
    {
        id: 24,
        name: "iPhone 14 Pro Max",
        category: "tech",
        price: 650000,
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500",
        badge: "Premium",
        description: "iPhone 14 Pro Max 512GB, garantie 1 an"
    },
    {
        id: 25,
        name: "MacBook Air M2",
        category: "tech",
        price: 850000,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        description: "MacBook Air M2, 13 pouces, 256GB SSD"
    },
    {
        id: 26,
        name: "Écouteurs AirPods Pro",
        category: "tech",
        price: 95000,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
        description: "Apple AirPods Pro 2ème génération"
    },
    
    // ALIMENTATION
    {
        id: 27,
        name: "Crêpes Sucrées x5",
        category: "food",
        price: 2500,
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500",
        badge: "Frais",
        description: "Lot de 5 crêpes sucrées, préparation du jour"
    },
    {
        id: 28,
        name: "Nems Poulet x10",
        category: "food",
        price: 3500,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500",
        description: "10 nems au poulet, frais et croustillants"
    },
    {
        id: 29,
        name: "Crêpe Viande Hachée",
        category: "food",
        price: 1500,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
        description: "Crêpe salée garnie de viande hachée épicée"
    },
    {
        id: 30,
        name: "Céréales Premium Mix 1kg",
        category: "food",
        price: 4500,
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500",
        description: "Mélange de céréales premium, sachet 1kg"
    }
];

// Get products by category
function getProductsByCategory(category) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Get featured products
function getFeaturedProducts(limit = 8) {
    return products.slice(0, limit);
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}

// Category names
const categoryNames = {
    'men-clothing': { fr: 'Vêtements Hommes', en: "Men's Clothing" },
    'men-shoes': { fr: 'Chaussures Hommes', en: "Men's Shoes" },
    'men-accessories': { fr: 'Accessoires Hommes', en: "Men's Accessories" },
    'women-clothing': { fr: 'Vêtements Femmes', en: "Women's Clothing" },
    'women-shoes': { fr: 'Chaussures Femmes', en: "Women's Shoes" },
    'women-accessories': { fr: 'Accessoires Femmes', en: "Women's Accessories" },
    'kids-clothing': { fr: 'Vêtements Enfants', en: "Kids' Clothing" },
    'kids-shoes': { fr: 'Chaussures Enfants', en: "Kids' Shoes" },
    'bags': { fr: 'Sacs & Maroquinerie', en: 'Bags & Leather Goods' },
    'jewelry': { fr: 'Bijoux & Montres', en: 'Jewelry & Watches' },
    'jerseys': { fr: 'Maillots de Foot', en: 'Football Jerseys' },
    'beauty': { fr: 'Beauté & Bien-être', en: 'Beauty & Wellness' },
    'home': { fr: 'Maison & Déco', en: 'Home & Decor' },
    'tech': { fr: 'High-Tech', en: 'High-Tech' },
    'food': { fr: 'Alimentation', en: 'Food' }
};

// Get category name
function getCategoryName(category, lang = 'fr') {
    return categoryNames[category] ? categoryNames[category][lang] : category;
}

// Export functions
window.products = products;
window.getProductsByCategory = getProductsByCategory;
window.getProductById = getProductById;
window.getFeaturedProducts = getFeaturedProducts;
window.formatPrice = formatPrice;
window.getCategoryName = getCategoryName;
