import axios from "axios";
import { useState } from "react";
import { useAuth } from "../Stores/useAuth";

type TUser = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const [userr, setUserr] = useState<TUser>({
    email: "",
    password: "",
  });
  const { setUser } = useAuth();
  return (
    <div>
      <div>LoginPage</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            const fetchLogin = async () => {
              const res = await axios.post(
                "https://api.escuelajs.co/api/v1/auth/login",
                userr
              );
              if (res.status === 200) {
                localStorage.setItem("access_token", res.data.access_token);
                // goi API lay profile
                const response = await axios.get(
                  "https://api.escuelajs.co/api/v1/auth/profile",
                  {
                    headers: {
                      Authorization: `Bearer ${res.data.access_token}`,
                    },
                  }
                );
                console.log(response);
                setUser(response.data);
              }
              console.log(res.data);
            };
            fetchLogin();
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <input
          onChange={(e) => setUserr({ ...userr, email: e.target.value })}
          type="email"
          value={userr.email}
          placeholder="email"
        />
        <input
          onChange={(e) => setUserr({ ...userr, password: e.target.value })}
          type="password"
          value={userr.password}
          placeholder="password"
        />
        <button type="submit" onClick={() => {}}>
          Login
        </button>
      </form>
    </div>
  );
};
