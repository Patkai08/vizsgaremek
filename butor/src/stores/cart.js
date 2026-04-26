// src/stores/cart.js
import { reactive } from 'vue'

export const cartStore = reactive({
    items: []
})

export function addToCart(product) {
    const existing = cartStore.items.find(item => item.id === product.id)

    if (existing) {
        existing.quantity += 1
    } else {
        cartStore.items.push({
            ...product,
            quantity: 1
        })
    }
}

export function removeFromCart(id) {
    cartStore.items = cartStore.items.filter(item => item.id !== id)
}

export function getCartTotal() {
    return cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}