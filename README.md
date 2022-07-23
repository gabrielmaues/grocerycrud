# grocerycrud

Testando www.grocerycrud.com/v1.x/demo/bootstrap_theme com Cypress

Inicialmente, é necessário instalar o Cypress em sua máquina se ainda não tiver instaldo com o comando:

npm install cypress

Em seguida, copiar o projeto para máquina. Para executar o projeto pode-se usar o npx cypress open e clicar no escopo utilizado. Dessa forma pode acompanhar os casos de testes serem executados.

Há também a opção de executar os casos detestes sem acompanhá-los, verificando apenas se passaram ou falharam executando o comando: npx cypress run dessa forma também são geradas as evidências.

O projeto foi focado bastante no page objects para facilitar a atualização, de forma que o caso de teste fica apenas utilizando funções. Tais funções ficaram definidas em SignupPage.js dentro da pasta pages e a massa de teste em SignupFactory.js dentro da pasta factories.
