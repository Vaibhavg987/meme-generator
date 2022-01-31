import React, { useEffect, useState } from "react";
// import memeData from "../memeData";
import "./Meme.css";

// https://api.imgflip.com/get_memes

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImage, setAllMemeImage] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImage(data.data.memes);
    }
    getMemes();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(meme);

  const fetchMemeImage = (e) => {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * allMemeImage.length);
    const url = allMemeImage[randomNumber].url;
    setMeme((prevData) => ({
      ...prevData,
      randomImage: url,
    }));
  };
  return (
    <main>
      <form className="form">
        <input
          className="meme__inputs"
          type="text"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          className="meme__inputs"
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <button onClick={fetchMemeImage}>Get a new meme image</button>
      </form>
      <div className="meme">
        <img className="meme__image" src={meme.randomImage} alt="" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
