import * as React from "react";

import {AnimatePresence, motion} from "motion/react"
import {useHotkeys} from "react-hotkeys-hook";

interface Props {
    state: boolean;
    children: React.ReactNode;
    onCancel?: () => void;
}

function Dialog(props: Props) {

    const handleClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCancel();
        }
    };

    const handleCancel = () => {
        if (props.onCancel) {
            props.onCancel();
        }
    }

    useHotkeys('esc', handleCancel, [])

    return <AnimatePresence>
        {props.state && (
            <motion.div
                initial={{opacity: 0, y: -10}}
                animate={!props.state ? {opacity: 0, y: -10} : {opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.3}}
                className={"absolute w-screen top-0 left-0 min-h-screen backdrop-blur flex flex-col justify-center items-center"}
                onClick={handleClick}>
                <div className="card w-96 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        {props.children}
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
}

export default Dialog;