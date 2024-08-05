import { useQuery } from "@tanstack/react-query";
import AxiosLoginInstance from "../axios/AxionsLoginInstance";
import { useNavigate } from "react-router-dom";

// export const useLogin = () => {
//   const navigate = useNavigate()
//   const { data, error, isLoading } = useQuery("login", () =>
//     AxiosLoginInstance.post("/login", {
//       username: "admin",
//       password: "admin",
//     })
//   );

//   if (error) {
//     console.log(error)
//   }

//   if (data) {
//     console.log(data)
//     navigate("/")
//   }
// }


