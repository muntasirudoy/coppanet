import Layout from "./layout";
import About from "./pages/about";
import Home from "./pages/home";
import "./App.css";
import "./assets/boxicons.min.css";
function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <About />
      </Layout>
    </>
  );
}

export default App;
