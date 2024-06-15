import { Table } from 'antd'
import { PokemonList } from '~/types'
import { tableColumns } from './tableColumns'

type Props = {
  list: PokemonList
}

export const PokeTable: React.FC<Props> = ({ list }) => (
  <Table 
    rowKey='name' 
    columns={ tableColumns } 
    dataSource={ list } 
  />
)
