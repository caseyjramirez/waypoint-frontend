const { testSessionData } = require('../services/services')

function Home() {
    function handleClick() {
        testSessionData()
    }
    return (
        <div>
            <h1>Welcome Home!</h1>
            <button onClick={handleClick}>test me out!</button>
        </div>
    );
}

export default Home;