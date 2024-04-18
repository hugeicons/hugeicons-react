import React from 'react';
import {Home01Icon, MarketingIcon} from "hugeicons-react";
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const App = () => {
  return (
    <div className="App">

      <nav>
        <div className="nav-wrapper">
          <a href="https://hugeicons.com" className="hugeicons-logo">
            <img src="https://docs.hugeicons.com/logo_white.svg" alt="Hugeicons Logo" className="logo"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a target={"_blank"} href="https://hugeicons.com/icons">Icons</a></li>
            <li><a target={"_blank"} href="https://docs.hugeicons.com/">Docs</a></li>
            <li><a target={"_blank"} href="https://hugeicons.com/pricing">Pricing</a></li>
          </ul>
        </div>
      </nav>

      <h1>Hugeicons Example</h1>
      <p className={"subtitle"}>Check all properties to control your icons</p>

      <div>
        <div className="flex-1">
          <h2>Control icon size</h2>

          <div className="flex example-container">
            <Home01Icon/>
            <Home01Icon size={32}/>
            <Home01Icon size={44}/>
            <Home01Icon size={52}/>
            <Home01Icon size={66}/>
          </div>
          <h3>Usage</h3>
          <SyntaxHighlighter language="javascript" style={darcula}>
            {`
  // Default size is 24
  <Home01Icon/>
  
  // You can set the size you want (in pixels)
  <Home01Icon size={32} />
  <Home01Icon size={44} />
  <Home01Icon size={52} />
  <Home01Icon size={66} />
  `}
          </SyntaxHighlighter>
        </div>
        <div className="flex-1">
          <h2>Control icon color</h2>

          <div className="flex example-container">
            <MarketingIcon/>
            <MarketingIcon color="#00FF00"/>
            <MarketingIcon color="#0000FF"/>
            <MarketingIcon color="#FF00FF"/>
            <MarketingIcon color="#00FFFF"/>
          </div>

          <h3>Usage</h3>

          <SyntaxHighlighter language="javascript" style={darcula}>
            {`
  // Default color is #000000
  <MarketingIcon/>
  
  // You can set the color you want (in hexadecimal)
  <MarketingIcon color="#00FF00"/>
  <MarketingIcon color="#0000FF"/>
  <MarketingIcon color="#FF00FF"/>
  <MarketingIcon color="#00FFFF"/>
  
`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default App;
