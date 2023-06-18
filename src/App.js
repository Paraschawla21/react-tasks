import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Task1 from './Components/Task1';
import Task3 from './Components/Task3';
import Home from './Components/Home';
import Task4 from './Components/Task4';
import Task5 from './Components/Task5';
import Task2 from './Components/Task2';
function App() {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'cyan',
    'magenta',
    'pink',
    'purple',
    'brown',
    'gray',
    'black',
    'white',
    'silver',
    'gold',
    'teal',
    'lime',
    'maroon'
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home>} ></Route>
        <Route exact path='/task1' element={< Task1 />}></Route>
        <Route exact path='/task2' element={< Task2 />}></Route>
        <Route exact path='/task3' element={< Task3 colors={colors}/>}></Route>
        <Route exact path='/task4' element={< Task4 />}></Route>
        <Route exact path='/task5' element={< Task5 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
