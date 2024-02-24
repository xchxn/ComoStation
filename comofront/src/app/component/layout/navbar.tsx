function navbar({ title }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 transform hover:scale-105">
            <p className="group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default navbar