export default function Cabecalho(props){
  // props é somente para leitura, não pode ser modificado
  return(
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}
