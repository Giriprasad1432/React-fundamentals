import Profile from "./Profile.jsx"
import "./ProductCart.css"
import "./App.css"
import BlogPost from "./BlogPost"
import Giri from "./Giri.jsx"
import ProductCart from "./ProductCart.jsx"
function App() {
  const Products = [{
    product_name: "drinks",
    price: 40,
    isavailable:true
  },
  {
    product_name: "books",
    price: 9999,
    isavailable:false
  },
  {
    product_name: "pens",
    price: 753,
    isavailable:true
  }
  ]
  const prem = {
    name: "PREM SAGAR",
    course: "B.tech(CSE)",
    blood_group: "o -VE",
    roll_no: "24VV1A0518",
    dob: "18/17/2028"
  }

  const Post=[
    { id:1,
      author:"Prem sagar",
      title:"the power of juwa",
      desc:"An adventurous Story written by prem"
    },
    { id: 2,
      author:"Prem sagar1",
      title:"the Adventures of tom sawyer",
      desc:"An adventurous Story written by prem"
    },
    { id: 3,
      author:"leela",
      title:"the power of sleep",
      desc:"An adventurous Story written by leela avinash"
    }]

  return (
    <div class="box2">
      {/* <Profile/>
      <div class="box1">
      <ProductCart {...object1}/>
      <ProductCart {...object2}/>
      </div> */}
      {/* <Giri {...prem}/> */}
      {/* { Products.map((products)=>(<ProductCart product_name={products.product_name} price={products.price}
      isavailable={products.isavailable}/>
      ))
      } */}
       { Post.map((books)=>(<BlogPost key={books.id} author={books.author} 
       title={books.title}
      desc={books.desc}/>))}
    </div>
  )
}

export default App
