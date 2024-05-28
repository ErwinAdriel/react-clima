import { useState } from "react"
import styles from './ClimaForm.module.css'
export default function ClimaForm({onChangeCity})
{
    
    const [city, setCity] = useState("");

    function onChange(e){
        const value = e.target.value;

        if(value !== ""){
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }
    return(
        <form className={styles.formBuscador} onSubmit={handleSubmit}>
            <input 
            placeholder="Ingresar ciudad/pais"
            type="text" 
            onChange={onChange} 
            className={styles.inputForm}/>
        </form>        
    )
}