import { Layout, Typography } from 'antd'
import styles from './Title.module.css'

type Props = {
  text: string
}

export const Title: React.FC<Props> = ({ text }) => (
  <Layout.Header className={ styles.header }>
    <Typography.Title className={ styles.title }>
      { text }
    </Typography.Title>
  </Layout.Header>
)
