package com.tjg_project.candy.repository;

import com.tjg_project.candy.dto.Member;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

@Repository
public class JdbcTemplateMemberRepository implements MemberRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Member findById(String id) {
        String sql = "SELECT * FROM member WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Member.class), id);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Member findByEmailOrPhone(String query) {
        String sql = "SELECT * FROM member WHERE email = ? OR phone = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Member.class), query, query);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Member findByIdAndEmailOrPhone(String id, String query) {
        String sql = "SELECT * FROM member WHERE id = ? AND (email = ? OR phone = ?)";
        try {
            return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Member.class), id, query, query);
        } catch (Exception e) {
            return null;
        }
    }
}
