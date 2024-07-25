import { useEffect, useState } from "react";

import { ProductType } from "@/types";
import ProductCard from "@/components/shared/Card/ProductCard";
import Filtering from "@/components/shared/Filtering/Filtering";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import PaginationPanel from "@/components/shared/Pagination/PaginationPanel";
import { useSearchParams } from "react-router-dom";
import Loading from "@/components/shared/Loading/Loading";

interface QueryType {
  [key: string]: string;
}

function Product() {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<QueryType>({});

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      setQuery({ category: category });
    }
  }, [category]);

  const { data, isLoading, isError, refetch } = useGetProductQuery(query);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const handleLimit = (field: string, value: string) => {
    setLimit(Number(value));
  };

  const handlePage = (page: number) => {
    setPage(page);
  };

  const handleClearFilter = () => {
    setQuery({});
    setPage(1), setLimit(3);
  };

  const handleSearchParams = (field: string, value: string) => {
    const payload = { ...query };
    payload[field] = value;
    setQuery(payload);
  };

  return (
    <div className="my-6 flex flex-col gap-6">
      {/* filtering */}
      <Filtering
        handleClearFilter={handleClearFilter}
        handleSearchParams={handleSearchParams}
        handleLimit={handleLimit}
      />

      {/* card section */}

      {data.data.length > 0 ? (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.data
            .slice((page - 1) * limit, page * limit)
            .map((product: ProductType) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </div>
      ) : (
        <div className="text-center text-xl m-8 font-bold text-yellow-400 ">
          No product found
        </div>
      )}

      {/* paginate */}
      {data.data.length > 0 && (
        <div>
          <PaginationPanel
            length={data.data.length}
            limit={limit}
            page={page}
            handlePage={handlePage}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
