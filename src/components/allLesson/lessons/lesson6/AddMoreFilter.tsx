import { DeleteFilled } from "@ant-design/icons";
import { Form, Input, Radio, Select, Space } from "antd";

const AddMoreFilter = ({ form }: { form: any }) => {
  const { Option } = Select;

  const columns = [
    {
      value: "firstname",
      label: "FIRST_NAME",
    },
    {
      value: "lastname",
      label: "LAST_NAME",
    },
    {
      value: "birthyear",
      label: "BIRTH_YEAR",
    },
    {
      value: "personal_number",
      label: "PERSONAL_NUMBER",
    },
    {
      value: "gender",
      label: "GENDER",
    },
    {
      value: "date_recorded",
      label: "DATE_RECORDED",
    },
    {
      value: "business_area",
      label: "BUSINESS_AREA",
    },
    {
      value: "country",
      label: "COUNTRY",
    },
    {
      value: "employer",
      label: "EMPLOYER",
    },
    {
      value: "managerial_position",
      label: "MANAGERIAL_POSITION",
    },
    {
      value: "zipcode",
      label: "ZIPCODE",
    },
    {
      value: "linked_ln_link",
      label: "LINKED_LN_LINK",
    },
    {
      value: "first_employment",
      label: "FIRST_EMPLOYMENT",
    },
    {
      value: "phone_number",
      label: "PHONE_NUMBER",
    },
    {
      value: "second_phone_number",
      label: "SECOND_PHONE_NUMBER",
    },
    {
      value: "email_work",
      label: "EMAIL_WORK",
    },
    {
      value: "created_by",
      label: "CREATED_BY",
    },
  ];

  const is = [
    {
      value: "is",
      label: "IS",
    },
    {
      value: "is_not",
      label: "IS_NOT",
    },
    {
      value: "contains",
      label: "CONTAINS",
    },
    {
      value: "not_contains",
      label: "NOT_CONTAINS",
    },
    {
      value: "greater_than",
      label: "GREATER_THAN",
    },
    {
      value: "less_than",
      label: "LESS_THAN",
    },
  ];

  return (
    <Form.List name="filter">
      {(fields, { add, remove }) => {
        return (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area ||
                    prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <>
                      {Number(field.name) !== 0 && (
                        <div>
                          <Form.Item
                            {...field}
                            name={[field.name, "operatorsOrder"]}
                          >
                            <Radio.Group value={"AND"}>
                              <Radio value={"AND"}>And</Radio>
                              <Radio value={"OR"}>Or</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </div>
                      )}

                      <div className="flex gap-10 mt-3 h-max justify-between w-full">
                        <div>
                          <Form.Item {...field} name={[field.name, "field"]}>
                            <Select
                              style={{ width: 300 }}
                              placeholder="Columns"
                              options={columns}
                            ></Select>
                          </Form.Item>
                        </div>
                        <div className="flex gap-10 ">
                          <span className="">That</span>
                          <Form.Item
                            {...field}
                            name={[field.name, "condition"]}
                          >
                            <Select
                              style={{ width: 300 }}
                              placeholder="Is"
                              options={is}
                            ></Select>
                          </Form.Item>
                        </div>
                        <div className="justify-self-end">
                          <Form.Item
                            style={{ width: "100% " }}
                            {...field}
                            name={[field.name, "value"]}
                          >
                            <Input
                              style={{ width: 300 }}
                              placeholder="Text ..."
                              className="border border-black py-[5px] rounded-none focus:border-primary outline-none"
                            />
                          </Form.Item>
                        </div>
                        {fields.length > 1 && (
                          <DeleteFilled
                            className="mt-[10px]"
                            onClick={() => remove(field.name)}
                          />
                        )}
                      </div>
                    </>
                  )}
                </Form.Item>
              </Space>
            ))}

            <Form.Item>
              <button
                onClick={() => add()}
                className="mb-5 text-base font-[600] opacity-60 text-[14px]"
              >
                + More Filter
              </button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

export default AddMoreFilter;
