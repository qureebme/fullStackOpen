import React from 'react';
//import ReactDOM from 'react-dom';

//returns the items under each course part
const Course = ({courseParts}) => courseParts.map((each)=>
  <li key={each.id + Math.random().toString()}>{each.name} {each.exercises}</li>
    )

const Courses = ({courses}) =>courses.map((eachCourse)=>(
    <div>
      <h2 key={eachCourse.id + courses.length.toString()}>{eachCourse.name}</h2>
      <ul>
        <Course courseParts={eachCourse.parts}/>
      </ul>
      <p><b>Total of {eachCourse.parts.reduce((sum, each)=> sum+each.exercises, 0)} exercises</b></p>
    </div>)
    )



export default Courses
