import logo from './logo.svg';
import React from 'react'
import img from './2.jpg';
import './App.css';


class App extends React.Component{
  state={
    fullName:`Urbain Diagne`,
    bio:`Je suis passionné des nouvelles technologies et j'aime les challenge`,
    profession:`FullSatck JavaScript Developer`,
    imgSrc:img,
    shows:false,
    count:0
  };

  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
  }


  toggle =()=>{this.setState({shows:!this.state.shows})}

  render() {
    return (
      <div>
        <p>{this.state.count} seconds</p>
        {this.state.shows ? (
        <>
        <img src={this.state.imgSrc} style={{width:200,height:200 , position:'absolute'}} alt='img'/>
        
        <div style={{textAlign:'center',marginLeft:20,marginRight:20}}>

        <h1 >{this.state.fullName}</h1>
        <h4>{this.state.bio}</h4>
        <h4>{this.state.profession}</h4>

        </div>
        </>
        ) : (<p style={{fontWeight:'bold', textAlign:'center'}}>Le profil est caché</p>)
        }
        <button style={{position: 'absolute', left: 650, top:400, backgroundColor:'red', color:'white'}} onClick={this.toggle}> {!this.state.shows ? "Shows" : "Hide"}</button>{' '}
      </div>
    ) 
  }
}



export default App;

