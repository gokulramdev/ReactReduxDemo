import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const submit = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      {user.loading ? (
        <h2>Lodding</h2>
      ) : user.error ? (
        <h1>Some Time wrong</h1>
      ) : (
        user.users.map((user) => <p>{user.name}</p>)
      )}
    </>
  );
}

export default User;
