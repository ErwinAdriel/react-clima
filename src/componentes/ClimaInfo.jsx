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
                {weather?.current.temp_c}°
            </div>
            <div className="humedad">
                {weather?.current.humidity}°
            </div>
            <div className="ciudadPais">
                {weather?.location.name}, {weather?.location.country}
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.58789184963!2d-0.43123890713216667!3d51.528179774916985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1716743945099!5m2!1ses!2sar" title="mapa" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}