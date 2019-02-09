$(()=>{
    let inputName=$('#inputName')
    let inputPrimaryCam=$('#inputPrimaryCam')
    let inputSecondaryCam=$('#inputSecondaryCam')
    let inputImageURL=$('#inputImageURL')
    let inputRam=$('#inputRam')
    let inputRom=$('#inputRom')
    let inputPrice=$('#inputPrice')
    let submit=$('#submit')

    submit.click(()=>{
       
        createProduct(
            inputName.val(),
            inputImageURL.val(),
            inputPrice.val(),
            inputPrimaryCam.val(),
            inputSecondaryCam.val(),
            inputRam.val(),
            inputRom.val(),
            function(product){
                window.alert(product.name +'Successfully Added')
            }
        )
        
        inputName.val('')
        inputImageURL.val('')
        inputPrice.val('')
        inputPrimaryCam.val('')
        inputSecondaryCam.val('')
        inputRam.val('')
        inputRom.val('')

    })
})