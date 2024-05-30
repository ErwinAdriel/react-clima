import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "../componentes/Index";
import ClimaApp from "../componentes/ClimaApp";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Index/>}/>
                <Route exact path="/city" element={<ClimaApp/>}/>
                {/*<Route exact path="/movies/:movieId" element={<MovieDetalles />}/>*/}
            </Routes>
        </Router>
    )
}