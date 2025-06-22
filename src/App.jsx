
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router';
import Menu from './components/Menu/Menu';


function App() {
  const [openMenu,SetOpenMenu]=useState(false);

  const HandleOpenMenu=()=>{
    SetOpenMenu(true)
  }
  const HandleCloseMenu=()=>{
    SetOpenMenu(false)
  }


  return (
    <div className="App">
      <Header onOpenMenu={HandleOpenMenu} />
      <div className="Container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
      {openMenu && <Menu  onClose={HandleCloseMenu} /> }
    </div>
  )
}

export default App;
