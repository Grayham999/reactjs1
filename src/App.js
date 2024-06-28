// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name.js';
import Price from './Price.js';
import Description from './Description.js';
import Image from './Images.js';
import './App.css';

const firstName = "Grayham"; // Change this to your name or leave it empty

const App = () => {
  return (
    <div className="container mt-7">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title>Samsung<Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="" alt="Greeting" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;

