import React, {useState, useEffect} from 'react';
import './index.scss';

const Sidebar = () => {
    const [information, setInformation] = useState<object>({
        avatar: '',
        login: '',
        followers: 0,
        following: 0,
    });

    useEffect(() => {
        fetch('https://api.github.com/users/xMetaneRx')
            .then(res => res.json())
            .then(info => setInformation({
                avatar: info.avatar_url,
                login: info.login,
                followers: info.followers,
                following: info.following,
            }))
    }, [])

    return (
        <>
            <section className="information">
                <img src={information['avatar']} alt="avatar" />
                <p className='information__login'>{information ? information['login'] : ''}</p>
                <div>
                    <p>{information['followers']} followers</p>
                    <p>{information['following']} following</p>
                </div>
                <a href="/">Linkedin</a>
                <a href="/">Github</a>
            </section>
        </>
    )
}

export default Sidebar;