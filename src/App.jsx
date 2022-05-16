import "./App.scss";

function App() {

  const url = "https://api.punkapi.com/v2/beers/1";


  
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello!!!</div>
        <Main beers=""/>
      </header>
    </div>
  );
}

export default App;
