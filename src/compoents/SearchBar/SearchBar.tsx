import {useHotkeys} from "react-hotkeys-hook";
import {useRef, useState} from "react";
import {AnimatePresence, motion} from "motion/react"

interface Props {
    onFocus?: () => void;
    onBlur?: () => void;
    value: string;
    onChange: (value: string) => void;
}

function SearchBar(props: Props) {
    const labelRef = useRef<HTMLLabelElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [focus, setFocus] = useState(false)

    const makeFocus = () => {
        if (!labelRef.current) return;
        labelRef.current.focus();
    }

    const onFocus = () => {
        setFocus(true);
        if (props.onFocus) {
            props.onFocus();
        }
    }

    const onBlur = () => {
        setFocus(false);
        if (props.onBlur) {
            props.onBlur();
        }
    }

    useHotkeys('ctrl+k', makeFocus, [])

    return (<label ref={labelRef} className="input shadow rounded-full w-full">
        <input ref={inputRef} type="search" className="grow" placeholder="Search"
               onFocus={onFocus}
               onBlur={onBlur}
               value={props.value}
               onChange={(e) => props.onChange(e.target.value)}
        />
        <AnimatePresence>
            {!(focus || inputRef.current?.value) && (
                <motion.div
                    initial={{opacity: 0, y: -10}}
                    animate={focus ? {opacity: 0, y: -10} : {opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.3}}
                    // className={"overflow-hidden"}
                >
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </motion.div>
            )}
        </AnimatePresence>
    </label>);
}

export default SearchBar;