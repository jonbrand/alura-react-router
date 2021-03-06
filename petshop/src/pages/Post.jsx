import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { search } from '../api/api';
import '../assets/css/post.css';

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  let history = useHistory()

  useEffect(() => {
    search(`/posts/${id}`, setPost)
    .catch(() => {
      history.push('/404')
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return(
    <main className="container flex flex--centro">
      <article className='cartao post'>
        <h2 className='cartao__titulo'>{post.title}</h2>
        <p className='carta__texto'>{post.body}</p>
      </article>
    </main>
  )
}