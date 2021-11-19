import { Modal } from "react-materialize";

export default function CursoModal( props ){
	return(
	<Modal
    actions={[
       <Button flat modal="close" node="button" waves="green">Cancelar</Button>,
       <Button flat modal="close" node="button" waves="green">Congirmar</Button>
  ]}
    bottomSheet
    fixedFooter={false}
    header="Modal Header"
    id="Modal-11"
    open={false}
    options={{
     dismissible: true,
     endingTop: '10%',
     inDuration: 250,
     onCloseEnd: null,
     onCloseStart: null,
     onOpenEnd: null,
     onOpenStart: null,
     opacity: 0.5,
     outDuration: 250,
     preventScrolling: true,
     startingTop: '4%'
  }}
  root={[object HTMLBodyElement]}
  trigger={props.trigger}
>
  {props.mensagem}
</Modal>
	)
}