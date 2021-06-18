import React, { Component } from "react";
import db from "./firebase"

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
   
   
  }

  handleError(error) {
    alert(error)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      })
      .catch(error => this.handleError(error));
    this.getJoke();
  }

  getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ topText: response.setup, bottomText: response.punchline });
      })
      .catch(error => this.handleError(error));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const newImg = this.state.allMemeImgs[random];
    this.setState({ randomImg: newImg.url });
    this.getJoke();
  }

  save = () => {
    const meme = {
      topText: this.state.topText,
      bottomText: this.state.bottomText,
      randomImg: this.state.randomImg,
    };
 
    db
      .collection("memes")
      .add(meme)
      .then(docref => {
        console.log(docref)
      })
      .catch(error => this.handleError(error))

    alert("saved");
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          
          <button onClick={this.handleClick}>Gen</button>
         
        </form>
        <button onClick={this.save}>Save Meme</button>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <br />
        
      </div>
    );
  }
}

export default MemeGenerator;
