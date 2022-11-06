import { StyledPanell } from "./Panell.styles";
import { useState, useEffect } from "react";

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
            <p>
                Número de págines
                <input type="number" name="pages" min="0" value={webValue !== 0 ? pages : 0} onChange={handleInputChange} />
            </p>
            <p>
                Número d'idiomes
                <input type="number" name="lang" min="0" value={webValue !== 0 ? langs : 0} onChange={handleInputChange} />
            </p>
        </StyledPanell>
    );
}

export default Panell;