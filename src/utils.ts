export function setTitle(title: string | null) {
    if (!title) {
        document.title = "QbyChat";
        return;
    }
    document.title = `QbyChat - ${title}`;
}