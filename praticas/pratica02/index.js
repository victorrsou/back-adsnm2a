const readline = require("readline-sync");

const contatoControlador = require("./controlador");

function menu() {
    console.log("1. Adicionar Contato. ");
    console.log("2. Listar Contatos. ");
    console.log("3. Buscar Contato. ");
    console.log("4. Atualizar Contato. ");
    console.log("5. Remover Contato. ");
    console.log("6. Sair. ");
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case "1":
            const nomeAdicionar = readline.question("Digite o nome do contato para adicionar: ");
            const emailAdicionar = readline.question("Digite o email do contato para adicionar: ");
            const telefoneAdicionar = readline.question("Digite o telefone do contato para adicionar: ");
            contatoControlador.adicionarContato(nomeAdicionar, emailAdicionar, telefoneAdicionar);
            break;
        case "2":
            const contatos = contatoControlador.listarContatos();       
            contatos.forEach((contato) => console.log(contato));          
            break;
        case "3":
            const nomeBuscar = readline.question("Digite o nome do contato para buscar: ");
            const busca = contatoControlador.buscarContato(nomeBuscar);
            if (busca) {
                console.log(busca)
            } else {
                console.log("Contato não encontrado. ")
            };
            break;
        case "4":
            const nomeAtualizar = readline.question("Digite o nome do contato para atualizar: ");
            const emailAtualizar = readline.question("Digite o email do contato para atualizar: ");
            const telefoneAtualizar = readline.question("Digite o telefone do contato para atualizar: ");
            contatoControlador.atualizarContato(nomeAtualizar, emailAtualizar, telefoneAtualizar);
            break;
        case "5":
            const nomeRemover = readline.question("Digite o nome do contato para remover: ")
            contatoControlador.removerContato(nomeRemover)
            break;
        case "6":
            process.exit()
            break;
    }
}

function main() {
    while(true) {
        menu();
        const opcaoEscolha = readline.question("Digite a opcao que deseja realizar: ");
        escolherOpcao(opcaoEscolha);
    }
}

main()