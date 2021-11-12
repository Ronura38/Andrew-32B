export default function CardReveal (props){
  return (
  <div class="col s12 m6 l4">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg" />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{props.curso.nome}<i class="material-icons right">more_vert</i></span>
      <p><a to={"/curso/editar" + props.curso.colecaoID} >Editar</a></p> | <a to={"/curso/editar" + props.curso.colecaoID} >Editar</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{props.curso.nome}<i class="material-icons right">close</i></span>
      <p>{props.curso.descricao}</p>
    </div>
  </div>
  </div>
);
}