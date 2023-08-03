import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const TopicsList = () => {
  return (
    <>
      <div className='p-4 my-3 flex justify-between gap-5 border-slate-950'>
          <div>
            <h2>Topic Title</h2>
            <div>Topic Description</div>
          </div>

          <div>
            <RemoveBtn/>
            <Link href={'/editTopic/123'}>
              <HiPencilAlt size={24} color='#000'/>
            </Link>
          </div>
      </div>
    </>
  )
}

export default TopicsList