export interface Pokemon {
  name: string
  url: string
}

export type PokemonList = Pokemon[]

export interface ApiResponse {
  data: PokemonList
  error: string | null
}
