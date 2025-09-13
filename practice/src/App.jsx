import Profile from "./Profile.jsx"
import ProductCart from "./ProductCart.jsx"
function App() {
    const product_name="drinks"
    const price=40
    const isavailable=true

  return (
    <div>
      <Profile/>
      <ProductCart product_name={product_name} price={price} isavailable={true}/>
    </div>
  )
}

export default App
