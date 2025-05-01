import React, { useState } from 'react';
import './App.css';
import restaurant from './restaurant.jpg';

function TrueFalseLabel() {
  return <h1>True or false?</h1>
}

function BengalsRBLabel() {
  return <h1>The Bengal's Running Back is...</h1>
}

function TrueComponent() {
  return <h3>The Cincinnati Bengals are a football team.</h3>
}

function FalseComponent() {
  return <h3>The Cincinnati Bengals are a well run franchise.</h3>
}

function App({ authorized }) {
  const [qb, wr1, wr2, rb, lt] = ["Joe Burrow", "Ja'Marr Chase", "Tee Higgins", "Chase Brown", "Orlando Brown Jr"];
  const [carState, setCarState] = useState("cruising");

  return (
    <>
      <TrueFalseLabel />
      {authorized ? <TrueComponent /> : <FalseComponent />}
      <BengalsRBLabel />
      <h3>{qb}? {wr1}? {wr2}? {rb}? {lt}?</h3>
      <h2>The Bengals running back is {rb}!!!</h2>

      <h1>State of the car is {carState}.</h1>
      <button onClick={() => setCarState("accelerating")}>Accelerate</button>
      <button onClick={() => setCarState("braking")}>Brake</button>
      <button onClick={() => setCarState("cruising")}>Cruise</button>
    </>
  )
}

export default App;
