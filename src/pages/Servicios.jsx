import './Servicios.css';
import ServicioCard from '../components/ServicioCard'; 
function Servicios() {
    const seccionTitulo = "Nuestros Servicios";
    const seccionSubtitulo="Impulsa tu negocio con tecnologioa de ultima generacion";
    return(
        <section className='servicios-header'>
            <div>
                <h2 className='servicios-titulo'>{seccionTitulo}</h2>
                <p className='servicios-subtitulo'>{seccionSubtitulo}</p>
            </div>
            <div className='servicios-grid'>
                <ServicioCard/>
                <ServicioCard/>
                <ServicioCard/>
            </div>
        </section>
    );
}

export default Servicios; 