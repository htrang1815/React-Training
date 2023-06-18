import { Table } from "antd";
import Lesson3Data from "../services/Lesson3";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Lesson3 = () => {
  const data = Lesson3Data();
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "name",
      sorter: (a: { _id: number }, b: { _id: number }) => a._id - b._id,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "lastName",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      render: (birthday: {
        toLocaleDateString: (
          arg0: string
        ) =>
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | null
          | undefined;
      }) => <span>{birthday.toLocaleDateString("en-GB")}</span>,
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
      sorter: (a: { sex: string | any[] }, b: { sex: string | any[] }) =>
        a.sex.length - b.sex.length,
    },
    {
      title: "Job Area",
      dataIndex: "jobArea",
      key: "jobArea",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Subscription Tier",
      dataIndex: "subscriptionTier",
      key: "subscriptionTier",
      sorter: (
        a: { subscriptionTier: string | any[] },
        b: { subscriptionTier: string | any[] }
      ) => a.subscriptionTier.length - b.subscriptionTier.length,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string | undefined) => (
        <img src={avatar} className="object-cover rounded-full w-14 h-14" />
      ),
    },
    {
      title: "Action",
      dataIndex: "lastName",
      key: "action",
      render: (
        lastName:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | null
          | undefined
      ) => (
        <div className="flex items-center justify-between gap-4">
          <div>
            <a>Invite {lastName}</a>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 max-w-full">
      <Table dataSource={data} columns={columns} />;
    </div>
  );
};

export default Lesson3;
