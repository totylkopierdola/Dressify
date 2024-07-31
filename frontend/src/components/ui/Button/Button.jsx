import "./Button.css";

const Button = ({ children, arrow }) => {
  return (
    <button>
      {children}
      <div className="arrow-wrapper">{arrow && <div class="arrow"></div>}</div>
    </button>
  );
};

export default Button;
