function GreetingMessage({firstName}) {
    return (
        <div className="mb-20">
            <h1 className="mb-10">Welcome back, {firstName} 👋</h1>
            <h3 className="light-color">You have 3 tasks to complete today...</h3>
        </div>
    );
}

export default GreetingMessage;