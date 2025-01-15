import { useEffect ,useState } from 'react'

function App(){

  const[items, setItems] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      console.log(data);
      setItems(data.items);
    }
    fetchData();
  },[])

  return(
    <>
    {items.map(i =>{
      <p>{i.name}, {i.description}</p>
    })}
    </>
  )
}

export default App
