import axios from "axios";
/**
 * ? Local Imports
 */
import { BASE_URL } from "services/api/Api.constant";

/**
 * ? Example of an api fetch usage
 */
export const fetchExample = () =>
  new Promise(async (resolve, reject) => {
    try {
      const url = `${BASE_URL}`;
      const headers = {};
      axios
        .get(url, { headers })
        .then(res => {
          res.data && resolve(res.data);
        })
        .catch(err => {
          reject(err);
          console.log("Fetching Axios error: ", err);
        });
    } catch (error) {
      console.log("fetchExample Error: ", error);
    }
  });
