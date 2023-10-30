# Convite Online

Este projeto tem como objetivo criar um site em formato de convite online para os convidados visitar e confirma presença.

- [x] Deve ter informações da festa como: dia, horario, local (google maps).
- [x] Deve ter fotos do aniversariante (carrossel)
- [ ] Deve ter sugestões de presente
- [ ] Deve ter possibilidade de incluir depoimento ao aniversariante (deve ser permitido pelo administrador)
- [x] Pode ser confirmado presença pelo site e modificado até a data determinada
- [ ] Talves adicionar opção de Video e musica
- [ ] Implementar testes

## Escopo do Projeto

- [x] Projeto criado em Angular
- [x] Inicialmente o projeto deve usar o API fake com informações do salva no json-server e depois alterado por um API.
    - [x] Integração com API.
    - [ ] Remover json-server.
- [x] Ao confirma presença ou não deve ser salvo em LocalStore as alterações.
- [ ] Depois da primeira versão incluir temas customizados.
- [ ] Hospedar na AWS o site.
    - [x] Criar bucket stefanodev-convite-online para hospedar o site API
    - [ ] Criar CodeBuild monitorando repositorio do github para fazer o build e joga no S3 toda vez que tem um push na 'main'
    - [ ] Criar CloudFront para servir o site hospedado no S3

## TODO
- [ ] Corrigir erro ao carregar url do google maps no iframe vindo da API.
