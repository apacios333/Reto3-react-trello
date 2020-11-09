
//Estado inicial
const initialState ={
    
    cards: {
       /* 'card1': {
            id:'card1',
            title: 'title1',
            items: [{id: 'item1', content: 'item1content'}], 
        },*/

    },
    
    cardIds: [], 
     /* cardIds: ['card1', 'card2'], */

};

//El reducer recibe el estado de la app y una acción, y devuelve un nuevo estado
function reducer(state=initialState, action){
    
    switch (action.type) {

        case 'ADD_CARD': {
            //console.log('REDUCER. Añado Cards');
            return {
                ...state,
                cards: action.payload,
            }
        }
        case 'ADD_CARD_ID': {
            //console.log('REDUCER. Añado CardId');
            return {
                ...state,
                cardIds: action.payload,
            }
        }
        case 'DELETE_CARD': {
            return {
                ...state,
                cards: action.payload,
            }
        }
        case 'DELETE_CARD_ID': {
            return {
                ...state,
                cardIds: action.payload,
            }
        }
        case 'UPDATE_CARD': {
            return {
                ...state,
                cards: action.payload,
            }
        }
        case 'ADD_ITEM': {
            //console.log('REDUCER. Añado Item a la card');
            return {
                ...state,
                cards: action.payload,
            }
        }
        case 'DELETE_ITEM': {
            return {
                ...state,
                cards: action.payload,
            }
        }
        case 'UPDATE_ITEM': {
            return {
                ...state,
                cards: action.payload,
            }
        }
        case 'DROP_CARDS': {
            //console.log('REDUCER. Actualizo estado de CardIds');
            return {
                ...state,
                cardIds: action.payload,
            }
        }
        case 'DROP_ITEMS_ON_CARD': {
            //console.log('REDUCER. Actualizo estado de Cards');
            return {
                ...state,
                cards: action.payload, 
            }
            
        }
        case 'DROP_ITEMS_BETWEEN_CARDS': {
            //console.log('REDUCER. Actualizo estado de Cards');
            return {
                ...state,
                cards: action.payload, 
            }
            
        }
        
        default: return state; //devuelve el estado inicial  
    }
}

export default reducer;   

