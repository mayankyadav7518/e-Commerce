import { CircleChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Back({ onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 cursor-pointer border border-gray-500 px-3 py-1.5 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
    >
      <CircleChevronLeft size={18} />
      <span>Back</span>
    </button>
  );
}
