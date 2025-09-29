import React from 'react'
import  Button  from 'react-bootstrap/Button';

const WeatherButton = ({cities, setCity, selectedCity, handleCityChange}) => {
    // {getWeatherByCurrentLocation, testFunction}
    // {showButtonWeather}
    console.log(cities);
  return (
    <div>
        <Button onClick={()=>handleCityChange("current")} variant={`${selectedCity == null ? "outline-secondary" : "secondary"}`}>Current Location</Button>       
        {/* <Button onClick={testFunction} variant="secondary">Seoul</Button>         */}
        {/* <Button onClick={(e)=>testFunction(e)} variant="secondary">Seoul</Button> */}
        {/* <Button onClick={()=>getWeatherByCurrentLocation(48.864716, 2.349014)} variant="secondary">Paris</Button> */}
        {cities.map((item)=>(
            <Button onClick={()=>{
                // console.log(e.target.textContent)
                // showButtonWeather(item)
                console.log(item)
                setCity(item)
            }} variant="secondary">{item}</Button>
        ))}

    </div>
      
    
  )
}

export default WeatherButton
