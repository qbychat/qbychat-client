import {GiHamburgerMenu} from "react-icons/gi";
import SearchBar from "../SearchBar/SearchBar.tsx";
import {useState} from "react";

function TitleBar() {
    const [searchValue, setSearchValue] = useState("")
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onSearch = (value: string) => {
        setSearchValue(value)
    };

    const onSearchBarFocus = () => {

    };

    const onSearchBarBlur = () => {

    };


    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (<>
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                {/*content*/}
                <div className="gap-3 navbar bg-base-200 shadow">
                    <label htmlFor={"my-drawer"}
                           className={"m-2 cursor-pointer rounded-full hover:text-gray-400 dark:text-gray-600 transition-all drawer-button"}
                           onClick={toggleDrawer}>
                        <GiHamburgerMenu/>
                    </label>
                    <div className="flex-1">
                        <SearchBar value={searchValue} onChange={onSearch} onFocus={onSearchBarFocus}
                                   onBlur={onSearchBarBlur}/>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                {/*drawer*/}
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    </>);
}

export default TitleBar;