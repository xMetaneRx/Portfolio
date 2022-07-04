import "./index.scss";

const Profile = () => {
    return (
        <div className="profile">
            <h2 className="profile__link">xMetaneRx/README.md</h2>
            <h3 className="profile__description">
                I enjoy programming, creating Web applications, listening to
                music (mostly rap). I am currently developing my skills in:
                Javascript, React, Redux, Typescript
            </h3>
            <div className="profile__connection">
                <h3>Connect with me:</h3>
                <a href="https://dev.to/metanerus" target="blank">
                    <img
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg"
                        alt="dev.to"
                        height="30"
                        width="40"
                    />
                </a>
            </div>
            <div className="profile__information">
                <h3>Languages and Tools:</h3>
                <a href="https://www.w3schools.com/css/" target="_blank">
                    {" "}
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a href="https://firebase.google.com/" target="_blank">
                    {" "}
                    <img
                        src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                        alt="firebase"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a href="https://git-scm.com/" target="_blank">
                    {" "}
                    <img
                        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                        alt="git"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a href="https://www.w3.org/html/" target="_blank">
                    {" "}
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                >
                    {" "}
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a href="https://www.linux.org/" target="_blank">
                    {" "}
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                        alt="linux"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a href="https://reactjs.org/" target="_blank">
                    {" "}
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                        width="40"
                        height="40"
                    />{" "}
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                    {" "}
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="typescript"
                        width="40"
                        height="40"
                    />{" "}
                </a>
            </div>
            <div className="profile__readme__stats">
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=xmetanerx&show_icons=true&locale=en&layout=compact"
                    alt=""
                />
            </div>
            <div className="profile__readme__streak">
                <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=xmetanerx&"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Profile;
