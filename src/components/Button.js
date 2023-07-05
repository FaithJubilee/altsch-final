const Button = ({handleBtn, text}) => {
    return (
        <button onClick={handleBtn}>
            {text}
        </button>
    )
}
export default Button;