import { useEffect, useState } from 'react'
import { getAllPokemons } from '~/services/'
import { ApiResponse, PokemonList } from '~/types'

type State = {
  list: PokemonList, 
  error: string | null
}

export const usePokemons = (): State => {

  const [pokemonsResponse, setPokemonsResponse] = useState<State>({
    list: [],
    error: null
  })

  const getPokemonsFromApi = async () => {
    try {
      const result: ApiResponse = await getAllPokemons()
      if (!result) return
      const { data: list, error } = result
      setPokemonsResponse({ list, error })
    } catch (err) {
      if (err instanceof Error) {
        setPokemonsResponse({ list: [], error: err?.message })
      }
    }
  }

  useEffect(() => {
    getPokemonsFromApi()
  }, [])

  return pokemonsResponse
}
