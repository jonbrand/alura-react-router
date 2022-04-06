import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/api";
import '../assets/css/blog.css';

export const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    search(`/categories`, setCategories)
  }, []);
  
  return(
    <ul className="lista-categorias container flex">
      {
        categories.map((category) => (
          <Link to={`/category/${category.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${category.id}`}>
              {category.name}
            </li>

          </Link>
        ))
      }
    </ul>
  )
}