/************************ HEADER *********************/
/***** OPEN/ CLOSE MENU WHEN SMALL SCREEN ******/
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');
const menuButton = document.querySelectorAll('.menu-a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    mainMenu.classList.toggle('open');
});

/***** SET ACTIVE HEADER BUTTON *****/
menuButton.forEach((button) => {
    button.addEventListener('click', function () {
        menuButton.forEach(button => button.classList.remove('active'));
        this.classList.add('active');
    })
});

/************************ SEARCH *********************/
const openSearch = document.querySelector('.mainSearch');
const searchBtn = document.querySelector('.search-icon');
const searchTerm = document.querySelector('.search-input');
const searchbar = document.querySelector('.searchbar');
// Code in Icon Functions & DOMContentLoaded

/************************ ACCOUNT *********************/
const modal = document.querySelector('.modal-container');
const modalBtn = document.querySelector('.mainAccount');
const closeBtn = document.querySelectorAll('.close-account');

modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.style.display = 'block';
}

// CLose
closeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'none';
    })
});
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Card functions
const flip = document.querySelector('.flip-card');
const flips = document.querySelector('.sign-up-button-in');
const flaps = document.querySelector('.sign-in-button-up');
// Sorry 'bout the naming :)

flips.addEventListener('click', () => {
    flip.classList.add('is-flipped');
})
flaps.addEventListener('click', () => {
    flip.classList.remove('is-flipped')
})

/** FORM VALIDATION **/
const userName = document.querySelector('.userName');
const password = document.querySelector('#password');
const signInForm = document.querySelector('#sign-in-form');
const errorElement = document.querySelector('#error');
const signUpPassword = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const signupForm = document.querySelector('#sign-up-form');
const signUpUserName = document.querySelector('#signUpUserName');
const userEmail = document.querySelector('#userEmail');
const errorSignUp = document.querySelector('#errorUp');
const welcome = document.querySelector('.welcome');
const welcomeDOM = document.querySelector('.hidden-welcome');

