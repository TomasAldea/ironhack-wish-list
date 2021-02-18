import React from "react";
//import {Button} from "./src/components/Button/Button"
import {Form} from "./components/Form/Form"
import {List} from "./components/List/List"
//import {ListItem} from "./src/components/Button/Button"


function App() {
    const [wishes, setWishes] = React.useState([]);

    const arrayWish = (wish) => {
        setWishes(wishes.concat(wish))
    }

    return (
            <div className="container">
            <h1>App</h1>
            <div className="cards-container">
                <List wishesList={wishes}></List>
            </div>
            <Form arrayWish={arrayWish}/>
        </div>
    )
}

export default App