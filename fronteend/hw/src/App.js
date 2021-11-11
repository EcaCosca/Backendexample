import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {

const [hw, setHw] =useState([])
const [addt, setAddt] =  useState ()
const [addl,setAddl]  = useState ()
const [addd, setAddd] = useState ()
const [addte,setAddte] = useState ()

//---------------------------------------------------------------------------

useEffect(() => {
  axios.get('http://localhost:8081/homework/getHW')
  .then((res) =>{
    console.log(res.data);
    setHw(res.data);
  })
  console.log(hw);
},[])

//------------------------------------------------------------

//  useEffect(()=> {
//       console.log(hw);
//      }, [hw]);

//----------------------------------------------------------------------------------------
  function handleHw(){
    console.log("hi")
    axios.post('http://localhost:8081/homework/postHW', {
      title: addt,
  
  
    })    
    .then((res) => {
      console.log("bi")

      console.log(res.data);
      setHw([...hw,res.data])
    })
  }
//----------------------------------------------------------------------------------------
  return (
    <div className="App">
    <h1>hi</h1>
    {
      hw.map((item) => {
        return(
          <div className="lala">
            <h4>title:{item.title}</h4>
            <a href={item.link}>the link</a>
            <p>description:{item.description}</p>
            <p>technologies:{item.technologies}</p>
            <button>delet</button>
          </div>
        )
      })
    }
    <div>
    <input onChange={(e)=> setAddt(e.target.value)}></input>
    <input onChange={(e)=> setAddl(e.target.value)}></input>
    <input onChange={(e)=> setAddd(e.target.value)}></input>
    <input onChange={(e)=> setAddte(e.target.value)} ></input>
    <button onClick={handleHw} >hw</button>
    </div>

    </div>
  );
}

export default App;
