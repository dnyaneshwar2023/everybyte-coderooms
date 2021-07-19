import React from 'react'

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card h-100">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9UNS3VLE03lH3qX7vVvsY112D-sGdhozEw&usqp=CAU" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-title fw-bold">{props.site}</h6>
                        {/* <p className="card-text">Duration : {props.duration}</p> */}
                        <p className="card-text">Start Time : {props.start_time}</p>
                        <p className="card-text">End Time : {props.end_time}</p>

                        <a target="_" href={props.url} className="btn btn-primary">Contest Link</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
