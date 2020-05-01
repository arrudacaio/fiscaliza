import React from 'react';
import './styles.css';


export default function Box(props){
  return(
    <div className="box">
      <h1>{props.title}</h1>
      <p>{props.resume}</p>
      <button type="submit">{props.btnText}</button>
    </div>
  );
}