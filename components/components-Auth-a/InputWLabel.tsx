import { InputField } from "./InputField"

type InputWLabelProps = {
    type: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder: string,
    id: string,
    label:string
}

const InputWLabel = ({ type, value, onChange, placeholder, id,label }: InputWLabelProps) => {
    return (
        <div>
            <label className="text-base">
                {label}
            </label>
            <InputField
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                id={id}
            />
        </div>
    )
}

export {InputWLabel}