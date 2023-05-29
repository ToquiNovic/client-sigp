import axios from "axios"

export const getCategories = async () => {
  try {
    return (await axios.get('/api/category')).data
  } catch (error) {
    throw new Error('Error en el sercvidor!')
  }
}