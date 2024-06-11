import Nav from './Components/Nav'
import Input from './Components/Input'
import Maindiv from './Components/Maindiv'
import { Provider } from 'react-redux';
import Store from './Components/Redux/Store';
import './App.css'

function App() {
 

  return (
    <>
    <Provider store={Store}>
     <Nav/>
     <Input/>
     <Maindiv/>
     </Provider>
    </>
  )
}

export default App
