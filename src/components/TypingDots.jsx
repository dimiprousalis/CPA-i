const TypingDots = () => {

    return (
        <div className="flex items-center space-x-4 p-2">
            <div className="bg-secondary-700 rounded-full h-4 w-4 animate-pulse"> </div>
            <div className="bg-secondary-700 rounded-full h-4 w-4 animate-pulse duration-75">.</div>
            <div className="bg-secondary-700 rounded-full h-4 w-4 animate-pulse duration-100">.</div>
        </div>
    )
}

export default TypingDots