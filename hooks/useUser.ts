import { useQuery } from "react-query";
import useSessionStorage from "./useSessionStorage";

const useUser = () => {
  const [storage] = useSessionStorage({ key: "wxt_token" });

  const getuser = () =>
    fetch("/api/user", {
      headers: {
        authorization: `Bearer ${storage.token}`,
      },
    })
      .then((r) => r.json())
      .then((data) => data);

  const { isLoading, data } = useQuery(["user"], () => getuser());

  return { user: data, isLoading };
};

export default useUser;
