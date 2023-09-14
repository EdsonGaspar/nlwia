/*Criando a conexão no back end da aplicalção, com a biblioteca axios*/
import axios from "axios"

export const server = axios.create({
  baseURL: "http://localhost:3333",
})
