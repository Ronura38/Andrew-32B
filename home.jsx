import BasicCard from "../../components/cards/basic-card";
import Header from "../../components/header/header";

export default function Home(){
	return(
	<>
	<Header />
	<dib class="row">
	    <BasicCard titulo="O que é SRS" descricao="Descubra essa técnica de estudos para melhorar o seu sistema de aprendizado!" />
	    <BasicCard titulo="Conheça o FlashCard" descricao="Descubra essa técnica de estudos para melhorar o seu sistema de aprendizado!" />
	    <BasicCard titulo="Crie sua própria Coleção" descricao="Descubra essa técnica de estudos para melhorar o seu sistema de aprendizado!" />
	</div>
	<>
);
}