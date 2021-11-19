import { Route, Switch }'react-router';
import NotFound'./pages/errors/not-found';
import Home'./pages/home/home';

export default function Rotas(){
	return(
	<Switch>
	   <Route exact path"/" component={Home} />
	   <Route path"/cursos" component={Cursos} />
	   <Route path"/cursos/novo" component={FormularioCurso} />
	   <Route path"/cursos/editar/:colecaoId" component={FormularioCurso} />
	   <Route path"*" component={NotFoumd} />
	 </Switch>
	);
}