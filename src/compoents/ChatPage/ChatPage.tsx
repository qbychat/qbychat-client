import {useEffect, useState} from "react";
import TitleBar from "../TitleBar/TitleBar.tsx";

function ChatPage() {
    // const [searchParams] = useSearchParams();

    const [leftWidth, setLeftWidth] = useState(300);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const newWidth = e.clientX;
            if (window.innerWidth / 4 < newWidth && newWidth < window.innerWidth / 2) {
                setLeftWidth(newWidth);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="flex h-screen select-none">
            <div className={"dark:bg-base-200 rounded-r"} style={{width: leftWidth}}>
                <TitleBar/>
            </div>
            <div
                className="cursor-e-resize w-1 shadow-xl rounded-r rounded-l"
                onMouseDown={handleMouseDown}
            />
            <div className="flex">
                current conversation
            </div>
        </div>
    );
}

export default ChatPage;