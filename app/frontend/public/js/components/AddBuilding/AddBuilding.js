var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import "./AddBuilding.css";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { API } from "../../services/api";

// initial state of form
var initState = {
    name: "",
    constructionYear: "",
    image: ""

};

var AddBuilding = function AddBuilding(_ref) {
    var handleRender = _ref.handleRender;

    var _useState = useState(initState),
        _useState2 = _slicedToArray(_useState, 2),
        formInputs = _useState2[0],
        setFormInputs = _useState2[1];

    var navigate = useNavigate();

    var handleSubmit = function handleSubmit() {
        console.log("handle click ---------------");
        console.log(formInputs);
        API.post("/properties", formInputs).then(function (resp) {
            alert("Added!");
            setTimeout(function () {
                navigate('/');
            }, 300);
            handleRender();
            return resp.data;
        }, function (error) {
            console.log(error);
        });
    };

    var handleInput = function handleInput(ev) {
        var _ev$target = ev.target,
            name = _ev$target.name,
            value = _ev$target.value;

        setFormInputs(Object.assign({}, formInputs, _defineProperty({}, name, value)));
        console.log(formInputs);
    };

    var handleInputImg = function handleInputImg(ev) {
        var value = ev.target.files[0];
        var name = ev.target.name;

        setFormInputs(Object.assign({}, formInputs, _defineProperty({}, name, value)));
        console.log(formInputs);
    };

    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { className: "b-form", onSubmit: function onSubmit(ev) {
                    return ev.preventDefault();
                } },
            React.createElement(
                "label",
                { htmlFor: "name" },
                "Name of Building"
            ),
            React.createElement("input", { type: "text", id: "name", name: "name", placeholder: "Woko Residence ", onChange: handleInput, value: formInputs.name }),
            React.createElement(
                "label",
                { htmlFor: "name" },
                "Construction Year"
            ),
            React.createElement("input", { type: "text", name: "constructionYear", placeholder: "2020", onChange: handleInput, value: formInputs.constructionYear }),
            React.createElement(
                "label",
                { htmlFor: "name" },
                "Image"
            ),
            React.createElement("input", { type: "file", id: "image", name: "image", onChange: handleInputImg }),
            formInputs.image ? React.createElement("img", { src: URL.createObjectURL(formInputs.image), alt: "upload" }) : React.createElement(React.Fragment, null),
            React.createElement("input", { type: "submit", value: "Add Building", onClick: handleSubmit })
        )
    );
};

export default AddBuilding;