import React, { Component } from 'react';
import ProductService from '../service/productService';

class rental extends Component {
    constructor(props) {
        super(props)
        // # 1.
        this.state = {
            products: []
        }

    }
    // # 2.
    componentDidMount() {
        ProductService.getProductRentalList().then((res) => {
            this.setState({ products: res.data});
        });
    }

    rental(itemCode){
        let param = {
            itemCode: itemCode,
            rtState: 'ready',
            rtNumber: 1,
            returnYn: 'N'
        };

        ProductService.rentalProduct(param).then((res) => {
            if(res.data >= 0) {
                alert('성공적으로 신청되었습니다 !');

                return window.location.reload();
            }
        });
    }

    render() {
        return (
            <div className={"manage-product"}>
                <div className={"title-area-h4"}>
                    <h4>물품 대여 신청</h4>
                </div>

                <div className={"table-area"}>
                    <table className={"product-table01"}>
                        <thead>
                        <tr>
                            <td>순번</td>
                            <td>물품명</td>
                            <td>잔여/보유수량</td>
                            <td>상태</td>
                            <td>신청</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                item =>
                                    <tr key = {item.itemCode}>
                                        <td> {item.num} </td>
                                        <td> {item.itemName} </td>
                                        <td> {item.haveNumber} / {item.itemNumber} </td>
                                        <td> {(item.haveNumber!==0 && item.useYn!=='N') ?
                                            <span>신청가능</span>
                                            : <span className={"text-red"}>신청불가능</span>
                                        } </td>
                                        <td> {
                                            (item.haveNumber!==0 && item.useYn!=='N' && item.state===undefined) ?
                                                <div className={"button-area button-area-td"}>
                                                    <button type={"button"} className={"btn-save"} onClick={() => this.rental(item.itemCode)}>대여신청</button>
                                                </div>
                                                : item.state!==undefined ?
                                                    (item.state === 'ready' ? '승인대기' : item.state === 'apply' ? '대여승인' : '신청반려')
                                                    : ''
                                        } </td>
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

export default rental