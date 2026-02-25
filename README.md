# 🛍️ WAMSTORE - Site E-commerce

Site e-commerce moderne pour Wamstore - Mode, beauté, high-tech et services au Cameroun.

---

## 📦 CONTENU DU PROJET

```
wamstore/
├── index.html          # Page d'accueil
├── category.html       # Page catégorie avec filtres
├── services.html       # Page services professionnels
├── wholesale.html      # Page espace grossiste
├── mode.html          # Redirection vers mode femme
├── css/
│   └── style.css      # Styles principaux
├── js/
│   ├── main.js        # JavaScript principal
│   ├── cart.js        # Gestion du panier
│   ├── products.js    # Base de données produits
│   └── translations.js # Système de traduction FR/EN
├── images/
│   └── logo.jpg       # VOTRE LOGO À AJOUTER ICI
└── README.md          # Ce fichier
```

---

## 🚀 DÉPLOIEMENT SUR NETLIFY (ÉTAPES DÉTAILLÉES)

### Méthode 1 : Drag & Drop (Plus Simple)

1. **Créer un compte Netlify**
   - Allez sur https://www.netlify.com
   - Cliquez sur "Sign up" (gratuit)
   - Inscrivez-vous avec GitHub, GitLab ou email

2. **Préparer vos fichiers**
   - **IMPORTANT** : Placez votre logo `Logo_Wams_Store_.jpg` dans le dossier `images/` et renommez-le en `logo.jpg`
   - Vérifiez que tous les fichiers sont présents

3. **Déployer**
   - Connectez-vous à Netlify
   - Glissez-déposez le dossier `wamstore` entier sur la page d'accueil Netlify
   - Attendez 30 secondes... TERMINÉ ! ✅

4. **Personnaliser le nom**
   - Par défaut, Netlify donne un nom random (ex: happy-curie-123456.netlify.app)
   - Cliquez sur "Site settings" > "Change site name"
   - Choisissez : `wamstore` (si disponible)
   - Votre site sera accessible sur : **wamstore.netlify.app**

### Méthode 2 : Via GitHub (Plus Professionnel)

