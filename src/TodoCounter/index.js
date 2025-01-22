import { TodoContext } from '../newContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos
  } =React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      {completedTodos === totalTodos && totalTodos > 0 ? (
        "¡Felicidades! Has completado todos tus TODOs 🎉"
      ) : (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </>
      )}
    </h1>
  );
}
export { TodoCounter };