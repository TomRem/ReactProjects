import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <>
            <div className="card z-depth-0 project-summary radius">
                <div className="card-content grey-test test-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Tomuś</p>
                    <p className="grey-text">16rd April, 1pm</p>
                </div>
            </div>
        </>
    )
}
export default ProjectSummary;