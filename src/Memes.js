import React, { Component } from "react";
import db from "./firebase"

class Memes extends Component {
 constructor(){
  super();
  this.state = {  
    memes: [], 
  };
 }

 componentDidMount(){
  //  const memes = localStorage.getItem("memes")
  //  if (memes) {
  //  this.setState({ memes: JSON.parse(memes) })
  // }
  const memes = []

  db.collection("memes").get().then(snapshot => {
    snapshot.forEach(doc => {
      memes.push(doc.data())
    })
    this.setState({memes})
  }).catch(error => console.log(error)) 
 }
  
  
  render(){
    const memes = this.state.memes
    return( 
      memes.map((meme,i) => (
        <div className="meme" key={i}>
          <img src={meme.randomImg} alt="" />
          <h2 className="top">{meme.topText}</h2>
          <h2 className="bottom">{meme.bottomText}</h2>
        </div>
      ))
    ) 
  } 
}
export default Memes;
