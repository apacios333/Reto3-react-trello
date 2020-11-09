//Acciones llaman al reducer, que a su vez llama a la app
//Usamos despachadores de acciones, que son funciones que despachan acciones:



//CARDS
export const addCardAction = (dispatch, newCardId, inputCard, cards) => {
   
    const newCards = {
        ...cards,
         [newCardId]:{
             id:newCardId,
             title: inputCard.trim(), //elimina espacios en blanco al principio y al final
             items: [], 
         },
    };
   
    dispatch({
        type: 'ADD_CARD',
        payload: newCards
    }); 
   
}

export const addCardIdAction = (dispatch, newCardId, cardIds) => {
   
    const newCardIds = [
        ...cardIds, newCardId
    ];
   
    dispatch({
        type: 'ADD_CARD_ID',
        payload: newCardIds
    }); 
   
}

export const deleteCardIdAction = (dispatch, id, cardIds) => {
    
    const newCardIds = cardIds.filter(cardId=> cardId !== id); //borramos del array cardIds el id de la tarjeta a borrar
    
    dispatch({
        type: 'DELETE_CARD_ID',
        payload: newCardIds
    });     
   
}

export const deleteCardAction = (dispatch, id, cardIds, cards) => {

    const deleteCardId = cardIds.filter(cardId=> cardId === id)[0]; //id de la tarjeta a borrar

    delete cards[deleteCardId]; //borramos la tarjeta del objeto cards
      
    dispatch({
        type: 'DELETE_CARD',
        payload: cards,
    });   
   
}


export const updateCardAction = (dispatch, cardId, inputCard, cards) => {

        const newCard = cards[cardId];
        newCard.title = inputCard.trim(); 
    
        const newCards = {
          ...cards,
            [cardId]: newCard,
        };
   
    dispatch({
        type: 'UPDATE_CARD',
        payload: newCards
    }); 
   
}


//ITEMS
export const addItemAction = (dispatch, newItemId, inputItem, cards, cardId) => {  

    const newItem= {
        id: newItemId,
        content: inputItem.trim(),
    };

    const card = cards[cardId];
    
    const newItems= [...card.items, newItem];
    
    const newCards = {
        ...cards,
            [cardId]:{
            ...card,
            items: newItems, 
            },
    };
    
    /* Tambíen válido:
    const newItem= {
        id: newItemId,
        content: inputItem,
    };

    const card = cards[cardId];
    
    card.items = [...card.items, newItem];
    
    const newCards = {
        ...cards,
        [cardId]: card,
    };*/
   
        dispatch({
            type: 'ADD_ITEM',
            payload: newCards
        }); 
    
}


export const deleteItemAction = (dispatch, cards, cardId, id) => {
    
    const card = cards[cardId];

    const newItems = card.items.filter(item=> item.id !== id); //borramos item de la tarjeta correspondiente
    
    const newCards = {
        ...cards,
            [cardId]:{
            ...card,
            items: newItems, 
            },
    };

    dispatch({
        type: 'DELETE_ITEM',
        payload: newCards
    });     
   
}
  
export const updateItemAction = (dispatch, itemId, inputItem, cards, cardId) => {

    const card = cards[cardId];
    const items= card.items;
    const index = items.findIndex (item => item.id === itemId); // índice del item a modificar
    const newItems = [...items]; // nueva array
        
    newItems[index].content= inputItem.trim();  //cambiar content
    
    const newCards = {
        ...cards,
        [cardId]:{
            ...card,
            items: newItems,
        },
    };
    
    dispatch({
        type: 'UPDATE_ITEM',
        payload: newCards
    });
    console.log(card);
      
}
        
    /* //Tb funciona pero se actualizar poniendo el dispatch comentado!!!
    const newItems = Array.from(items);
    
    newItems.map( item => {
        if(item.id == itemId){
        item.content = inputItem;
      }
      return item;
    });
        
    const newCards = {
        ...cards,
            [cardId]:{
            ...card,
            items: newItems, 
            },
    };
    dispatch({
        type: 'UPDATE_ITEM',
        payload: newCards
    });*/


//DRAG AND DROP

  export const dropCardsAction = (dispatch, newCardIds) => {
   
    dispatch({
        type: 'DROP_CARDS',
        payload: newCardIds
    }); 
   
}

export const dropItemsOnCardAction = (dispatch, cards, start, newItems) => {

    const newCard ={
        ...start,
        items: newItems,
    };

    const newCards ={
        ...cards,
        [newCard.id]:newCard,
    };
  
    dispatch({
        type: 'DROP_ITEMS_ON_CARD',
        payload: newCards
    }); 
   
}

export const dropItemsBetweenCardsAction = (dispatch, cards, start, startItems, finish, finishItems) => {

    const newStart = {
        ...start,
        items: startItems,
    };

    const newFinish = {
        ...finish,
        items: finishItems,
    };

    const newCards ={
        ...cards,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
    };

    dispatch({
        type: 'DROP_ITEMS_BETWEEN_CARDS',
        payload: newCards
    }); 
   
}