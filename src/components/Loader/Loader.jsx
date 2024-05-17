import { Audio } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Audio
        height="40"
        width="40"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
