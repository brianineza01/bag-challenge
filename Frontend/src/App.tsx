import "./App.css";
import AppRouter from "./Components/Router";
import AuthProvider from "./Provider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
