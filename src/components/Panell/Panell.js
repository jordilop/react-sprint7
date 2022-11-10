import { StyledPanell } from "./Panell.styled";
import { useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Popup from "../Popup/Popup";

function Panell(props) {

    const [pages, setPages] = useLocalStorage("Pages", 0);
    const [langs, setLangs] = useLocalStorage("Langs", 0);
    const [setExtra] = props.stateProps;
    const textPages = "Servei per triar el nombre de págines de la seva pàgina Web";
    const textLangs = "Servei per triar el nombre d'idiomes de la seva pàgina Web";

    const handleInputChange = event => {
        const name = event.target.name;
        const value = Number.isInteger(Number(event.target.value)) ? Number(event.target.value) : 0;
        name === "pages" ? setPages(value) : setLangs(value);
    }

    useEffect(() => {
        setExtra(pages * langs * 30);
    }, [pages, langs, setExtra]);

    return (
        <StyledPanell>
            <div>
                Número de pàgines
                <CustomButton name="pages" onchange={handleInputChange} stateProps={[pages, setPages]} />
                <Popup text={textPages} value={pages} />
            </div>
            <div>
                Número d'idiomes
                <CustomButton name="langs" onchange={handleInputChange} stateProps={[langs, setLangs]} />
                <Popup text={textLangs} value={langs} />
            </div>
        </StyledPanell>
    );
}

export default Panell;