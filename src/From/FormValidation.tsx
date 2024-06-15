import { useForm, SubmitHandler } from "react-hook-form";
import { FaStar, FaRegStar } from "react-icons/fa6";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}
export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="font-semibold p-6 border-[1px] w-[350px] border-black">
        <h1 className="mx-3 font-bold text-[18pt] text-[#f00] ">
          Mời bạn chọn đánh giá
        </h1>
        <br />
        <span className="stars_bar flex">
          <i>
            <FaStar />
          </i>
          <i>
            <FaRegStar />
          </i>
        </span>
        <br />
        <textarea
          className="h-[80px] border-[1px] w-[300px]"
          required
          placeholder="Nội dung tiếng việt có dấu"
          name="content"
          id="content"
        ></textarea>
        <br />
        <div>
          <label className="mx-3">User Name</label>
          <input
            type="text"
            placeholder="Tên (bắt buộc)"
            required
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <br />
        <div>
          <label className="mx-3">Email</label>
          <input
            type="email"
            placeholder="Email (bắt buộc)"
            required
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <br />
        <div>
          <label className="mx-3">Password</label>
          <input type="password" placeholder="Password (bắt buộc)" required />
        </div>
        <br />
        <div>
          <label className="mx-3">Mobile</label>
          <input
            type="text"
            placeholder="Số ĐT (tùy chọn)"
            required
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <br />
        <input
          className="mx-[100px] px-3 py-1"
          type="submit"
          value="Đánh giá"
        />
      </div>
    </form>
  );
}
