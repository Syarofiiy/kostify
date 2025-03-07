import React, { useContext } from "react";
import { GlobalContext } from "../context";
import "./Article.css";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span className="status">-- Baru !!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <div className="article-container" onClick={() => props.onArticleClick(props)}>
      <img className="foto" src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <br />
      <small>
        Harga: {props.price}, sisa kamar: {props.room}
        <ArticleStatus isNew={props.isNew} />
      </small>
      <div>
        <small>Dikelola oleh {user.username}</small>
      </div>
    </div>
  );
}

export default Article;
