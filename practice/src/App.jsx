import Profile from "./Profile.jsx"
import "./ProductCart.css"
import "./App.css"
import Giri from "./Giri.jsx"
import ProductCart from "./ProductCart.jsx"
function App() {
  const object1={
      product_name:"drinks",
     price:40,
     isavailable:true
  }
    const object2={
      product_name:"toys",
     price:9999,
     isavailable:false
  }
  const prem={
    name:"PREM SAGAR",
    course: "B.tech(CSE)",
    blood_group:"o -VE",
    roll_no:"24VV1A0518",
    dob:"18/17/2028"
  }

  return (
    <div class="box2">
      {/* <Profile/>
      <div class="box1">
      <ProductCart {...object1}/>
      <ProductCart {...object2}/>
      </div> */}
      <Giri {...prem}/>
    </div>
  )
}

export default App
