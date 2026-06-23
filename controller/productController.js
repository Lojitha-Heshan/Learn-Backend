/* create
    * read
    * update
    * delete
*/
import Product from "../model/productModel.js"
export async function createProduct(req, res) {

    if(req.user == null){

        res.status(401).json({message : "Unauthorized"})
        return

    }
    if(!req.user.isadmin){
        res.status(403).json({message : "Only admin can create product"})
        return

    }

    try{

        const existingProduct = await Product.findOne({productid : req.body.productid})
        if(existingProduct != null){
            res.status(400).json({message : "Product with this productid already exists"})
            return
        }

        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json({message : "Product created successfully"})    



    }catch(err){
        res.status(500).json({message : err.message})

    }
}

export async function getAllProducts(req, res) {

    try{
        const products = await Product.find()
        res.status(200).json(products)
    


}catch(err){
    res.status(500).json({message : err.message})   
}
}