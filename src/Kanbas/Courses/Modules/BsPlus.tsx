import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function BsPlus() {
  return (
    <span className="d-inline-block position-relative me-1">
      <FaCircle className="text-white fs-5" />
      <FaCheckCircle 
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        className="text-success position-absolute fs-5" 
      />
    </span>
  );
}
