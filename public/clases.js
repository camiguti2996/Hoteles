
class Usuario{
    constructor(pCedula, pPrimernombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pCorreo, pContrasenna, pTipoUsuario){
        this.cedula = pCedula;
        this.primerNombre = pPrimernombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.correo = pCorreo;
        this.contrasenna = pContrasenna;
        this.tipoUsuario = pTipoUsuario;
    }

    getCedula(){
        return this.cedula;
    }

    getCorreo(){
        return this.correo;
    }

    getContrasenna(){
        return this.contrasenna;
    }

    getTipoUsuario(){
        return this.tipoUsuario;
    }

    setPrimerNombre(pNuevoPrimerNombre){
        this.primerNombre = pNuevoPrimerNombre;
    }

    setSegundoNombre(pNuevoSegundoNombre){
        this.segundoApellido = pNuevoSegundoNombre;
    }

    setPrimerApellido(pNuevoPrimerApellido){
        this.primerApellido = pNuevoPrimerApellido;
    }

    setSegundoApellido(pNuevoSegundoApellido){
        this.segundoApellido = pNuevoSegundoApellido;
    }
}

class Admin extends Usuario{
    constructor(pCedula, pPrimernombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pCorreo, pContrasenna, pTipoUsuario){
        super(pCedula, pPrimernombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pCorreo, pContrasenna, pTipoUsuario);
    }
    
}

class Cliente extends Usuario{
    constructor(pCedula, pPrimernombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pCorreo, pContrasenna, pTipoUsuario, pFechaNacimiento, pTelefono){
        super(pCedula, pPrimernombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pCorreo, pContrasenna, pTipoUsuario);
        this.fechaNacimiento = pFechaNacimiento;
        this.telefono = pTelefono
    }

    getTelefono(){
        return this.telefono;
    }

    getFechaNacimiento(){
        return this.fechaNacimiento;
    }

    setPhone(pNuevoTelefono){
        this.phone = pNuevoTelefono;
    }
}

class Hotel{
    constructor(){
        
    }
}