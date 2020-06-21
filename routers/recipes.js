import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

const consumeAPIRecipePuppy = async (recipes) => {
  let json = await fetch(`http://www.recipepuppy.com/api/?i=${recipes}`)
  json = await json.json()

  json = await json.results.map(({ title, ingredients, href }) => {
    const arrayIngredients = ingredients.split(',')
    arrayIngredients.forEach((element, index) => {
      arrayIngredients[index] = element.trim()
    })
    return {
      title: title.trim(),
      ingredients: arrayIngredients.sort(),
      link: href,
      gif: ''
    }
  })
  return json
}

const consumeAPIGiphy = async (jsonRecipePuppy) => {
  const myKey = 'Ahet3E2vaibqFtG84uTxcFvHWhRKDOiR'
  for await (const element of jsonRecipePuppy) {
    let jsonGiphy = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${element.title}&api_key=${myKey}&limit=1`
    )
    jsonGiphy = await jsonGiphy.json()
    if (jsonGiphy.data !== undefined) {
      element.gif = jsonGiphy.data[0].images.fixed_height.url.split('?')[0]
    }
  }
  return jsonRecipePuppy
}

router.get('/:i?', async (req, res) => {
  try {
    const recipes = req.query.i.split(',')
    if (recipes.length > 3) { throw new Error('Maximum number of ingredients exceeded') }
    const jsonRecipePuppy = await consumeAPIRecipePuppy(req.query.i)
    const jsonMerged = await consumeAPIGiphy(jsonRecipePuppy)
    const jsonReturn = {
      keywords: recipes,
      recipies: jsonMerged
    }
    res.send(jsonReturn)
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
})

export default router
