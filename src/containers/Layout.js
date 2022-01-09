import React, {useState, useEffect} from 'react';
import Gameresult from '../components/Gameresult/Gameresult';
import LeftPanel from '../components/Dashboard/LeftPanel/LeftPanel';
import Rightpanel from '../components/Dashboard/RightPanel/RightPanel';
import axios from 'axios';
    
const Layout = (props)  => { 
    const [isPlay, setPlay] = useState(false);
    const [players, setPlayers] = useState([]); 
    const [activePlayers, setActivePlayers] = useState([]);
    const [betResult, setbetResult] = useState(true);

    useEffect(() => {
        axios.get("https://www.techdasher.com/dd.php")
        .then(response => {
            const playerList=response.data;
            const updatedList =  playerList.map((player,index) => ( { ...player, id: index + 1, Win: 0, Lost: 0 } ) );
            setPlayers(updatedList)
        }).catch((e) => {
            console.log("Cannot Fetch Data...")
        })
    }, []);
 
    const playerSelectionHandle = (playerList) => {
        setActivePlayers( playerList ) 
    }

    const startGameHandler = () => {
        setPlay(true)
        const betNo = Math.floor(Math.random() * 9) + 1;
        setbetResult(betNo); 
        updateResult(betNo);
    }

    const stopGameHandler = () => {
        setPlay(false)  
    }

    const updateResult = (betNo) => { 
        const uActivePlayer = [...activePlayers];
        const aPlayer = []; 
        for(let i in uActivePlayer){ 
            if(parseInt(uActivePlayer[i].Bet) === betNo){
                uActivePlayer[i].Win +=  1 ;
                uActivePlayer[i].Price = (2 * parseInt(uActivePlayer[i].Price)).toString();
            }
            else{
                uActivePlayer[i].Lost +=  1 ;
            }
            aPlayer.push(uActivePlayer[i].id); 
        }
        const uPlayer = [...players];
        /*
        for(let i in uPlayer){
            if(aPlayer.indexOf(uPlayer[i].id) > -1){
                console.log("P: B", uPlayer[i].Bet, uPlayer[i].Win, uPlayer[i].Lost, uPlayer[i].Price);
                if(parseInt(uPlayer[i].Bet) === betNo){
                    uPlayer[i].Win +=  1 ;
                    uPlayer[i].Price = (2 * parseInt(uPlayer[i].Price)).toString();
                }
                else{
                    uPlayer[i].Lost +=  1 ;
                }
                console.log("P: B", uPlayer[i].Bet, uPlayer[i].Win, uPlayer[i].Lost, uPlayer[i].Price);
            }
        }*/
        setPlayers(uPlayer);
        setActivePlayers(uActivePlayer); 
    }


    if(isPlay === false){
        return (
            <div className="row flex-xl-nowrap">
               <LeftPanel players={activePlayers} startGame={startGameHandler} /> 
               <Rightpanel players={players} activeplayers={activePlayers} selectPlayer={playerSelectionHandle} /> 
            </div>
        )
    } 
    else{
        return (
            
              <Gameresult players={activePlayers}
               stopGame={stopGameHandler}
               betResult={betResult} />  
             
        )
    }
}

export default Layout
