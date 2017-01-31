import React from 'react';
var React = require('react');
var ReactDOM = require('react-dom');

function Hello() {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello</div>;
}

ReactDOM.render(<Hello />, document.getElementById('app'));