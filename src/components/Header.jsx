const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>MyShop</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products, brands, and more"
        />
        <button>Search</button>
      </div>
      <div className="header-right">
        <button>Login</button>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;
