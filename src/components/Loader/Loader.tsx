import { DNA } from "react-loader-spinner";
import s from "./Loader.module.css";
import { FC } from "react";

interface Props {
  isLoading: boolean;
}

const Loader: FC<Props> = (isLoading) => {
  return (
    <div className={s.loader}>
      <DNA
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
