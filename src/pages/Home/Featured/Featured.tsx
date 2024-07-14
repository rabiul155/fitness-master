import ProductCard from "@/components/shared/Card/ProductCard";
import Loading from "@/components/shared/Loading/Loading";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import { ProductType } from "@/types";

function Featured() {
  const { data, isLoading } = useGetProductQuery({});
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col px-4 md:px-8 gap-4">
      <h2 className="text-center font-bold text-3xl">Our Popular Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {data.data.length &&
          data.data
            .slice(0, 3)
            .map((product: ProductType) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
      </div>
    </div>
  );
}

export default Featured;
