import React, { Component } from 'react';
import ProductService from '../service/productService';

class product extends Component {
    constructor(props) {
        super(props)
        // # 1.
        this.state = {
            products: []
        }

    }
    // # 2.
    componentDidMount() {
        ProductService.getProduct().then((res) => {
            this.setState({ products: res.data});
        });
    }

    movePage(itemCode){
        window.location.href=`/manage/product/detail/${itemCode}`;
    }

    render() {
        return (
            <div className={"manage-product"}>
                <div className={"title-area-h4"}>
                    <h4>대여 물품 관리</h4>
                    <a className={"btn-add"} href={"/manage/product/detail"}>추가</a>
                </div>

                <div className={"table-area"}>
                    <table className={"product-table01"}>
                        <thead>
                            <tr>
                                <td>순번</td>
                                <td>물품코드</td>
                                <td>물품명</td>
                                <td>잔여/보유수량</td>
                                <td>사용여부</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                item =>
                                    <tr key = {item.itemCode} onClick={() => this.movePage(item.itemCode)}>
                                        <td> {item.num} </td>
                                        <td> {item.itemCode} </td>
                                        <td> {item.itemName} </td>
                                        <td> {item.haveNumber} / {item.itemNumber} </td>
                                        <td> {item.useYn==='Y' ? '사용' : '미사용'} </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default product