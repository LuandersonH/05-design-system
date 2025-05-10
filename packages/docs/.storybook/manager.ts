// .storybook/manager.js
import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

// Personalizando o tema global do Storybook
addons.setConfig({
  theme: themes.dark,
})

// Exemplo de adicionar fontes diretamente no manager.js
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&italic=true&display=swap'
document.head.appendChild(link)
