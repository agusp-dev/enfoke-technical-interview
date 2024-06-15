import { Layout } from 'antd'
import styles from './MainContainer.module.css'

export const MainContainer = () => {
  return (
    <Layout style={{ height: '100vh', backgroundColor: 'red' }}>
      <Layout.Header className={ styles.title }>
        This is a Header
      </Layout.Header>
      <Layout.Content>
        This is a Content
      </Layout.Content>
      <Layout.Footer>
        This is a Footer
      </Layout.Footer>
    </Layout>
  )
}
