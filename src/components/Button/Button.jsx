import "./button.css";

const Button = ({ botao }) => {
  return (
    <div className='div-botao'>
      <button className="botao" type='submit'>{botao}</button>
    </div>
  );
}

export default Button;
