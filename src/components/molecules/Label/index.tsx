import { ReactNode } from "react";

interface ILabel {
  children: ReactNode;
  text: string;
}

function Label({ children, text }: ILabel) {
  return (
    <div className="relative">
      <span className="absolute top-[-23px] text-sm">{text}</span>
      {children}
    </div>
  );
}

export default Label;
