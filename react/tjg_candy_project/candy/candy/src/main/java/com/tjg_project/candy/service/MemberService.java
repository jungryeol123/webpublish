package com.tjg_project.candy.service;

import com.tjg_project.candy.dto.Member;

public interface MemberService {
    Member login(String id, String password);
    String findUserId(String query);
    String findPassword(String id, String query);
}
