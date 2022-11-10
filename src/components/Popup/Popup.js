import { StyledPopupButton } from "./Popup.styled";
import { useState } from "react";
import Modal from "react-modal";

const customStyle = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, .25)"
    },
    content: {
        position: "absolute",
        top: "75%",
        height: "max-content",
        border: ".2rem solid black",
        borderRadius: "1rem"
    }
};

//https://www.npmjs.com/package/react-modal
Modal.setAppElement("#root");

function Popup({ text, value }) {

    const [visible, setVisible] = useState(false);

    const handleModal = () => setVisible(!visible);

    return (
        <>
            <StyledPopupButton onClick={handleModal}>&#8505;</StyledPopupButton>
            <Modal isOpen={visible} onRequestClose={handleModal} style={customStyle} contentLabel="Popup Modal">
                <div>
                    {`${text} (actualment ${value})`}
                </div>
            </Modal>
        </>
    );
}

export default Popup;