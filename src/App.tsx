import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center bg-gray-800">
        <h1>React-SRP-ThemeToggleApp</h1>
        <ThemeToggle />
      </div>
    </>
  );
}

export default App;
