import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { fetchUsers } from "./../store/action-creators/user";
import { useActions } from "./../hooks/useActions";

const UserList: FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);

  return (
    <>
      {loading ? <h1>Идет загрузка...</h1> : <h1>{error}</h1>}
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export default UserList;
