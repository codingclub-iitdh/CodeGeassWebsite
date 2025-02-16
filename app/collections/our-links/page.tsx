import { NextPage } from 'next'
import styles from './page.module.css'
import OurLinks from '@/components/Collections/OurLinks'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <div className={styles.membersWrapper}>
        <OurLinks />
      </div>
    </>
  )
}

export default Page
