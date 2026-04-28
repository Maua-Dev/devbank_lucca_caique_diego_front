import { Button as ButtonAntd, ButtonProps } from 'antd';
import './BotaoHome.css';


const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonAntd className="botao" {...props}>
      {children}
    </ButtonAntd>
  );
};


export default Button;

