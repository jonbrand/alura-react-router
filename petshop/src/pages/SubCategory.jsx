import { useParams } from 'react-router-dom';
import PostList from '../components/PostList';

export const SubCategory = () => {
  const { subCategory } = useParams();
  return(
    <PostList url={`/posts?subCategory=${subCategory}`} />
  )
}