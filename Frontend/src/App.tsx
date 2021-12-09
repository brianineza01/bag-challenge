import "./App.css";
import AppRouter from "./Components/Router";
import AppProvider from "./Provider/AppProvider";
import AuthProvider from "./Provider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
