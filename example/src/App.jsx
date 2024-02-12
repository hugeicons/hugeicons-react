import React from 'react';
import {
  AddCircleHalfDotIcon,
  FirstBracketCircleIcon,
  Home01Icon,
  ListSettingIcon,
  MarketingIcon
} from "hugeicons-react";
import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const App = () => {
  return (
    <div className="App">
      <h1>Hugeicons Example</h1>
      <p className={"subtitle"}>Check all properties to control your icons</p>

      <div className="flex">
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


      <h2>Rotate icons if you want</h2>

      <div className="flex example-container">
        <ListSettingIcon/>
        <ListSettingIcon rotate={45}/>
        <ListSettingIcon rotate={90}/>
        <ListSettingIcon rotate={135}/>
        <ListSettingIcon rotate={180}/>
      </div>

      <h3>Usage</h3>
      <SyntaxHighlighter language="javascript" style={darcula}>
        {`
  // Default rotate is 0
  <ListSettingIcon/>
  
  // You can set the rotate you want (in degrees)
  <ListSettingIcon rotate={45}/>
  <ListSettingIcon rotate={90}/>
  <ListSettingIcon rotate={135}/>
  <ListSettingIcon rotate={180}/>
  `}
      </SyntaxHighlighter>

      <h2>Want them animate? no problem</h2>

      <div className="flex example-container">
        <FirstBracketCircleIcon animate={true}/>
        <AddCircleHalfDotIcon animate={true}/>
      </div>

      <h3>Usage</h3>
      <SyntaxHighlighter language="javascript" style={darcula}>
        {`
  // You can set the animate to true
  <FirstBracketCircleIcon animate={true}/>
  <AddCircleHalfDotIcon animate={true}/>
  `}
      </SyntaxHighlighter>
    </div>
  );
};

export default App;
