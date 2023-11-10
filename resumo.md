Parcel é um automatizador de tarefa que auxilia na construção e na configuração das tarefas automaticamente, diferente do gulp e do grunt.

* Configuração do Parcel:

    1 - Iniciar m projeto NODE:
        - npm init --yes

    2 - Instalar Parcel :
        - npm install --save-dev parcel

    3 - Montar estrutura do ambiente de trabalho
        - pasta src, styles e scripts e seus respectivos main.*
    
    4 - Criar Script para o Parcel
        - "dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js"

Ao executar npm run dev, ele cria a pasta dist, onde ficam os arquivos finais. Não a ha necessidade de usar o LIVE SERVER, pois o Parcel tem HOT-reloaded, ou seja, ele ja executa no navegar automaticamente.
    
    5 - Fazer Comprensão das imagens
        - Criar arquivo chamado sharp.config.json e dentro dele escrever:

        {
            "png": {
                "quality": 75
            }
        }
Quando rodar npm run dev, o sharp será instalado.
O Parcel trabalha sobre demanda, ele só vai comprimir as imagens que de fato estão sendo usadas no projeto.
Para importar o SASS através do parcel, não precisamos compilar o SASS, no proprio arquivo HTML podemos apontar direto para o SASS.

<link rel="stylesheet" href="styles/main.scss">


* Usar Biblioteca AOS para animação no CSS

Acessar https://michalsnik.github.io/aos/, clique no icone do github, que fica no canto superior esquerda, vá para baixo na tela até "Instação" e copie o link do CSS   <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />;
Cole este link na heade do HTML.

E para o JS, copie apenas a primeira linha antes de fechar </body>:

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>

No arquivo main.js, colar "AOS.init();" para inicializar o AOS.

Para usar esta biblioteca, precisamos adicionar um atributo data-aos="animação", como data-aos="fade-left".

* Preparar para subir na VERCEL:

Criar um escript para fazer a construção do build de nossa aplicação na VERCEL
Em package.json, em scripts, criar :
    -   "build": "parcel build src/index.html", //passar aquivo inicial (index.html)

    Os demais arquivos o PARCEL indentifica as dependencias do arquivo inicial e ja prepara altomaticamente a compilação, minificação .....

Depois de fazer o script para buildar a aplicação, remover o "main":"index.js", , sem isso, o PARCEL não funiona.

Rodar no npm run build, comitar e subir na VERCEL.

* Observações do JS

