import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button/Button";

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
          <Link to="/" className={menu === "shop" ? "active" : ""}>
            Shop
          </Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" className={menu === "men" ? "active" : ""}>
            Men
          </Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" className={menu === "women" ? "active" : ""}>
            Women
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className={menu === "kids" ? "active" : ""}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Button arrow>Log in</Button>
        <ShoppingCart className="nav-cart-icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
