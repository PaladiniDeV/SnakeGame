import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home() {
    const navigate = useNavigate();
      
    return (
        
        <div style={{ backgroundImage: 
            `url("https://img.wallpaper.sc/android/images/2160x1920/android-2160x1920-wallpaper_01019.jpg")` 
            }}>
            
            <img src={'https://play-lh.googleusercontent.com/XO0xeboP09Lm3nUlgbkdT4PElTCl9FyjL9vsBAAd3dtZnl87NTSwxLgjDkMDOId-TQ'} class="center"
            height={500}
            width={600} />

            <h1 className='title' style={{color: 'white', textAlign:'center'}}>INSTRUCTIONS: </h1>
            <h1 style={{color: 'white', textAlign:'center'}}>PIXEL RED: snake lenght +1</h1>
            <h1 style={{color: 'white', textAlign:'center'}}>PIXEL GREEN: restart snake lenght and random position</h1>
            <h1 style={{color: 'white', textAlign:'center'}}>PIXEL BLACK: restart snake lenght and random position</h1> 
            
            <div className="title">
                <h1 style={{color: 'white', textAlign:'center'}}>DIFFICULTY</h1>
            </div>

            <div className='center' >
                <button onClick={() => {navigate('/easy')}}> EASY </button>
                <button onClick={() => {navigate('/medium')}}> MEDIUM </button>
                <button onClick={() => {navigate('/hard')}}> HARD </button>
            </div>

            <h1 style={{color: 'white', textAlign:'center'}}>EASY: 200 SPEED</h1>
            <h1 style={{color: 'white', textAlign:'center'}}>MEDIUM: 100 SPEED</h1>
            <h1 style={{color: 'white', textAlign:'center'}}>HARD: 50 SPEED</h1>
        </div>
    )
}
  
export default Home;
  