// SIGN IN
signInForm.addEventListener('submit', (e) => {
    const messages = [];
    if (userName.value === '' || userName.value === null) {
        messages.push('Username is required.')
    }
    if (password.value === '' || password.value === null) {
        messages.push('password is required.')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else {
        flip.style.display = 'none';
        welcome.classList.add('enter');
        displayWelcome(userName);
    }
})

// SIGN UP
signupForm.addEventListener('submit', (e) => {
    const message = [];
    if (signUpUserName.value === '' || signUpUserName.value === null) {
        message.push('Username is required')
    }
    if (userEmail.value === '' || userEmail.value === null) {
        message.push('Email is required')
    }
    if (signUpPassword.value === '' || signUpPassword.value === null) {
        message.push('Password is required')
    }
    if (confirmPassword.value === '' || confirmPassword.value === null) {
        message.push('You must confirm your password')
    }
    if (signUpPassword.value.length <= 5) {
        message.push('Password must be longer than 5 characters');
    }
    if (signUpPassword.value.length >= 12) {
        message.push('Password must be less than 12 characters')
    }
    if (signUpPassword.value !== confirmPassword.value) {
        message.push("Passwords don't match")
    }
    if (message.length > 0) {
        e.preventDefault()
        errorSignUp.innerText = message.join(', ')
    }
    else {
        flip.style.display = 'none';
        welcome.classList.add('enter');
        displayUpWelcome(signUpUserName);
    }
})

/** Welcome **/
function displayWelcome(userName) {
    let result = `
    <h1 class="welcome-h1">Welcome back ${userName.value}!</h1>
    <p class="welcome-p">Just click continue to get back to our main page.</p>
    <button class="close-welcome">continue</button>
    `
    welcomeDOM.innerHTML = result
    closeWelcome();
}

function displayUpWelcome(signUpUserName) {
    let result = `
   <h1 class="welcome-h1">Welcome ${signUpUserName.value}!</h1>
   <p class="welcome-p">Great to have you with us! Just click continue to get back to our main page.</p>
   <button class="close-welcome">continue</button>
  `
    welcomeDOM.innerHTML = result
    closeWelcome();
}

function closeWelcome() {
    document.querySelector('.close-welcome').addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

/************************ HEART/ WISH *********************/
const openWishlist = document.querySelector('.mainWishlist');
const wishlistOverlay = document.querySelector('.wishlist-overlay');
const wishlistMenu = document.querySelector('.wishlist');
const closeWishlist = document.querySelector('.close-wish');

/************************ CART *********************/
const openCart = document.querySelector('.mainCart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartMenu = document.querySelector('.cart');
const closeCart = document.querySelector('.close-cart');

/************************ ICON FUNCTIONS *********************/
const hidden = document.querySelector('.hidden');
const closeHidden = document.querySelector('.close-hidden');

closeHidden.addEventListener('click', () => {
    hidden.classList.remove('isOpen');
});

// Open Search
openSearch.addEventListener('click', () => {
    searchbar.classList.toggle('active');
    cartMenu.classList.remove('open');
    cartOverlay.classList.remove('open');
    wishlistMenu.classList.remove('open')
    wishlistOverlay.classList.remove('open');
});
// Open Wishlist
openWishlist.addEventListener('click', () => {
    wishlistMenu.classList.toggle('open');
    wishlistOverlay.classList.toggle('open');
    searchbar.classList.remove('active');
    cartMenu.classList.remove('open');
    cartOverlay.classList.remove('open');
});
// Close Wishlist
closeWishlist.addEventListener('click', () => {
    wishlistMenu.classList.remove('open');
    wishlistOverlay.classList.remove('open');
});
// Open Cart
openCart.addEventListener('click', () => {
    cartMenu.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    searchbar.classList.remove('active');
    wishlistMenu.classList.remove('open');
    wishlistOverlay.classList.remove('open');
});
// Close Cart
closeCart.addEventListener('click', () => {
    cartMenu.classList.remove('open');
    cartOverlay.classList.remove('open');
});

const categoryBtn = document.querySelectorAll('.category-button');

categoryBtn.forEach(button => {
    button.addEventListener('click', () => {
        hidden.classList.add('isOpen');
        menuToggle.classList.remove('open');
        mainMenu.classList.remove('open');
        cartMenu.classList.remove('open');
        cartOverlay.classList.remove('open');
        wishlistMenu.classList.remove('open');
        wishlistOverlay.classList.remove('open');
    })
});


/***************** SHOPPING FUNCTIONS *****************/
/******************************************************/
const categoryDOM = document.querySelector('.categoryButtons');
const productDOM = document.querySelector(".hidden-products");
const headerDOM = document.querySelector('.category-header');
const cartItems = document.querySelector('.cart-items');
const wishItems = document.querySelector('.wish-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const wishContent = document.querySelector('.wish-content');
const clearCartBtn = document.querySelector(".clear-cart");
const clearWishBtn = document.querySelector('.clear-wish');


let CART = [];
let WISH = [];
let buttonsDOM = [];
let wishBtnsDOM = [];

/** GET ALL PRODUCTS **/
class Products {
    async getProducts() {
        try {
            const res = await fetch('/data/products.json')
            const data = await res.json();
            let products = data.items;
            products = products.map(item => {
                const { id, category, title, color, price } = item
                const image = item.image.url
                return { id, category, title, color, price, image }
            })
            return products
        } catch (err) {
            console.log(err)
        }
    }
}

/** DISPLAY SELECTED PRODUCTS **/
const displayProducts = (products, searchTerm) => {
    let matches = products.filter(item => {
        const regex = new RegExp(`^${searchTerm}`, 'gi');
        return item.category.match(regex) || item.title.match(regex) || item.color.filter(c => c.match(regex)).length !== 0
    });
    if (searchTerm === 0) {
        matches = [];
        categoryDOM.innerHTML = ''
    }
    let productHeader = "";
    matches.forEach(product => {
        productHeader = `
            <h2 class="h2-header productsHeader">${product.category}</h2>`
    });
    headerDOM.innerHTML = productHeader;
    let result = "";
    matches.forEach(product => {
        result += `
            <article class="product">
            <div class="img-container">
                <img src="${product.image}" alt="" class="product-img">
                <button class="bag-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart">add to cart</i>
                </button>
                <button class="wish-btn" data-id="${product.id}">
                    <ion-icon class="wish-icon" name="heart-outline"></ion-icon>add to wishlist
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-h3">${product.title}</h3>
                <h4 class="product-price">$${product.price}</h4>
                <h4 class="product-color">color: ${product.color}</h4>
            </div>
            </article>`
    });
    productDOM.innerHTML = result;
}
/** GET BUTTONS FOR CART **/
const getBagButtons = () => {
    const buttons = [...document.querySelectorAll('.bag-btn')]
    buttonsDOM = buttons;
    buttons.forEach(button => {
        let id = button.dataset.id
        let inCart = CART.find(item => item.id === id)
        if (inCart) {
            button.innerText = 'In Cart'
            button.disabled = true
        }
        button.addEventListener('click', (e) => {
            e.target.innerText = 'In Cart'
            e.target.disabled = true

            // Get the product from localStorage
            let cartItem = { ...storageGetProduct(id), amount: 1 }

            // Add product to CART
            CART = [...CART, cartItem]

            // Save CART in localStorage
            storageSaveCart(CART)

            // Set cart values (how many items in cart)
            setCartValues(CART);

            // Display cart item (product image)
            addCartItem(cartItem);
        })
    })
}

/** GET BUTTONS FOR WISHLIST **/
const getWishButtons = () => {
    const wishButtons = [...document.querySelectorAll('.wish-btn')]
    wishBtnsDOM = wishButtons;
    wishButtons.forEach(wishButton => {
        let id = wishButton.dataset.id
        let inWish = WISH.find(item => item.id === id)
        if (inWish) {
            wishButton.innerText = 'In Wishlist'
            wishButton.disabled = true
        }
        wishButton.addEventListener('click', (e) => {
            e.target.innerText = 'In Wishlist'
            e.target.disabled = true
            let wishItem = { ...storageGetProduct(id), amount: 1 }
            WISH = [...WISH, wishItem]
            storageSaveWish(WISH)
            setWishValues(WISH);
            addWishItem(wishItem);
        })
    })
}
/** CALCULATE ITEMS AND SUM IN CART **/
const setCartValues = (CART) => {
    let tempTotal = 0
    let itemsTotal = 0
    CART.map(item => {
        tempTotal += item.price * item.amount
        itemsTotal += item.amount
    })
    cartTotal.innerText = tempTotal
    cartItems.innerText = itemsTotal
}
const setWishValues = (WISH) => {
    let wishItemsTotal = 0;
    WISH.map(item => {
        wishItemsTotal += item.amount;
    })
    wishItems.innerText = wishItemsTotal;
}

/** ADD VISIBLE ITEMS TO CART **/
const addCartItem = (item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
          <img src=${item.image} alt="product" />
            <div>
              <h4>${item.title}</h4>
              <h5>$${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>remove</span>
            </div>
            <div>
              <i class="fas fa-chevron-up" data-id=${item.id}></i>
              <p class="item-amount"> ${item.amount}</p>
              <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </div>`;
    cartContent.appendChild(div);
}

const addWishItem = (item) => {
    const div = document.createElement('div')
    div.classList.add('wish-item')
    div.innerHTML = `
        <img src="${item.image}" alt="product image" class="wish-image">
        <div>
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <h5>Colors: ${item.color}</h5>
        </div>
        <div>
            <ion-icon name="trash-outline" class="remove-wish" data-id="${item.id}"></ion-icon>
        </div>`
    wishContent.appendChild(div)
}

const setupAPP = () => {
    CART = storageGetCart()
    setCartValues(CART)
    populateCART(CART)
    WISH = storageGetWish()
    setWishValues(WISH)
    populateWish(WISH)
}

const populateCART = (CART) => {
    CART.forEach(item => addCartItem(item))
}
const populateWish = (WISH) => {
    WISH.forEach(item => addWishItem(item))
}
/** CART LOGICS **/
const cartLogic = () => {
    clearCartBtn.addEventListener('click', () => {
        let cartItems = CART.map(item => item.id)
        cartItems.forEach(id => removeItem(id))
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
    })
    cartContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            let removeItem = event.target;
            let id = removeItem.dataset.id;
            cartContent.removeChild(removeItem.parentElement.parentElement)
            CART = CART.filter((item) => item.id !== id);
            setCartValues(CART);
            storageSaveCart(CART);
        } else if (event.target.classList.contains('fa-chevron-up')) {
            let addAmount = event.target
            let id = addAmount.dataset.id
            let tempItem = CART.find(item => item.id === id)
            tempItem.amount = tempItem.amount + 1
            storageSaveCart(CART)
            setCartValues(CART)
            addAmount.nextElementSibling.innerText = tempItem.amount
        } else if (event.target.classList.contains('fa-chevron-down')) {
            let lowerAmount = event.target;
            let id = lowerAmount.dataset.id
            let tempItem = CART.find(item => item.id === id)
            tempItem.amount = tempItem.amount - 1
            if (tempItem.amount > 0) {
                storageSaveCart(CART)
                setCartValues(CART)
                lowerAmount.previousElementSibling.innerText = tempItem.amount
            } else {
                cartContent.removeChild(lowerAmount.parentElement.parentElement)
                removeItem(id)
            }
        }
    })
}
/** WISH LOGICS **/
const wishLogic = () => {
    clearWishBtn.addEventListener('click', () => {
        let wishItems = WISH.map(item => item.id)
        wishItems.forEach(id => removeWish(id))
        while (wishContent.children.length > 0) {
            wishContent.removeChild(wishContent.children[0])
        }
    })
    wishContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-wish')) {
            let removeWish = event.target;
            let id = removeWish.dataset.id;
            wishContent.removeChild(removeWish.parentElement.parentElement)
            WISH = WISH.filter((item) => item.id !== id);
            setWishValues(WISH);
            storageSaveWish(WISH);
        }
    })
}

const removeItem = (id) => {
    CART = CART.filter((item) => item.id !== id);
    setCartValues(CART);
    storageSaveCart(CART);
}
const removeWish = (id) => {
    WISH = WISH.filter(item => item.id !== id);
    setWishValues(WISH);
    storageSaveWish(WISH);
}

const storageAllProducts = (products) => {
    localStorage.setItem('products', JSON.stringify(products))
}
const storageGetProduct = (id) => {
    let products = JSON.parse(localStorage.getItem('products'))
    return products.find(product => product.id === id)
}
const storageSaveCart = (CART) => {
    localStorage.setItem('cart', JSON.stringify(CART))
}
const storageGetCart = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}
const storageSaveWish = (WISH) => {
    localStorage.setItem('wish', JSON.stringify(WISH));
}
const storageGetWish = () => {
    return localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [];
}

/** USE CATEGORY BUTTONS **/
const displaySearch = (products, searchTerm) => {
    products
        .getProducts()
        .then((products) => {
            if (searchTerm == "") {
                displayProducts(products);
            } else {
                displayProducts(products, searchTerm);
            }
        })
        .then(() => {
            getBagButtons()
            getWishButtons()
        })
}


document.addEventListener('DOMContentLoaded', () => {
    const products = new Products();

    setupAPP();

    products
        .getProducts()
        .then(products => {
            storageAllProducts(products)
        })
    cartLogic()
    wishLogic()

    /***** SEARCH *****/
    // With Enterkey
    searchTerm.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchBtn.click();
            hidden.classList.add("isOpen");
            location = "#hidden";
        }
    });
    // With Icon-click
    searchBtn.addEventListener('click', () => {
        displaySearch(products, searchTerm.value);
        hidden.classList.add('isOpen');
        location = '#hidden';
    });
});
