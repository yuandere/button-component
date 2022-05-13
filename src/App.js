import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div id="main">
      <ErrorBoundary>
        <h1>Buttons</h1>
        <div className="type">
          <div>
            <p className="name">&lt;Button /&gt;</p>
            <Buttons></Buttons>
          </div>
          <div>
            <p className="name">&amp;:hover, &amp;:focus</p>
            <Buttons hover focus></Buttons>
          </div>
        </div>
        <div className="type">
          <div>
            <p className="name">&lt;Button variant=&quot;outline&quot; /&gt;</p>
            <Buttons variant="outline"></Buttons>
          </div>
          <div>
            <p className="name">&amp;:hover, &amp;:focus</p>
            <Buttons variant="outline" hover focus></Buttons>
          </div>
        </div>
        <div className="type">
          <div>
            <p className="name">&lt;Button variant=&quot;text&quot; /&gt;</p>
            <Buttons variant="text"></Buttons>
          </div>
          <div>
            <p className="name">&amp;:hover, &amp;:focus</p>
            <Buttons variant="text" hover></Buttons>
          </div>
        </div>
        <div className="type">
          <div>
            <p className="name">&lt;Button disableShadow /&gt;</p>
            <Buttons disableShadow></Buttons>
          </div>
        </div>
        <div className="type">
          <div>
            <p className="name">&lt;Button disabled /&gt;</p>
            <Buttons disabled></Buttons>
          </div>
          <div>
            <p className="name">
              &lt;Button variant=&quot;text&quot; disabled /&gt;
            </p>
            <Buttons variant="text" disabled></Buttons>
          </div>
        </div>
        <div className="type" id="iconrow">
          <div>
            <p className="name">
              &lt;Button starticon=&quot;local_grocery_store&quot; /&gt;
            </p>
            <Buttons startIcon="add_shopping_cart"></Buttons>
          </div>
          <div>
            <p className="name">
              &lt;Button endicon=&quot;local_grocery_store&quot; /&gt;
            </p>
            <Buttons endIcon="add_shopping_cart"></Buttons>
          </div>
        </div>

        <div className="type three">
          <div>
            <p className="name">&lt;Button size=&quot;sm&quot; /&gt;</p>
            <Buttons size="sm" color="primary"></Buttons>
          </div>
          <div>
            <p className="name">&lt;Button size=&quot;md&quot; /&gt;</p>
            <Buttons size="md" color="primary"></Buttons>
          </div>
          <div>
            <p className="name">&lt;Button size=&quot;lg&quot; /&gt;</p>
            <Buttons size="lg" color="primary"></Buttons>
          </div>
        </div>

        <div className="type" id="colors-container">
          <div className="type">
            <div>
              <p className="name">&lt;Button color=&quot;default&quot; /&gt;</p>
              <Buttons color="default"></Buttons>
            </div>
            <div>
              <p className="name">
                &amp;:hover, &amp;:focus
              </p>
              <Buttons hover focus></Buttons>
            </div>
          </div>
          <div className="type">
            <div>
              <p className="name">&lt;Button color=&quot;primary&quot; /&gt;</p>
              <Buttons color="primary" content="Primary"></Buttons>
            </div>
            <div>
              <p className="name">
                &amp;:hover, &amp;:focus
              </p>
              <Buttons color="primary" content="Primary" hover focus></Buttons>
            </div>
          </div>
          <div className="type">
            <div>
              <p className="name">&lt;Button color=&quot;secondary&quot; /&gt;</p>
              <Buttons color="secondary" content="Secondary" long></Buttons>
            </div>
            <div>
              <p className="name">
                &amp;:hover, &amp;:focus
              </p>
              <Buttons color="secondary" content="Secondary" long hover focus></Buttons>
            </div>
          </div>
          <div className="type">
            <div>
              <p className="name">&lt;Button color=&quot;danger&quot; /&gt;</p>
              <Buttons color="danger" content="Danger"></Buttons>
            </div>
            <div>
              <p className="name">
                &amp;:hover, &amp;:focus
              </p>
              <Buttons color="danger" content="Danger" hover focus></Buttons>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
