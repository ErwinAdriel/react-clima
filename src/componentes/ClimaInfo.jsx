export default function ClimaInfo({weather}){
    return(
        <div>
            <div>
                <div className="imgIcon">
                    <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width="128" 
                    alt={weather?.current.condition.text} />
                </div>                
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
    );
}