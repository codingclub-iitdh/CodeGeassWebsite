import Loading from '@/components/Loading/Loading'
import Heading from './Heading'
import IndividualCol from './IndividualCol'
import styles from './InfoTable.module.css'

interface Props {
  table_heading: string
  headings: string[]
  row_data: string[][]
  setRowData: ((data: string[][]) => void) | null
  userType?: string
}

const InfoTable = ({
  table_heading,
  headings,
  row_data,
  setRowData,
  userType,
}: Props) => {
  const handleDelete = (indexToDelete: any) => {
    if (setRowData !== null) {
      const updatedRowData = [...row_data]
      updatedRowData.splice(indexToDelete, 1)
      setRowData(updatedRowData)
    }
  }
  return (
    <>
      <div className={styles.headingWrapper}>
        <div className={styles.text_block}>{table_heading}</div>
      </div>
      <div className='flex justify-center bg-transparent'>
        <div className='relative overflow-x-auto shadow-md px-4'>
          <div className={styles.tableWrapper}>
            <table className='w-full text-sm text-left text-white-900'>
              <Heading headings={headings} />
              {row_data ? (
                <tbody>
                  {row_data.map((row, index) => {
                    return (
                      <IndividualCol
                        key={index}
                        data_items={row}
                        index_row={index}
                        userType={userType}
                        onDelete={() => handleDelete(index)}
                      />
                    )
                  })}
                </tbody>
              ) : (
                <Loading />
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoTable
