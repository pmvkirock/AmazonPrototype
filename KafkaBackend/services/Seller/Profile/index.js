"use strict";
const { getProfile } = require('./getProfile');
const { updateProfile } = require('./updateProfile');
const { updateProfilePicture } = require('./updateProfilePicture');

function handle_request(msg, callback) {
  switch (msg.path) {
    case "seller_get": 
        getProfile(msg, callback);
        break;
    case "seller_update_profile":
        updateProfile(msg, callback);
        break;
    case "seller_update_profilePicture":
        updateProfilePicture(msg, callback);
        break;
  }
}

exports.handle_request = handle_request;