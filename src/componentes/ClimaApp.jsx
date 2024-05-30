import { useEffect, useState } from "react";
import ClimaForm from "./ClimaForm";
import ClimaInfo from "./ClimaInfo";
import styles from './ClimaApp.module.css';
import Loading from "./Loading";

export default function ClimaApp(){

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Clima App | ${weather?.location.name ?? ""}`;
    }, [weather]);

    async function loadInfo(city = 'Buenos Aires'){
        try{
            const request = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=424f0d9dcd5b407da6b230051242105&q=${city}&aqi=no`
            );
                
            const json = await request.json();

            console.log(json);

            setTimeout(() => {
                setWeather(json);    
            }, 2000);

        } catch (error) {

        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return(
        <div className={styles.appContainer}>
            <ClimaForm onChangeCity={handleChangeCity} />
            {weather ? <ClimaInfo weather={weather}/> : <Loading/>}
            
        </div>
    );
}