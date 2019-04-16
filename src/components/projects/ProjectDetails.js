import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lorem ex, vel efficitur turpis vestibulum quis. Curabitur enim odio, maximus eget odio eget, tristique imperdiet elit. Ut leo ipsum, hendrerit id facilisis vel, tempor nec ex. Aliquam erat volutpat. In dignissim nisl arcu, sed fermentum lacus maximus vitae. Pellentesque interdum augue sagittis tellus molestie egestas.</p>
                </div>
                <div className="card-actions grey lighten-4 grey-text">
                    <div>Posted by The Tomuś Tomaszek</div>
                    <div>16nd April, 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
