import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Composant Button de base
export const Button = (props) => {
 let currentStyle = {
    backgroundColor: props.color,
    fontSize: props.size,
    padding: props.size === 'small' ? '5px 10px' : '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
 };

 return (
    <input
      className="btn"
      style={currentStyle}
      type="button"
      onClick={props.functions}
      value={props.text}
      disabled={props.disabled}
    ></input>
 );
};

// Composant StartButton
export const StartButton = (props) => {
 return (
    <Button
      functions={props.functions}
      text="Start"
      color="#4CAF50"
      size="large"
      disabled={props.disabled}
    />
 );
};

// Composant PauseButton
export const PauseButton = (props) => {
 return (
    <Button
      functions={props.functions}
      text="Pause"
      color="#f44336"
      size="large"
      disabled={props.disabled}
    />
 );
};

// Composant ResetButton
export const ResetButton = (props) => {
 return (
    <Button
      functions={props.functions}
      text="Reset"
      color="#2196F3"
      size="large"
      disabled={props.disabled}
    />
 );
};