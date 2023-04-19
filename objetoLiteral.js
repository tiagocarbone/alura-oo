const user = {

    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }

}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2021/01/01",
    role: "admin",
    criarCurso() {
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admin, user)  // admin herda metodo de user 


admin.criarCurso()
admin.exibirInfos()





/*

user.exibirInfos()

const exibir = function() {
    console.log(this.nome)
}
exibir()


const exibirNome = exibir.bind(user)

exibirNome()
*/