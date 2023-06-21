import { Col, Form, Input, Row, Select } from "antd";
import AddMoreFilter from "./AddMoreFilter";
import { useEffect, useState } from "react";
import { LockOutlined, MinusOutlined, UnlockOutlined } from "@ant-design/icons";
import useQuery from "../../../../hooks/useQuery";
import { useNavigate } from "react-router-dom";

const Lesson6 = () => {
  const { setQuery, getQuery } = useQuery();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [filterContent, setFilterContent] = useState<IFilterContent>();
  const [tagContent, setTagContent] = useState("");
  const [queryString, setQueryString] = useState("");
  const [selectTag, setSelectTag] = useState<ITag[]>([]);

  const initialsValue = {
    search: "",
    tag: [],
    filter: [
      {
        field: undefined,
        condition: undefined,
        value: undefined,
      },
    ],
  };
  interface IFilterContent {
    freetext: string;
    tag?: string[];
    filter: IFilterWithConditions[];
    operatorsOrder: string[];
  }
  interface ITag {
    key?: number;
    name?: string;
    isLock?: boolean;
  }
  interface IFilterWithConditions {
    condition: string;
    field: string;
    value: string;
    operatorsOrder: string;
  }
  interface IForm {
    filter: IFilterWithConditions[];
    operatorsOrder: string[];
    filterListId: 0;
    search: string;
    tag: ITag[];
  }
  const options = [
    {
      label: "trang",
      value: "trang",
      isLock: false,
    },
    {
      label: "huyen",
      value: "huyen",
      isLock: false,
    },
    {
      label: "vu",
      value: "vu",
      isLock: false,
    },
    {
      label: "thi",
      value: "thi",
      isLock: false,
    },
    {
      label: "thom",
      value: "thom",
      isLock: false,
    },
    {
      label: "quang",
      value: "quang",
      isLock: false,
    },
  ];

  const handleLockChange = (tag: ITag) => {
    const changeLock = selectTag?.map((item: ITag) => {
      if (item.name === tag.name) {
        return { ...item, isLock: !item.isLock };
      }
      return item;
    });

    setSelectTag(changeLock);
  };

  const handleMinusTag = (tag: ITag) => {
    const newTag = selectTag.filter((item: ITag) => item.name !== tag.name);
    setSelectTag(newTag);
    const result = newTag.map((a: ITag) => a.name);
    form.setFieldsValue({
      tag: result,
    });
  };

  const handleChange = (value: string[]) => {
    const tagConvert: ITag[] = [];
    value.forEach((item, id) => {
      tagConvert.push({
        key: id,
        name: item,
        isLock: false,
      });
    });
    setSelectTag(tagConvert);
  };

  const onFinish = (value: IForm) => {
    console.log("value", JSON.stringify(value));

    const operator = value.filter
      .map((item: IFilterWithConditions) => item.operatorsOrder)
      .filter(Boolean);

    //loai bo undefined
    const query =
      "?filter=" +
      JSON.stringify({
        freetext: value.search,
        filter: value.filter.map((item: IFilterWithConditions) => {
          return {
            condition: item.condition ?? "",
            field: item.field ?? "",
            value: item.value ?? "",
          };
        }),
        operatorsOrder: operator,
      }) +
      "&tag=" +
      JSON.stringify(selectTag);
    console.log(query);
    setQuery(query);
    setQueryString(query);
    console.log(queryString);
  };

  const handleReset = () => {
    form.resetFields();
    window.location.search = "";
    navigate("/lesson/6");
  };

  useEffect(() => {
    const filterParam: {
      [key: string]: string | null;
    } = getQuery(["filter"]);
    const tagParam: {
      [key: string]: string | null;
    }[] = getQuery(["tag"]);
    // if (filterParam && filterParam.filter !== null) {
    const filterParse = JSON.parse(filterParam?.filter);
    const tagParse = JSON.parse(tagParam?.tag);
    console.log(filterParse);
    console.log(tagParse);
    setTagContent(
      tagParse
        ?.map((item: ITag) => {
          if (!item.isLock) {
            return item.name;
          }
        })
        .join(",")
    );

    setFilterContent({
      freetext: filterParse?.freetext,
      filter: filterParse?.filter,
      operatorsOrder: filterParse?.operatorsOrder,
    });

    form.setFieldsValue({
      search: filterParse?.freetext ?? "",
      tag: tagParse?.map((item: ITag) => item.name) ?? [],
      filter: filterParse?.filter?.map(
        (item: IFilterContent, index: number) => {
          return {
            ...item,
            operatorsOrder: filterParse?.operatorsOrder[index - 1],
          };
        }
      ) ?? [
        {
          field: undefined,
          condition: undefined,
          value: undefined,
        },
      ],
      operatorsOrder: filterParse?.operatorsOrderord ?? "",
    });

    setSelectTag(tagParse);
  }, [queryString]);

  return (
    <div className="p-8 max-w-full relative">
      <p className="mb-6 font-bold">Thực hành extend form</p>
      <div className="flex items-center justify-between">
        <h2 className="mb-8 text-2xl ">Filter</h2>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={initialsValue}
        className="border-b-[1px] border-stroke pb-10 mb-[34px]"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name="search"
              label="Search"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input
                placeholder="Search ..."
                className="border border-black p-[9px_16px] max-w-[431px] rounded-none focus:border-primary outline-none"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="tag"
              label="Tag"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              id="select"
            >
              <Select
                mode="multiple"
                allowClear
                placeholder="Please select"
                onChange={handleChange}
                options={options}
              />
            </Form.Item>
            <Form.Item>
              <div className="flex flex-row gap-3">
                {selectTag?.map((tag: ITag) => {
                  return (
                    <div key={tag.key}>
                      <button className="flex items-center gap-1 px-3 py-1 rounded relative">
                        <span className="">{tag.name}</span>
                        <span></span>
                        {tag.isLock ? (
                          <LockOutlined
                            onClick={() => {
                              handleLockChange(tag);
                            }}
                          />
                        ) : (
                          <UnlockOutlined
                            onClick={() => {
                              handleLockChange(tag);
                            }}
                          />
                        )}
                        <MinusOutlined
                          className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full cursor-pointer -top-2 -left-2"
                          onClick={() => {
                            handleMinusTag(tag);
                          }}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <label className="text-base opacity-60 mb-5">
                Show Only Records With
              </label>
              <AddMoreFilter />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="flex items-center gap-5">
            <button
              className="py-3 text-white bg-green-300 rounded-md hover:bg-slate-400 px-9"
              type="submit"
              // onClick={() => {
              // navigate('/');
              // }}
            >
              Filter
            </button>
            <button
              className="py-3 rounded px-9 hover:bg-slate-400"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
        </Row>
        <Row>
          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 gap-5 w-full ">
              <div className=" w-full ">
                <span className=" py-4 border text-bold text-[16px]">
                  Filter
                </span>
                <p>{filterContent ? JSON.stringify(filterContent) : ""}</p>
              </div>
              <div className="w-full border-solid">
                <span className=" py-4 border text-bold text-[16px]">Tags</span>
                <p>{tagContent ? tagContent : ""}</p>
              </div>
            </div>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default Lesson6;
