import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Formulario from './components/Formulario';
import Boton from './components/Boton';


function App() {
  
  const [passCorrecto, SetPassCorrecta] = useState("");
  const clickBtn = passCorrecto ==="252525";

  return (
    <div className="App">
       <Formulario 
        passCorrecto = {passCorrecto}
        SetPassCorrecta = {SetPassCorrecta}
       
       />
      <Boton clickBtn = {clickBtn} />
    </div>
     
  );
}

export default App;
