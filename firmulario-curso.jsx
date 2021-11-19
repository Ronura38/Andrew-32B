import { useState } from "react"
import { useHistory } from "react-router"
import api from '../../services/api'

export default function FormularioCurso(){
	const history = useHistory();
	const { colecaoId } = useParams();
	const [ dadosCurso, setDadosCutso] = useState({
	  nome: 'valor padrao',
	  descricao: '',
	  publico: false
	});

	function goBack(){
	  history.push("/curso");
	}

	const handlerSubmit = ( e ) => {
	e.preventDefault
	if( colecaoId ){
	api.put("/colecoes/" + colecaoId, dadosCursos)
		.then(goBack);
	}else{
	api.post("colecoes", dadosCursos)
		.then(goBack);
	}

	}

	useEffect(()=>{
	 api.get("colecaoId")
	   .then(response => setDadosCurso( response.data ));
	}, colecaoId);

	return(
  <div class="row">
    <form class="col s12" onSubmit{handlerSubmit}>
      <div class="row">
        <div class="input-field col s12 m6">
          <input id="nome" type="text" class="validate" 
          value={dadosCurso.nome} onChange={ e => setDadosCurso({ ...dadosCurso, nome: e.target.value })} />
          <label for="nome">Nome</label>
        </div>
      </div>
       <div class="row">
        <div class="input-field col s12">
          <textarea id="descricao" class="materialize-textarea" value={dadosCurso.descricao}
          onChange={ e => setDadosCurso({ ...dadosCurso, descricao: e.target.value })} ></textarea>
          <label for="descricao">Textarea</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m6">
          <div class="switch">
           <label>
            Privado
           <input type="checkbox" checked={dadosCurso.publico} onChange={ e => setDadosCurso({ ...dadosCurso, publico: e.target.value } />
           <span class="lever"></span>
           Publico
           </label>
        </div>
  </div>
      <div class="imput-field col s12 m6">
      	<a class="waves-effect waves-light btn onClic={goBack}">Cancelar</a> &nbsp
      	  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
             <i class="material-icons right">send</i>
           </button>
      </div>
     </div>
    </form>
  </div>
	)
}
