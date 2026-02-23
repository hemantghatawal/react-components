const ProductCard = ({ title, thumbnail }) => {
  return (
    <div className="product-card">
      <img src={thumbnail} />
      <p> {title} </p>
    </div>
  );
};

export default ProductCard;
