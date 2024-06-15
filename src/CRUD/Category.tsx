import { useState, useEffect } from "react";
import axios from "axios";
import { AddCategory, EditCategory } from "./AddCategory";

type Cate = {
  name: string;
  image: string;
  id: number;
};
const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFresh, setIsFresh] = useState(true);
  const handleDelete = async (categoryId: number) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/categories/${categoryId}`;
      const res = await axios.delete(url);
      console.log(res);
      if (res.status === 200) {
        alert(`Delete category ${categoryId} successfully!`);
        setIsFresh(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categorys);
  useEffect(() => {
    setIsLoading(true);
    const GetAPI = () => {
      axios
        .get(`https://api.escuelajs.co/api/v1/categories`)
        .then((res) => {
          const respond = res.data;
          setCategorys(respond);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    };
    GetAPI();
  }, [isFresh]);

  return (
    <div>
      <h1 className="text-[20pt] text-center">Category</h1>
      <div>
        <AddCategory setIsFresh={setIsFresh} />
      </div>
      <div>
        <EditCategory setIsFresh={setIsFresh} />
      </div>
      <div className="">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          categorys.length > 0 &&
          categorys.map((category: Cate) => (
            <div key={category.id} className="grid grid-cols-3  ">
              <div>
                <p>{category.id}</p>
                <h1 className="px-10 text-[15pt] font-bold">{category.name}</h1>
              </div>
              <img className="w-[180px] p-2" src={category.image} alt="" />
              <div className="grid gap-2 grid-cols-2 w-[150px] h-[15px]">
                <button className="text-[#fff] bg-[#5798c9] rounded-md p-1">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="text-[#fff] bg-[#f67575] rounded-md p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
