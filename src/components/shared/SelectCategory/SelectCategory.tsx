import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ItemType = {
  label: string;
  value: string;
};
type PropsType = {
  label: string;
  placeholder: string;
  name: string;
  items: ItemType[];
  classNames?: string;
  handleValueChange: (val: string) => void;
};

function SelectCategory(props: PropsType) {
  return (
    <div className="flex flex-col gap-1">
      <label className="mx-1 text-sm" htmlFor={props.name}>
        {props.label}
      </label>
      <Select name={props.name} onValueChange={props.handleValueChange}>
        <SelectTrigger
          className={`h-9 focus:border-0 focus:outline-none ${props.classNames}`}
        >
          <SelectValue className="py-0" placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectCategory;
