<!-- Design System -->
Vários projetos dentro de um nico reposit´rio de código (mesma pasta, espaçop detaablho, com varios projetos) 
o grande pont oé usar a estratégia com projetos dependentes entre si    


<!-- Dependências extenas: -->
o '--external react' abaixo indica que o script usara o react externo, ou seja, temos um react já instalado nesse package.json, mas quando o usuário usar o design system, ele já vai ter seu próprio react instalado em sua própria aplicação, por isso mantemos como external, para usar o react do usuário. Pelo mesmo motivo, instalamos o react e suas tipagens ao fazer um design system como dependência de desenvolvimento, pois o usuário dos componentes já vai ter o react instalado, não vamos duplicá-lo.
 "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts --external react",
 }

 <!-- peer dependencies -->

dependências que colocavámos dentro de um pacote, que eram obrigatórias, mas não eram instaladas no momento que o pacote era instalado, fazendo com que o usuário tivesse que instalar no projeto. Não são mais suportadas, então hoje em dia instalamos como dependências comuns mesmo, ao invés de peer dependencies

<!-- Polished -->
Biblioteca para manipulação de cores
com a função abaixo, por exemplo, podemos criar um contraste baseado na cor original. temos o color que tem uma cor e o #fff que é o que desejamos que seja a cor do texto. Se o contraste for menor que 3.5, eu mudo para preto a cor, senão, mantenho branca mesmo. baseado no nivel de contraste das duas cores passadas como parâmetro, faço a função.
color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',

<!-- Update -->
1. Npm run changeset
2. Npm run version-packages
3. Git add . + git commit + git push
- não deve rodr o build da pasta DOCS.