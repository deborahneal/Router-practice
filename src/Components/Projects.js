import React, {Component} from 'react';

let response = [
  { 
  name: 'Game App ', 
  url: 'https://project1.io',
  description: 'It is a learning app for kids from 1 to 4 years old.',
  imgUrl: 'project1.com', 
  techUsed: ['JavaScript', 'HTML', 'CSS' ],
  },{ 
  name: 'Flower Galery', 
  url: 'https://project2.io',
  description: 'A site to enjoy looking at some of the must beautiful flowers in the world.',
  imgUrl: 'project2.com', 
  techUsed: ['CSS', 'HTML' ], 
  },{ 
  name: 'project3', 
  url: 'https://project3.io',
  description: 'Project description 1',
  imgUrl: 'project3.com', 
  techUsed: ['JavaScript', 'html' ],
  },{ 
  name: 'project4', 
  url: 'https://project4.io',
  description: 'Project description 2',
  imgUrl: 'project4.com', 
  techUsed: ['JavaScript', 'html' ], 
 
  }

]

class Projects extends Component {
    
  state = {

  }

getAllProjects(){

  let getAllProjects = [];

  for(let i = 0; i < response.length; i++){
  getAllProjects.push(<h1>{response[i].name}</h1>)
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