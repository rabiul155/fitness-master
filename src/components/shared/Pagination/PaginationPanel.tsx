import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect } from "react";

type PaginationProps = {
  limit: number;
  length: number;
  page: number;
  handlePage: (value: number) => void;
};

function PaginationPanel(props: PaginationProps) {
  const totalPage = Math.ceil(props.length / props.limit);

  return (
    <Pagination>
      <PaginationContent>
        {/* previous */}
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${
              props.page > 1 ? "" : "text-gray-400 "
            }`}
            onClick={() => {
              if (props.page > 1) return props.handlePage(props.page - 1);
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPage }).map((page, index) => (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              isActive={props.page === index + 1}
              onClick={() => props.handlePage(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* next */}
        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
              props.page < totalPage ? "" : "text-gray-400"
            }`}
            onClick={() => {
              if (props.page < totalPage)
                return props.handlePage(props.page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationPanel;
