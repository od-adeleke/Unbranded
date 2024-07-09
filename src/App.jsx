import "./App.css";
import Body from "./components/Body";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="container">
      <Header />
      <Breadcrumb />
      <Body />
      <Footer />
    </ main>
  );
}

export default App;
