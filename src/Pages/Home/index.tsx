import React from "react";
import { UserContext } from "../../Context/UserContext";

function Home() {
    const {user} = React.useContext(UserContext);

    return (
        <>
            <h3>Página inicial</h3>
        </>
    )

}

export default Home;