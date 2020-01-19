const user = {
    name: 'Kim',
    active: true,
    cart:[],
    purchases:[]
}

const compose = (f,g) => (...args) => f(g(...args));

const purchaseItem = (...fns) => fns.reduce(compose)

const addItemToCart = (user, item) => {
     const updateCart = user.cart.concat(item);
     return Object.assign({},user,{cart:updateCart})
}

const applyTaxToItems = (user) => {
     const {cart} = user
     const taxRate = 1.3;
     const updatedCart = cart.map(item => {
         return {
             name:item.name,
             price:(item.price)*taxRate
         }
     })
     
     return Object.assign({},user,{cart:updatedCart})
}

const buyItem = (user) => {
    return Object.assign({},user,{ purchases:user.cart})
} 

const emptyCart = (user) => {
    return Object.assign({},user,{cart:[]})
}

console.log(purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user,{name: 'laptop', price:200}))
