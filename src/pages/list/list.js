import React from 'react';

function List() {
    <div className="list-container">
        <div className="bucket-list">
            <h2 className="list-header">Bucket List</h2>
            <div className="list-item">Acadia National Park</div>
            <label key="Acadia National Park" className="list-item">
                <input 
                    type="checkbox"
                    className="selectbox"
                    // checked={write code to add this park to array of parks that user has visited}
                />
                Acadia National Park
            </label>
        </div>
    </div>
}

export default List;