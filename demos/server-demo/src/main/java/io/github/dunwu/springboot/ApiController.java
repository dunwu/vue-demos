package io.github.dunwu.springboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @RequestMapping("/api/hello")
    public ResponseDTO<String> index() {
      return new ResponseDTO<>(true, ResponseDTO.CodeEn.SUCCESS, "Hello World");
    }

}
