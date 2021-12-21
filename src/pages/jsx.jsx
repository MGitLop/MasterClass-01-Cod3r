import Layout from "../components/Layout";

export default function Jsx(){

  const titulo = <h1>Título usando uma constante</h1>
  const a = 3;
  const b = 4;
  console.log(a * b);

  function subTitulo(){
    return <h2>Subtítulo atraves de função</h2>
  }

  return(
    <Layout titulo="Entendendo o JSX">

    <div>
      {titulo}
      {subTitulo()}

      <h1>JSX é um conceito Central</h1>
      { a * b }
      <br />
      {"muito legal".toUpperCase()}
      <h2>
        {"muito legal".toUpperCase()}
      </h2>

      <p>
        {JSON.stringify({nome: 'João', idade: 30})}
      </p>
    </div>
    </Layout>
  )
}
