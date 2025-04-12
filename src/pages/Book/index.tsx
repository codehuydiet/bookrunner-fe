import React, { use, useEffect, useState } from 'react'
import BookDetails from './components/BookDetail'
import TagList from './components/TagList'
import { useParams } from 'react-router-dom'
import { BookData } from '../../types/auth'

const Book = () => {
  const { id } = useParams()
  const [book, setBook] = useState<BookData>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8888/api/books/${id}`)
      const data = await response.json()
      setBook(data)
      console.log(data);

    }
    fetchData()
  }, [])
  return (
    <div className=" mx-auto p-6">
      {
        book && (
          <BookDetails book={book} />
        )
      }
    </div>
  )
}

export default Book