import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import ArticleList from './components/List'
import About from './components/About'
import Article from './components/Article'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
        <Header />

        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <ArticleList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
        </Switch>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
