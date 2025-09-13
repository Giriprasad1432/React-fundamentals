import { useState } from "react"
function App() {
  const [formdata, setFormdata] = useState({email:"",pass:""});
  const [count, setCount] = useState(0);
  const handleClick = (name) => {
    console.log("you clicked the button");
    alert("you clicked the button " + name);
  }
  const handleChange = (event) => {
    setFormdata({
      ...formdata,[event.target.name]:event.target.value
    }
  )
}

  const handleEmail = (event) => {
    setFormdata(event.target.value)
  }

  

  const handlePassword = (event) => {
    setFormdata(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("you Submitted the button");
    alert(` ${formdata.email} ${formdata.pass} is changed `);
  }
  

  const handleIncrement = () => {
    setCount((Count) => Count + 1);
    console.log(count)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" onChange={handleChange}></input>
        <input type="password" name="pass" placeholder="Enter password" onChange={handleChange} ></input>
        <button type="submit" >Submit</button>
      </form>
      {/* <p>{count}</p>
  <button type="submit" onClick={handleIncrement}>Submit</button> */}
    </div>

  )
}

export default App
