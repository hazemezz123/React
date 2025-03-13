import React from "react";

function Button({ name = "undefined", title = "No title" }) {
  return (
    <>
      <h1>{title}</h1>
      <button className="btn btn-primary">{name}</button>
    </>
  );
}
function Layout({ children }) {
  return (
    <>
      <main
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </>
  );
}
function Card(props) {
  return (
    <>
      <div className="card text-start">
        <img
          height={props.height}
          className={`card`}
          src={props.img}
          alt={props.title}
        />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.name}</p>
        </div>
      </div>
    </>
  );
}
//  height . title . name . img
const App = () => {
  return (
    <>
      <Layout>
        <Card height="100" title="Cute Cat" name="مشمشة" img="/img.png" />
        <Card />
      </Layout>
    </>
  );
};

export default App;
