function ProductCart({product_name, price, isavailable}){
    
    return(
        <>
    <div class="box">
        <p class="name">Product name : {product_name}</p>

         <p class="price">price : {price} </p>

          <p class="stock">
              {isavailable===true ? <p class="p1">drinks are available</p>:
              <p class="p2">drinks are not available</p>}</p>
        </div>
        </> 

    )
}
export default ProductCart