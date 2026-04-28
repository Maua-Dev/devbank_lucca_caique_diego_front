import './App.css'
import Documentacao from './components/Documentacao/Documentacao'
import Topbar from './components/Topbar/Topbar'
import { Users } from './mock/User'


function App() {

    return (
        <>
            <Topbar user={Users.user1}>
                <Documentacao fixo={false} />
            </Topbar>
        </>
    )
}

export default App
