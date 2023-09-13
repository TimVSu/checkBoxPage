//Custom checkbox component created for code simplification and ui uniformity
const CustomCheckbox = ({ ...props }) => {
    return (
        <div className="flex items-center pl-2 bg-blue border-2 border-blue rounded hover:border-yellow text-white">
            <input id={props.id} type="checkbox" checked={props.checked} onChange={() => props.onChange()} className="accent-yellow w-4 h-4 rounded" />
            <label htmlFor={props.id} className="w-full py-4 ml-2 text-base lg:text-lg font-medium">{ props.label }</label>
        </div>
    )
}

export default CustomCheckbox;