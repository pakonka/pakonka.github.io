import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <h1>Registered Form</h1>
        <div>
          <input defaultValue="test" {...register("example")} />
        </div>
        <div>
          <input {...register("exampleRequired", { required: true })} />

          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
}
