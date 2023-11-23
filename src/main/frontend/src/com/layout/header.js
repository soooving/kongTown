import { Link } from "react-router-dom";

import MainIcon from "../images/main-icon.png";

const header = () => {
    return (
        <div className={"header"}>
            <img src={ MainIcon } alt={"메인 아이콘"}/>

            <ul>
                <li><Link to={"/user/login"}>로그인</Link></li>
                <li><Link to={"/user/logout"}>로그아웃</Link></li>
            </ul>
        </div>
    );
}

export default header