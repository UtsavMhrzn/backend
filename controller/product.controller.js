export const getAllProductController = (req, res) => {
    const data = req.body 
    console.log(data)
    const j = { name: "hello", price: 100 }
    return res.status(200).json(j)
}
export const createProductController = (req,res)=>{
    
}