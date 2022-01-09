import React from 'react'
import Gameplayer from './Gameplayer'

const gameresult = (props) => {
    


    return (
        <div className="row">
            <div className="col-12 col-md-12 col-xl-12  my-3 text-center ">
            <div className="game-result">{props.betResult}</div> 
                <button type="button" 
                className="btn btn-lg btn-success"  
                onClick={props.stopGame} >Back</button>
            </div> 
            {
                props.players.map((player) => <Gameplayer key={player.id} player={player} betNo={props.betResult}/> )
            }
            


        </div>
    )
}

export default gameresult
