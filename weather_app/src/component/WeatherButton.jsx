import React from 'react'
import  Button  from 'react-bootstrap/Button';

const WeatherButton = ({cities, setCity, selectedCity, handleCityChange}) => {
    // {getWeatherByCurrentLocation, testFunction}
    // {showButtonWeather}
    console.log(cities);
  return (
    <div>
        <Button onClick={()=>handleCityChange("current")} className={`${selectedCity === null ? "custom-btn" : ""}`} variant="secondary">Current Location</Button>       
        {/* <Button onClick={testFunction} variant="secondary">Seoul</Button>         */}
        {/* <Button onClick={(e)=>testFunction(e)} variant="secondary">Seoul</Button> */}
        {/* <Button onClick={()=>getWeatherByCurrentLocation(48.864716, 2.349014)} variant="secondary">Paris</Button> */}
        {cities.map((item)=>(
            <Button className={`${selectedCity === item ? "custom-btn" : ""}`} onClick={()=>{
                // console.log(e.target.textContent)
                // showButtonWeather(item)
                console.log("sc",item)
                setCity(item)
                console.log("sc2",selectedCity)
            }} variant="secondary">{item}</Button>
        ))}

    </div>
      
    
  )
}

export default WeatherButton
