import "./App.css";
import Navbar from "./conponents/Navbar";
import ProductList from "./conponents/ProductList";
// import Footer from "./conponents/Footer";

function App() {
  const productList = [
    {
      price: 350,
      name: "Blue Shirt",
      quantity: 3232,
    },
    {
      price: 975,
      name: "Polo Shirt",
      quantity: 6787,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mt-5">
      <ProductList productList={productList} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
