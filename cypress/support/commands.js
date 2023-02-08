/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('log', user)
    fd.append('pwd', pass)
    fd.append('wp-submit', "Acessar")
    fd.append('redirect_to', `/wp-admin`)
    fd.append('testcookie', 1)

    cy.request({
        url: '/wp-login.php',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor + 1)
            cy.setCookie(key, value)
        })
    })
    cy.visit('/wp-admin')
})


Cypress.Commands.add('checkout', () => {
    cy.request({
        url: '/checkout/order-received/5433/?key=wc_order_i0DtQeEmUrndC',
        method: 'GET'
    })
    cy.visit('/checkout/order-received/5433/?key=wc_order_i0DtQeEmUrndC')
})

Cypress.Commands.add('addProduct', (size, color, quantity, add_cart, product_id, variation_id) => {
    const fd = new FormData()
    fd.append('attribute_size', size)
    fd.append('attribute_color', color)
    fd.append('quantity', quantity)
    fd.append('add-to-cart', add_cart)
    fd.append('product_id', product_id)
    fd.append('variation_id', variation_id)

    cy.request({
        url: '/product/stellar-solar-jacket/ ',
        method: 'POST',
        body: fd
    }).then(response => {
        // response.headers['set-cookie'].forEach(cookie =>{
        //     const firstPart = cookie.split(';')[0]
        //     const divisor = firstPart.indexOf('=')
        //     const chave = firstPart.substring(0, divisor)
        //     const valor = firstPart.substring(divisor+1)
        //     cy.setCookie(chave, valor)
        // })
    })
    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')            
})