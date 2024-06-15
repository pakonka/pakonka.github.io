import { Space, Table, Button, Modal, Form, Input } from "antd";
import ProductsForm from "./ProductsForm";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useSearchParams } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Column } = Table;

interface DataType {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const Products = () => {
  const location = useLocation();
  const [paramss] = useSearchParams();

  const page = paramss.get("page");

  console.log(location);
  console.log(page);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const queryClient = useQueryClient();
  const editProduct = async (newProduct: DataType) => {
    axios
      .post("https://api.escuelajs.co/api/v1/products/", newProduct)
      .then((respond) => respond.data);
  };
  const onFinish = (values: any) => {
    console.log(`finish`, values);
    values = { ...values, image: [values.images] };
    editProductMutation.mutate(values);
  };
  const editProductMutation = useMutation({
    mutationFn: editProduct, // ham fetch API voi method post
    // khi thanh cong thi lam gi do
    onSuccess: () => {
      console.log("Success");
      // Làm tươi lại dữ liệu, ở trang danh sách, danh sach tu dong cap nhap
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const deleteProduct = async (id: DataType) => {
    axios
      .delete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((respond) => respond.data);
  };
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct, // ham fetch API voi method post
    // khi thanh cong thi lam gi do
    onSuccess: () => {
      console.log("Success");
      // Làm tươi lại dữ liệu, ở trang danh sách, danh sach tu dong cap nhap
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getProducts = async () => {
    return axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.data);
  };

  const { isPending, error, data, isError } = useQuery<DataType[], Error>({
    queryKey: ["products"], // ten bo nho cache
    queryFn: getProducts, // ham fetch API
    enabled: true, // cho phep goi API
  });
  return (
    <>
      <h1 className="my-10 text-center text-[20pt] font-bold">PRODUCTS</h1>
      <ProductsForm />
      {isError && error ? (
        <p>"An error has occurred: " + {error.message}</p>
      ) : null}
      <Table dataSource={data} loading={isPending}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column
          title="Title"
          dataIndex="title"
          key="title"
          render={(_, records) => {
            return <Link to={`${records.id}`}>{records.title}</Link>;
          }}
        />
        <Column title="Price" dataIndex="price" key="price" />
        <Column
          title="Action"
          key="action"
          render={(_, records) => (
            <Space size="middle">
              <a>
                <Button
                  onClick={() => {
                    showModal();
                    form.setFieldsValue(records);
                  }}
                  type="primary"
                  ghost
                >
                  Edit
                </Button>
              </a>
              <a>
                <Button
                  danger
                  ghost
                  onClick={() => {
                    console.log(`Delete`, records.id);
                    deleteProductMutation.mutate(records.id);
                  }}
                >
                  Delete
                </Button>
              </a>
            </Space>
          )}
        />
      </Table>
      <>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
          >
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item
              name="categoryId"
              label="ID"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="images"
              label="Images"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </>
    </>
  );
};

export default Products;
