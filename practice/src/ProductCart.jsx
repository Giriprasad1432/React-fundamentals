function ProductCart({product_name,price,isavailable}){
    
    return(
        <>
        <p>Product name : {product_name} , 
            price: {price} ,
            Availability:  {isavailable ===true? "drinks are available":"drinks are not available" }</p>
        </> 

    )
}
export default ProductCart;