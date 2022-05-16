import { ReactNode } from "react";

interface ILabel {
  children: ReactNode;
  label: string;
}

function Label({ children, label }: ILabel) {
  return (
    <div className="relative w-2/5 mx-auto mt-8">
      <label className="absolute top-[-18px] text-sm">{label}</label>
      {children}
    </div>
  );
}

export default Label;
