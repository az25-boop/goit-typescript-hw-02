import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import { FC, useEffect, useState } from "react";
import fetchImages from "../../images-api";
import s from "./App.module.css";
import { Image, Response } from "../../types";

const App: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [request, setRequest] = useState<string>("");
  const [modalImg, setModalImg] = useState<Image>();
  const [showBtn, setShowBtn] = useState<boolean | 0>(false);
  useEffect(() => {
    if (!request) {
      return;
    }
    const fetch = async () => {
      try {
        setError(false);
        setLoader(true);
        setShowBtn(false);
        const data = await fetchImages(request, page);
        const totalPages: number = data.total_pages;
        setImages((prevData) => [...prevData, ...data.results]);
        setShowBtn(totalPages && totalPages !== page && page < 200);
      } catch (err) {
        setError(true);
        setShowBtn(false);
      } finally {
        setLoader(false);
      }
    };

    fetch();
  }, [request, page]);
  function handleSubmit(searchRequest: string): void {
    setImages([]);
    setPage(1);
    setRequest(searchRequest);
  }
  async function loadMore() {
    setPage(page + 1);
  }

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={s.app}>
      <ImageModal onClose={closeModal} state={modalIsOpen} img={modalImg} />
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery
          openModal={openModal}
          items={images}
          changeImg={setModalImg}
        />
      )}

      <Toaster />
      {loader && <Loader isLoading={loader} />}
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
    </div>
  );
};

export default App;
