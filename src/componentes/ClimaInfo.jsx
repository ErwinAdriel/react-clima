import styles from './ClimaInfo.module.css'

export default function ClimaInfo({weather}){
    return(
        <div>
            <div className={styles.ciudadPais}>
                {weather?.location.name}, {weather?.location.country}
            </div>
            <div className={styles.iconTemp}>
                <div className={styles.imgIcon}>
                    <img 
                    src={`http:${weather?.current.condition.icon}`} 
                    width="128" 
                    alt={weather?.current.condition.text} />
                </div>
                <div className={styles.temperatura}>
                    {weather?.current.temp_c}°
                </div>        
                <div className={styles.gradoC}>
                    C
                </div>    
            </div>
            <div className={styles.climaText}>
                {weather?.current.condition.text}
            </div>
            {/* despues de '.', contar 14 digitos */}
            <div className={styles.mapIframe}>
                <iframe
                    title="mapa"
                    src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d866943.5593800024!2d${weather?.location.lon}77!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1716766829918!5m2!1ses!2sar`}
                    height="450"
                    style={{border:0}}
                    allowfullscreen=""
                    className={styles.iframeI}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}