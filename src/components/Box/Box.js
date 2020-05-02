import React from 'react';
import { Link  } from 'react-router-dom';
import './styles.css';


export default function Box(props){
  return(
    <div className="box">
      <h1>{props.title}</h1>
      <p>{props.resume}</p>
      <Link to={props.go}>
        <button type="submit">{props.btnText}</button>
      </Link>
    </div>
  );
}