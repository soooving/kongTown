import { Link } from "react-router-dom";

const sidebar = () => {
    return (
        <ul className={"sidebar"}>
            <li><Link to={"/manage/firm"}>기업 관리</Link></li>
            <li><Link to={"/manage/firm/admin"}>기업 관리자 관리</Link></li>

            <li><Link to={"/manage/firm/user"}>사용자 관리</Link></li>
            <li><Link to={"/manage/product"}>대여 물품 관리</Link></li>
            <li><Link to={"/product/signup"}>물품 신청 관리</Link></li>

            <li><Link to={"/product/rental"}>물품 대여 신청</Link></li>
            <li><Link to={"/product/return"}>물품 반납 신청</Link></li>
        </ul>
    );
}

export default sidebar