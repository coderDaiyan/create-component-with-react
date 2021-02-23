import "./App.css";
import mobileStandImg from "./img/mobile-stand.jpg";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "green", textAlign: "center" }}>My React Shop</h1>
      <div className="parent">
        <Products
          img={mobileStandImg}
          name="Windshield Car Mount Phone Holder"
          price="500$"
        ></Products>
        <Products img={mobileStandImg} name="Digital Alarm Clock" price="200$"></Products>
        <Products img={mobileStandImg} name="Wireless Headphone" price="100$"></Products>
        <Products img={mobileStandImg} name="RGB Casing" price="80$"></Products>
        <Products img={mobileStandImg} name="HP 22AW Monitor" price="150$"></Products>
      </div>
    </div>
  );
}

function Products(props) {
  return (
    <div className="productContainer">
      <img src={props.img} alt="digital alarm clock" className="product-img" />
      <h2>{props.name}</h2>
      <h3>Price: {props.price}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        quibusdam saepe dolor adipisci, fuga, tempora odit eveniet, numquam
        provident cum possimus.
      </p>
      <button className="btn">Buy Now</button>
    </div>
  );
}

export default App;
