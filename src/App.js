import { Route, Routes } from "react-router-dom";

import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";

import { useReducer } from "react";
import { FavouritesContext } from "./store/Favourites/context";
import { initialState, favouritesReducer } from "./store/Favourites/reducer";

function App() {
  const [favouritesState, favouritesDispatch] = useReducer(
    favouritesReducer,
    initialState
  );
  const favouritesContextValue = {
    favouritesState,
    favouritesDispatch,
  };

  return (
    <div className="App">
      <FavouritesContext.Provider value={favouritesContextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavouritesContext.Provider>
    </div>
  );
}

export default App;