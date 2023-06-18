import { useState } from "react";
import { Checkbox, Divider, Select } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useAppDispatch } from "../../../hook";
import { setFilter } from "../../../features/lesson5/filterSlice";

const Lesson5CheckBox = () => {
  const [isShow, setIsShow] = useState(false);
  const CheckboxGroup = Checkbox.Group;
  const dispatch = useAppDispatch();

  const plainOptions = [
    "Id",
    "Title",
    "Description",
    "Price",
    "DiscountPercentage",
    "Rating",
    "Stock",
    "Brand",
    "Category",
    "Thumbnail",
    "Images",
  ];

  const restoreDefault = [
    "Id",
    "Title",
    "Description",
    "Price",
    "Rating",
    "Brand",
    "Thumbnail",
  ];

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(restoreDefault);
  const [checkRestore, setCheckRestore] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setCheckRestore(list.length === plainOptions.length);
  };

  const onCheckRestoreDefaults = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? restoreDefault : []);
    setCheckRestore(e.target.checked);
  };
  const handleFilter = () => {
    dispatch(setFilter(checkedList));
    setIsShow(false);
    localStorage.setItem("checklist", JSON.stringify(checkedList));
  };

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="absolute top-[2.65%] right-[47%] z-30">
      <Select
        defaultValue="Columns"
        style={{ width: 160 }}
        onClick={handleShow}
        dropdownStyle={{ display: "none" }}
        className=" border border-black rounded-md py-[6px] text-black cursor-pointer"
      />
      {isShow && (
        <div className="absolute checkbox z-20 border border-solid border-black shadow-[0px_4px_6px_rgba(0_0_0_0.08)] bg-white w-[306px] ">
          <div className="flex flex-col gap-3 px-5 py-4">
            <h2 className="text-[18px] font-medium">Columns</h2>
            <input
              type="text"
              placeholder="Search"
              className="py-[10px] text-[14px] px-4 border border-black border-opacity-30 w-full"
            />
          </div>
          <Checkbox
            onChange={onCheckRestoreDefaults}
            checked={checkRestore}
            id="restored"
            className="pl-3 text-left text-blue-500"
          >
            Restore Default
          </Checkbox>
          <CheckboxGroup
            className="grid grid-cols-1 max-h-[300px] gap-4 pt-3 pb-5 pl-5 overflow-auto border border-black border-opacity-20"
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
          <div className="flex items-center justify-end gap-3 p-[12px_16px] ">
            <button
              className="p-[10px_16px] border border-black border-opacity-20 text-sm text-black"
              onClick={() => {
                setIsShow(false);
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleFilter}
              className="p-[10px_16px] border border-black border-opacity-20 text-sm text-black btn-isActive"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson5CheckBox;
