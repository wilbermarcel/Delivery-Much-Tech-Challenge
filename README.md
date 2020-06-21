# 
# Desafio = 'Delivery Much Tech Challenge'
 <a href="https://github.com/delivery-much/challenge">Link do Desafio</a>
 
 ## O Desafio

Você deve construir uma API que recebe ingredientes como parâmetro de entrada em uma chamada GET e retorna uma lista de receitas.
Utilize as APIs públicas da RecipePuppy (http://www.recipepuppy.com/about/api/) e da Giphy (https://developers.giphy.com/docs/) para obter os dados necessários.

A API deve receber como parâmetro um conjunto de ingredientes (máximo 3) e deve retornar os itens utilizados para realizar a busca; e uma lista de receitas.

Cada item lista de receitas deve possuir 4 atributos:
- Título da receitam;
- Lista de ingredientes;
- Link para acessar a receita;
- Link de um gif para a receita.


#### A Estrutura

A API possui apenas um endpoint, que deve respeitar a seguinte chamada:

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

Exemplo:

`http://127.0.0.1/recipes/?i=onion,tomato`


A resposta dessa requisição deve seguir a seguinte estrutura:

```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```

## Tecnologias utilizadas
<p align="center">
  <a href="https://nodejs.org/de/docs/guides/nodejs-docker-webapp/">
    <img
      alt="Docker/Nnode"
      src="https://hasura.io/blog/content/images/downloaded_images/an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-bbee6bd2f3c4/1-4KhmpXFJ_Etczs6awRnAbg.png"
      width="400"
    />
  </a>
</p>


# Utilizando a API

## Github
  Faça um clone do projeto para sua máquina

## Docker
  Como a API está para rodar localmente e o projeto foi dockerizado, primeiro vamos criar nosso container.
  
  Acesse a pasta do projeto com o Docker (pois vamos localizar o arquivo Dockerfile)
  
  Em seguida rodar alguns comandos para realizar o build e rodar nosso container
    
    docker build -t <nome_do_usuario>/dockernode .
    
    //Configurei para quando a porta 3000 for acessado no navegador ele irá chamar a porta 3000 no container
    docker run -p 3000:3000 -d <nome_do_usuario>/dockernode
  
## Navegador / Insonmia
  Realizado os passos acima, basta começar usufruir da API pelo navegador ou utilizar alguma ferramente de requisições como o Insomnia.

Criei 3 requisições(GET) para ilustrar seu uso, acesse clicando no botão abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Delivery%20Much%20Tech%20Challenge&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fwilbermarcel%2FDelivery-Much-Tech-Challenge%2Fmaster%2FInsomniaExport.json)
  
