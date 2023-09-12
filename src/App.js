import './App.css';
import { useEffect, useState } from 'react';
import CarFront from './component/CarFront';
import { Route, Routes } from 'react-router-dom';
import Tour from './component/Tour';
import CityTour from './component/CityTour';

function App() {
  const [isAuthenticated, setAuth] = useState(false);
  const loginAuth = ()=>{
    setAuth(true)
  }
  const logoautAuth = () => {
    setAuth(false)
    
    //jwt토큰 삭제
    sessionStorage.removeItem("jwt")
  }

  //마운트 될때 실행되는 함수
  useEffect(()=>{
    if(sessionStorage.getItem("jwt")){
      setAuth(true);
    }
  },[])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CarFront isAuthenticated={isAuthenticated} loginAuth={loginAuth} logoautAuth={logoautAuth}/>} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/tour/city' element={<CityTour />} />
      </Routes>
    </div>
  );
}

export default App;
