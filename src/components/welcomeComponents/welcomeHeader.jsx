import React from 'react';

function WelcomeHeader({headline}) {
    return (
        <div className='text-center center-children'>
            <h1 className="wave-emoji mb-20" >👋</h1>
            <h1 className="mb-10">Welcome to <span className="bold">waypoint.</span></h1>
            <p className="mb-10">{headline}</p>
            <div className="deco-line-400 mb-20"></div>
        </div>
    );
}

export default WelcomeHeader;
