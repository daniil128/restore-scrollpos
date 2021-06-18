import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import GlobalStyles from './styles';
import Home from './pages/Home';
import About from './pages/About';
import { useScrollPositions } from './hooks/scroll';
import { ScrollContext } from './context/scroll-context';

const App = () => {
  const location = useLocation();
  const positions = useScrollPositions();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100vw, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-20vw, 0, 0)' },
  });

  return (
    <ScrollContext.Provider value={positions}>
      <GlobalStyles />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      {transitions((props, item) => (
        <animated.div style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </animated.div>
      ))}
    </ScrollContext.Provider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
