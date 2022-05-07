import './Btn.css';
const Button = ({ children, onclick }) => {
  return (
    <button onClick={onclick} className={'search_button'}>
      {children}
    </button>
  );
};

export default Button;
