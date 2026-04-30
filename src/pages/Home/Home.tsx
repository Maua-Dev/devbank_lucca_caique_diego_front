import { Users } from '../../mock/User'
import BotaoHome from '../../components/BotaoHome/BotaoHome'
import Topbar from '../../components/Topbar/Topbar'
import InputAPI from '../../components/InputAPI/InputAPI'
import CardSaldo from '../../components/CardSaldo/CardSaldo'
import Documentacao from '../../components/Documentacao/Documentacao'
import { useNavigate } from 'react-router'
import { FaPencilAlt } from 'react-icons/fa'
import './Home.css'

export default function Home() {
    const navigate = useNavigate()
    const saldo: number = Number(localStorage.getItem("saldo"))
    return (
        <div className='containerHome'>
            <Topbar user={Users.user1}><Documentacao fixo={false} /></Topbar>
            <div className='containerSaldo'>
                <CardSaldo boxSide='right' texto='O que você deseja fazer?' saldo={saldo}></CardSaldo>
            </div>
            <div className='containerBotoes'>
                <BotaoHome texto='Depositar' id='1' onClick={() => navigate('/depositar')}></BotaoHome>
                <BotaoHome texto='Sacar' id='2' onClick={() => navigate('/sacar')} ></BotaoHome>
                <BotaoHome texto='Transações' id='3' onClick={() => navigate('/transacoes')}></BotaoHome>
            </div>
            <div className='containerInput'>
                <InputAPI value='https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws/' onChange={() => { }} readOnly={true}> <FaPencilAlt ></FaPencilAlt></InputAPI>
            </div>
        </div>

    )
}