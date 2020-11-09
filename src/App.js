import React from "react";
import {Provider} from 'react-redux';
import store from './Reduxapp/store.js';
import Body from './Body/Body.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import './App.scss';

function App() {
  return (
  
    <div className="App">
       <Provider store={store}>
         <Header/>
         <Body/>
         <Footer/>
       </Provider> 
    </div>
  );
}

export default App;