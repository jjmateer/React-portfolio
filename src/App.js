import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import SideMenu from "./components/menu/menu";
import Navbar from "../src/components/navbar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./App.css";


const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });
  return (
    <>
      <SideMenu />
      <div id="outer-container">
        <div id="page-wrap">
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
        </div>
      </div>
    </>
  );
}

export default App;
