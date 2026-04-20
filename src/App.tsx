import './App.css'
import CardDocumentacao from './components/CardDocumentacao/CardDocumentacao'

function App() {

    return (
        <>
            <CardDocumentacao
            tipo='post'
            rota='/deposit'
            desc='Trata-se de um POST, são passados a quantidade de células, se não possuir 
a CHAVE daquele valor, a quantidade é 0. O valor deve ser depositado 
na conta do usuário. Caso o valor depositado seja o dobro da quantidade em conta
deve retornar o status code "403" (Forbidden) e uma string "Depósito suspeito".
Em casos convencionais retorna os seguintes valores: 

  current_balance [float] - valor atual na conta (após o depósito), 
  timestamp[float] - instante da operação em milissegundos' 
            response='{
        "current_balance": 1000.0,
        "timestamp": 1690482853890 
}'
            request='{
        "2": 1,
        "5": 2,
        "10": 3,
        "20": 4,
        "50": 5 ,
        "100": 6,
        "200": 7
}'>

            </CardDocumentacao>
        </>
    )
}

export default App
