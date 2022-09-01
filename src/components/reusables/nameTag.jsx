const imgSrc = 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

function NameTag() {
    return (
        <div className="name-tag">
            <img src={imgSrc} alt="" className="avatar"/>
            <h3>Casey Ramirez</h3>
        </div>
    );
}

export default NameTag;