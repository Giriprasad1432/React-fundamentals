function ProductCart({product_name, price, isavailable}){
    
    return(
        <>
    <div class="box">
        <p class="name">Product name : {product_name}</p>

         <p class="price">price : {price} </p>

          <p class="stock">
              {isavailable ? <p class="p1">available</p>:
              <p class="p2"> not available</p>}</p>
        </div>
        </> 

    )
}
export default ProductCart