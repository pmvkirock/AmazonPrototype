import { combineReducers } from "redux";
import userType from "./userType";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import customerProfileReducer from "./customerProfileReducer";
import categoryReducer from "./categoryReducer";
import sellerReducer from "./admin/sellerReducer.js";
import productReducer from "./productReducer";
import savedAndCartProductReducer from "./savedAndCartProductReducer";
import categoryReducer1 from "./admin/categoryReducer.js";
import customerOrderReducer from "./customerOrderReducer";
import customerCheckoutReducer from "./customerCheckoutReducer";
import sellerOrderReducer from "./sellerOrderReducer";
import adminOrderReducer from "./adminOrderReducer";
import trackingReducer from "./trackingReducer"

const allReducers = combineReducers({
  userType,
  userReducer,
  profile: profileReducer,
  customerProfileReducer,
  categoryReducer,
  category: categoryReducer1,
  sellerAdmin: sellerReducer,
  product: productReducer,
  savedAndCartProductReducer,
  customerOrderReducer,
  customerCheckoutReducer,
  sellerOrderReducer,
  trackingReducer,
  adminOrderReducer
});

export default allReducers;
