import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Navbar from "../src/components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./App.css";


const App = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0},
      enter: { opacity: 1},
      leave: { opacity: 0}
    });
    return (
      <>
        <Navbar />
      <main className="container-fluid">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          </animated.div>
        ))}
      </main>
    </>
    );
}

export default App;
