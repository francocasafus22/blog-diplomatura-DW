
export default function InputForm({label, name, type, required, placeholder, register}){
    return(
        <label className="flex flex-col gap-1">
                    <span className="text-md font-medium">{label}</span>
                    <input
                    name={name}
                    type={type || "text"}
                    required={required}
                    placeholder={placeholder}
                    {...register(name, {required})}
                    className={`border border-border rounded-lg py-2 px-2 placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring shadow-xs`}/>
        </label>
    )
}