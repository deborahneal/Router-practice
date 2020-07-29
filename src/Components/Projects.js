import React, {Component} from 'react';
import gamePic from '../Assets/GamePic.png';
import flowerGalery from '../Assets/flower-galery.png';
import movies from '../Assets/movie-api2.png';
import snakeGame from '../Assets/snake-game.png';

let response = [
  { 
  name: 'Game App ', 
  url: 'https://deborahneal.github.io/GameProject/',
  description: 'It is a learning app for kids from 1 to 4 years old.',
  imgUrl: `${gamePic}`, 
  techUsed: ['JavaScript', ' ', 'HTML', ' ', 'CSS' ],
  },{ 
  name: 'Flower Galery', 
  url: 'https://project2.io',
  description: 'A site to enjoy looking at some of the must beautiful flowers in the world.',
  imgUrl: `${flowerGalery}`, 
  techUsed: ['CSS', ' ', 'HTML', ], 
  },{ 
  name: 'Movies API ', 
  url: 'https://project3.io',
  description: 'App allowing you to look for posters and other info about a movie.',
  imgUrl: `${movies}`, 
  techUsed: ['JavaScript', ' ', 'HTML' , ' ', 'PSQL', ' ' , 'CSS', ' ', 'Node'],
  },{ 
  name: 'Snake Game', 
  url: 'https://project4.io',
  description: 'Project description 2',
  imgUrl: `${snakeGame}`, 
  techUsed: ['JavaScript', '  ', 'HTML', ' ', 'Canvas', ' ', 'CSS'], 
 
  }

]

class Projects extends Component {
    
  state = {

  }

getAllProjects(){

  let getAllProjects = [];

  for(let i = 0; i < response.length; i++){
  getAllProjects.push(
    <div>
    <h1><a target="_blank" href={response[i].url}>{response[i].name}</a></h1>
    <img src={response[i].imgUrl} className="imgSize"></img>
    <h1 className="descript" >{response[i].description} </h1>
    <h1 className="tech" >{response[i].techUsed}</h1>

    </div>
    )

  }
  return getAllProjects;

}
   
render(){
  return (
    <div className="container">
      {this.getAllProjects()}
    </div>
  )
}
}

export default Projects;