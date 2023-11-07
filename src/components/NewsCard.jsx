import { useContext } from "react";
import { Link } from "react-router-dom";
import { removeFromFavourites } from "../store/Favourites/actions";
import { FavouritesContext } from "../store/Favourites/context";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
  const { favouritesDispatch } = useContext(FavouritesContext);
  const { newsId, imgSrc, title, description, hasCloseButton } = props;

  function handleRemoveFromFavourites(id) {
    const actionResult = removeFromFavourites(id);
    favouritesDispatch(actionResult);
  }
  return (
    <Card
      className={`${styles.newsCard} h-100 d-flex flex-column justify-content-between align-items-center`}
    >
      <Link to={`/news/${encodeURIComponent(newsId)}`}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasCloseButton && (
        <Button
          variant="light"
          className={styles.newsCardButton}
          onClick={() => {
            handleRemoveFromFavourites(newsId);
          }}
        >
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}

export default NewsCard;