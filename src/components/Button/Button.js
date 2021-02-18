import React from "react";

export function Button() {

    const [deleteState, deleteSetState] = React.useState()


const removeWish = () => {
  // logica para remover 1 wish del array 
}

  return (
    <button className="button" onClick={removeWish}>
      remove
    </button>
  );
}