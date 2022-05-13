import React, { useState } from 'react';
import ListItem from '../components/ListItem';

function Home() {

    const [itemList, setItemList] = useState([{text: 'Item 1', checked: false}, {text: 'Item 2', checked: false}, {text: 'Item 3', checked: false}, {text: 'Item 4', checked: false}]);

    const [newItemText, setNewItemText] = useState('');

    const handleCheck = (item, index) => {
        if (item.checked) {
            item.checked = false;
            setItemList([item, ...itemList.filter((item, i) => i !== index)]);
        }
        else {
            item.checked = true;
            setItemList([...itemList.filter((item, i) => i !== index), item]);
        }
    }

    const handleCreateNewItem = () => {
        if (newItemText === '') return;
        setItemList([{text: newItemText}, ...itemList]);
        setNewItemText('');
    }

    const handleTextInput = (event) => {
        setNewItemText(event.target.value);
    }

    return (
        <div>
            <h2>Title</h2>
            <ul>
                {itemList.length > 0 ? itemList.map((item, index) => (
                    <ListItem text={item.text} checked={item.checked} handleCheck={() => handleCheck(item, index)} key={item.text + index}/>
                ))
                :
                    <h5>There are no items in your list</h5>
                }
            </ul>
            <input type='text' value={newItemText} onChange={handleTextInput}/>
            <button onClick={handleCreateNewItem}>Add</button>
        </div>
    )
}

export default Home;