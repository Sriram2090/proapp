import React, { Component } from 'react'
import img1 from "../Image/Mango.jpeg"
import img2 from "../Image/banana.jpeg"



export default class CC1 extends Component {
    constructor()
    {
        super();
        this.state={
            Mangocount:0,
            Bananacount:0
        }
    }
    EatMango =()=>{
        this.setState({Mangocount:this.state.Mangocount+1})
    }
    EatBan =()=>{
        this.setState({Bananacount:this.state.Bananacount+1})
    }
  render() {
    return (
      <div style={{backgroundColor:'yellowgreen'}}>
        
        <center>
            <h1>Bob ate {this.state.Mangocount} mangoes {this.state.Bananacount} bananas</h1>
            <br></br>
            <img src={img1} style={{margin:30}}></img>
            
            <img src={img2} style={{margin:30}}></img>
            <br></br>
                <button onClick={this.EatMango} style={{backgroundColor:"grey",margin:50}}>EatMango</button>
                
                <button onClick={this.EatBan} style={{backgroundColor:"grey",margin:30}}>EatBanana</button>
                
        </center>
        
      </div>
    )
  }
}
