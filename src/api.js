import axios from "axios"

const HttpClient = axios.create()

export const api = {
  fetchAnimals: () => HttpClient.get('/json/animals.json'),
  fetchFood: () => HttpClient.get('/json/food.json')
}