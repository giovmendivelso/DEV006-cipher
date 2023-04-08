const cipher = {
  encode: function (texto, desplazamiento) {
    if (!texto && !desplazamiento){
      throw new TypeError ("error no hay texto ingresado"); }
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /*const letras = "abcdefghijklmnopqrstuvwxyz";*/
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);

  },



  decode: function (texto, desplazamiento) {
    if (!texto && !desplazamiento){
      throw new TypeError ("error no hay texto ingresado"); }
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /*const letras = "abcdefghijklmnopqrstuvwxyz";*/
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
  }
 
};
export default cipher;