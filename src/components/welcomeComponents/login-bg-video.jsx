import WelcomeVideo from '../../assets/welcomeVideo2.mp4'

function backgroundVideo() {
    return (
        <div className="login-bg-video">
            <video loop autoPlay>
                <source src={WelcomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default backgroundVideo;