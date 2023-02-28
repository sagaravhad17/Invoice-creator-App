import React from 'react'

const Dates = ({invoiceNumber, invoiceDate, dueDate}) => {
  return (
    <>
      <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoicer number:</span><span> {invoiceNumber}</span>
            </li>
            <li className='bg-gray-100'>
              <span className="font-bold">Invoice date:</span><span> {invoiceDate}</span>
            </li>
            <li>
              <span className="font-bold">Due date:</span><span> {dueDate}</span>
            </li>
          </ul>
        </article>
    </>
  )
}

export default Dates
