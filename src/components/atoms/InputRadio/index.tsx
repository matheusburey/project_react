interface IInputRadioProps {
  text: string;
  id: string;
}
function InputRadio({ text, id }: IInputRadioProps) {
  return (
    <div>
      <input
        className="appearance-none peer"
        id={id}
        type="radio"
        name="plan"
      />
      <label
        htmlFor={id}
        className="m-5 w-32 py-2 text-center inline-block bg-neutral-100 border-2 border-black rounded-lg cursor-pointer hover:border-orange-600 hover:text-orange-600 peer-checked:bg-orange-600 peer-checked:text-neutral-100 peer-checked:border-neutral-100"
      >
        {text}
      </label>
    </div>
  );
}

export default InputRadio;
