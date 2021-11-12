export default function FormularioCurso(){
   return()
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12 m6">
          <imput id="nome" type="text" class="validate" />
          <label for="nome">Nome</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m6">
           <textarea id="descricao" class="materialize-textarea"></textarea>
           <label for="descricao ">Descrição</label>
         </div>
       </div>
       <div class="row">
         <div class="switch">
       <div class"switch">
      <label>
        Off
       <imput type="checkbox" />
       <spam class="lever"></spam>
       On
      </label>
      </div>
     </div>
      <div class="row">
        <div class="input-field col s12 m6">
           <textarea id="descricao" class="materialize-textarea"></textarea>
           <label for="descricao ">Descrição</label>
         </div>
       </div>
       <div class="row">
         <div class="switch">
       <div class"switch">
      <label>
        Off
       <imput type="checkbox" />
       <spam class="lever"></spam>
       On
      </label>
      </div>
     </div>
   </div>
	<div class="row"
	  <div class="imput-field col s12 m6">
	     <a class="waves-effect waves-light btn">cancelar</a> &nbsp;
	       <button class="btn waves-effect waves-light" type="submit" name="action">Salvar
    <i class="material-icons right">send</i>
  </button>
        
         </form>
        </div>
}