import Label from "../../atoms/Label";

interface IInput {
	register: (name: string) => void;
	type: string;
	name: string;
	label: string;
}

function Input({ register, type, name, label }: IInput) {
	return (
		<Label label={label}>
			<input type={type} {...register(name)} className="w-full h-11 bg-neutral-100 border-black border-2 rounded-lg text-center cursor-pointer hover:border-orange-600 focus:border-orange-600-500 focus:outline-none" />
		</Label>
	)
}

export default Input
