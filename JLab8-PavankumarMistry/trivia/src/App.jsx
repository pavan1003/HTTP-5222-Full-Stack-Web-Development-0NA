import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <h1>Welcome to Trivia</h1>
        <p>Here's your random question.</p>
        <h2>True or false:</h2>
        <Question />
      </div>
      <footer>© HTTP5211, 2022.</footer>
    </div>
  );
}

export default App;
