import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"




/*
const novoUser = new User('mariana', 'm@m.com', '2021-01-01')
console.log(novoUser.exibirInfos());

*/
const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
//console.log(novoAdmin.exibirInfos())
/*
console.log(novoAdmin.nome)
novoAdmin.nome = 'André melhor volante do brasil'
console.log(novoAdmin.nome)
console.log(novoAdmin.sobrenome)
*/

const novoDocente = new Docente('guilherme', 'g@g.com', '2021-01-01')
console.log(novoDocente.exibirInfos())