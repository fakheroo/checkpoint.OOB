class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;  // Instance de la classe Product
      this.quantity = quantity;
    }
  
    // Calcul du prix total de cet élément (prix * quantité)
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = [];  // Tableau pour contenir les éléments du panier
    }
  
    // Ajouter un élément au panier (si le produit est déjà dans le panier, on met à jour la quantité)
    addItem(product, quantity) {
      let item = this.items.find(item => item.product.id === product.id);
      
      if (item) {
        // Si l'élément est déjà dans le panier, on met à jour la quantité
        item.quantity += quantity;
      } else {
        // Sinon, on ajoute un nouvel élément dans le panier
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Supprimer un élément du panier par son id
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Obtenir le total des prix pour tous les éléments dans le panier
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Afficher les éléments du panier
    showItems() {
      if (this.items.length === 0) {
        console.log("Le panier est vide.");
      } else {
        this.items.forEach(item => {
          console.log(`Produit: ${item.product.name}, Quantité: ${item.quantity}, Prix total: ${item.getTotalPrice()}€`);
        });
      }
  
  // Création de produits
  const apple = new Product(1, "Pomme", 1.50);
  const banana = new Product(2, "Banane", 1.00);
  const orange = new Product(3, "Orange", 2.00);
  const pineapple = new Product(4, "Ananas", 3.50);
  
  // Création du panier d'achat
  const myCart = new ShoppingCart();
  
  // Ajouter des produits au panier
  myCart.addItem(apple, 3);       // Ajouter 3 pommes
  myCart.addItem(banana, 2);      // Ajouter 2 bananes
  myCart.addItem(orange, 1);      // Ajouter 1 orange
  myCart.addItem(pineapple, 1);   // Ajouter 1 ananas
  
  // Afficher les éléments du panier
  console.log("Contenu du panier:");
  myCart.showItems();  // Affiche tous les éléments du panier
  
  // Afficher le total du panier
  console.log(`Total du panier: ${myCart.getTotal()}€`);
  
  // Supprimer un élément (par exemple, les bananes)
  myCart.removeItem(2);  // Supprimer les bananes (id = 2)
  
  // Afficher les éléments après suppression
  console.log("\nContenu du panier après suppression des bananes:");
  myCart.showItems();  // Affiche les éléments après suppression
  
  // Afficher le nouveau total du panier
  console.log(`Total du panier après suppression: ${myCart.getTotal()}€`);
  
    }
  }