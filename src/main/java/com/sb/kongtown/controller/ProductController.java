package com.sb.kongtown.controller;

import com.sb.kongtown.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/api/manage/product/list")
    public List<HashMap<String, Object>> productList() {

        return productService.productList();
    }

    @PostMapping("/api/manage/product/select")
    public HashMap<String, Object> productSelect(@RequestBody HashMap<String, Object> param) {

        return productService.productSelect(param);
    }

    @PostMapping("/api/manage/product/save")
    public int productSave(@RequestBody HashMap<String, Object> param) {

        return productService.productSave(param);
    }
}
