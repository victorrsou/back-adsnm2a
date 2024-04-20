// Em uma pequena loja que vende cartuchos de impressora, um cliente solicita o produto desejado a um vendedor não comissionado que verifica se o mesmo faz parte do cadastro da loja. Em caso negativo, cadastra-o solicitando nome, endereço completo (logradouro, número, complemento, bairro, cidade, estado e CEP), telefone, endereço eletrônico, CPF e RG (se pessoa física) ou CNPJ e Inscrição Estadual (se pessoa jurídica). Em seguida, o vendedor registra o pedido, emite a nota fiscal, recebe o pagamento do cliente e entrega os produtos. Os pedidos também podem ser feitos via telefone, quando, na entrega do produto, o cliente recebe a nota fiscal, cujo canhoto assina e devolve para o entregador e efetua o pagamento.
// Quando o vendedor emite o pedido, este é enviado para um segundo funcionário, o almoxarife, que separa o produto e registra a quantidade vendida. Um detalhe importante é que, a cada saída, o saldo em estoque é verificado e comparado com uma quantidade mínima permitida para cada produto: se o saldo for inferior, ele preenche uma ordem de compra especificando o produto e a quantidade necessária, enviando-a para um fornecedor. Por ocasião da entrega, o almoxarife confere o produto com a nota fiscal de fornecedor e armazena-o, registrando a entrada e atualizando o saldo de estoque. O almoxarife também é responsável pela inclusão e atualização dos dados dos produtos (código, descrição, modelo e marca de impressora, fornecedores e código do produto em cada fornecedor, cor e data da última atualização da ficha, preço de venda e a quantidade mínima em estoque). Semanalmente, o almoxarife efetua a contagem de todos os produtos do estoque e compara com as quantidades esperadas - eventuais diferenças devem ser lançadas nas fichas dos produtos.

// ENTIDADE: PRODUTO,
// ATRIBUTOS: codigo, descricao, modelo, marcaImpressora, fornecedor, codigoProd, cor , dataAtualizacao, precoVenda, qtdAtual, qtdMin, saldo

// ENTIDADE: CLIENTE,
// ATRIBUTOS: nome, endereco, telefone, email, cpf, rg, cnpj, inscEstadual

// ENTIDADE: PEDIDO,
// ATRIBUTOS: produto, qtd 

// ENTIDADES: ORDEM_COMPRA
// ATRIBUTOS: produto, qtd







