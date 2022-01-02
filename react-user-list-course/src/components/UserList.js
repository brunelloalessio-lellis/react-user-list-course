import UserListItem from "./UserListItem";
import Card from "./wrappers/Card";

const UserList = (props) => {
  const userList = props.userList;
  const userListItems = userList.map((user) => {
    return (
      <UserListItem key={user.id} username={user.username} age={user.age} />
    );
  });

  if (userList.length === 0) {
    return (
      <Card>
        <div>Empty user list</div>
      </Card>
    );
  }

  return (
    <Card>
      <div>{userListItems}</div>
    </Card>
  );
};

export default UserList;
