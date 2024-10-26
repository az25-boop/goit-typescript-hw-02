import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { FC, FormEvent } from "react";

interface Props {
  onSubmit: (searchValue: string) => void;
}

const SearchBar: FC<Props> = ({ onSubmit }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    const notify = () =>
      toast("Поле пошуку необхідно заповнити", {
        duration: 1500,
        style: {
          backgroundColor: "red",
        },
      });
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(
      "search"
    ) as HTMLInputElement;
    const searchRequest = input.value;
    if (searchRequest !== "") {
      onSubmit(searchRequest);
    } else {
      notify();
    }
    event.currentTarget.reset();
  }
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          name="search"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Шукати фото"
        />
        <button type="submit">Почати пошук</button>
      </form>
    </header>
  );
};

export default SearchBar;
