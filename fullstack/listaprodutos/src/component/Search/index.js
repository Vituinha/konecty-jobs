export default function Search(props){
    return(
        <div className="flex justify-center max-w-full p-10">
            <div className="relative flex bg-white max-w-80 rounded-lg">
                <span
                    className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-neutral-600 [&>svg]:h-5 [&>svg]:w-5"
                    id="button-addon2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokwidth="2"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input
                    type="search"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-600 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-neutral-600 dark:placeholder:text-neutral-600 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    id="exampleFormControlInput2"
                    aria-describedby="button-addon2"
                    value={props.name} 
                    onChange={ props.onchange }
                    onKeyDown={ props.onkeydown } />
            </div>
        </div>
    )
}