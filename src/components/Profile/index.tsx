import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown";
import './index.scss';

const Profile = () => {
    const [content, setContent] = useState<any>('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MetaneRuS/MetaneRuS/main/README.md')
            .then(res => res.text())
            .then(data => setContent(data));
    }, [])

    return (
        <div className="profile">
            <h2 className="profile__link">MetaneRuS/README.md</h2>
            <ReactMarkdown children={content} />
            <h4>I enjoy programming, creating Web applications, listening to music (mostly rap). I am currently developing my skills in: Javascript, React, Redux, Typescript</h4>
        </div>
    )
}

export default Profile;