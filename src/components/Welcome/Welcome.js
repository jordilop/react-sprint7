import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div>
            <h2>Welcome Quotation App!</h2>
            <p>
                En aquest lliurament realitzarem una aplicació per calcular el pressupost d'una pàgina web, afegint més interaccions amb l'usuari/ària que en la pràctica anterior (caselles de selecció, inputs, botons). La nostra web haurà de reaccionar i modificar el preu total en funció de les opcions que triï l'usuari.
            </p>
            <button>
                <Link to={process.env.PUBLIC_URL + '/quotation'}>Començar</Link>
            </button>
        </div>
    );
}

export default Welcome;