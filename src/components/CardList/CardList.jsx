import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteCardAction, deleteCardIdAction} from '../../Reduxapp/actions.js';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import EditCard from './EditCard/EditCard.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import './CardList.scss';

const CardList= props=>{ 
   
    const card= props.card;
    const index= props.index; 
    
    //estado global
    const cards = useSelector( (state) => state.cards); 
    const cardIds = useSelector( (state) => state.cardIds);
    
    //dispatch
    const dispatch = useDispatch();

    //borramos una tarjeta
    const deleteCard = (event) =>{
        const id = card.id;
        deleteCardAction(dispatch, id, cardIds, cards);
        deleteCardIdAction(dispatch, id, cardIds); 
    }
  
    return(
        <Draggable draggableId={card.id} index={index}>
        {provided => (
            <div {...provided.draggableProps} ref= {provided.innerRef} className="CardList" >
                
                <div {...provided.dragHandleProps} className="CardListTittle">
                    <h3>{card.title}</h3>
                    <button onClick={deleteCard} className="ButtonDeleteCard"> X </button>
                </div>
            
                <EditCard cardId={card.id}/>
                <Droppable droppableId={card.id} type="item">
                    {(provided) =>(
                        <div ref = {provided.innerRef} {...provided.droppableProps} className="ContainerItems">
                            {card.items?.map((item, index) => <ItemList key={item.id} index={index} cardId={card.id} item={item}/>)}                                
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <ItemForm cardId={card.id}/>     
            </div>
            )}
        </Draggable>    
    )
}
export default CardList;