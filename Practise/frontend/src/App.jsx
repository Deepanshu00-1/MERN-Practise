import { useEffect, useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async ()=>{
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      console.log(data);
      setItems(data.items);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="card">
        <div className="name">
          <p>{items[0]?.name}</p>
        </div>
        <div className="info">
          <p>age: {items[0]?.age}</p>
          <br />
          <p>occupation: {items[0]?.occupation}</p>
          <br />
          <p>contact: {items[0]?.contact}</p>
          <br />
        </div>
      </div>
    </>
  );
}
export default App;