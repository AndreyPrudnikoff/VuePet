let webstore = new Vue({
    el: '#main',
    data: {
        sitename: 'Vue.js Pet Depot',
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Business',
            gift: 'Send As Gift',
            sendGift: 'Send As Gift',
            dontSendGift: 'Do Not Send As Gift'
        },
        products: [],
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
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
    created: function () {
        axios.get('./products.json')
            .then((response) => {
                this.products = response.data.products
            })
    },
    methods: {
        addToCart(aProduct) {
            this.cart.push(aProduct.id)
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true
        },
        submitForm() {
            alert('Submitted')
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0
        },
        canAddToCart(aProduct) {
            return aProduct.availaЬleinventory > this.cartCount(aProduct.id)
        },
        cartCount(id) {
            let count = 0
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++
                }
            }
            return count
        }
    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || ''
        },
        sortedProducts() {
            if (this.products.length > 0) {
                let productsArray = this. products.slice(0)
                function compare(a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase())
                        return -1
                    if (a.title.toLowerCase() > b.title.toLowerCase())
                        return 1
                    return 0
                }
                return productsArray.sort(compare)
            }
        }
    }
})
