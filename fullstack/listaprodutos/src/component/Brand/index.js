export default function Brands(props){
    const classNotSelected = "bg-white rounded-sm flex flex justify-center px-5 m-7 text-lg font-semibol dark:text-neutral-700"
    const SelectedBrand = "bg-cyan-600 rounded-sm flex flex justify-center px-5 m-7 text-lg font-semibol dark:text-neutral-100"
    return(
        <div className="grid grid-cols-8 md:grid-cols-15 grid-rows-2 grid-flow-col gap-4">
            {
                props.names.map((item, index) => {
                    let classItem = item === props.selected ? SelectedBrand : classNotSelected
                    return(
                        <button onClick={() => props.onchange(item)} key={index} className={classItem}>
                            {item}
                        </button>
                    )
                  })
            }
        </div>
    )
}