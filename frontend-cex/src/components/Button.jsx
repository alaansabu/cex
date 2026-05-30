const ButtonOne = ({text,type,onclick})=>{
    return(
        <>
            <button className="btn" type={type} onClick={onclick} >{text}</button>
        </>
    )
}
export default ButtonOne