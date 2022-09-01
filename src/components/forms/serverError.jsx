import React from "react";

function ServerError({serverError}) {

    return <>{serverError && 
    <div className="server-error-container center-children">
        <p>{serverError}</p>
    </div>}
    </>
}

export default ServerError;