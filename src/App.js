import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json'
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';


function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourses(data);
  }, [])

  const handleEnrollBtn = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>UUdemy Online Courses</h1>
        <h4>Total Courses Offered: {courses.length}</h4>
        <h3>Total Course Added(cart): {cart.length}</h3>
        <Cart cart={cart}></Cart>
        <ol>
          {
            courses.map(course => <Course course={course} handleEnrollBtn={handleEnrollBtn} id={course.id}></Course>)
          }
        </ol>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p><small>developed by Md Touhedul Haque (Copyright, 2020)</small></p>
    </div>
  );
}

export default App;
