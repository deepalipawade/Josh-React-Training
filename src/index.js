import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from "./s"
import add,{greetuser} from "./s"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import productlist from './productlist.json'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const users = ["mahi","deepali"];
greetuser(users);
add(1,2)
Products(productlist)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
