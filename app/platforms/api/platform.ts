export const platformService = {
  getAll: async () => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/platforms?populate=*";
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
