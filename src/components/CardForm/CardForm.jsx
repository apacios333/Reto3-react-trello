import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {addCardAction, addCardIdAction} from '../../Reduxapp/actions.js';
import './CardForm.scss';

const CardForm= () =>{

    //estado local del input
    const [inputCard, setInputCard]= useState('')
    
    //estado placeholder
    const [placeholderTextCard, setPlaceholderTextCard]= useState('')
    
    //estado global
    const cards = useSelector( (state) => state.cards); 
    const cardIds = useSelector( (state) => state.cardIds);
    console.log(cards);
    
    //dispatch
    const dispatch = useDispatch();

    //capturamos el valor del input
    const handleChangeCard= (event) => {
        setInputCard(event.target.value);    
    }

    //añadimos una tarjeta
    const addCard = () =>{
        if (inputCard !==''){
            const newCardId = uuid();
            addCardAction(dispatch, newCardId, inputCard, cards);
            addCardIdAction(dispatch, newCardId, cardIds);
            setInputCard(''); //limpiar el input
            setPlaceholderTextCard(''); //limpiar el placeholder
        }
        else setPlaceholderTextCard('Introduce un título');
    }

    //añadimos card al pulsar Intro
    const onKeyUpHandle= (event) =>{
        if (event.keyCode === 13) {
            if (inputCard !==''){
                addCard();
            }
            else setPlaceholderTextCard('Introduce un título');  
        }
    };

    return (
        <div className="CardForm">
            <input type="text" value={inputCard} placeholder={placeholderTextCard} onChange={handleChangeCard} onKeyUp={onKeyUpHandle}/>
            <button type="button" onClick={addCard} >+Añadir Tarjeta</button>      
        </div>
    )
}

export default CardForm;





