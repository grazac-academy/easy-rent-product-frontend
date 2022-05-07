import './Button.css';
const Button = ({ children, onclick }) => {
  return (
    // <div className={'button'}>
    <button onClick={onclick} className={'search_button'}>
      {children}
    </button>
    // </div>
  );
};

export default Button;
