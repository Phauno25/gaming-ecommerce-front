import { AuthUser, LoginFormValues, RegisterFormValues } from "../types/types";

export const authService = {
  register: async (data: RegisterFormValues) => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/auth/local/register";
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  },
  login: async (bodyData: LoginFormValues) => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/auth/local";
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      };
      const response = await fetch(url, params);
      const loginData = await response.json();

      if (response.status !== 200) throw loginData;

      const sessionExpirationDate = new Date();
      const loggedUser: AuthUser = {
        token: loginData.jwt,
        expiry: sessionExpirationDate.setDate(
          sessionExpirationDate.getDate() + 30
        ),
        id: loginData.user.id,
        firstName: loginData.user.firstName,
        lastName: loginData.user.lastName,
        createdAt: loginData.user.createdAt,
        username: loginData.user.username,
        email: loginData.user.email,
      };
      localStorage.setItem(
        process.env.NEXT_PUBLIC_AUTH_USER!,
        JSON.stringify(loggedUser)
      );
      return true;
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem(process.env.NEXT_PUBLIC_AUTH_USER!);
  },
};
