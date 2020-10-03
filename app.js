let webstore = new Vue({
    el: '#main',
    data: {
        sitename: 'Vue.js Pet Depot',
        product: {
            id: 1001,
            title: "Cat Food, 25lb bag",
            description: "A 25 pound bag of <em>irresistible</em>," +
                "organic goodness for your cat.",
            price: 200000,
            image: "./images/product-fullsize.jpg",
            availaЬleinventory: 5
        },
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            gift: false
        },
        cart: []
    },
    filters: {
        formatPrice: function (price) {
            if (!parseInt(price)) {
                return ""
            }
            if (price > 99999) {
                let priceString = (price / 100).toFixed(2)
                let priceArray = priceString.split("").reverse()
                let index = 3
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",")
                    index += 4
                }
                return "$" + priceArray.reverse().join("")
            } else {
                return "$" + (price / 100).toFixed(2)
            }
        }
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.product.id)
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true
        },
        submitForm() {
            alert('Submitted')
        }
    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || ''
        },
        canAddToCart: function () {
            return this.product.availaЬleinventory > this.cartItemCount
        }
    }
})
