import Card from "./Card";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <Card key={user.id}>
          {user.username} ({user.age} Years)
        </Card>
      ))}
    </ul>
  );
};

export default UserList;
 