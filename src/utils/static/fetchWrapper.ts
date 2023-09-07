import { TOKEN } from "./constants";

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: TOKEN,
  },
};

const fetchWrapper = async (url: string) => {
  const response = await fetch(url, OPTIONS);
  try {
    const res = response.json();
    return res;
  } catch (error) {
    return error;
  }
};
export default fetchWrapper;
