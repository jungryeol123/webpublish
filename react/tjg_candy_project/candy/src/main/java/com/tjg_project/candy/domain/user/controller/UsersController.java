package com.tjg_project.candy.domain.user.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class UsersController {


    @PostMapping
    public String login() {
        return "안녕!!";
    }

}


//import org.springframework.security.core.Authentication;
//
//@GetMapping("/me")
//public String getMyEmail(Authentication authentication) {
//    String email = (String) authentication.getPrincipal();
//    return email;
//}