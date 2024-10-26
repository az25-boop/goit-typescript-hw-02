import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import s from "./ImageModal.module.css";
import { FC } from "react";
import { Image } from "../../types";

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

interface Props {
  onClose: () => void;
  state: boolean;
  img: Image | undefined;
}

const ImageModal: FC<Props> = ({ onClose, state, img }) => {
  return img ? (
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
        src={img.urls.regular}
        alt={img.alt_description}
        width="500px"
      />
    </Modal>
  ) : (
    <></>
  );
};

export default ImageModal;
