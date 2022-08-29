import { React, useState, useEffect } from "react";
import axios from "axios";
import Texts from "./Texts";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const req = await axios.get(url);
      const res = await req.data;
      setData(res.slice(0, 5));
      console.log(res.slice(0, 5));
      console.log(`this is data ${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect runs once when the component is mounted
  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Texts props={data} />
      {/* <div>
        {data.map((e) => {
          return <div key={e.id}>{e.title}</div>;
        })}
      </div> */}
    </main>
  );
};

export default App;
