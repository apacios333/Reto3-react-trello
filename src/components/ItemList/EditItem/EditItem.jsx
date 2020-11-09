import React, { useState, } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateItemAction} from '../../../Reduxapp/actions.js';
import './EditItem.scss';


const EditItem= (props) =>{

    const itemId= props.itemId;
    const cardId= props.cardId;

    //estado local
    const [showEdit, setShowEdit] = useState(true);
    const [showInput, setShowInput] = useState(false);
    const [inputItem, setInputItem]= useState(''); //input
    const [placeholderTextItem, setPlaceholderTextItem]= useState('');  //placeholder

    //estado global
    const cards = useSelector( (state) => state.cards);

    //dispatch
    const dispatch = useDispatch();

    //se muesta el input para actualizar el item
    const showInputUpdateItem = ()=>{
        setShowEdit(false) 
        setShowInput(true) 
    }

    //capturamos el valor del input
    const handleChangeItem= (event) => {
        setInputItem(event.target.value);
    }
 
     //actualizamos el título del item
     const updateItem = () =>{
         if (inputItem !==''){
             updateItemAction(dispatch, itemId, inputItem, cards, cardId);
             setInputItem(''); //limpiar input
             setPlaceholderTextItem(''); //limpiar placeholder
             //volvemos al estado inicial de EditCard
             setShowEdit(true) 
             setShowInput(false) 
         }
         else setPlaceholderTextItem('Introduce el nuevo contenido');
     };

     //actualizamos item al pulsar Intro
    const onKeyUpHandle= (event) =>{
        if (event.keyCode === 13) {
            updateItem();
        }
    };

      return (
        <div className="EditItem">
            {showEdit && <button onClick={showInputUpdateItem} className="ButtonEditItem" > Editar </button>}
            
            {showInput && <div className="InputUpdateItem">
                <input type="text" value={inputItem} placeholder={placeholderTextItem} onChange={handleChangeItem} onKeyUp={onKeyUpHandle}/>
                <button type="button" onClick={updateItem} >Cambia el contenido</button>      
            </div>}    
        </div>
    )
}

export default EditItem;
