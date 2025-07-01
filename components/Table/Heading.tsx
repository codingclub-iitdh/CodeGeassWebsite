interface Props {
  headings: string[]
}

const Heading = ({ headings }: Props) => {
  return (
    <thead className='text-xs uppercase bg-slate-900 text-gray-400'>
      <tr key={'HEADING'}>
        {headings.map(heading => {
          return (
            <th scope='col' className='px-6 py-3 md:px-10' key={heading}>
              {heading}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Heading
