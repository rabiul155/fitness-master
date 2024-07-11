import { useState } from "react";

import { ProductType } from "@/types";
import ProductCard from "@/components/shared/Card/ProductCard";
import Filtering from "@/components/shared/Filtering/Filtering";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import PaginationPanel from "@/components/shared/Pagination/PaginationPanel";

interface QueryType {
  [key: string]: string;
}

function Product() {
  const [query, setQuery] = useState<QueryType>({});
  const { data, isLoading } = useGetProductQuery(query);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSearchParams = (field: string, value: string) => {
    const payload = { ...query };
    payload[field] = value;
    setQuery(payload);
  };

  return (
    <div className="my-6 flex flex-col gap-6">
      {/* filtering */}
      <Filtering handleSearchParams={handleSearchParams} />

      {/* card section */}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {data.data.length ? (
          data.data.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        ) : (
          <div className="text-center">No Data Found</div>
        )}
      </div>

      {/* paginate */}
      {data.data.length && (
        <div>
          <PaginationPanel
            length={data.data.length}
            handleSearchParams={handleSearchParams}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
