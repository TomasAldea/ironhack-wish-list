
import React from 'react';


export function Form(props) {
  const [wish, setwish] = React.useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      props.arrayWish(wish)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        write one wish:
        <input
          type="text"
          value={wish}
          onChange={e => setwish(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
