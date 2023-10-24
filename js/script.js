window.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelectorAll(`.product`),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector(`.open`);


    function createCard() {
        let card = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        card.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close');

        heading.textContent = 'Bizning savatimizda'
        closeBtn.textContent = 'Yopish'
        


    document.body.appendChild(card)
    card.appendChild(heading)
    card.appendChild(field)
    card.appendChild(closeBtn);





}

createCard()


let card = document.querySelector('.cart'),
close = document.querySelector('.close'),
field = document.querySelector('.cart-field');


openBtn.addEventListener('click', function() {
    card.style.display = 'block'
})
close.addEventListener('click', function() {
    card.style.display = 'none'
})


buttons.forEach(function (item, i) {
    item.addEventListener('click', function () {
        let cloneItem = products[i].cloneNode(true),
         btn = cloneItem.querySelector('button');

        btn.remove();
        field.appendChild(cloneItem)
        products[i].remove()
    })
})















})