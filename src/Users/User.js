// @flow
import React, { useState } from 'react';
import './User.scss';

type UserPropsType = {
  id: string | number,
  name: string,
  updateUser: Function,
  deleteUser: Function
};

function User(props: UserPropsType) {
  const { id, name, updateUser, deleteUser } = props;
  const [userName, setName] = useState(name);
  const [value, setValue] = useState(false);

  return (
      <li
          className="User"
          onMouseOver={() => setValue(true)}
          onMouseLeave={() => setValue(false)}
      >
        <input
            type="text"
            value={userName}
            className="User__input"
            onBlur={() => updateUser(id, userName)}
            onChange={e => setName(e.target.value)}
        />
        {value ? (
            <span
                className="User__delete"
                onClick={() => deleteUser(id)}
            >
              &#735;
            </span>
        ) : null}
      </li>
  )
}

export {User};
