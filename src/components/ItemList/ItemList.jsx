import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteItemAction} from '../../Reduxapp/actions.js';
import {Draggable} from 'react-beautiful-dnd';
import EditItem from './EditItem/EditItem.jsx';
import './ItemList.scss';

const ItemList = props => {

    const item = props.item;
    const cardId= props.cardId;
    const index= props.index;

    //estado global
    const cards = useSelector( (state) => state.cards);

    //dispatch
    const dispatch = useDispatch();

    //borramos un item
    const deleteItem = (event) =>{
        const id = item.id;
        deleteItemAction(dispatch, cards, cardId, id);
    }

        return (
        <Draggable draggableId={item.id} index={index}>
            {(provided) =>(
                    <div {...provided.draggableProps} ref = {provided.innerRef} className="ItemList" >
                        
                        <div {...provided.dragHandleProps} className="ItemListContent">
                            <p>{item.content}</p>
                            <button onClick={deleteItem} className="ButtonDeleteItem"> X </button>
                        </div>

                        <EditItem itemId={item.id} cardId={cardId}/>
                        
                        {provided.placeholder}
                    </div>
                )}
        </Draggable>
        );      
    
}
export default ItemList;