"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "end", gap: "1rem", fontSize:"2rem"}}>
        <a href="https://www.linkedin.com/in/micael-fone/">
          <i className='bi bi-linkedin'
          ></i>
        </a>
        <a href="https://github.com/MIcaelFone">
          <i className="bi bi-github"
          ></i> 
        </a>
        <a href="">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="mt-3 container" style={{marginLeft:"19.5rem"}}>
        <h1 style={{fontSize:"5rem",marginRight:"3.5rem"}}>Micael Fone</h1>
        <h2 style={{fontSize:"2.5rem",marginRight:"18.5rem",color:"yellow"}}>Sobre mim </h2>
      </div> 
      <div className="mt-2 container" style={{ display: "flex", alignItems: "start"}}>
        <img src="/images/mica.png" alt="Portfolio"  height={250}/>
        <div className="container mt-3" style={{fontSize:"1.2rem",textAlign:"justify",marginLeft:"5rem"}}>
          <p>Olá! Meu nome é Micael e sou apaixonado por tecnologia e futebol. Atualmente, sou estudante de Sistemas de Informação na PUCPR e estagiário de QA Tester na Employer RH.</p>
          <p>Minha jornada profissional começou em 2022 como Jovem Aprendiz na Philip Morris Brasil, onde tive minha primeira experiência no mercado de trabalho e desenvolvi habilidades organizacionais e administrativas. Em 2023, iniciei um estágio de programação no Banco do Brasil, onde atuei por dois anos em projetos voltados ao desenvolvimvento de sistemas, 
             automação de processos e análise de dados.</p>
          <p>Gosto de resolver problemas reais. Evoluir constantemente e encarar novos desafios é o que me motiva todos os dias.</p>
        </div> 
      </div>   
    </div>
  );  
  }

