import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface DataType {
  categoryId: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  image?: string;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ProductsForm: React.FC = () => {
  const queryClient = useQueryClient();

  const createProductMain = async (newProduct: DataType) => {
    try {
      const respond = await axios.post(
        "https://api.escuelajs.co/api/v1/products/",
        newProduct
      );
      console.log(respond.data);
      return respond.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };

  const createProductMainMutation = useMutation({
    mutationFn: createProductMain, // ham fetch API voi method post
    // khi thanh cong thi lam gi do
    onSuccess: () => {
      console.log("Success");
      // Làm tươi lại dữ liệu, ở trang danh sách, danh sach tu dong cap nhap
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const [formMain] = Form.useForm();

  const onFinish = (values: DataType) => {
    console.log(`finish`, values);
    values = { ...values, images: values.image ? [values.image] : [] };
    createProductMainMutation.mutate(values);
  };

  const onReset = () => {
    formMain.resetFields();
  };

  const onFill = () => {
    formMain.setFieldsValue({});
  };

  return (
    <Form
      {...layout}
      form={formMain}
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
      <Form.Item name="categoryId" label="ID" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Images" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ProductsForm;
