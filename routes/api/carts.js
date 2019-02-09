const route=require('express').Router()

const Cart=require('../../db/db').Cart

route.get('/delete',(req,res)=>{
    Cart.destroy({
        where:{
            id:req.query.id
        }
    }).then(()=>{
        res.send({
            message:'Successfully removed from Cart'
        })
    })
})

route.get('/',(req,res)=>{
    Cart.findAll()
    .then((cart)=>{
        res.status(200).send(cart)
    })
    .catch((err)=>{
        res.status(500).send({
            error:'Could not fetch items in Cart'
        })
    })
})



route.post('/',(req,res)=>{
    Cart.create({
        name:req.body.name,
        price:parseFloat(req.body.price),
        primaryCam:req.body.primaryCam,
        secondaryCam:req.body.secondaryCam,
        ram:parseInt(req.body.ram),
        storage:parseInt(req.body.storage),
        imageURL:req.body.imageURL
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({
            error:'Could not create new product'
        })
    })
})

module.exports=route
