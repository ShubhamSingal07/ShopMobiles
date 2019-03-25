const Sequelize=require('sequelize')
const db=new Sequelize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect: 'mysql',
    pool:{
        min:0,
        max:5
    },
    logging:true
})

const Product=db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imageURL:Sequelize.STRING,
    price:Sequelize.FLOAT,
    primaryCam:Sequelize.STRING,
    secondaryCam:Sequelize.STRING,
    ram:Sequelize.INTEGER,
    storage:Sequelize.INTEGER
},{
    timestamps:false
})

const Cart=db.define('carts',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imageURL:Sequelize.STRING,
    price:Sequelize.FLOAT,
    primaryCam:Sequelize.STRING,
    secondaryCam:Sequelize.STRING,
    ram:Sequelize.INTEGER,
    storage:Sequelize.INTEGER
},{
    timestamps:false
})

db.sync()
.then(()=>console.log('Database has been synced'))
.catch((err)=>console.log('Could not sync to Database'+err))

module.exports={
    Product,
    Cart
}