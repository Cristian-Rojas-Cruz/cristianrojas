import Background from "@/components/Background";

const AboutMe = () => {
  return (
    <Background className="section" id="about-me" bg={["purple", "gray"]}>
      <div className="container">
        <img src="./person-picture.svg" alt="" />
      </div>
      <div className="container">
        <h2>About Me</h2>
        <p>Apasionado de las nuevas tecnologías con experiencia construyendo aplicación web full-stack, experiencia creando diferentes formas de automatizar y facilitar procesos en el desarrollo de una aplicación, experiencia creando microservicios y contenedores ademas estar interesado en tecnologías cloud y devops. Experiencia trabajando con metodologías SCRUM y KANBAN.</p>
      </div>
    </Background>
  )
}

export default AboutMe;