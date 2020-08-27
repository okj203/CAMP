"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _session_actions = require("../actions/session_actions");

var _nullErrors = [];

var SessionErrorsReducer = function SessionErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullErrors;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _session_actions.RECEIVE_SESSION_ERRORS:
      return action.errors;

    case _session_actions.CLEAR_SESSION_ERRORS:
      return _nullErrors;

    case _session_actions.RECEIVE_CURRENT_USER:
      return _nullErrors;

    default:
      return state;
  }
};

var _default = SessionErrorsReducer;
exports["default"] = _default;