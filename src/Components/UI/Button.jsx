const Button =(props)=>
<button className={`btn btn-${props.buttonType}`} onClick={props.click} >{props.children}</button>;

export default Button;