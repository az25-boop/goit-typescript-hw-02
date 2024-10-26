import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ onClose, state, img }) {
  return (
    <Modal
      isOpen={state}
      onRequestClose={onClose}
      style={customStyles}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.btn} onClick={onClose}>
        <AiOutlineClose style={{ width: "30px", height: "30px" }} />
      </button>
      <img
        className={s.img}
        src={img.url}
        alt={img.description}
        width="500px"
      />
    </Modal>
  );
}
