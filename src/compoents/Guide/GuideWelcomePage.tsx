import {Link} from "react-router-dom";

function GuideWelcomePage() {
    return (<>
        <div className={"flex flex-col gap-3 items-center justify-center min-h-screen select-none"}>
            <div className={"text-3xl"}>QbyChat</div>
            <div>Welcome to qbychat! An opensource Telegram-Like messenger, secure and simplify</div>
            <Link to={"/guide/server"} className="btn btn-soft btn-primary" viewTransition={true}>Getting start</Link>
        </div>
    </>);
}

export default GuideWelcomePage;