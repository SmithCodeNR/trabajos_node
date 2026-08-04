import { Link } from "react-router-dom";

export default function Usuarios(){
    return(
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                <li><Link to="/usuarios/101">ver perfil de Jeison Narvaez</Link></li>
                <li><Link to="/usuarios/205">ver perfil de Juan perez</Link></li>
            </ul>
        </div>
    )
}