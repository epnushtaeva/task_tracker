import {createStore} from "redux";
import appReducers from "./index";

const store = createStore(appReducers);

export default store