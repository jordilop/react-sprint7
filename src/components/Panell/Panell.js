import { StyledPanell } from "./Panell.styled";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";

function Panell(props) {

    const [pages, setPages] = useState(0);
    const [langs, setLangs] = useState(0);
    const [setExtra] = props.stateProps;
    const webValue = props.webValue;

    const handleInputChange = event => {
        const { name, value } = event.target;
        name === "pages" ? setPages(Number(value)) : setLangs(Number(value));
    }

    useEffect(() => {
        setExtra(pages * langs * 30);
    }, [pages, langs, setExtra]);

    return (
        <StyledPanell>
            <div>
                Número de pàgines
                {/* <input type="number" name="pages" min="0" value={webValue !== 0 ? pages : 0} onChange={handleInputChange} /> */}
                <CustomButton name="pages" onchange={handleInputChange} stateProps={[pages, setPages]} />
            </div>
            <div>
                Número d'idiomes
                {/* <input type="number" name="langs" min="0" value={webValue !== 0 ? langs : 0} onChange={handleInputChange} /> */}
                <CustomButton name="langs" onchange={handleInputChange} stateProps={[langs, setLangs]} />
            </div>
        </StyledPanell>
    );
}

export default Panell;