import { useEffect } from "react";
import Panell from "../Panell/Panell";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";

function Quotation() {

    const [web, setWeb] = useLocalStorage("Web", 0);
    const [seo, setSeo] = useLocalStorage("Seo", 0);
    const [ads, setAds] = useLocalStorage("Ads", 0);
    const [extra, setExtra] = useLocalStorage("Extra", 0);
    const [quotation, setQuotation] = useLocalStorage("Total", 0);

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
            <button>
                <Link to="/">Tornar a inici</Link>
            </button>
        </div>
    );
}

export default Quotation;
