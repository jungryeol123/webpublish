package com.tjg_project.candy.dto;

import lombok.Data;

@Data
public class Member {
    private String id;
    private String password;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String gender;
    private String birth;
}
