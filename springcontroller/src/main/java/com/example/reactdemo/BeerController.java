package com.example.reactdemo;

import com.example.reactdemo.model.Beer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BeerController {

    public BeerController() {
    }

    @RequestMapping(value="/goodbeers")
    public List<Beer> goodBeers() {
        List<Beer> res = new ArrayList<>();
        res.add(new Beer(1L,"Kentucky Brunch Brand Stout"));
        res.add(new Beer(2L,"Budweiser"));
        res.add(new Beer(3L,"Coors Light"));
        res.add(new Beer(4L,"PBR"));
        return res;
    }

    @RequestMapping(value="/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }
}
