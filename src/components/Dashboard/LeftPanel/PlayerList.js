import React from 'react' 

const playerList = (props)  => {

    
    return ( 
            <div className="bg-light mb-2"  >
                <div className="row">
                    <div className="col-4">
                    <img src={props.player['Profile Image']} alt="profile" className="img-thumbnail" width="100"  />
                    </div> 
                    <div className="col-5 pl-1">
                        <p className="card-text text-overflow">{props.player.Name}</p>
                        <p className="card-text">
                            <small className="float-left">w: {props.player.Win}</small> 
                            <small className="float-right">B: {props.player.Bet}</small></p>
                    </div>
                    <div className="col-2 pr-0 text-right">
                    <p className="card-text">{props.player.Price}</p>
                    </div>  
                </div>
                </div> 
    )
}

export default playerList
