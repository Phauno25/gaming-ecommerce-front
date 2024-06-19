import {
  EditAddressFormValues,
  UserAddress,
  UserAddressApiResponse,
} from "../types/types";

export const addressService = {
  getAllByUserId: async (id: number, token: string) => {
    const url =
      process.env.NEXT_PUBLIC_API_URL +
      `/addresses?filters[user][id][$eq]=${id}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, params);
    const jsonResponse: { data: UserAddressApiResponse[] } =
      await response.json();
    const result: UserAddress[] = [];
    jsonResponse.data.map((address) => {
      const { id, attributes } = address;

      result.push({ ...attributes, id });
    });
    return result;
  },
  editAddress: async (
    id: number,
    data: EditAddressFormValues,
    token: string
  ) => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + `/addresses/${id}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      console.log(params.body);
      const response = await fetch(url, params);
      const result: UserAddress[] = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  },
};
