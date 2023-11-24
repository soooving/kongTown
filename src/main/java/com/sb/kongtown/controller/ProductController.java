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

    @PostMapping("/api/product/rental/list")
    public List<HashMap<String, Object>> productRentalList() {
        /* toDo :: session 적용 후 수정 필요 */
        HashMap<String, Object> param = new HashMap<>();
        param.put("userId", "test");

        return productService.productRentalList(param);
    }

    @PostMapping("/api/product/rental")
    public int productRental(@RequestBody HashMap<String, Object> param) {
        /* toDo :: session 적용 후 수정 필요 */
        param.put("userId", "test");

        return productService.productRental(param);
    }

    @PostMapping("/api/product/signup/list")
    public List<HashMap<String, Object>> productSignupList() {
        /* toDo :: session 적용 후 수정 필요 */
        HashMap<String, Object> param = new HashMap<>();
        param.put("userId", "test");

        return productService.productSignupList(param);
    }

    @PostMapping("/api/product/signup")
    public int productSignup(@RequestBody HashMap<String, Object> param) {
        /* toDo :: session 적용 후 수정 필요 */
        param.put("userId", "test");

        return productService.productSignup(param);
    }
}
