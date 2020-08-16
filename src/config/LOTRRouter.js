import { BrowserRouter, Switch, Route } from "react-router-dom";


const LOTRRouter = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/books/:id">
            <BookDetailPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/character/:id">
            <CharacterDetailPage />
          </Route>
          <Route path="/characters">
            <CharactersPage />
          </Route>
          characters
        </Switch>
      </BrowserRouter>;
    );
  };
  
  export default LOTRRouter;




