"use client";

import {useState} from "react";

import {useRouter} from "next/navigation";

export default function Login(){

const router=useRouter();

const[login,setLogin]=useState("");

const[senha,setSenha]=useState("");

function entrar(){

if(login==="admin" && senha==="123"){

router.push("/home");

}else{

alert("Login ou senha incorretos");

}

}

return(

<main

style={{

height:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center"

}}

>

<div

style={{

background:"white",

padding:"40px",

width:"350px",

borderRadius:"10px"

}}

>

<h1>Login</h1>

<input

placeholder="Login"

value={login}

onChange={(e)=>setLogin(e.target.value)}

style={{

width:"100%",

padding:"12px",

marginTop:"20px"

}}

/>

<input

type="password"

placeholder="Senha"

value={senha}

onChange={(e)=>setSenha(e.target.value)}

style={{

width:"100%",

padding:"12px",

marginTop:"10px"

}}

/>

<button

onClick={entrar}

style={{

marginTop:"20px",

width:"100%",

padding:"12px",

background:"#2563EB",

color:"white",

border:"none"

}}

>

Entrar

</button>

</div>

</main>

)

}