import React, { useEffect, useState } from 'react'
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom';
import { search } from '../api/api';
import '../assets/css/blog.css'
import { CategoryList } from '../components/CategoryList';
import PostList from '../components/PostList';
import { SubCategory } from './SubCategory';

export const Category = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [ subCategories, setSubCategory] = useState([]);

  useEffect(() => {
    search(`/categories/${id}`, (category) => {
      setSubCategory(category.subCategories)
    });
  }, [id]);
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <CategoryList />
        <ul className="lista-categorias container flex">
          {
            subCategories.map((subCategory) => (
              <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subCategory}>
                <Link to={`${url}/${subCategory}`}>
                  {subCategory}
                </Link>
              </li>
            ))
            
          }
        </ul>
       <Switch>
          <Route path={`${path}/:subCategory`}>
            <SubCategory />
          </Route>
          <Route exact path={`${path}/`}>
            <PostList url={`/posts?category=${id}`} />
          </Route>
       </Switch>
        </>
    )
};