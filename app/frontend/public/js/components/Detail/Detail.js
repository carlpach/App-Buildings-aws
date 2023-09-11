import { useParams } from 'react-router-dom';
import "./Detail.css";
import { useNavigate } from 'react-router-dom';
import { APIJson } from "../../services/api";

var Detail = function Detail(_ref) {
    var buildings = _ref.buildings,
        user = _ref.user,
        handleUser = _ref.handleUser;


    var navigate = useNavigate();
    console.log("detail page running -------");
    console.log(user);

    var _useParams = useParams(),
        id = _useParams.id; // Building Id


    console.log("Buldingid-----", id);
    console.log(buildings);
    var building = buildings.find(function (item) {
        return item._id === id;
    });

    console.log(building);

    var handleAddBuildingToUser = function handleAddBuildingToUser(ev) {
        console.log("handle click add build to user -------");

        // check if buidling exists in user
        if (user.user.properties.includes(id)) {
            alert('Building already added to ' + user.user.userName);
        } else {

            console.log(id);
            APIJson.put('/users/' + id, { _id: user.user._id }).then(function (resp) {
                console.log(resp);
                alert('Added to user ' + user.user.userName);
                setTimeout(function () {
                    navigate('/profile');
                }, 300);

                console.log("response data ------", resp.data);
                handleUser({ "user": resp.data, "token": user.token });
                return resp.data;
            }, function (error) {
                console.log(error);
            });
        }
    };

    var handleDeleteBuildingToUser = function handleDeleteBuildingToUser(ev) {
        console.log("handle click delete building to user -------");
        console.log(id);
        APIJson.put('/users/deleteProp/' + id, { _id: user.user._id }).then(function (resp) {
            console.log(resp);
            alert('Deleted for user ' + user.user.userName);
            setTimeout(function () {
                navigate('/profile');
            }, 500);

            console.log("response data ------", resp.data);
            handleUser({ "user": resp.data, "token": user.token });
            return resp.data;
        }, function (error) {
            console.log(error);
        });
    };

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'b-detail' },
            React.createElement('img', { className: 'b-detail__img', src: building.image, alt: 'building' }),
            React.createElement(
                'div',
                { className: 'b-detail__text' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h2',
                        null,
                        building.name
                    ),
                    React.createElement(
                        'h4',
                        null,
                        building.constructionYear
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'span',
                        { onClick: handleAddBuildingToUser, className: 'material-icons material-icons--grey' },
                        'post_add'
                    ),
                    React.createElement(
                        'span',
                        { onClick: handleDeleteBuildingToUser, className: 'material-icons material-icons--red' },
                        'delete'
                    )
                )
            )
        )
    );
};

export default Detail;