import axios from 'axios';

class productService {
    getProduct() {
        return axios.get('/api/manage/product/list');
    }
    getProductOne(param) {
        return axios.post('/api/manage/product/select', param);
    }

    saveProduct(param) {
        return axios.post('/api/manage/product/save', param);
    }

}

export default new productService();