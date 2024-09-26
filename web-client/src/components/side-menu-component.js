import React, {useState} from 'react';
import Search from './search-component';

const SideMenu = ({menuItems, selectedItem}) => {
    const [filteredItems, setFilteredItems] = useState(menuItems);
    const executeSearch = (searchQuery) => {
        setFilteredItems(filteredItems => {
            return menuItems.filter(menuItem => {
                if(menuItem.value.toLowerCase().includes(searchQuery.toLowerCase()))
                    return true;
                return false;
            });
        });
    };

    const onItemClick = (event) => {
        selectedItem(event.target.innerText);
    };

    return(
        <div className='side-menu'>
            <Search searchCallback={executeSearch} className="side-menu-search"/>
            <ul className="side-menu-list">
                {filteredItems.map((item, index) => (
                    <li key={index} onClick={onItemClick} className="side-menu-item"> 
                        {item.value} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;