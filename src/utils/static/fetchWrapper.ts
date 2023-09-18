import { TOKEN } from "./constants";

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TOKEN,
  },
};

const fetchWrapper = async (url: string) => {
  const response = await fetch(url, OPTIONS);
  try {
    const res = response.json();
    return res;
  } catch (error: any) {
    console.error(error.message);
  }
};
export default fetchWrapper;
