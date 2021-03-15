import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import News from './components/News'
import BaseSkeleton from './components/BaseSkeleton'
import { Alert } from 'react-bootstrap'

function App() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.REACT_APP_NEWS_API}`
        )
        setNews(data.articles)
      } catch (error) {
        setError(error.response.data.message)
      }
      setLoading(false)
    }
    getData()
  }, [setLoading])

  const getValue = (e) => {
    const val = e.target.value

    setLoading(true)
    const getDataByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/everything?q=${val}&apiKey=${process.env.REACT_APP_NEWS_API}`
        )
        setNews(data.articles)
      } catch (error) {
        setError(error.response.data.message)
      }
      setLoading(false)
    }
    getDataByCategory()
  }

  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='/' className='navbar-brand mx-auto'>
          <img
            className='d-inline-block mr-2'
            src='./logo192.png'
            alt='Logo'
            width='30'
            height='30'
          />
          Wegonews
        </a>
      </nav>
      <main className='content bg-light'>
        <Navbar onClick={(val) => getValue(val)} />
        {error && (
          <Alert variant='danger'>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        )}
        {loading && <BaseSkeleton />}
        {!loading && <News news={news} />}
      </main>
    </div>
  )
}

export default App
