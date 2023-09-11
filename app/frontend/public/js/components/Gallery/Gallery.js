import './Gallery.css';
import { Link } from "react-router-dom";

var Gallery = function Gallery(_ref) {
    var buildings = _ref.buildings,
        flagProfile = _ref.flagProfile;

    console.log("this is gallery");
    console.log(buildings);

    return React.createElement(
        "div",
        { className: "b-gallery" },
        flagProfile ? React.createElement(React.Fragment, null) : React.createElement(
            Link,
            { to: "/add", className: "b-card__add" },
            React.createElement(
                "li",
                { className: "b-card__add" },
                React.createElement(
                    "div",
                    { className: "b-iconAdd" },
                    "+"
                )
            )
        ),
        buildings.map(function (item, i) {
            return React.createElement(
                "li",
                { className: "b-card", key: i },
                React.createElement(
                    Link,
                    { to: "/building/" + item._id },
                    React.createElement("img", { className: "b-image", src: item.image, alt: "building" }),
                    React.createElement(
                        "h2",
                        null,
                        item.name
                    ),
                    React.createElement(
                        "h3",
                        null,
                        item.constructionYear
                    )
                )
            );
        })
    );
};

export default Gallery;