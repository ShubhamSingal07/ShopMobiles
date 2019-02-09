const route=require('express').Router()

route.use('/products',require('./products'))
route.use('/cart',require('./carts'))

module.exports=route