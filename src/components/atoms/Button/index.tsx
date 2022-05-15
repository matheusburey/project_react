interface IButtonProps {
  children: string;
  isBlack?: boolean;
  callback?: () => void | undefined;
  type?: "button" | "submit";
}

function Button({ children, callback, isBlack, type }: IButtonProps) {
  const backgroundButton = isBlack
    ? "bg-black text-neutral-100"
    : "bg-neutral-100";

  return (
    <button
      className={`${backgroundButton} w-32 h-11 m-4 border-black border-2 rounded-lg  hover:bg-orange-600 hover:text-neutral-100 hover:border-orange-600 transition-colors`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={callback}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isBlack: false,
  type: "button",
  callback: undefined,
};

export default Button;
