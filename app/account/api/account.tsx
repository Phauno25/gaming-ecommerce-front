import { EditUserFormValues, User } from "../types/types";

export const accountService = {
  getCurrentUser: async () => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/user/me";
      const response = await fetch(url);
      const result: User = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  },
  usernameExist: async (username: string, id: number, token: string) => {
    try {
      const url =
        process.env.NEXT_PUBLIC_API_URL +
        `/users/?filters[username]=${username}`;

      const response = await fetch(url);
      const result: User[] = await response.json();
      if (response.status !== 200) throw result;
      console.log(result[0].id);
      console.log(id);
      console.log(result.filter((user) => user.id !== id));
      return result.filter((user) => user.id !== id).length > 0 ? true : false;
    } catch (error) {
      throw error;
    }
  },
  editUser: async (id: number, data: EditUserFormValues, token: string) => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + `/users/${id}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      console.log(params.body);
      const response = await fetch(url, params);
      const result: User[] = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  },
};
