import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const { data } = await axios.get("/api/v1/me");
    resolve(data);
  });
}
