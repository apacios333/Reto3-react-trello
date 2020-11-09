import React, { useState, } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateCardAction} from '../../../Reduxapp/actions.js';
import './EditCard.scss';

const EditCard= (props) =>{

    const cardId= props.cardId;

    //estado local
    //botón mostrar input
    const [showEdit, setShowEdit] = useState(true);
    const [showInput, setShowInput] = useState(false);
    const [inputCard, setInputCard]= useState(''); //input
    const [placeholderTextCard, setPlaceholderTextCard]= useState('');  //placeholder

    //estado global
    const cards = useSelector( (state) => state.cards);

    //dispatch
    const dispatch = useDispatch();

    //se muesta el input para actualizar la tarjeta
    const showInputUpdateCard = ()=>{
        //showUpdateCardAction(dispatch, showButtons)
        setShowEdit(false) 
        setShowInput(true) 
    }

     //capturamos el valor del input
     const handleChangeCard= (event) => {
         setInputCard(event.target.value);         
     }
 
     //actualizamos el título de la tarjeta
     const updateCard = () =>{
         if (inputCard !==''){
             updateCardAction(dispatch, cardId, inputCard, cards);
             setInputCard(''); //limpiar input
             setPlaceholderTextCard(''); //limpiar placeholder
             //volvemos al estado inicial de EditCard
             setShowEdit(true) 
             setShowInput(false) 
         }
         else setPlaceholderTextCard('Introduce el nuevo título');
     };

     //actualizamos el título al pulsar Intro
     const onKeyUpHandle= (event) =>{
         if (event.keyCode === 13) {
             if (inputCard !==''){
                 updateCard();
             }
             else setPlaceholderTextCard('Introduce el nuevo título');
         }  
     };

      return (
        <div className="EditCard">
            {showEdit && <button onClick={showInputUpdateCard} className="ButtonEditCard" > Editar </button>}
            {showInput && <div className="InputUpdateCard">
            
                <input type="text" value={inputCard} placeholder={placeholderTextCard} onChange={handleChangeCard} onKeyUp={onKeyUpHandle}/>
                <button type="button" onClick={updateCard} >Cambia el título</button>      
            
            </div>}    
        </div>
    )
}

export default EditCard;