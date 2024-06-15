import { Layout } from 'antd'
import { PokeTable } from '../PokeTable'
import { usePokemons } from '~/hooks'

type Error = { msg: string }

const ErrorMsg = ({ msg }: Error) => <p>{ msg }</p>

export const MainContent = () => {
  const { list, error } = usePokemons()

  return (
    <Layout.Content>
      {
        error 
          ? <ErrorMsg msg={ error } /> 
          : <PokeTable list={ list } />
      }
    </Layout.Content>
  )
}