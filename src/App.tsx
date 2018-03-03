/* tslint:disable:no-any,no-console */
import * as React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import ProductOverview from './ProductOverview';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { State, Product } from './interfaces';
import { Link, Route, Switch } from 'react-router-dom';
const logo = require('./images/logo.svg');

class App extends React.Component<{}, State> {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <nav className="navbar is-dark is-fixed-top">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <img src={logo} className="App-logo" alt="logo" />
                  qwinkel
                </Link>
                <div
                  className="navbar-burger burger"
                  data-target="navMenuColordark-example"
                >
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>

              <div id="navMenuColordark-example" className="navbar-menu">
                <div className="navbar-start">
                  <Link className="navbar-item" to="/products">
                    Product Overview
                  </Link>

                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="/manage/">
                      Favorites
                    </a>
                    <div className="navbar-dropdown">
                      <Link className="navbar-item" to="/products/1">
                        Quick Link To Product #1
                      </Link>
                      <Link className="navbar-item" to="/products/3">
                        Quick Link To Product #3
                      </Link>
                      <Link className="navbar-item" to="/products/4">
                        Quick Link To Product #4
                      </Link>
                      <Link className="navbar-item" to="/products/8">
                        Quick Link To Product #8
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link" href="/manage/">
                        Cart
                      </a>
                      <div className="navbar-dropdown is-right">
                        <Cart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <ErrorBoundary>
              <Switch>
                <Route
                  exact={true}
                  path="/products/:id"
                  render={({ match }) => (
                    <ProductDetail productId={match.params.id} />
                  )}
                />

                <Route
                  exact={true}
                  path="/products"
                  render={() => <ProductOverview />}
                />
                <Route path="/" component={Home} />
              </Switch>
            </ErrorBoundary>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
