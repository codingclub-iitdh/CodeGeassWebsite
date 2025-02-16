import { NextPage } from 'next'
import styles from './page.module.css'
import FAQ from '@/components/Members/FAQ'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <div className={styles.membersWrapper}>
        <FAQ />
      </div>
    </>
  )
}

export default Page
