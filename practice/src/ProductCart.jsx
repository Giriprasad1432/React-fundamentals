function ProductCart(Product){
    
    return(
        <>
        <p>Product name : {Product.product_name} , 
            price: {Product.price} ,
            Availability:  {Product.isavailable ===true? "drinks are available":"drinks are not available" }</p>
        </> 

    )
}
export default ProductCart;