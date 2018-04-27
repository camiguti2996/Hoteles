
class Usuario{
    constructor(pCedula, pPrimernombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pCorreo, pContrasenna, pTipoUsuario){
        this._id = 0;
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

    getNombreCompleto() {
        return `${this.primerNombre} ${this.segundoNombre} ${this.primerApellido} ${this.segundoApellido}`;
    }

    getNombre(){
        return  `${this.primerNombre} ${this.primerApellido}`;
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

    //SETS

    setId(pId) {
        this._id = pId;
      }
      
    setPrimerNombre(pNuevoPrimerNombre){
        this.primerNombre = pNuevoPrimerNombre;
    }

    setSegundoNombre(pNuevoSegundoNombre){
        this.segundoNombre = pNuevoSegundoNombre;
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
        this.telefono = pTelefono;
    }

    getTelefono(){
        return this.telefono;
    }

    getFechaNacimiento(){
        return this.fechaNacimiento;
    }

    //SETS
    setFechaNacimiento(pNuevaFechaNacimiento){
        this.fechaNacimiento = pNuevaFechaNacimiento;
    }

    setPhone(pNuevoTelefono){
        this.phone = pNuevoTelefono;
    }
}

class Hotel {
    constructor(pid, ptipoHotel, pnombreHotel, pfoto, platitud, plongitud, pprovincia, pcanton, pdistrito, pdireccion, ptelefonoSC, pcorreoSC, ptelefonoReserv, pcorreoReserv) {
        this._id = pid;
        this.nombreHotel = pnombreHotel;
        this.foto = pfoto;
        this.latitud = platitud;
        this.longitud = plongitud;
        this.provincia = pprovincia;
        this.canton = pcanton;
        this.distrito = pdistrito;
        this.direccion = pdireccion;
        this.telefono = ptelefonoSC;
        this.correoSC = pcorreoSC;
        this.telefonoReserv = ptelefonoReserv;
        this.correoReserv = pcorreoReserv;
    }

    getId() {
        return this._id;
    }

    getFoto(){
        return this.foto;
    }

    getNombreHotel() {
        return this.nombreHotel;
    }

    getMapLocation() {
        return `$(this.latitud), $(this.longitud)`;
    }

    getProvincia() {
        return JSON.parse(this.provincia);
    }

    getCanton() {
        return JSON.parse(this.canton);
    }

    getDistrito() {
        return JSON.parse(this.distrito);
    }

    getDireccion() {
        return this.direccion;
    }

    getTelefonoServicio() {
        return this.telefono;
    }

    getCorreoServicio() {
        return this.correoSC;
    }

    getTelefonoReservacion() {
        return this.telefonoReserv;
    }

    getCorreoReservacion() {
        return this.correoReserv;
    }

    setNombreHotel(pnuevoNombreHotel) {
        this.name = pNuevoNombreHotel;
    }

    setLatitud(pnuevolatitud) {
        this.latitud = pnuevolatitud;
    }

    setLongitud(pnuevolongitud) {
        this.longitud = pnuevolongitud;
    }

    setProvincia(pnuevoprovincia) {
        this.provincia = pnuevoprovincia;
    }

    setCanton(pnuevoCanton) {
        this.canton = pnuevoCanton;
    }

    setDistrito(pnuevoDistrito) {
        this.distrito = pnuevoDistrito;
    }

    setDireccion() {
        this.direccion = pnuevaDirección;
    }

    setTelefonoServicio(pnuevoTelefonoSC) {
        this.telefonoServicioCliente = pnuevoTelefonoSC;
    }

    setCorreoServicio(pnuevoCorreoSC) {
        this.correoServicioCliente = pnuevoCorreoSC;
    }

    setTelefonoReservaciones(pnuevoTelefonoReservaciones) {
        this.telefonoReservacion = pnuevoTelefonoReservaciones;
    }

    setCorreoReservaciones() {
        this.correoReservacion = pnuevoCorreoReservaciones;
    }

}