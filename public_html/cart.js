$(()=>{
    let cart_list=$('#cart_list')
   
    fetchCart((carts)=>{
        fetchCartDone(cart_list,carts)
    })

})