<!-- Design System -->
Vários projetos dentro de um nico reposit´rio de código (mesma pasta, espaçop detaablho, com varios projetos) 
o grande pont oé usar a estratégia com projetos dependentes entre si    


<!-- Dependências extenas: -->
o '--external react' abaixo indica que o script usara o react externo, ou seja, temos um react já instalado nesse package.json, mas quando o usuário usar o design system, ele já vai ter seu próprio react instalado em sua própria aplicação, por isso mantemos como external, para usar o react do usuário. Pelo mesmo motivo, instalamos o react e suas tipagens ao fazer um design system como dependência de desenvolvimento, pois o usuário dos componentes já vai ter o react instalado, não vamos duplicá-lo.
 "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts --external react",
 }