import React from 'react'
import {booksData} from '../data/books'
const Books = () => {
    const firstFiveBooks = booksData.slice(0,5);
  return (
    <>
<h2>Books</h2>
<div className='proSection'>
  {firstFiveBooks.map((ev)=>{
    return(
        <div className='imgBox'>
            <img className='proImage' src={ev.image} alt="book" />
        </div>
    )
  })}
    </div>

</>
  )
}

export default Books;