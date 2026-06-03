const ButtonOne = ({ text, type = "button", onClick }) => {
    return (
        <button className="text-base text-white p-4 bg-blue-400 hover:bg-olive-900 h-12 w-36 p-3 ring-1 ring-olive-900 rounded p-1"
        
        type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export { ButtonOne };