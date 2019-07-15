import React from 'react';
//import ReactDOM from 'react-dom';


const Course = ({course}) =>{
  let parts = course["parts"],
      total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
      //console.log("parts:", parts)
  return (
    <>
      <h1>{course.name}</h1>
      <h2>{"Contents"}</h2>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>

      <p>{course.parts[1].name} {course.parts[1].exercises}</p>

      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
      <p><b>{"total of"} {total} {"exercises"}</b></p>
      </>
)}


export default Course
