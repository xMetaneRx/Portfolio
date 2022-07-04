import React, { useEffect } from "react";
import Repository from "../../components/Repository";

function Repositories() {
    useEffect(() => {
        document.title = "Repositories";
    }, []);

    return <Repository />;
}

export default Repositories;
