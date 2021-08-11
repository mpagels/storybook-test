import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App__Header">Awesome App</header>
      <main>
        <Card title="Hello World" text="small test text" hasButton />
      </main>
      <footer className="App__Footer">Footer Content</footer>
    </div>
  );
}

export default App;
