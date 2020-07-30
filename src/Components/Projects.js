import React, {Component} from 'react';
// import gamePic from '../Assets/GamePic.png';
// import flowerGalery from '../Assets/flower-galery.png';
// import movies from '../Assets/movie-api2.png';
// import snakeGame from '../Assets/snake-game.png';

// let response = [
//   { 
//   name: 'Game App ', 
//   url: 'https://deborahneal.github.io/GameProject/',
//   description: 'It is a learning app for kids from 1 to 4 years old.',
//   imgUrl: `${gamePic}`, 
//   techUsed: ['JavaScript', ' ', 'HTML', ' ', 'CSS' ],
//   },{ 
//   name: 'Flower Galery', 
//   url: 'https://project2.io',
//   description: 'A site to enjoy looking at some of the must beautiful flowers in the world.',
//   imgUrl: `${flowerGalery}`, 
//   techUsed: ['CSS', ' ', 'HTML', ], 
//   },{ 
//   name: 'Movies API ', 
//   url: 'https://project3.io',
//   description: 'App allowing you to look for posters and other info about a movie.',
//   imgUrl: `${movies}`, 
//   techUsed: ['JavaScript', ' ', 'HTML' , ' ', 'PSQL', ' ' , 'CSS', ' ', 'Node'],
//   },{ 
//   name: 'Snake Game', 
//   url: 'https://project4.io',
//   description: 'Project description 2',
//   imgUrl: `${snakeGame}`, 
//   techUsed: ['JavaScript', '  ', 'HTML', ' ', 'Canvas', ' ', 'CSS'], 
 
//   }

// ]

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      dataloaded: false
    }
  }
  
  componentDidMount = () => {
    fetch('http://localhost:3030/projects')
    .then(res=> {
      return res.json()
    })
    .then(res=> {
      console.log(res);
      this.setState({
        projects: res,
        dataloaded: true
      })
    })
  }



     
   
render(){
  return (
   
   <>
    <h1> Projects </h1>

    {this.state.projects.length > 0 && 
    this.state.projects.map(val => {
      return(
        <div
          className="projectCard">
          <h2
          className="projectName
          ">{val.name}</h2>
          <img className="" src={val.imageurl}
          alt="card image"/>
          <p
          class="projectDescription">
          {val.description}
          </p>
        </div>
      )
    })}

    </>

  )

  
  
}
}
export default Projects;