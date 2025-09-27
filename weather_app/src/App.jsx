import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherBox from './component/WeatherBox.jsx'
import WeatherButton from './component/WeatherButton.jsx'

// 1. 앱이 실행되자마자 현재위치 기반 날씨가 보인다.
// 2. 날씨 정보 -> 도시, 섭씨, 화씨, 날씨 상태
// 3. 5개의 버튼(1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할때마다 도시별 날씨 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 로딩스피너 구현. (데이터 들고오는 동안 로딩스피너가 돈다.)

const apiKey = "aa292a2525ebe74faa3287f45c8c7455"

function App() {
  useEffect(()=>{
    getCurrentLocation()
  },[]);

  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log("현재위치", lat, lon)
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon)=>{
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <WeatherBox/>
      <WeatherButton/>
    </div>
  )
}

export default App

