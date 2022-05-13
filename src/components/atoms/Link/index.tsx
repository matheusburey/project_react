import { Link as A } from "react-router-dom";

interface ILinkProps {
  to: string;
  children: string;
}

function Link({ to, children }: ILinkProps) {
  return (
    <A className="inline-block p-4 hover:text-orange-600" to={to}>
      {children}
    </A>
  );
}

export default Link;
