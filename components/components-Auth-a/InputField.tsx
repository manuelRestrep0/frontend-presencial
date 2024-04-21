type InputFieldProps = {
    type: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    placeholder:string,
    id:string,
}




const InputField = ({ type, value, onChange,placeholder,id }: InputFieldProps) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                placeholder={placeholder}
                id={id}
                name={id}
                className="border-b border-gray-600 text-xl placeholder:text-sm  w-full placeholder-gray-600 outline-none"
            />
        </div>
    )
}

export { InputField }