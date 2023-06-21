import { Table } from "antd";
import Lesson3Data from "../services/Lesson3";
// import Lesson8 from "./Lesson8";
// import { ReactNode, ReactPortal } from "react";

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
      // sorter: (a: number, b: number) => a.age - b.age,
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
      render: (birthday: { toLocaleDateString: (arg0: string) => string }) => (
        <span>{birthday.toLocaleDateString("en-GB")}</span>
      ),
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
      sorter: (a: { sex: string }, b: { sex: string }) =>
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
        a: { subscriptionTier: string },
        b: { subscriptionTier: string }
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
      render: (lastName: string) => (
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
      <Table dataSource={data} columns={columns} pagination={false} />;
      {/* <Lesson8 total={100} data={data}></Lesson8> */}
    </div>
  );
};

export default Lesson3;
