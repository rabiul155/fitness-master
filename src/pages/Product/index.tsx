import ProductCard from "@/components/shared/Card/ProductCard";
import { useProductQuery } from "@/redux/features/product/productApi";
import { ProductType } from "@/types";

function Product() {
  const { data, isLoading } = useProductQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {data.data.length &&
          data.data.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
}

export default Product;
