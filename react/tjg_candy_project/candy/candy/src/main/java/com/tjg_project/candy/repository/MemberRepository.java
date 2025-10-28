package com.tjg_project.candy.repository;

import com.tjg_project.candy.dto.Member;

public interface MemberRepository {
    Member findById(String id);
    Member findByEmailOrPhone(String query); // 아이디 찾기용
    Member findByIdAndEmailOrPhone(String id, String query); // 비밀번호 찾기용
}
