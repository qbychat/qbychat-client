import {motion} from "motion/react"

interface Props {
    status: string
}

function ConnectionIndicator(props: Props) {
    const containerVariants = {
        rest: { width: 32 },
        hover: { width: 280 }
    };

    const textVariants = {
        rest: {
            opacity: 0,
            x: -40,
            scale: 0.95,
            transition: { delay: 0 }
        },
        hover: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: 0.1 }
        }
    };

    const spinnerTransition = {
        repeat: Infinity,
        ease: "linear",
        duration: 1
    };

    return (
        <motion.div
            className="fixed flex flex-row z-40 left-0 bottom-0 rounded-full m-2 p-1 bg-primary cursor-pointer overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={containerVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <motion.span
                className="p-1 w-6 text-primary-content"
                animate={{ rotate: 360 }}
                transition={spinnerTransition}
            >
                <svg className="" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-dasharray="25.13 25.13" strokeWidth={3}/>
                </svg>
            </motion.span>

            <motion.div
                className="text-primary-content pr-1"
                variants={textVariants}
                style={{ position: "absolute", left: 40 }}
            >
                Connecting... ({props.status})
            </motion.div>
        </motion.div>
    );
}

export default ConnectionIndicator;