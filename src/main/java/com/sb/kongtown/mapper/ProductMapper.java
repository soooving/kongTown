package com.sb.kongtown.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface ProductMapper {

    public List<HashMap<String, Object>> productList();
    HashMap<String, Object> productSelect(HashMap<String, Object> param);
    public int productInsert(HashMap<String, Object> param);
    public int productUpdate(HashMap<String, Object> param);

}
