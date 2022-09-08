import StatusTag from "./statusTag";

function TagList({status}) {
    return (
        <div className="tag-list">
            <StatusTag
                status={status}
            />
        </div>
    );
}

export default TagList;