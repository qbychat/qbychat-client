function WelcomeTip() {
    return <div className={"flex flex-col items-start text-start justify-center"}>
        <h2 className={"text-2xl"}>Welcome to QbyChat</h2>
        <ul className={"text-green-500"}>
            <li>Add some groups</li>
            <li className={"text-red-500"}>or</li>
            <li>Invite your friend to QbyChat</li>
        </ul>
        <p>to getting started.</p>
    </div>;
}

export default WelcomeTip;