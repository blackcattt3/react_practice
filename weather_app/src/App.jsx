import { useState } from 'react'
import { useEffect } from 'react'
import { ClipLoader } from "react-spinners";
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

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("")
  const cities = ["paris", "seoul", "tokyo"];
  const [loading, setLoading] = useState(false)

  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log("현재위치", lat, lon)
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const test = (e)=>{
    console.log(e.target.textContent)
  }

  const getWeatherByCurrentLocation = async (lat, lon)=>{
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async ()=>{
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setWeather(data);
    setLoading(false);
  }

  const handleCityChange = (city)=>{
    if(city == "current"){
      setCity(null);
    } else{
      setCity(city);
    }
  }

  // const showButtonWeather = async (city)=>{
  // let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setWeather(data);
  // }

  useEffect(()=>{
    if(city==""){
      getCurrentLocation();
    } else{
      getWeatherByCity();
    }
    // 위의 두개가 상황에 맞게 호출되어야한다.
  },[city]);



  return (
    <div>
        {loading?<div className='wrapper'>
          <ClipLoader color= "#f88c6b" loading={loading} size={150}/>
          </div> :
        <div className='wrapper'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} selectedCity={city} handleCityChange={handleCityChange}/>
        {/* showButtonWeather={showButtonWeather} */}
        {/* <WeatherButton getWeatherByCurrentLocation={getWeatherByCurrentLocation} testFunction={test}/> */}
      </div>}
    </div>
  )
}

export default App

