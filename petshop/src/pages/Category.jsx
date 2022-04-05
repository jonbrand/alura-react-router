import React from 'react'
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import '../assets/css/blog.css'
import { CategoryList } from '../components/CategoryList';
import PostList from '../components/PostList';

export const Category = () => {
  const { id } = useParams();
  const { path } = useRouteMatch();
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <CategoryList />
        <Route exact path={`${path}/`}>
          <PostList url={`/posts?categoria=${id}`} />
        </Route>
        </>
    )
};