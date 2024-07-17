import * as types from "../types"
import { config } from "../config"
import axios from "axios"
import toast from "react-hot-toast"
// import { authHeader, header } from "../header"

const url = config.liveUrl

// Action Creators
export const user_register = (userData) => async (dispatch) => {
	try {
	  dispatch({ type: types.USER_REGISTER_REQUEST });
  
	  const config = {
		headers: {
		  'Content-Type': 'application/json'
		}
	  };
  
	  const { data } = await axios.post(`${url}/client/`, userData, config);
		if (data.status === 'OK') {
			dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data });
			toast.success(data.message, {
				position: 'top-right',
			})
		} else {
				throw new Error(data.message);
		}
	} catch (error) {
	  dispatch({
		type: types.USER_REGISTER_FAIL,
		payload: error.response && error.response.data.message
		  ? error.response.data.message
		  : error.message,
	  });
	}
  };