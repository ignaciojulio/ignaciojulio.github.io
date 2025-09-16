import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>Un breve texto sobre mí...</p>
      </section>
      <section id="proyectos">
        <h2>Mis Proyectos</h2>
        <ul>
          <li>
            <a href="#">Proyecto 1</a>
          </li>
          <li>
            <a href="#">Proyecto 2</a>
          </li>
          <li>
            <a href="#">Proyecto 3</a>
          </li>
        </ul>
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <p>Información de contacto...</p>
      </section>
      <Footer />
    </div>
  );
}
