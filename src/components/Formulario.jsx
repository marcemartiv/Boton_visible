
const Formulario = ({passCorrecto, SetPassCorrecta}) => {
        return (
            <div>
                <h2>Desafio estado y eventos</h2>
        <form>
            <div className="form-group">
            <input className="form-control" name="Nombre" placeholder="Nombre"/>
        
        
            </div>
        <br></br>
        <div className="form-group">
            <input className="form-control"
             name="Nombre" type="password"
              placeholder="Contraseña"
              value={passCorrecto} onChange={(e)=> SetPassCorrecta(e.target.value)}/>
   
       
      
        </div>
        </form>
        </div>
    )
    }
    export default Formulario

