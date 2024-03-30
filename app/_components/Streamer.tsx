import { FaStarOfLife } from "react-icons/fa";

const Streamer = ({ text }: { text: string }) => {
  return (
    <div className="streamer-text ">
      <span className="m-0">{text}</span>
      <FaStarOfLife className="mx-4 text-grass-500" />
    </div>
  );
};

export default Streamer;
