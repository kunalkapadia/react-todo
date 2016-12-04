import React, {PropTypes} from 'react';

const ToDoList = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

ToDoList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ToDoList;