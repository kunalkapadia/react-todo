import React, {PropTypes} from 'react';

const ToDoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.item} onChange={props.handleChange}/>
      <button type="submit">Add</button>
    </form>
  )
};

ToDoForm.propTypes = {
  item: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ToDoForm;
