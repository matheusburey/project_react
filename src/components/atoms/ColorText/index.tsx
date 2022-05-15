interface IColorTestProps {
  children: string;
}

function ColorText({ children }: IColorTestProps) {
  return <span className="text-orange-600">{children}</span>;
}

export default ColorText;
