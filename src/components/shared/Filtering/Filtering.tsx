import React from "react";
import SelectField from "../SelectField/SelectField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const category = [
  {
    label: "Dumbbells",
    value: "Dumbbells",
  },
  {
    label: "Treadmills",
    value: "Treadmills",
  },
  {
    label: "Weight Plates",
    value: "Weight Plates",
  },
  {
    label: "Exercise Bike",
    value: "Exercise Bike",
  },
];

const limit = [
  {
    label: "3",
    value: "3",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "9",
    value: "9",
  },
];

const sortBy = [
  {
    label: "Price, low to high",
    value: "price",
  },
  {
    label: "Price, high to low",
    value: "-price",
  },
];

type FilteringProps = {
  handleClearFilter: () => void;
  handleSearchParams: (field: string, value: string) => void;
  handleLimit: (field: string, value: string) => void;
};

function Filtering(props: FilteringProps) {
  return (
    <div className="bg-slate-100">
      <div className="w-[90%] flex flex-col lg:flex-row gap-4 justify-between mx-auto py-3">
        <div>
          <SelectField
            label="Category"
            items={category}
            placeholder="Category"
            handleValueChange={(val) =>
              props.handleSearchParams("category", val)
            }
          />
        </div>
        <div>
          <Input
            className="w-64 h-8 border-0 outline-none ring-0 focus:ring-0 focus:outline-none"
            type="text"
            placeholder="Search..."
            onChange={(e) => props.handleSearchParams("search", e.target.value)}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <SelectField
            label="Limit"
            classNames="w-20"
            items={limit}
            placeholder="Limit"
            handleValueChange={(val) => props.handleLimit("limit", val)}
          />
          <SelectField
            label="Sort By"
            items={sortBy}
            placeholder="Sort product"
            handleValueChange={(val) => props.handleSearchParams("sort", val)}
          />
        </div>
        <Button
          variant="outline"
          className="h-8 w-auto"
          onClick={props.handleClearFilter}
        >
          Clear Filter
        </Button>
      </div>
    </div>
  );
}

export default Filtering;
