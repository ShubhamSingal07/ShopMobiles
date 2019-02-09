const route=require('express').Router()
const Op=require('sequelize').Op
const Product=require('../../db/db').Product

route.get('/name',(req,res)=>{
    Product.findAll({
        where:{
            name:{
                [Op.like]:req.query.name+'%'
            }
        }
    }).then((products)=>{
        res.status(200).send(products)
    }).catch((err)=>{
        res.status(500).send({
            error:'Cannot get products list'
        })
    })
})

route.get('/id',(req,res)=>{
    Product.findOne({
        where:{
            id:req.query.id
        }
    }).then((products)=>{
        res.status(200).send(products)
    }).catch((err)=>{
        res.status(500).send({
            error:'Cannot get product'
        })
    })
})

route.get('/',(req,res)=>{
   
    Product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    }).catch((err)=>{
        res.status(500).send({
            error:'Cannot get products list'
        })
    })
})



route.post('/',(req,res)=>{

    Product.create({
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