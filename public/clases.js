
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

class Hotel{
    constructor(pIdHotel, pNombreHotel, pFoto, pLatitud, pLongitud, pProvincia, pCanton, pDistrito, pDireccion, pTelefonoSC, pCorreoSC, pCorreoReserv, pTelefonoReserv){
        this.idHotel = pIdHotel;
        this.nombreHotel = pNombreHotel;
        this.foto = pFoto;
        this.latitud = pLatitud;
        this.longitud = pLongitud;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccion = pDireccion;
        this.telefonoSC = pTelefonoSC;
        this.correoSC = pCorreoSC;
        this.telefonoReserv = pTelefonoReserv;
        this.correoReserv = pCorreoReserv;
    }

    getIdHotel() {
        return this.idHotel;
    }

    getNombreHotel() {
        return this.nombreHotel;
    }

    getFoto() {
        return this.foto;
    }

    getLoacalizacionMapa() {
        return `${this.latitud}, ${this.longitud}`;
    }

    getProvincia() {
        return this.provincia;
    }

    getCanton() {
        return this.canton;
    }

    getDistrito() {
        return this.distrito;
    }

    getDireccion() {
        return this.direccion;
    }

    getTelefonoSC() {
        return this.telefonoSC;
    }

    getCorreoSC() {
        return this.correoSC;
    }

    getTelefonoReserv() {
        return this.telefonoReserv;
    }

    getCorreoReserv() {
        return this.correoReserv;
    }

    //SETS

    setNombreHotel(pnuevoNombre) {
        this.nombreHotel = pnuevoNombre;
    }

    setFoto(pnewphoto) {
        this.foto = pnewphoto;
    }

    setLatitud(pnuevaLatitud) {
        this.latitud = pnuevaLatitud;
    }

    setLongitus(pnuevaLongitud) {
        this.longitud = pnuevaLongitud;
    }

    setProvincia(pnuevaProvincia) {
        this.provincia = pnuevaProvincia;
    }

    setCanton(pnuevoCanton) {
        this.canton = pnuevoCanton;
    }

    setDistrito(pnuevoDsistrito) {
        this.distrito = pnuevoDsistrito;
    }

    setDireccion(pnuevaDireccion) {
        this.direccion = pnuevaDireccion;
    }

    getTelefonoSC(pnuevoTelefonoSC) {
        this.telefonoSC = pnuevoTelefonoSC;
    }

    getCorreoSC(pnuevoCorreoSC) {
        this.correoSC = pnuevoCorreoSC;
    }

    getTelefonoReserv(pnuevoTelefonoReserv) {
        this.telefonoReserv = pnuevoTelefonoReserv;
    }

    getCorreoReserv(pnuevoCorreoReserv) {
        this.correoReserv = pnuevoCorreoReserv;
    }

}