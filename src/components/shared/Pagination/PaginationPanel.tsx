import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  length?: string;
  handleSearchParams?: (field: string, value: string) => void;
};

function PaginationPanel(props: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {/* previous */}
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        {/* main */}
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>

        {/* next */}
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationPanel;
