import './BotaoHome.css';

interface IBotaoHome {
  texto: string;
  onClick?: ()=> void; 
  id: string;
}

function BotaoHome({texto, onClick, id}: IBotaoHome){
  return (
    <button className='botaoHome' onClick={onClick} id={id}>{texto}</button>
  )
} 


export default BotaoHome;

