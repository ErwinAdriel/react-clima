import icon from "../img/icon.png";
import { Link } from "react-router-dom";
import styles from './Index.module.css';

export default function Index(){
    return(
        <div className={styles.indexContainer}>
            <div className={styles.imgIcon}>
                <img src={icon}/>
            </div>
            <div className={styles.tituloIndex}>
                ClimApp
            </div>
            <Link to={"/city"}>
                <div>
                    <button className={styles.btnIngresar}>Ingresar</button>
                </div>
            </Link>  
        </div>
    );
}