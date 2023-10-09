import Api from "./Api";
import { MAIN_API_URL } from "../constants/constants";

class MainApi extends Api {
  constructor(url) {
    super(url);
    this._options.credentials = 'include'
  }

  getTriangulation({ height, radius, numberOfSegments }) {
    return this.processQuery('/triangulation', 'POST', { height, radius, numberOfSegments });
  }
}

const mainApi = new MainApi(MAIN_API_URL);
export default mainApi;
