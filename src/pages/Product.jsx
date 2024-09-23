const Product = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3">
          <div
            className="card border-success mb-3 bg-"
            style={{ maxWidth: "30rem" }}
          >
            <div className="card-header">
              <img
                className="card-img-top"
                src={`http://localhost:3000/api/products/image/${product.id}`}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
