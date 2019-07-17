import React from 'react';
//import ReactDOM from 'react-dom';

//returns the items under each course part
const Course = ({courseParts}) => courseParts.map((each)=>
  <li key={each.id}>{each.name} {each.exercises}</li>
    )

const Courses = ({courses}) => courses.map((eachCourse)=>(
    <div>
      <h2 key={eachCourse.id}>{eachCourse.name}</h2>
      <ul>
      {eachCourse.parts.map(each => <li key={eachCourse.id.toString()+each.id.toString()}>{each.name} {each.exercises}</li>)}
      </ul>

      <p><b>Total of {eachCourse.parts.reduce((sum, each)=> sum+each.exercises, 0)} exercises</b></p>
    </div>)
    )

/*
<ul>
  <Course courseParts={eachCourse.parts}/>
</ul>
*/

export default Courses
