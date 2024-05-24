import { useEffect, useState } from "react";
import ClimaForm from "./ClimaForm";
export default function ClimaApp(){

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Clima App | ${weather?.location.name ?? ""}`;
    }, [weather]);

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
            <h1>ClimaApp</h1>
            <ClimaForm onChangeCity={handleChangeCity} />
            <div>
                <div className="imgIcon">
                    {weather?.current.condition.icon}
                </div>
                <div className="clima">
                    {weather?.current.condition.text}
                </div>
                <div className="temperatura">
                    {weather?.current.temp_c}
                </div>
                <div className="humedad">
                    {weather?.current.humidity}
                </div>
                <div className="ciudadPais">
                    {weather?.location.name}, {weather?.location.country}
                </div>
            </div>
        </div>
    );
}