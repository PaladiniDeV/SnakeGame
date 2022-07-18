import React, { Component } from 'react';
import Snake from '../Components/Snake';
import Food from '../Components/Food';
import FoodPlus from '../Components/FoodPlus';
import FoodSpeed from '../Components/FoodSpeed';
//import Modal from './Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}


const initialState = {
  food: getRandomCoordinates(),
  foodplus: getRandomCoordinates(),
  foodspeed: getRandomCoordinates(),
  speed: 100,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ]
}

class Medium extends Component {

  constructor(props){
    super(props)

    this.state={
      food: getRandomCoordinates(),
      foodplus: getRandomCoordinates(),
      foodspeed: getRandomCoordinates(),
      speed: 100,
      direction: 'RIGHT',
      snakeDots: [
        [0,0],
        [2,0]
      ]
    }
    this.updateState = this.updateState.bind(this) 
  };

  updateState(){
    this.setState({
      food: getRandomCoordinates(),
      foodplus: getRandomCoordinates(),
      foodspeed: getRandomCoordinates(),
      speed: 40,
      direction: 'RIGHT',
      snakeDots: [
        [0,0],
        [2,0]
      ]
    })
  }

  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
    this.checkIfEatFoodPlus();
    this.checkIfEatFoodSpeed();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      
      //this.increaseSpeed();
    }
  }

  checkIfEatFoodPlus() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let foodplus = this.state.foodplus;
    if (head[0] == foodplus[0] && head[1] == foodplus[1]) {
      this.setState({
        foodplus: getRandomCoordinates()
      })
      this.deprecateSnake();
      
      //this.increaseSpeed();
    }
  }

  checkIfEatFoodSpeed() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let foodspeed = this.state.foodspeed;
    if (head[0] == foodspeed[0] && head[1] == foodspeed[1]) {
      this.setState({
        foodspeed: getRandomCoordinates()
      })
      this.acortedSnake();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  acortedSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: [
        [80,80],
        [82,80]
      ]
    })
  }

  increaseSpeed() {
    if (this.state.speed > 30) {
      this.setState({
        speed: this.state.speed - 30
      })
    }
  }
  
  deprecateSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: [
        [0,0],
        [2,0]
      ]
    })
  }

  onGameOver() {
    alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
    this.setState(initialState)
    //this.setState(this.state)
  }

  render() {
    return ( 
      <div style={{ backgroundImage: 
        `url("https://img.wallpaper.sc/android/images/2160x1920/android-2160x1920-wallpaper_01019.jpg")` 
        }}>
        <div className="title">
          <h1 style={{color: 'white', textAlign:'center'}}>¡¡SNAKE GAME!!</h1>
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button onClick={this.updateState} variant="secondary">RESTART</Button>
        </ButtonGroup>
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots}/>
          <Food dot={this.state.food}/>
          <FoodPlus dot={this.state.foodplus} />
          <FoodSpeed dot={this.state.foodspeed} />
        </div>
        <div className="score">
          <h1 style={{color: 'white', textAlign:'center'}}> SCORE: {this.state.snakeDots.length}</h1>
        </div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">EASY</Button>
          <Button variant="secondary">MEDIUM</Button>
          <Button variant="secondary">HARD</Button>
        </ButtonGroup>
      </div> 
    );
  }
}

export default Medium;

//<ButtonGroup aria-label="Basic example">
//<Button variant="secondary">EASY</Button>
//<Button variant="secondary">MEDIUM</Button>
//<Button variant="secondary">HARD</Button>
//</ButtonGroup>