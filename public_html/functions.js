
function fetchProducts(done){
    console.log('hello')
    $.get('/api/products',(data)=>{
        done(data)
    })
}

function refreshCart(){
    let cart_list=$('#cart_list')
    cart_list.empty()
    fetchCart((carts)=>{
        fetchCartDone(cart_list,carts)
    })
}

function fetchCartDone(cart_list,carts){
    for(cart of carts){
        cart_list.append(addCart(cart))
        $('.cart_details').append(
            $('<button>').attr('class','btn btn-danger')
            .text('Remove from Cart').click((e)=>{
                deleteById(e.target.parentElement.id)
            })
        )
    }
}

function fetchProductById(id,done){
    $.get('/api/products/id',{
        id:id
    },(data)=>{
        done(data)
    })
}

function deleteById(id){
    $.get('/api/cart/delete',{
        id:id
    },(data)=>{
       refreshCart()
        window.alert(data.message)
    })
}

function fetchCart(done){
    $.get('/api/cart',(data)=>{
        done(data)
    })
}

function createCart(data){
$.post('/api/cart',{
    name:data.name,
    imageURL:data.imageURL,
    ram:data.ram,
    storage:data.storage,
    price:data.price,
    primaryCam:data.primaryCam,
    secondaryCam:data.secondaryCam
},(cart)=>{
    window.alert('Successfully added '+cart.name +' to Cart')
})
}

function fetchProductByName(val,done){
    $.get('/api/products/name',{
        name:val
    },(data)=>{
        done(data)
    })
}

function createProduct(name,imageURL,price,primaryCam,secondaryCam,ram,storage,done){
    console.log("hello")
    $.post('/api/products',{
        name:name,
        imageURL:imageURL,
        ram:ram,
        storage:storage,
        price:price,
        primaryCam:primaryCam,
        secondaryCam:secondaryCam
    },(product)=>{
        done(product)
    })
    
}

function addProduct(Product){
    return $(`
    <div class="bg-white text-info m-2" style="display:inline-block; width:520px; height:280px">
    <div class="row">
                                    <div class="col m-2 mt-3">
                                        <img src="${Product.imageURL}" width="200px" height="220px"> 
                                    </div>
                                    <div class="col-6 d-flex justify-content-center" style="height:250px">
                                       <div id=${Product.id} class="product_details p-3">
                                           <br>
                                            <div class="font-weight-bolder text-center p-1">${Product.name}</div>
                                            <div class="font-weight-bold text-center p-1">${Product.primaryCam} MP|${Product.secondaryCam} MP</div>
                                            <div class="font-weight-bold text-center p-1">${Product.ram} GB RAM|${Product.storage} GB ROM</div>
                                            <div class="font-weight-bolder text-center p-1">&#8377 ${Product.price}</div>
                                            <br>
                                            
                                       </div>
                                    </div>
                                    </div>
                                </div>
                                `)
                                
                
}

function addCart(Cart){
    let abc= $(`
    <div class="row bg-white text-info m-2">
                                    <div class="col-4">
                                        <img src="${Cart.imageURL}" width="450px" height="300px"> 
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                       <div id=${Cart.id} class="cart_details p-3">
                                           <br>
                                            <div class="font-weight-bolder text-center p-1">${Cart.name}</div>
                                            <div class="font-weight-bold text-center p-1">${Cart.primaryCam} MP|${Cart.secondaryCam} MP</div>
                                            <div class="font-weight-bold text-center p-1">${Cart.ram} GB RAM|${Cart.storage} GB ROM</div>
                                            <div class="font-weight-bolder text-center p-1">&#8377 ${Cart.price}</div>
                                            <br>
                                       </div>
                                    </div>
                                </div>
    `)
    
    return abc;
}
