import { Link } from "react-router-dom";
import "./Navbar.css";
import { Shirt, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <ShoppingBag strokeWidth={2} />
        <span className="nav-logo-text">Dressify</span>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          Shop
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          Men
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          Women
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          Kids
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <ShoppingCart />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
