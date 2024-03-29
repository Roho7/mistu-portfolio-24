import { FaStarOfLife } from "react-icons/fa";

const Streamer = ({ text }: { text: string }) => {
  return (
    <div className="streamer-text ">
      <span>{text}</span>
      <FaStarOfLife className="mx-4 text-grass-500" />
    </div>
  );
};

export default Streamer;
