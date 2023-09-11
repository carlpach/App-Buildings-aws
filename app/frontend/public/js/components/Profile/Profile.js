import Gallery from "../Gallery/Gallery";
import "./Profile.css";

var Profile = function Profile(_ref) {
  var buildings = _ref.buildings,
      user = _ref.user;

  console.log("Profile running ------->");
  var buildingsUser = buildings.filter(function (buildg) {
    return user.user.properties.includes(buildg._id);
  });
  console.log("buildingsUser------", buildingsUser);

  var placeholderImg = "https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image";

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "b-profile" },
      React.createElement("img", { className: "b-profile__img", src: user.user.image ? user.user.image : placeholderImg, alt: "user" }),
      React.createElement(
        "h2",
        null,
        user.user.userName
      ),
      React.createElement(
        "h4",
        null,
        user.user.email
      )
    ),
    React.createElement(
      "h2",
      { className: "b-profile__title" },
      "My buildings"
    ),
    React.createElement(Gallery, { buildings: buildingsUser, flagProfile: true })
  );
};

export default Profile;