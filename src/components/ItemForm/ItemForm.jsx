import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {addItemAction} from '../../Reduxapp/actions.js';
import './ItemForm.scss';

const ItemForm= (props) =>{

    const cardId= props.cardId;

    //estado local
    //botón añadir-formulario
    const [showAdd, setShowAdd] = useState(true);
    const [showInput, setShowInput] = useState(false);
    const [inputItem, setInputItem]= useState('') //estado del input    
    const [placeholderTextItem, setPlaceholderTextItem]= useState('') //estado placeholder

    // estado global     
    const cards = useSelector( (state) => state.cards);   
    //console.log(cards);
   
    //dispatch
    const dispatch = useDispatch();

    //mostrar input item
    const showAddItems = ()=>{
        setShowAdd(false) //cuando es false desaparece el botón "+ Añadir"
        setShowInput(true) //cuando es true aparece <ItemList/>
    }

    //capturamos el valor del input item
    const handleChangeItem= (event) => {
        setInputItem(event.target.value); 
    }

    //añadimos un item
    const addItem = () =>{
        if (inputItem !==''){        
            const newItemId = uuid();
            addItemAction(dispatch, newItemId, inputItem, cards, cardId);
            setInputItem(''); //limpiar input
            setPlaceholderTextItem(''); //limpiar placeholder
            //volvemos al estado inicial
            setShowAdd(true)
            setShowInput(false) 
        }
        else {
            setPlaceholderTextItem('Introduce un elemento');
        }
        
      };

    //añadimos item al pulsar Intro
    const onKeyUpHandle= (event) =>{
        if (event.keyCode === 13) {
            addItem();
        }
    };
 
    return (
        <div>
            {showAdd && <button type="button" onClick={showAddItems} className="ShowAddItems">+ Añadir</button>}
            {showInput && <div className="ItemForm">
                <input type="text" value={inputItem} onChange={handleChangeItem} onKeyUp={onKeyUpHandle} placeholder={placeholderTextItem} />
                <button type="button" onClick={addItem}> +Añadir Item</button>       
            </div>
            }
        </div> 
    )
}

export default ItemForm;

