import React, { useState } from 'react';

import './ListItem.css';

import { IconContext } from 'react-icons/lib';
import { BiCheckbox, BiCheckboxChecked, BiCheckboxMinus, BiCheckboxSquare } from 'react-icons/bi';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

function ListItem({text, checked, handleCheck}) {

    const [state, setState] = useState(checked ? 'checked' : 'none');

    const ItemIcon = () => {
        if (state === 'checked')
            return <ImCheckboxChecked/>
        else
            return <ImCheckboxUnchecked/>
    }

    const handleClick = () => {
        setState(state === 'checked' ? 'none' : 'checked');
        handleCheck();
    }

    return (
        <li className='item'>
            <button onClick={handleClick} className='button'>
                <IconContext.Provider value={{size: 18, className: 'icon'}}>
                    <ItemIcon/>
                </IconContext.Provider>
            </button>
            <p className={state === 'checked' ? 'item-text-checked' : 'item-text'}>{text}</p>
        </li>
    )
}

export default ListItem;