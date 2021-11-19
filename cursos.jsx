import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import CardReveal from "../../components/cards/card-reveal";
import api from "../../services/api";

export default function Cursos(){
    cont [ cursos, setCursos ] = useState([{
    	colecaiId: 0,
    	nome:'Nome do Curso',
    	descricao: 'Descricao do Curso'
    }]);
    const pagina = 1;

    useEffect(
    	() => {
    		api.get("/colecoes")
    			.then(response => setCursos( response.data ))
    	},
    	pagina
    );

	return(
	<>
		<h1>Cursos</h1>
		<div className="row">
		    { cursos.map ( curso => <CardReveal curso={cursos} />)}
		</div>
		<Link to="/cursos/novo">
          <a class="btn-floating btn-large waves-effec waves-light red"><i class="material-icon">add</i></a>
		</Link>
		
	</>
	)
}