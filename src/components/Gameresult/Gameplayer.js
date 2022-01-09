import React from 'react'

const gameplayer = (props) => {

    return (
        <div className="col-12 col-sm-3 col-md-3 col-xl-2 my-3">
        <div className={props.betNo.toString() === props.player.Bet ? "card border-success h-100":"card border-danger h-100"} >
        <img src={props.player['Profile Image']} alt="player" className="img-thumbnail img-center" width="130"  /> 
        <div className="card-body">
            <h5 className="card-title text-center">{props.player.Name}</h5>
            <div className="text-center"><span>w: {props.player.Win}</span> </div>
            <div>
                <span className="float-left">P: {props.player.Price}</span> 
                <span className="float-right">B: {props.player.Bet}</span> 
            </div>
        </div>
        <div className="card-footer">
            <small className={props.betNo.toString() === props.player.Bet ? "alert alert-success":"alert alert-danger"}>Last updated 3 mins ago</small>
        </div>
        </div>
    </div>
    )
}

export default gameplayer
