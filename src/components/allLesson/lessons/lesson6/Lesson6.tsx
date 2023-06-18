import { Col, Form, Input, Row, Select } from "antd";
import AddMoreFilter from "./AddMoreFilter";
import { useEffect, useState } from "react";
import { LockOutlined, MinusOutlined, UnlockOutlined } from "@ant-design/icons";
import useQuery from "../../../../hooks/useQuery";
import { useNavigate } from "react-router-dom";

const Lesson6 = () => {
  const { setQuery, removeQueryParams } = useQuery();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  // const initialFilterState = {
  //   freeText: "",
  //   operatorsOrder: [],
  //   filterWithConditions: [{ condition: "", field: "", value: "" }],
  //   filterListId: 0,
  // };
  const [filterContent, setFilterContent] = useState<any>();
  const [tagContent, setTagContent] = useState<any>([]);
  const [unlockTag, setUnlockTag] = useState<any>([]);
  const [queryString, setQueryString] = useState<any>("");
  const [selectTag, setSelectTag] = useState<any>([]);
  const initialsValue: any = {
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

  const handleLockChange = (tag: any) => {
    const changeLock: any = selectTag?.map((item: any) => {
      if (item.name === tag) {
        return { ...item, isLock: !item.isLock };
      }
      return item;
    });

    setSelectTag(changeLock);
  };
  const handleMinusTag = (tag: any) => {
    const newTag = selectTag.filter((item: any) => item.name !== tag);
    setSelectTag(newTag);
    setUnlockTag(newTag);
    let result = newTag.map((a: any) => a.name);
    // console.log(result);
    form.setFieldsValue({
      tag: result,
    });
    console.log("minus", selectTag);
  };

  const handleChange = (value: string[]) => {
    const tagConvert: { key: number; name: string; isLock: boolean }[] = [];
    value.forEach((item, id) => {
      tagConvert.push({
        key: id,
        name: item,
        isLock: false,
      });
    });
    setSelectTag(tagConvert);
  };

  const onFinish = (value: any) => {
    // console.log("value", value);
    const operator = value.filter
      .map((item: { operatorsOrder: any }) => item.operatorsOrder)
      .filter(Boolean);
    setFilterContent({
      ...filterContent,
      freeText: value.search,
      filterWithConditions: value.filter.map(
        (item: { condition: any; field: any; value: any }) => {
          return {
            consition: item.condition ?? "",
            field: item.field ?? "",
            value: item.value ?? "",
          };
        }
      ),
      operatorsOrder: operator,
    });

    const unlockTag = selectTag.filter((item: any) => item.isLock !== true);
    let result = unlockTag.map((a: any) => a.name);
    setTagContent(result.join(","));
  };

  const handleReset = () => {
    form.resetFields();
    setFilterContent(undefined);
    window.location.search = "";
    navigate("/lesson/6");
  };

  useEffect(() => {
    (() => {
      if (filterContent) {
        const query = "?filter" + "=" + JSON.stringify(filterContent);
        console.log("query", query);
        setQueryString(query);
      }
    })();
    console.log(filterContent);
    setQuery(queryString);
  }, [selectTag, queryString, filterContent]);

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
                {selectTag.map((tag: any) => {
                  return (
                    <div className="">
                      <button className="flex items-center gap-1 px-3  py-1 rounded relative">
                        <span className="">{tag.name}</span>
                        <span></span>
                        {tag.isLock ? (
                          <LockOutlined
                            onClick={() => {
                              handleLockChange(tag.name);
                            }}
                          />
                        ) : (
                          <UnlockOutlined
                            onClick={() => {
                              handleLockChange(tag.name);
                            }}
                          />
                        )}
                        <MinusOutlined
                          className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full cursor-pointer -top-2 -left-2"
                          onClick={() => {
                            handleMinusTag(tag.name);
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
              <AddMoreFilter form={form} />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="flex items-center gap-5">
            <button
              className="py-3 text-white bg-green-300 rounded-md hover:bg-slate-400 px-9"
              type="submit"
              // onClick={() => {
              //   navigate('/');
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
            <div className="grid grid-cols-2 gap-5 w-full  ">
              <div className=" w-full ">
                <span className=" py-4 border text-bold text-[16px]">
                  Filter
                </span>
                <p>{filterContent ? JSON.stringify(filterContent) : ""}</p>
              </div>
              <div className="w-full border-solid">
                <span className=" py-4 border text-bold text-[16px]">Tags</span>
                <p>
                  {tagContent ? JSON.stringify(tagContent).slice(1, -1) : ""}
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default Lesson6;
