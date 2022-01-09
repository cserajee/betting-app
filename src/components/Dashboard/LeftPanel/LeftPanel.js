import React from 'react'
import Logo from '../../UI/Logo'
import PlayerList from './PlayerList'

const leftPanel = (props)  => {

   
    return (
        <div className="col-12 col-md-3 col-xl-2 m-1 bd-sidebar">
            <Logo/>
        <div className="row mb-3"> <div className="col-6">Players: {props.players.length}</div> 
        <div className="col-6">
            <button type="button" 
            className="btn btn-md btn-block btn-success" 
            disabled={props.players.length === 9?false:true}
            onClick={props.startGame} >Start</button>
        </div> 
        </div>
            {
                props.players.map((player) =>  <PlayerList key={player.id} player={player} /> )
            }  
        </div>
    )
}

export default leftPanel
