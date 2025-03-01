interface Props {
    chatId?: string;
    username?: string;
    showName: string;
    size?: number;
}

function Avatar(props: Props) {
    // todo load avatar from websocket
    const initial = props.showName.charAt(0).toUpperCase();

    const hashCode = (str: string): number => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    };

    const intToRGB = (i: number): string => {
        const c = (i & 0x00ffffff).toString(16).toUpperCase();
        return '00000'.substring(0, 6 - c.length) + c;
    };

    const hash = hashCode(props.showName);
    const color1 = `#${intToRGB(hash)}`;
    const color2 = `#${intToRGB(hash + 12345)}`;

    return (
        <div
            className="flex items-center justify-center rounded-full text-white font-bold size-12"
            style={{
                // width: props.size,
                // height: props.size,
                background: `linear-gradient(135deg, ${color1}, ${color2})`,
            }}
        >
            {initial}
        </div>
    );
}

export default Avatar;