const product = [
    {
        id: 0,
        image: '../img/produtos/produto01.jpg',
        title: 'Fox Forme Óleo',
        price: 35,
    },
    {
        id: 1,
        image: '../img/produtos/produto02.jpeg',
        title: 'Pomada em Pó efeito matte (Fox Formen)',
        price: 90,
    },
    {
        id: 2,
        image: '../img/produtos/produto03.jpeg',
        title: 'tônico FoxFormen',
        price: 35,
    },
    {
        id: 3,
        image: '../img/produtos/produto06.jpeg',
        title: 'Creme modelador efeito teia - Fox (Pequena)',
        price: 20,
    },
    {
        id: 4,
        image: '../img/produtos/produto10.jpeg',
        title: 'Creme modelador efeito teia - Fox (Grande)',
        price: 30,
    },
    {
        id: 5,
        image: '../img/produtos/produto15.jpg',
        title: 'Pasta Premium Fox Formen (Pequena) ',
        price: 20,
    },
    {
        id: 6,
        image: '../img/produtos/produto05.jpeg',
        title: 'Pasta Premium Fox Formen (Grande)',
        price: 30,
    },
    {
        id: 7,
        image: '../img/produtos/produto08.jpeg',
        title: 'Balm Para Barba (Fox Formen)',
        price: 35,
    },
    {
        id: 8,
        image: '../img/produtos/produto11.jpeg',
        title: 'Pomada efeito matte (Fox Formen)',
        price: 35,
    },
    {
        id: 9,
        image: '../img/produtos/produto14.jpg',
        title: 'Cera hair modeladora caramelo (Fox Formen)',
        price: 35,
    },
    {
        id: 10,
        image: '../img/produtos/produto12.jpeg',
        title: 'Pomada em Po (Fox Formen)',
        price: 35,
    },
    {
        id: 11,
        image: '../img/produtos/produto13.jpg',
        title: 'Pasta Black Premium (Fox Formen)',
        price: 35,
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
                <div class='text-prod'>
                    <p>${title}</p>
                </div>
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
                `<div class="cart-item">
                    <div class="row-img">
                        <img class="rowimg" src="${image}" />
                    </div>
                    <div class="item-info">
                        <p class="title">${title}</p>
                        <h2 class="price">$ ${price}.00</h2>
                    </div>
                    <i class="fa-solid fa-trash delete-icon" onclick="delElement(${j++})"></i>
                </div>`
            );
        }).join('');
    }
}

function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    // Constrói a mensagem
    let message = "Produtos no carrinho:\n";
    cart.forEach(item => {
        message += `${item.title} - R$ ${item.price.toFixed(2)}\n`;
    });
    message += `\nTotal: R$ ${document.getElementById("total").innerHTML.replace('R$', '').trim()}`;

    // Codifica a mensagem para URL
    const whatsappMessage = encodeURIComponent(message);

    // Define o número de telefone
    const phoneNumber = "5515998490468"; // O número sem espaços ou caracteres especiais

    // Abre o WhatsApp com a mensagem e o número definido
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`, '_blank');
}
