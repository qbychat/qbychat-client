import {GiHamburgerMenu} from "react-icons/gi";
import SearchBar from "../SearchBar/SearchBar.tsx";
import {useState} from "react";
import {Account} from "../../qclib/database.ts";

interface Props {
    user: Account | null | undefined

    isDrawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
}

function TitleBar(props: Props) {
    const [searchValue, setSearchValue] = useState("")

    const onSearch = (value: string) => {
        setSearchValue(value)
    };

    const onSearchBarFocus = () => {

    };

    const onSearchBarBlur = () => {

    };


    const toggleDrawer = () => {
        props.setDrawerOpen(!props.isDrawerOpen);
    };

    return <div className="gap-3 navbar bg-base-200 shadow">
        <label htmlFor={"my-drawer"}
               className={"m-2 cursor-pointer rounded-full hover:text-gray-400 dark:text-gray-600 transition-all drawer-button"}
               onClick={toggleDrawer}>
            <GiHamburgerMenu/>
        </label>
        <div className="flex-1">
            <SearchBar value={searchValue} onChange={onSearch} onFocus={onSearchBarFocus}
                       onBlur={onSearchBarBlur}/>
        </div>
    </div>;
}

export default TitleBar;