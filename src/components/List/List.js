import React from "react";
import {Button} from "../Button/Button"


export function List({ wishesList }) {

  let listKey = 0
  return (
    <div>
      {wishesList.map(function (i) {
        return (
          <div key={listKey++} className="card">
            <h4>{i}</h4>
          </div>
        );
      })}
    </div>
  );
}

