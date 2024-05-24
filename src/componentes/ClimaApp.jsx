import { useState } from "react";
import ClimaForm from "./ClimaForm";
export default function ClimaApp(){

    const [weather, setWeather] = useState(null);

    async function loadInfo(city = 'london'){
        try{
            const request = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=424f0d9dcd5b407da6b230051242105&q=${city}&aqi=no`
            );
                
            const json = await request.json();

            console.log(json);

            setWeather(json);

        } catch (error) {

        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return(
        <div>
            <ClimaForm onChangeCity={handleChangeCity} />
            <div>{weather?.current.temp_c}</div>
        </div>
    );
}