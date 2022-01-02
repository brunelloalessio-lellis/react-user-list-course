import "./UserListItem.css";

const UserListItem = (props) => {
  return (
    <div className="user-list-item">
      {props.username} ({props.age} years old)
    </div>
  );
};

export default UserListItem;
