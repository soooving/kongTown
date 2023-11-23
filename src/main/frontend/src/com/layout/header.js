import { Link } from "react-router-dom";

const header = () => {
    return (
        <ul>
            <li><Link to={"/"}>기업 관리</Link></li>
            <li><Link to={"/"}>기업 관리자 관리</Link></li>

            <li><Link to={"/"}>사용자 관리</Link></li>
            <li><Link to={"/manage/product"}>대여 물품 관리</Link></li>
            <li><Link to={"/"}>물품 신청 관리</Link></li>

            <li><Link to={"/"}>물품 대여 신청</Link></li>
            <li><Link to={"/"}>물품 반납 신청</Link></li>
        </ul>
    );
}

export default header