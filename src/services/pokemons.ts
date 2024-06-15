import { type ApiResponse } from '~/types'

export const apiResponse = (
  data: ApiResponse['data'], 
  error: ApiResponse['error']
): ApiResponse => ({
  data,
  error
})

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getAllPokemons = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL)
    const res = await response.json()
    return apiResponse(res?.results, null)
  } catch (err) {
    throw(err)
  }
}
