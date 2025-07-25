"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { ModalComponent } from "@/components/modalComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useState } from "react";


interface HomeProps {
  deviceType: string;
  onClick: () => void;
}
export default function Home(this:any,deviceType: HomeProps,) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  
  const [showModal, setshowModal] = React.useState(false);
  const abrirModal = () => {
    setshowModal(true);
  };
  const fecharModal = () => {
    setshowModal(false);
  };
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
      <div className="mt-2 container" style={{marginLeft:"19.5rem"}}>
        <h1 style={{fontSize:"4rem",marginRight:"3.5rem"}}>Micael Fone</h1>
        <h2 style={{fontSize:"2.5rem",marginRight:"18.5rem",color:"yellow"}}>Sobre mim </h2>
      </div> 
      <div className=" container" style={{ display: "flex", alignItems: "start"}}>
        <img src="/images/mica.png" alt="Portfolio"  height={250}/>
        <div className="container mt-3" style={{fontSize:"1.2rem",textAlign:"justify",marginLeft:"5.5rem"}}>
          <p>Olá! Meu nome é Micael e sou apaixonado por tecnologia. Atualmente, sou estudante de Sistemas de Informação na PUCPR e estagiário de QA Tester na Employer RH.</p>
          <p>Minha jornada profissional começou em 2022 como Jovem Aprendiz administrativo na Philip Morris Brasil, onde tive minha primeira experiência no mercado de trabalho. Em 2023, iniciei um estágio de programação no Banco do Brasil, onde atuei por dois anos em projetos voltados ao desenvolvimvento de sistemas, 
             automação de processos e análise de dados.</p>
          <p>Gosto de resolver problemas reais. Evoluir constantemente e encarar novos desafios é o que me motiva todos os dias.</p>
        </div> 
      </div> 
      <div className="container mt-2" style={{fontSize:"2rem",marginRight:"18.5rem",color:"yellow"}}>
        <h2 className="container mt-2" style={{fontSize:"2.5rem",marginLeft:"18.5rem",color:"yellow"}}>Habilidades</h2>  
      </div>  
      <div className="mt-4" style={{display: "flex", gap: "1rem", marginTop: "1rem", fontSize: "2rem",justifyContent:"center",marginLeft:"6rem"} }>
        <FontAwesomeIcon icon={faPython} style={{color: "#3776ab",width: "3rem", height: "3rem"}} />
        <FontAwesomeIcon icon={faJava} style={{color: "#ed8b00",width: "3rem", height: "3rem"}} />
        <FontAwesomeIcon icon={faJs} style={{color: "#f7df1e",width: "3rem", height: "3rem"}} />
        <FontAwesomeIcon icon={faReact} style={{color: "#61dafb",width: "3rem", height: "3rem"}} />
        <img src="/images/Azure.png" alt="Azure" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/MongoDB.png" alt="MongoDB" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/Next.js.png" alt="Next" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/YAML.png" alt="YAML" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/Node.js.png" alt="Node" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/git.png" alt="Git" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/Spring.png" alt="Spring" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/NET core.png" alt="C#" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/MySQL.png" alt="MySQL" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/TypeScript.png" alt="TypeScript" style={{width: "3rem", height: "3rem"}} />
        <img src="/images/Apache Spark.png" alt="Apache Spark" style={{width: "3rem", height: "3rem"}} />
      </div>    
      <div className="container mt-3" style={{fontSize:"2rem",marginRight:"18.5rem",color:"yellow"}}>
        <h2 className="container mt-5" style={{fontSize:"2.5rem",marginLeft:"18.5rem",color:"yellow"}}>Projetos</h2>  
      </div>
      <div className="mt-5 container" style={{marginLeft:"5.5rem", padding:"0.90px"}}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
          arrows={true}
        >
        
          <div className="card" onClick={abrirModal} style={{width: "15rem", margin: "0 auto",zIndex: 1}}>
            <img src="/images/perguntamodelo.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Questionário</h3>
            </div>
          </div>
          <div className="card" style={{width: "15rem", margin: "0 auto",zIndex: 1}}>
            <img src="/images/perguntamodelo.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Questionário2</h3>
            </div>
          </div>
          <div className="card" style={{width: "15rem", margin: "0 auto",zIndex: 1}}>
            <img src="/images/perguntamodelo.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Questionário3</h3>
            </div>
          </div>
          <div className="card" style={{width: "15rem", margin: "0 auto",zIndex: 1}}>
            <img src="/images/perguntamodelo.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Questionário4</h3>
            </div>
          </div>
          <div className="card" style={{width: "15rem", margin: "0 auto",zIndex: 1}}>
            <img src="/images/perguntamodelo.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Questionário5</h3>
            </div>
          </div>
        </Carousel>  
      </div>
      {showModal && (
        <ModalComponent
          title="Questionário"
          description="Este é um exemplo de questionário."
          imageUrl="/images/perguntamodelo.png"
          link="https://example.com"
          onClose={fecharModal}
        />
      )}      
          
    </div>
  );  
  }

