import React, { useEffect } from "react";
import Contact from "../../components/Contact";

function ContactMe() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    return <Contact />;
}

export default ContactMe;
