import CartWidget from "../CardWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3> Jewel Ecommerce</h3>
      <div>
        <button>Rings</button>
        <button>Pendants</button>
        <button>Necklace</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
