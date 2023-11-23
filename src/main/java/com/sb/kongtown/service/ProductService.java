package com.sb.kongtown.service;

import com.sb.kongtown.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
