import Label from "../../atoms/Label";

interface ISelectProps {
	register: (name: string) => void;
	name: string;
	label: string;
	options: string[];
}

function Select({ label, register, name, options }: ISelectProps) {
	return (
		<Label label={label}>
			<select
				{...register(name)}
				className="border-black border-2 rounded-lg h-11 w-full text-center bg-neutral-100 cursor-pointer hover:border-orange-600 focus:border-orange-600-500 focus:outline-none"
			>
				{options.map((ele, i) => <option key={i} value={ele}>{ele}</option>)}
			</select>
		</Label>
	);
}

export default Select;
