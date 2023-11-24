package com.sb.kongtown.service;

import com.sb.kongtown.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductMapper productMapper;

    public List<HashMap<String, Object>> productList() {
        return productMapper.productList();
    }

    public HashMap<String, Object> productSelect(HashMap<String, Object> param) {
        return productMapper.productSelect(param);
    }

    public int productSave(HashMap<String, Object> param) {
        if(param.get("itemCode") != "")
            return productMapper.productUpdate(param);
        return productMapper.productInsert(param);
    }

    public List<HashMap<String, Object>> productRentalList(HashMap<String, Object> param) {
        return productMapper.productRentalList(param);
    }

    @Transactional
    public int productRental(HashMap<String, Object> param) {
        // res += productMapper.productHaveNumberUpdate(param);

        return productMapper.productRental(param);
    }

    public List<HashMap<String, Object>> productSignupList(HashMap<String, Object> param) {
        return productMapper.productSignupList(param);
    }

    public int productSignup(HashMap<String, Object> param) {
        int res = 0;
        res += productMapper.productSignup(param);
        // res += productMapper.productHaveNumberUpdate(param);

        return res;
    }
}
