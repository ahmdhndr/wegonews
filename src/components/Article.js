import { Card } from 'react-bootstrap'

const Article = ({ article }) => {
  return (
    <Card className='mb-4'>
      <Card.Img variant='top' src={article.urlToImage} alt={article.title} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className='text-muted mb-0'>
          {article.publishedAt.substring(0, 10)}
        </Card.Text>
        <Card.Text className='text-muted mb-0'>
          Author: {article.author}
        </Card.Text>
        <Card.Text className='text-muted'>
          Source: {article.source.name}
        </Card.Text>
        <Card.Text>{article.description}</Card.Text>
        <div className='text-right'>
          <a
            className='btn btn-outline-dark text-right'
            rel='noreferrer'
            href={article.url}
            target='_blank'
          >
            Go to website
          </a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Article
