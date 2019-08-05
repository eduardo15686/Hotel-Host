/*export interface UserInterface{
    id?: string;
    nombre?: string;
    apellido?: string;
    correo?: string;
    usuario?: string;
    telefono?: string;
    contrasena?: string;
    tipo_usuario?: string;
}*/
const bcrypt = require ('bcrypt');
const usuarioSchema = new usuarioSchema({
    id?: string,
    nombre?: string,
    apellido?: string,
    correo?: string,
    usuario?: string,
    telefono?: string,
    contrasena?: string,
    tipo_usuario?: string
})

usuarioSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts =>{
        bcrypt.hash(this.contrasena,salts).then(hash => {
            this.contrasena = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
})
