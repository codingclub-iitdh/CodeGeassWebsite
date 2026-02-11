import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'

interface Props {
  data_items: string[]
  index_row: number
  userType?: string
  onDelete: (index: number) => void // Callback function to remove the item from the UI
}

const IndividualCol = ({
  index_row,
  data_items,
  userType,
  onDelete,
}: Props) => {
  const handleDelete = async (itemId: any) => {
    console.log(itemId)
    try {
      await axios.delete(`/api/admin/members?id=${itemId}`)
      // Handle success (e.g., remove the item from the UI)
      onDelete(index_row) // Call the onDelete callback to remove the item from the UI
    } catch (error) {
      console.error('Error deleting member:', error)
      // Handle error (e.g., show an error message)
    }
  }

  return (
    <tr
      className={`border-b bg-gray-800 odd:bg-gray-500 even:bg-gray-400`}
      key={index_row}
    >
      {data_items.map((item, index) => {
        if (index === 0) {
          return (
            <th
              scope='row'
              className='px-6 py-4 md:px-10 font-medium text-white whitespace-nowrap'
              key={index}
            >
              {item}
            </th>
          )
        }
        if (index === 3 && userType === 'admin') {
          return (
            <td className='px-6 py-4 md:px-10' key={index}>
              <DeleteIcon onClick={() => handleDelete(item)} />
            </td>
          )
        }
        return (
          <td className='px-6 py-4 md:px-10' key={index}>
            {item}
          </td>
        )
      })}
    </tr>
  )
}

export default IndividualCol
