import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Panell from "../Panell/Panell";
import QuotationList from "../QuotationList/QuotationList";
import "./styles.css"

function Quotation() {

    const [web, setWeb] = useLocalStorage("Web", 0);
    const [seo, setSeo] = useLocalStorage("Seo", 0);
    const [ads, setAds] = useLocalStorage("Ads", 0);
    const [extra, setExtra] = useLocalStorage("Extra", 0);
    const [quotation, setQuotation] = useLocalStorage("Total", 0);
    const [quotationList, setQuotationList] = useState([]);

    const getServicesName = (web, seo, ads) => {
        const result = [];
        Boolean(web) && result.push("Web");
        Boolean(seo) && result.push("SEO");
        Boolean(ads) && result.push("Google Ads");
        return result;
    }

    const saveQuotation = () => {
        setQuotationList(prevElements => [
            ...prevElements,
            {
                date: new Date().toLocaleString(),
                name: document.getElementById("name").value,
                customer: document.getElementById("customer").value,
                services: getServicesName(web, seo, ads).toString(),
                total: quotation
            }
        ])
    }

    useEffect(() => {
        if (!Boolean(web)) {
            localStorage.setItem("Pages", 0);
            localStorage.setItem("Langs", 0);
            localStorage.setItem("Extra", 0);
            setExtra(0);
        }
        setQuotation(web + seo + ads + extra);
    }, [web, seo, ads, extra, setExtra, setQuotation]);

    return (
        <div>
            <div className="row">
                <div className="col">
                    <p>Que vols fer?</p>
                    <p>
                        <input type="checkbox" name="web" value="500" checked={Boolean(web)} onChange={event => setWeb(event.target.checked ? Number(event.target.value) : 0)} />
                        Una página Web (500€)
                    </p>
                    {web !== 0 && <Panell stateProps={[setExtra]} />}
                    <p>
                        <input type="checkbox" name="seo" value="300" checked={Boolean(seo)} onChange={event => setSeo(event.target.checked ? Number(event.target.value) : 0)} />
                        Una consultoria SEO (300€)
                    </p>
                    <p>
                        <input type="checkbox" name="ads" value="200" checked={Boolean(ads)} onChange={event => setAds(event.target.checked ? Number(event.target.value) : 0)} />
                        Una campanya de Google Ads (200€)
                    </p>
                    <p>Preu: {quotation}€</p>
                    <p>
                        Pressupost:
                        <input type="text" name="name" id="name" placeholder="Entra el nom del pressupost" />
                    </p>
                    <p>
                        Client:
                        <input type="text" name="customer" id="customer" placeholder="Entra el nom del client" />
                    </p>
                    <p><button onClick={saveQuotation}>Guardar!</button></p>
                </div>
                <div className="col">
                    <QuotationList list={quotationList} />
                </div>
            </div>
            <div className="row">
                <button>
                    <Link to="/">Tornar a inici</Link>
                </button>
            </div>
        </div>
    );
}

export default Quotation;
