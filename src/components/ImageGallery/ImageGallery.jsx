import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal, changeImg }) {
  return (
    <ul className={s.gallery}>
      {items.map(({ id, urls, alt_description }) => (
        <li
          className={s.card}
          key={id}
          onClick={() => {
            changeImg({ url: urls.regular, description: alt_description });
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
}
