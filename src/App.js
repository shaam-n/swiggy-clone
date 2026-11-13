import ReactDOM from "react-dom/client";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

const App = () => {
  return (
    <div className="app flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Body />
      </main>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
