import { seguranca } from './seguranca.js'


const valor = "faculdade senai"
const valorCriptografado = seguranca.criptografar(valor)
const valorDescriptografado = seguranca.descriptografar(valorCriptografado)

console.log(valorCriptografado)
console.log(valorDescriptografado)
