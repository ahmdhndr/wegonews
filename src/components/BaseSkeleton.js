import { Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import articles from '../articles';

const BaseSkeleton = () => {
  return (
    <div className='news-container'>
      {articles.map((article, index) => (
        <Card className='mb-4' key={index}>
          <Skeleton height={200} />
          <Card.Body>
            <Card.Title>
              <Skeleton height={35} />
            </Card.Title>
            <Card.Text className='text-muted mb-0'>
              <Skeleton height={10} width={70} />
            </Card.Text>
            <Card.Text className='text-muted mb-0'>
              <Skeleton height={10} width={70} />
            </Card.Text>
            <Card.Text className='text-muted'>
              <Skeleton height={10} width={70} />
            </Card.Text>
            <Card.Text>
              <Skeleton count={3} />
            </Card.Text>
            <div className='text-right'>
              <Skeleton height={30} width={120} />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BaseSkeleton;