1. Créez un compte GitHub (si vous n'en avez pas)
2. Créez un nouveau repository "wamstore"
3. Uploadez tous les fichiers
4. Sur Netlify : "New site from Git" > Sélectionnez votre repo
5. Deploy automatique à chaque modification !

---

## ⚙️ CONFIGURATION INITIALE

### 1. Ajouter votre logo

**Fichier à placer** : `images/logo.jpg`

Votre logo est déjà téléchargé. Placez-le simplement dans le dossier `images/` et renommez-le en `logo.jpg`.

Le logo apparaîtra automatiquement dans :
- Le header
- Le footer
- Toutes les pages

### 2. Vérifier les liens WhatsApp

Le numéro WhatsApp est déjà configuré : **+237 674 172 225**

Si vous voulez le modifier plus tard :
- Recherchez `237674172225` dans tous les fichiers
- Remplacez par votre nouveau numéro (format : 237XXXXXXXXX)

---

## 📝 COMMENT MODIFIER LES PRODUITS

### Fichier à éditer : `js/products.js`

**Structure d'un produit :**

```javascript
{
    id: 31,                              // ID unique (incrémentez toujours)
    name: "Nom du produit",
    category: "women-clothing",          // Voir catégories ci-dessous
    price: 25000,                        // Prix en FCFA
    image: "URL_DE_L_IMAGE",            // URL image
    badge: "Nouveau",                    // Optionnel : "Nouveau", "Promo", "Tendance"
    description: "Description produit"
}
```

### Catégories disponibles :

```
MODE :
- men-clothing          (Vêtements hommes)
- men-shoes            (Chaussures hommes)
- men-accessories      (Accessoires hommes)
- women-clothing       (Vêtements femmes)
- women-shoes          (Chaussures femmes)
- women-accessories    (Accessoires femmes)
- kids-clothing        (Vêtements enfants)
- kids-shoes           (Chaussures enfants)
- bags                 (Sacs & maroquinerie)
- jewelry              (Bijoux & montres)
- jerseys              (Maillots de foot)

AUTRES :
- beauty               (Beauté & bien-être)
- home                 (Maison & déco)
- tech                 (High-tech)
- food                 (Alimentation)
```

### Exemples d'ajout :

```javascript
// AJOUTER À LA FIN DU TABLEAU products = [...]

{
    id: 31,
    name: "Robe Africaine Wax",
    category: "women-clothing",
    price: 35000,
    image: "https://votre-image.jpg",
    badge: "Nouveau",
    description: "Magnifique robe en wax authentique"
},
{
    id: 32,
    name: "Costume Homme Elite",
    category: "men-clothing",
    price: 55000,
    image: "https://votre-image.jpg",
    description: "Costume 3 pièces, qualité premium"
}
```

---

## 🖼️ IMAGES DES PRODUITS

### Option 1 : Utiliser Unsplash (Gratuit)

1. Allez sur https://unsplash.com
2. Recherchez votre produit (ex: "dress", "shoes", "phone")
3. Cliquez sur l'image
4. Clic droit > "Copier l'adresse de l'image"
5. Collez dans le champ `image`

### Option 2 : Vos propres photos

1. **Uploadez sur un service gratuit** :
   - ImgBB : https://imgbb.com (recommandé)
   - Imgur : https://imgur.com
   - Cloudinary : https://cloudinary.com

2. **Obtenez le lien** :
   - Uploadez votre image
   - Copiez le lien direct
   - Collez dans `image: "LIEN_ICI"`

**Dimensions recommandées** : 800x1000px minimum

---

## 🎨 MODIFIER LES COULEURS

Si vous voulez changer les couleurs plus tard :

**Fichier** : `css/style.css` (lignes 10-15)

```css
:root {
    --primary-color: #f4b942;      /* Or/Jaune (boutons, accents) */
    --secondary-color: #1a1d2e;    /* Bleu marine (textes, header) */
    --dark-navy: #0f1117;          /* Bleu foncé (backgrounds) */
}
```

Remplacez les codes couleur par les vôtres.

---

## 🌐 CHANGER LA LANGUE PAR DÉFAUT

**Fichier** : `js/translations.js` (ligne 239)

```javascript
let currentLang = 'fr';  // Changez en 'en' pour anglais par défaut
```

---

## 📱 FONCTIONNALITÉS DU SITE

### ✅ Fonctionnalités actives :

- ✅ Système de panier (stockage local)
- ✅ Ajout/suppression de produits
- ✅ Calcul du total
- ✅ Bouton WhatsApp avec message pré-rempli
- ✅ Traduction FR/EN
- ✅ Popup WhatsApp pour collecte de numéros
- ✅ Filtres par prix
- ✅ Tri des produits (prix, nom)
- ✅ Recherche (interface prête)
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Menu mobile

### ❌ Ce qui N'EST PAS disponible (limitations Netlify) :

- ❌ Comptes utilisateurs
- ❌ Historique de commandes
- ❌ Gestion automatique du stock
- ❌ Paiement en ligne intégré
- ❌ Base de données
- ❌ Tableau de bord admin

**Solution** : Ces fonctionnalités nécessitent un vrai backend. Quand vous serez prêt, migrez vers :
- **WooCommerce** (WordPress) : 30 000 - 50 000 FCFA/mois
- **Shopify** : à partir de 40 000 FCFA/mois
- **Solution custom** : 100 000 - 300 000 FCFA one-time

---

## 💬 GESTION DES COMMANDES VIA WHATSAPP

### Comment ça marche :

1. Client ajoute produits au panier
2. Client clique "Commander via WhatsApp"
3. Message automatique envoyé avec :
   - Liste des produits
   - Quantités
   - Prix total
4. Vous discutez directement avec le client
5. Vous lui envoyez votre numéro Mobile Money/Orange Money
6. Client paie
7. Vous expédiez

### Message type généré :

```
Bonjour, je souhaite commander les articles suivants :

1. Robe Cocktail Élégante
   Quantité: 1
   Prix: 22 000 FCFA

2. Escarpins à Talons
   Quantité: 1
   Prix: 18 000 FCFA

TOTAL: 40 000 FCFA
```

---

## 🔄 METTRE À JOUR LE SITE

### Sur Netlify (après modifications) :

**Méthode Drag & Drop** :
1. Modifiez vos fichiers localement
2. Glissez-déposez le dossier `wamstore` à nouveau sur Netlify
3. Attendez 30 secondes
4. Rafraîchissez votre site !

**Méthode GitHub** :
1. Modifiez vos fichiers
2. Commit + Push sur GitHub
3. Netlify se met à jour automatiquement !

---

## 📊 30 PRODUITS FICTIFS INCLUS

Le site contient déjà 30 produits d'exemple répartis sur toutes les catégories :
- 4 produits Mode Homme
- 5 produits Mode Femme
- 3 produits Mode Enfant
- 3 Maillots de foot
- 3 produits Beauté
- 4 produits Maison
- 4 produits High-Tech
- 4 produits Alimentation

**Ces produits utilisent des images de Unsplash (domaine public).**

Remplacez-les progressivement par vos vrais produits !

---

## 🆘 PROBLÈMES COURANTS

### Le logo ne s'affiche pas
➡️ Vérifiez que le fichier s'appelle exactement `logo.jpg` et est dans `images/`

### Les produits ne s'affichent pas
➡️ Ouvrez la console (F12) et vérifiez les erreurs JavaScript

### Le panier ne fonctionne pas
➡️ Vérifiez que JavaScript est activé dans le navigateur

### Les traductions ne marchent pas
➡️ Videz le cache du navigateur (Ctrl+Shift+R)

---

## 📞 CONTACT & SUPPORT

**WhatsApp** : +237 674 172 225
**Facebook** : https://www.facebook.com/Wamsstore.Officiel/

---

## 🎯 ROADMAP / PROCHAINES ÉTAPES

### Court terme (1-2 mois)
- ✅ Remplacer les 30 produits fictifs par vos vrais produits
- ✅ Ajouter vos vraies photos de produits
- ✅ Tester tous les liens WhatsApp
- ✅ Partager sur vos réseaux sociaux

### Moyen terme (3-6 mois)
- Migration vers WooCommerce ou Shopify
- Intégration paiement Mobile Money (MTN/Orange)
- Système de suivi de commandes
- Comptes clients

### Long terme (6-12 mois)
- Application mobile
- Programme de fidélité
- Livraison GPS en temps réel

---

## 📄 LICENCE

© 2024 Wamstore. Tous droits réservés.

---

**🎉 FÉLICITATIONS ! Votre site e-commerce est prêt ! 🎉**

N'oubliez pas :
1. Ajoutez votre logo dans `images/logo.jpg`
2. Remplacez les produits fictifs progressivement
3. Testez sur mobile avant de partager
4. Partagez sur Facebook, Instagram, TikTok !

Bon succès ! 🚀
