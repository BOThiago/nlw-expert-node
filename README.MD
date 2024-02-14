Desafio backend da trilha de Node - NLW 2024 da Rocketseat

-   API Node de registro, consulta e contagem de votos de enquetes;

-   Rotas

    \* POST `polls` - Para a criação de uma enquete:
    exemplo: `body`: `{ "title": "Título da enquete", "options": ["Opção 1", "Opção 2", "Opção 3", "Opção 4"] }`

    \*GET `polls/:pollId` - Buscar enquete por ID

    \*POST `post/:pollId/votes` - Rota para votar em uma opção da enquete:
    exemplo: `body`: `{ "pollOptionId": "25a8d4b8-6ff1-464c-b51f-2d13bb3a8f66" }`

    \*WS `post/:pollId/results` - Rota no protocolo websocket para contagem de votos em tempo real
