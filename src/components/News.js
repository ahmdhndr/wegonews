import Article from './Article'

const News = ({ news }) => {
  return (
    <div className='news-container'>
      {news.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  )
}

export default News
