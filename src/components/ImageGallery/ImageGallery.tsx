import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Dispatch, FC } from "react";
import { Image } from "../../types";

interface Props {
  items: Image[];
  openModal: () => void;
  changeImg: Dispatch<React.SetStateAction<Image | undefined>>;
}

const ImageGallery: FC<Props> = ({ items, openModal, changeImg }) => {
  return (
    <ul className={s.gallery}>
      {items.map(({ id, urls, alt_description }) => (
        <li
          className={s.card}
          key={id}
          onClick={() => {
            changeImg({ id, urls, alt_description });
          }}
        >
          <ImageCard
            url={urls.small}
            onClick={openModal}
            description={alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
