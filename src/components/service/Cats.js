import React, { useState, useEffect } from "react"
import axios from "axios"
// import '../App.css';

function Cats() {

  const API_KEY = "34f9c1b9-0e21-4efb-8c6d-c7663e88e54a"

  const [cat, setCat] = useState({});
  const url = "https://api.thecatapi.com/v1/images/search"

  const generateImage = async () => {
    const response = await axios.get(url);
    console.log(response)
    console.log(response.data[0].url)
    setCat(response.data[0].url)
  }
  useEffect(() => {
    generateImage()
  }, [])


  return (
    <div>
      <h3>Generate a random cat</h3>
      <button onClick={() => generateImage()}>Cat Me!</button>
      <br />
      <img src={cat} />
    </div>
  );
}

export default Cats;