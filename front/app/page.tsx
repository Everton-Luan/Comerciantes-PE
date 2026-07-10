import Link from "next/link";

export default function Home(){

return(

<main style={{

display:"flex",

justifyContent:"center",

alignItems:"center",

height:"100vh",

background:"#0F172A"

}}>

<div style={{

background:"white",

padding:"50px",

borderRadius:"15px",

width:"450px",

textAlign:"center"

}}>

<h1>PEcommerce</h1>

<br/>

<p>

Sistema de Compra e Venda de Produtos

</p>

<br/>

<Link href="/login">

<button

style={{

padding:"15px",

width:"100%",

background:"#2563EB",

color:"white",

border:"none",

borderRadius:"8px"

}}

>

Entrar

</button>

</Link>

</div>

</main>

)

}