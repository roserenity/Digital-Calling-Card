import profileImg from '../images/abigail.jpg'
function Header() {
    return (
        <div>
            <img src={profileImg} className="profile-img" alt="my profile pic"/>
            <div className="header">
                <h1>Abigail Calong</h1>
                <h3>Web Developer</h3>
                <h4>abigailc-resume.netlify.app</h4>
                <div className="profile-contacts">
                    <a href="mailto:calongabigail@gmail.com">
                        <button className="btn-email"> Email </button>
                    </a>
                    <a href="https://www.linkedin.com/in/abigail-acierto-calong" target="_blank" rel="noreferrer">
                        <button className="btn-linkedin"> LinkedIn </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;