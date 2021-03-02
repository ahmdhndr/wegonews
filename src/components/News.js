import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import articles from '../articles';

const News = () => {
  const [news, setNews] = useState(null);

  console.log(articles);
  // `https://newsapi.org/v2/sources?category=technology&apiKey=${process.env.REACT_APP_NEWS_API}`
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await axios.get('../src/articles.js');
    //   const data = res.json();
    //   setNews(data.articles);
    //   console.log(data);
    // };
    // return fetchData();
  });

  return (
    <div className='news-container'>
      {articles &&
        articles.map((article, index) => (
          <Card className='mb-4' key={index}>
            <Card.Img variant='top' src={article.image} alt={article.title} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text className='text-muted'>
                <p className='mb-0'>{article.publishedAt}</p>
                <p className='mb-0'>Writter: {article.author}</p>
                <p>Source: {article.urlToSource}</p>
              </Card.Text>
              <Card.Text className='text-muted'></Card.Text>
              <Card.Text className='text-muted'></Card.Text>
              <Card.Text>{article.description}</Card.Text>
              <div className='text-right'>
                <a
                  className='btn btn-outline-dark text-right'
                  rel='noreferrer'
                  href={article.urlToSource}
                  target='_blank'
                >
                  Go to website
                </a>
              </div>
            </Card.Body>
          </Card>
        ))}
      {/* <Card className='mb-4'>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/'
          alt='random'
        />
        <Card.Body>
          <Card.Title>You can make it happen</Card.Title>
          <Card.Text>
            Just believe in yourself, if you want to be a fullstack, just do it.
          </Card.Text>
          <a
            className='btn btn-outline-primary'
            rel='noreferrer'
            href='#'
            target='_blank'
          >
            Go to website
          </a>
        </Card.Body>
      </Card>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/'
          alt='random'
        />
        <Card.Body>
          <Card.Title>You can make it happen</Card.Title>
          <Card.Text>
            Just believe in yourself, if you want to be a fullstack, just do it.
          </Card.Text>
          <a
            className='btn btn-outline-primary'
            rel='noreferrer'
            href='#'
            target='_blank'
          >
            Go to website
          </a>
        </Card.Body>
      </Card>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/'
          alt='random'
        />
        <Card.Body>
          <Card.Title>You can make it happen</Card.Title>
          <Card.Text>
            Just believe in yourself, if you want to be a fullstack, just do it.
          </Card.Text>
          <a
            className='btn btn-outline-primary'
            rel='noreferrer'
            href='#'
            target='_blank'
          >
            Go to website
          </a>
        </Card.Body>
      </Card>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src='https://source.unsplash.com/random/'
          alt='random'
        />
        <Card.Body>
          <Card.Title>You can make it happen</Card.Title>
          <Card.Text>
            Just believe in yourself, if you want to be a fullstack, just do it.
          </Card.Text>
          <a
            className='btn btn-outline-primary'
            rel='noreferrer'
            href='#'
            target='_blank'
          >
            Go to website
          </a>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default News;
