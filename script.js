let cart = [];
let cartCount = 0;

function addToCart(name, price) {
    cart.push({name, price});
        cartCount++;
            document.getElementById('cart-count').innerText = cartCount;

                updateCart();
                }

                function updateCart() {
                    const cartList = document.getElementById('cart-list');
                        cartList.innerHTML = '';
                            let total = 0;
                                cart.forEach(item => {
                                        const li = document.createElement('li');
                                                li.innerText = `${item.name} - ${item.price} جنيه`;
                                                        cartList.appendChild(li);
                                                                total += item.price;
                                                                    });
                                                                        document.getElementById('total').innerText = `الإجمالي: ${total} جنيه`;
                                                                        }