var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// indicamos que el valor inicial de email y password sea vacio en los campos de input del formulario
var initial_state = {
    email: "",
    password: ""
};

var Login = function Login(_ref) {
    var loginUser = _ref.loginUser,
        loginError = _ref.loginError;

    // recoger informacion del formulario con formData
    var _useState = useState(initial_state),
        _useState2 = _slicedToArray(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

    var handleSubmitForm = function handleSubmitForm(ev) {
        loginUser(formData);
    };

    var handleInput = function handleInput(ev) {
        var _ev$target = ev.target,
            name = _ev$target.name,
            value = _ev$target.value;

        setFormData(Object.assign({}, formData, _defineProperty({}, name, value)));
    };

    var handleCancel = function handleCancel() {
        setFormData(initial_state);
    };
    return React.createElement(
        "div",
        { className: "login" },
        React.createElement(
            "h1",
            null,
            "Building platform"
        ),
        React.createElement(
            "form",
            { onSubmit: function onSubmit(ev) {
                    return ev.preventDefault();
                } },
            React.createElement(
                "label",
                { htmlFor: "email" },
                "Email"
            ),
            React.createElement("input", { type: "text", id: "email", name: "email", placeholder: "email@upgrade.com", onChange: handleInput, value: formData.email }),
            React.createElement("br", null),
            React.createElement(
                "label",
                { htmlFor: "password" },
                "Password"
            ),
            React.createElement("input", { type: "password", id: "password", name: "password", onChange: handleInput, value: formData.password }),
            React.createElement("br", null),
            React.createElement("input", { type: "submit", value: "Sign in", onClick: handleSubmitForm }),
            React.createElement("input", { type: "submit", value: "Cancel", onClick: handleCancel })
        ),
        loginError ? React.createElement(
            "p",
            null,
            loginError
        ) : null,
        React.createElement(
            "div",
            { className: "login__register" },
            React.createElement(
                "div",
                null,
                "Not registered yet?"
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    Link,
                    { to: "/Register" },
                    React.createElement(
                        "button",
                        null,
                        "Register"
                    )
                )
            )
        )
    );
};

export default Login;