import {
  GETPROFILE,
  UPDATEPROFILE,
  UPDATEPROFILEPIC,
  ADDADDRESS,
  DELETEADDRESS,
  GETPAYMENT,
  ADDORUPDATEPAYMENT,
  DELETEPAYMENT,
  GETADDRESS
} from "./actionType";
import configPath from "../../configApp";
import axios from "axios";

//GET PROFILE Dispatcher
const getProfileDispatcher = payload => {
  return {
    type: GETPROFILE,
    payload
  };
};

//update profile Dispatcher
const updateProfileDispatcher = payload => {
  return {
    type: UPDATEPROFILE,
    payload
  };
};

//update profile Dispatcher
const updateProfilePicDispatcher = payload => {
  return {
    type: UPDATEPROFILEPIC,
    payload
  };
};
const addAddressDispatcher = payload => {
  return {
    type: ADDADDRESS,
    payload
  };
};
const getAddressDispatcher = payload => {
  return {
    type: GETADDRESS,
    payload
  };
};
const deleteAddressDispatcher = payload => {
  return {
    type: DELETEADDRESS,
    payload
  };
};
const getPaymentDispatcher = payload => {
  return {
    type: GETPAYMENT,
    payload
  };
};
const addOrUpdatePaymentDispatcher = payload => {
  return {
    type: ADDORUPDATEPAYMENT,
    payload
  };
};
const deletePaymentDispatcher = payload => {
  return {
    type: DELETEPAYMENT,
    payload
  };
};
export const sendModalStatus = payload => {
  return {
    type: "SENDMODALSTATUS",
    payload
  };
};

//login thunk function. Delays dispatcher
export const getProfile = () => {
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );
    //make a get request to fetch customer profile
    axios
      .get(
        configPath.api_host +
          `/customer/profile/${localStorage.getItem("emailId")}`
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(getProfileDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateProfile = payload => {
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );
    //make a put request to update customer profile
    console.log("in update profile action");
    axios
      .put(
        configPath.api_host + `/customer/profile/updateProfileDetails`,
        payload
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(updateProfileDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//thunk for updating profile pic for customer
export const updateProfilePicture = payload => {
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    //make a put request to update customer profile pic
    console.log("in update profile action");
    axios
      .put(
        configPath.api_host + `/customer/profile/updateProfilePicture`,
        payload,
        config
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(updateProfilePicDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
//thunk for getting addresses
export const getAddress = () => {
  //make a get request to fetch saved addresses
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );

    console.log("in update profile action");
    axios
      .get(
        configPath.api_host + `/customer/address/${localStorage.getItem("ID")}`
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(getAddressDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addAddress = payload => {
  //make a post request to add saved addresses
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );

    console.log("in update profile action");
    axios
      .post(
        configPath.api_host + `/customer/address/${localStorage.getItem("ID")}`,
        payload
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(addAddressDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteAddress = payload => {
  //make a delete request to delete saved addresses
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );

    console.log("in update profile action");
    axios
      .delete(
        configPath.api_host + `/customer/address/${localStorage.getItem("ID")}`,
        payload
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(deleteAddressDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//get customer payment thunk
export const getPayment = payload => {
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );

    console.log("in update profile action");
    axios
      .get(
        configPath.api_host + `/customer/payment/${localStorage.getItem("ID")}`
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(getPaymentDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//payment add or update thunk
export const addOrUpdatePayment = payload => {
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );

    console.log("in update profile action");
    axios
      .post(
        configPath.api_host + `/customer/payment/${localStorage.getItem("ID")}`,
        payload
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(addOrUpdatePaymentDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//delete customer payment thunk
export const deletePayment = payload => {
  return dispatch => {
    axios.defaults.headers.common.authorization = localStorage.getItem(
      "IDToken"
    );

    console.log("in update profile action");
    axios
      .delete(
        configPath.api_host + `/customer/payment/${localStorage.getItem("ID")}`,
        payload
      )
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200) {
          console.log(response.data);
          dispatch(deletePaymentDispatcher(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
