import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { dropCardsAction, dropItemsOnCardAction, dropItemsBetweenCardsAction } from '../Reduxapp/actions.js';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import CardList from '../components/CardList/CardList.jsx';
import CardForm from '../components/CardForm/CardForm.jsx';
import './Body.scss';

const Body = ()=> {
    
    //estado global
    const cards = useSelector( (state) => state.cards);
    const cardIds = useSelector( (state) => state.cardIds);

    //dispatch
    const dispatch = useDispatch();

    //función finalizar el drag
    const onDragEnd= result =>{
        
        //type para que sepa que lo que reorganiza es una tarjeta o un elemento
        const {destination, source, draggableId, type} = result;
        //si no hay destino, no hace nada
        if (!destination){
            return;
        }
        // el drag está en su posición inicial, no hace nada
        if (
            destination.droppableId === source.droppableId && destination.index === source.index
        ) {
            return;
        }

//------ CARDS DRAG ------

        if(type ==='card'){
            const newCardIds = Array.from(cardIds);
            //quitamos la tarjeta del origen
            newCardIds.splice(source.index, 1);
            //añadimos la tarjeta en el destino
            newCardIds.splice(destination.index, 0, draggableId);

            //actualizamos el estado con el nuevo estado
            dropCardsAction(dispatch, newCardIds);
            return;
        }
        
//------- ITEMS DRAG -------
 
         //definimos tarjeta de origen, tarjeta final e índice del item drag de la tarjeta de origen
         const start = cards[source.droppableId]; //tarjeta de inicio
         const finish = cards[destination.droppableId]; //tarjeta de fin
         const draggableItemId = start.items.filter( (item) => item.id === draggableId )[0]; //objeto item drag
        
        //REORDENAR ITEMS EN UNA COLUMNA ----------------
         
        //movemos items en la misma tarjeta
         if(start === finish){
             //nuevo array de items en la tarjeta origen (que es la misma que la tarjeta final)
             const newItems = Array.from(start.items);
             //Eliminamos el item que se mueve. Desde el índice source.index eliminamos 1 elemento. 
             newItems.splice(source.index, 1);
             //insertamos el item movido en la posición de destino. desde destination.index, no eliminamos ningún elemento, e introducimos draggableItemId
             newItems.splice(destination.index, 0, draggableItemId);

             dropItemsOnCardAction(dispatch, cards, start, newItems); //actualizamos el state
             return;
         }
       
        //MOVER ITEMS ENTRE COLUMNAS -------------------------

        //nuevo array de items en la tarjeta origen
        const startItems = Array.from(start.items);
        //quitamos el item drag de la tarjeta origen
        startItems.splice(source.index, 1);
         
        //nuevo array de items en la tarjeta final
        const finishItems = Array.from(finish.items);
        //insertamos el item movido en la posición de destino
        finishItems.splice(destination.index, 0, draggableItemId); 
         
        dropItemsBetweenCardsAction(dispatch, cards, start, startItems, finish, finishItems); //actualizamos el state
    }

    return(
    <div className="Body">
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-columns" direction="horizontal" type="card">
                {provided => (
                <div {...provided.droppableProps} ref= {provided.innerRef} className="ContainerCards">
                    {cardIds?.map( (cardId, index) =>{
                        const card = cards[cardId];
                        return <CardList key={cardId} index={index} card={card}/>;
                    })}
                {provided.placeholder}
                </div>
                )}
            </Droppable>
        </DragDropContext>
        <CardForm/>
    </div>
           
    )
 }
 export default Body;