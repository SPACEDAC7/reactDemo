package com.example.reactdemo;

import com.example.reactdemo.model.Beer;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BeerController {

    private List<Beer> res = new ArrayList<>();

    public BeerController() {

    }

    @PostConstruct
    public void c(){
        res.add(new Beer(1L,"Kentucky Brunch Brand Stout", "I have never heart nothing about this beer"));
        res.add(new Beer(2L,"Budweiser", "Good germany beer"));
        res.add(new Beer(3L,"Coors Light", "Why is light? The normal the best"));
        res.add(new Beer(4L,"PBR", "Proevolution Beer Room"));
        res.add(new Beer(5L,"San Miguel", "Una cerveza malageña como dios manda"));
        res.add(new Beer(6L,"Doombar", "Really really good"));
        res.add(new Beer(7L,"Entrella Galicia", "La mejor cerveza del mundo"));
        res.add(new Beer(8L,"Fosters", "English cruzcampo"));
        res.add(new Beer(9L,"Mahou", "Not too bad"));
        res.add(new Beer(10L,"Alhambra", "Good andalucian beer"));
        res.add(new Beer(11L,"Ambar", "Cheap spanish beer"));
        res.add(new Beer(12L,"Judas", "Strong beer"));
        res.add(new Beer(13L,"AKDawn", "Strange beer that I tasted only two times"));
        res.add(new Beer(14L,"Delium Tremens", "Good name, worse taste"));
        res.add(new Beer(15L,"Amstel", "Cheap and not too bad"));
        res.add(new Beer(16L,"Beer", "Generic description"));
    }

    @RequestMapping(value="/beers")
    public List<Beer> goodBeers() {
        return res;
    }

    @RequestMapping(value="/getBeerById")
    public Beer getBeerById(@RequestParam(value="id") long id ){
        for(Beer b: res){
            if(b.getId().equals(id))
                return b;
        }
        return null;
    }

    @RequestMapping(value="/addBeer")
    public void addBeer(@RequestBody Beer beer ){
        this.res.add(beer);
    }

    @RequestMapping(value="/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }
}
