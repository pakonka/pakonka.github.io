import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

const schema = yup
  .object({
    Name: yup.string().min(6, "at least 6 characters").required(),
    Image: yup.string().optional(),
  })
  .required();

export function AddCategory({
  setIsFresh,
}: {
  setIsFresh: (v: boolean) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  interface FormData {
    Name: string;
    Image: string;
  }

  const onSubmit = async (data: FormData) => {
    console.log(`data`, data);
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/categories/",
        {
          name: data.Name,
          image: data.Image,
        }
      );
      if (res.status === 201) {
        setIsLoading(false);
        reset();
        setSuccess(true);
        setIsFresh(true);
      }
      console.log(`res`, res);
    } catch (e: any) {
      setError(e.message);
      setIsLoading(false);
      console.log(`error`, error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-2 p-3 border-[#ccc] border-[1px] rounded-md w-[250px]"
    >
      <h1 className="text-center mb-3 font-bold">Add Category</h1>
      {success ? (
        <div className="text-[#d62727] bg-red-100 py-1 px-2 text-[9pt] rounded-sm my-2">
          Successfully!
        </div>
      ) : (
        ""
      )}

      {error !== "" && (
        <div className="text-[#d62727] bg-red-100 py-1 px-2 text-[9pt] rounded-sm my-2">
          {error}
        </div>
      )}

      <input {...register("Name")} placeholder="Name" />
      <p>{errors.Name?.message}</p>

      <input {...register("Image")} placeholder="Image" />
      <p>{errors.Image?.message}</p>

      <button
        disabled={isLoading}
        className="m-3 px-2 py-1 rounded-md w-[100px]"
        type="submit"
      >
        {isLoading ? `Loading...` : `Submit`}
      </button>
    </form>
  );
}
type TEdit = {
  setIsFresh: (v: boolean) => void;
};
export function EditCategory({ setIsFresh }: TEdit) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  interface FormData {
    Name: string;
    Image: string;
  }

  const onSubmit = async (data: FormData) => {
    console.log(`data`, data);
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/categories/",
        {
          name: data.Name,
          image: data.Image,
        }
      );
      if (res.status === 201) {
        setIsLoading(false);
        reset();
        setSuccess(true);
        setIsFresh(true);
      }
      console.log(`res`, res);
    } catch (e: any) {
      setError(e.message);
      setIsLoading(false);
      console.log(`error`, error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-2 p-3 border-[#ccc] border-[1px] rounded-md w-[250px]"
    >
      <h1 className="text-center mb-3 font-bold">Edit Category</h1>
      {success ? (
        <div className="text-[#d62727] bg-red-100 py-1 px-2 text-[9pt] rounded-sm my-2">
          Successfully!
        </div>
      ) : (
        ""
      )}

      {error !== "" && (
        <div className="text-[#d62727] bg-red-100 py-1 px-2 text-[9pt] rounded-sm my-2">
          {error}
        </div>
      )}

      <input {...register("Name")} placeholder="Name" />
      <p>{errors.Name?.message}</p>

      <input {...register("Image")} placeholder="Image" />
      <p>{errors.Image?.message}</p>

      <button
        disabled={isLoading}
        className="m-3 px-2 py-1 rounded-md w-[100px]"
        type="submit"
      >
        {isLoading ? `Loading...` : `Submit`}
      </button>
    </form>
  );
}
