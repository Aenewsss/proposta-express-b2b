const BriefingFlowCard = () => {
    return (
        <div className="flow-card">
            <div className="d-flex gap-4">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="pink" />
                    <circle cx="20" cy="20" r="10" fill="gray" />
                </svg>
                <h3 className="ff-arame fs-24">O Cliente</h3>
            </div>
            <div className="d-flex gap-4">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="pink" />
                    <circle cx="20" cy="20" r="10" fill="gray" />
                </svg>
                <h3 className="ff-arame fs-24">A Marca</h3>
            </div>
        </div>
    );
}

export default BriefingFlowCard;