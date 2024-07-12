import React from "react";
import SelectField from "../SelectField/SelectField";

const category = [
  {
    label: "Fitness Equipment",
    value: "Fitness Equipment",
  },
  {
    label: "Fitness Equipment2",
    value: "Fitness Equipment2",
  },
  {
    label: "Fitness Equipment3",
    value: "Fitness Equipment3",
  },
];

const limit = [
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
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
  handleSearchParams: (field: string, value: string) => void;
  handleLimit: (field: string, value: string) => void;
};

function Filtering(props: FilteringProps) {
  return (
    <div className="bg-slate-100">
      <div className="w-[90%] flex justify-between mx-auto py-3">
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
        <div className="flex gap-4">
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
      </div>
    </div>
  );
}

export default Filtering;
