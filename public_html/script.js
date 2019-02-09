
$(()=>{

    let product_list=$('#product_list')
    let searchVal=$('#searchVal')

    $('.carousel').carousel({
        interval: 3000
      })

      fetchProducts((products)=>{
        
        for(product of products){
              product_list.append(addProduct(product))
              $('.product_details').append(
                  $('<button>').attr('class','btn btn-primary hello')
                  .text('Add to Cart').click((e)=>{
                      fetchProductById(e.target.parentElement.id,createCart)
                  })
              )
        } 
    })

      $('#searchBtn').click(()=>{
        let val=searchVal.val()
        product_list.empty()
        fetchProductByName(val,(products)=>{
            for(product of products){
                product_list.append(addProduct(product))
          }
        })
        searchVal.val('')
      })

})