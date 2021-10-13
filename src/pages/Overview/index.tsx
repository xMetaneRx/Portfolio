import React, {useEffect} from 'react';
import Profile from "../../components/Profile";

function Overview() {
    useEffect(() => {
        document.title = 'Overview';
    }, []);

    return (
        <Profile />
    );
}

export default Overview;