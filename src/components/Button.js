import './button.scss'

const Button = ({handleBtn, text}) => {
    return (
        <button onClick={handleBtn} className="btn">
            {text}
        </button>
    )
}
export default Button;