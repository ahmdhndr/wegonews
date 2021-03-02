import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const { data } = await axios.get(
    //     `https://newsapi.org/v2/sources?category=technology&apiKey=${process.env.REACT_APP_NEWS_API}`
    //   );
    //   setNews(data.articles);
    //   console.log(data);
    // };
    // return fetchData();
  });

  return (
    <div className='news-container'>
      {/* {news &&
        news.map((article, index) => (
          <Card className='mb-4' key={index}>
            <Card.Img
              variant='top'
              src={article.urlToImage}
              alt={article.title}
            />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <a
                className='btn btn-outline-primary'
                rel='noreferrer'
                href={article.url}
                target='_blank'
              >
                Go to website
              </a>
            </Card.Body>
          </Card>
        ))} */}
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
    </div>
  );
};

export default News;
