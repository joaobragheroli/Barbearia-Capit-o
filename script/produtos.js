const product = [
    {
        id: 0,
        image: '../img/produtos/produto01.jpg',
        title: 'Fox Formen',
        price: 120,
    },
    {
        id: 1,
        image: '../img/produtos/produto02.jpeg',
        title: 'Tônico Foxformen',
        price: 60,
    },
    {
        id: 2,
        image: '../img/produtos/produto03.jpeg',
        title: 'Pomada em pó, efeito matte - Fox formen',
        price: 230,
    },
    {
        id: 3,
        image: '../img/produtos/produto04.jpeg',
        title: 'Creme modelador efeito teia - Fox formen',
        price: 100,
    },
    {
        id: 4,
        image: '../img/produtos/produto05.jpeg',
        title: 'Creme modelador efeito teia - Fox formen',
        price: 100,
    },
    {
        id: 5,
        image: '../img/produtos/produto06.jpeg',
        title: 'Pasta Premium',
        price: 100,
    },
    {
        id: 6,
        image: '../img/produtos/produto07.jpeg',
        title: 'Balm para barba',
        price: 100,
    },
    {
        id: 7,
        image: '../img/produtos/produto08.jpeg',
        title: 'Pomada efeito matte',
        price: 100,
    },
    {
        id: 8,
        image: '../img/produtos/produto09.jpeg',
        title: 'Wax efeito toque seco',
        price: 100,
    },
    {
        id: 9,
        image: '../img/produtos/produto10.jpeg',
        title: 'Pasta coffee',
        price: 100,
    },
    {
        id: 10,
        image: '../img/produtos/produto11.jpeg',
        title: 'Cera hair modeladora caramelo',
        price: 100,
    },
    {
        id: 11,
        image: '../img/produtos/produto12.jpeg',
        title: 'Pasta Black Premium',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image} />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>R$ ${price}.00</h2>
                <button onclick='produtos(${i++})'>Adicionar ao Carrinho</button>
            </div>
         </div>`
    );
}).join('');

var cart = [];

function produtos(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total += price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}
