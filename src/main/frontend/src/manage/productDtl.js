import React, { Component } from 'react';
import ProductService from '../service/productService';

class productDtl extends Component {
    constructor(props) {
        super(props);

        const itemCode = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1).length !== 10 ? ''
                         : window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

        this.state = {
            itemCode: itemCode,
            itemName: '',
            itemNumber: '',
            useYn: '',
        }

        if(itemCode !== ''){
            this.loadData();
        }

        this.changeRadio = this.changeRadio.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    changeRadio = (event) => {
        this.setState({[event.target.name] : event.target.id});
    }

    changeContent = (event) => {
        this.setState({[event.target.id] : event.target.value});
    }

    loadData = () => {
        let param = {
            itemCode: this.state.itemCode
        };

        ProductService.getProductOne(param).then(res => {
            this.setState({itemName: res.data.itemName});
            this.setState({itemNumber: res.data.itemNumber});
            this.setState({useYn: res.data.useYn});
            document.getElementById(res.data.useYn).checked = true;
        });
    }

    saveProduct = (event) => {
        event.preventDefault();
        let param = {
            itemCode: this.state.itemCode,
            itemName: this.state.itemName,
            itemNumber: this.state.itemNumber,
            useYn: this.state.useYn,
        };

        ProductService.saveProduct(param).then(res => {
            if(res.data >= 0) {
                alert('성공적으로 저장되었습니다 !');
            }
        });
    }


    render(){
        return (
            <div className={"manage-product"}>
                <div className={"title-area-h4"}>
                    <h4>대여 물품 상세 관리</h4>
                </div>

                <div className={"table-area2"}>
                    <ul className={"product-table02"}>
                        <li className={"li-title"}>물품명</li>
                        <li className={"li-body"}>
                            <input type={"text"} className={"input-text"} id={"itemName"} value={this.state.itemName} onChange={this.changeContent}/>
                        </li>
                    </ul>
                    <ul className={"product-table02"}>
                        <li className={"li-title"}>보유수량</li>
                        <li className={"li-body"}>
                            <input type={"number"} className={"input-text"} id={"itemNumber"} value={this.state.itemNumber} onChange={this.changeContent}/>
                        </li>
                    </ul>
                    <ul className={"product-table02"}>
                        <li className={"li-title"}>사용여부</li>
                        <li className={"li-body"}>
                            <input type={"radio"} className={"input-radio"} id={"Y"} name={"useYn"} value={this.state.useYn} onChange={this.changeRadio}/> <span>사용</span>
                            <input type={"radio"} className={"input-radio"} id={"N"} name={"useYn"} value={this.state.useYn} onChange={this.changeRadio}/> <span>미사용</span>
                        </li>
                    </ul>
                </div>

                <div className={"button-area"}>
                    <button type={"button"} className={"btn-save"} onClick={this.saveProduct}>저장</button>
                </div>
            </div>
        );
    }
}

export default productDtl