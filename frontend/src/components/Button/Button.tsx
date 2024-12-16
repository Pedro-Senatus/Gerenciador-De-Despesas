import { useState } from "react";


const Button = ({ icon: Icon, color, size, onClick}:any) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Icon size={size} color={isHovered ? "#d3d3d3" : color} />
    </button>
  );
};

export default Button;
