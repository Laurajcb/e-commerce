// Show  Email menu from email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

// show mobile menu from hamburguer icon 
const menuHamburIcon = document.querySelector('.hambur-menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamburIcon.addEventListener('click', toggleMobileMenu);

// show order menu from cart icon
const menuCartIcon = document.querySelector('.navbar-shopping-card');
const orderedDetailMenu = document.querySelector('.my-order-detail');
menuCartIcon.addEventListener('click', toggleOrderedDetailMenu);

// Query for cards-container
const cardsContainer = document.querySelector('.cards-container');
// Query for product-detail container aside
const orderDetailContainer = document.querySelector('.product-detail');

//Query for product-detail-close
const closeProductDetailIcon = document.querySelector('.product-datail-close');
closeProductDetailIcon.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
  orderedDetailMenu.classList.add('inactive');
  orderDetailContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  orderedDetailMenu.classList.add('inactive');
  orderDetailContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

//show order menu from cart icon
function toggleOrderedDetailMenu() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  orderDetailContainer.classList.add('inactive');
  orderedDetailMenu.classList.toggle('inactive');
}

//function openProductDetailAside
function openProductDetailAside() {
  orderDetailContainer.classList.remove('inactive');
}

function closeProductDetail() {
  orderDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Mirror',
  price: 80,
  img: 'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Table set',
  price: 230,
  img: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Mirror',
  price: 80,
  img: 'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Table set',
  price: 230,
  img: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

// Funtion to render a list of products .append(to add numerous elements at same time)
function renderProducts(arr) {
  for (product of arr) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-basic-info');

    const productInfoDiv = document.createElement('div');
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = `$ ${product.price}`;
    const productInfoName = document.createElement('p');
    productInfoName.innerText = product.name;
    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);

    const productInfoFigure = document.createElement('figure');
    const ProductFigureImg = document.createElement('img');
    ProductFigureImg.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(ProductFigureImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCart.appendChild(productImg);
    productCart.appendChild(productInfo);
    cardsContainer.appendChild(productCart);
  }
}
renderProducts(productList);
