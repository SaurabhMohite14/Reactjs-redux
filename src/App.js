import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <ErrorBoundary fallback={AppErrorHandler}>
      <div>
        <SimpleDemo />
      </div>
    </ErrorBoundary>
  );
}

function SimpleDemo() {
  let user = { id: 1, name: "rohit" };
  return (
    <div>
      <h1>Hello World</h1>
      <h1>{user}</h1>
    </div>
  );
}

function AppErrorHandler() {
  return (
    <div>
      <h1>Handle error</h1>
    </div>
  );
}

export default App;
