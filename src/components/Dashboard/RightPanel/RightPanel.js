import React, {useState, useEffect} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



const RightPanel = (props)  => {
    
    const [selectedId, setSelectedID] = useState(props.activeplayers); 
  
    useEffect(() => {  
        props.selectPlayer(selectedId);
    })
 

    const imageFormatter = (cell, row)  => {
        return (<div><img src={cell} width="40" alt="profile" /></div>);
    }
   

    const handleRowSelect = (row, isSelected) => { 
        const initialLength = selectedId.length; 
        if (isSelected && initialLength !== 9) {
          setSelectedID( prev => [ ...prev, row ]); 
          return true;
        } else{
          setSelectedID( selectedId.filter(data => data.id !== row.id) ); 
        }   
        if (!isSelected)  return true;
        return false;
    }

    const onSelectAll = ()  => { 
        return false;
    }


    const iSelect = props.activeplayers.map((p) => p.id );  
    const selectRowProp = {
        mode: 'checkbox',
        columnWidth: '60px',
        clickToSelect: true,
        onSelect:  handleRowSelect,
        onSelectAll:  onSelectAll,
        selected: iSelect
    }; 
    return (
        <div className="col-12 col-md-8 col-xl-9 py-md-3 pl-md-5 bd-content">
            
            <BootstrapTable className="table table-hover" data={ props.players } pagination search selectRow={ selectRowProp }>
            <TableHeaderColumn dataField='id' isKey dataSort={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='Profile Image' dataFormat={imageFormatter} >Image</TableHeaderColumn>
            <TableHeaderColumn dataField='Name'  dataSort={ true }>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='Bet' dataSort={ true }>Bet</TableHeaderColumn>
            <TableHeaderColumn dataField='Win' dataSort={ true }>Win</TableHeaderColumn>
            <TableHeaderColumn dataField='Lost' dataSort={ true }>Lost</TableHeaderColumn>
            <TableHeaderColumn dataField='Price' dataSort={ true }>Price</TableHeaderColumn>
            </BootstrapTable>

        </div>
    )
}

export default RightPanel
