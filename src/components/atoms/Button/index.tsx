interface IButtonProps {
  children: string;
  isBlack?: boolean;
  callback: () => void;
}

function Button({ children, callback, isBlack }: IButtonProps) {
  const backgroundButton = isBlack
    ? "bg-black text-neutral-100"
    : "bg-neutral-100";

  return (
    <button
      className={`${backgroundButton} w-32 h-11 m-4 border-black border-2 rounded-lg  hover:bg-orange-600 hover:text-neutral-100 hover:border-orange-600 transition-colors`}
      type="button"
      onClick={callback}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isBlack: false,
};

export default Button;
