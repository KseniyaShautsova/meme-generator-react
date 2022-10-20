import React from "react";

export default function Body(){

    const[meme, setMeme]=React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3l60ph.jpg"
    });

    const [allMemes, setAllMemes]= React.useState([])


React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
}, [])


function getmemeImage(){

    const randomnumer=Math.floor(Math.random()*allMemes.length);
    const url = allMemes[randomnumer].url;
    setMeme(przevMeme => ({
        ...przevMeme,
        randomImage: url
    }))

}


function HandleChange(event){
    const {name, value}=event.target;
    setMeme(prevMeme =>({
        ...prevMeme,
        [name]:value

    }))

}




    return(
        <div className="app-body">
            <h1 className="Header-meme">Your meme generator for any life situation!</h1>
            <div className="body-inputs">
                <input 
                   className="input-style" 
                   type="text" 
                   placeholder="Enter top text" 
                   name="topText"
                   value={meme.topText}
                   onChange={HandleChange}
                />
                <input 
                  className="input-style" 
                  type="text" 
                  placeholder="Enter bottom text"
                  name="bottomText"
                  value={meme.bottomText}
                  onChange={HandleChange}
                />
            </div>
            <button className="body-btn-meme" onClick={getmemeImage}>Get a new meme image</button>
            <div className="meme-body"> 
            <h2 id="text1" className="body--text top">{meme.topText}</h2>
            <img id="img" className="body-img-meme" src={meme.randomImage} alt="meme"/>
            <h2 className="body--text bottom">{meme.bottomText}</h2>
            </div>

        </div>
    )
}