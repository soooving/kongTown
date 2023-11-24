package com.sb.kongtown.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface ProductMapper {

    public List<HashMap<String, Object>> productList();
    public HashMap<String, Object> productSelect(HashMap<String, Object> param);
    public int productInsert(HashMap<String, Object> param);
    public int productUpdate(HashMap<String, Object> param);


    public List<HashMap<String, Object>> productRentalList(HashMap<String, Object> param);
    public int productRental(HashMap<String, Object> param);



    public int productHaveNumberUpdate(HashMap<String, Object> param);
}
