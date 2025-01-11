import type { ReactNode } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export const ErrorMessage = ({ title, children }: { title: string, children: ReactNode }) => (
  <div className="error">
    <div className="icon">
      <FaExclamationCircle />
    </div>
    <h2>{title}</h2>
    {children}
  </div>
);
