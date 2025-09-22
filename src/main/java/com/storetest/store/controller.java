package com.storetest.store;

import org.springframework.web.bind.annotation.GetMapping;

public class controller {

    @GetMapping("/fname=حمد")
    public String getindex() {
        return "pgae2";
    }   
}
