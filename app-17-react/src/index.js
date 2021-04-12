import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Post from './components/Post'

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

ReactDOM.render(
  <Post user = {{
    name: "Anakin Skywalker",
    nickname: "@dart_vader",
    logo: ANAKIN_IMAGE
  }}
  post = {{
    content: "hello React",
    img: RAY_IMAGE,
    likes: 45
  }}
  date = "14 апреля"
  
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
