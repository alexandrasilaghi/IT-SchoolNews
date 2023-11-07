import { useContext } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavouritesContext } from "../store/Favourites/context";
import NewsCardList from "../components/NewsCardList";

function Favourites() {
  const { favouritesState } = useContext(FavouritesContext);
  const { products } = favouritesState;
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Stirile tale favorite</h1>
        {products.length === 0 ? (
          <p>Momentan nu ai nicio stire favorita.</p>
        ) : (
          <NewsCardList newsList={products} />
        )}
      </Container>
    </Layout>
  );
}

export default Favourites;