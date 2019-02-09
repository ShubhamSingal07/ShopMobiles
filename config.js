const port=process.env.PORT|| 4000
const DATABASE_URL=process.env.DATABASE_URL || 'mysql://shopper:shoppass@localhost:3306/shopdb'
module.exports={
    port,
    DATABASE_URL
}