
type props = {
  label: string;
  styles?: string;
  bordered?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};
const Button = ({
  label,
  styles,
  bordered,
  onClick,
  disabled,
}: props) => {
  return (
    <button
      className={`justify-center items-center inline-flex ${
        !!bordered
          ? "border border-purple-800 bg-white rounded"
          : "bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg"
      } ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
