package com.tjg_project.candy.service;

import com.tjg_project.candy.dto.Member;
import com.tjg_project.candy.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public Member login(String id, String password) {
        Member member = memberRepository.findById(id);
        if (member != null && passwordEncoder.matches(password, member.getPassword())) {
            return member;
        }
        return null;
    }

    @Override
    public String findUserId(String query) {
        Member member = memberRepository.findByEmailOrPhone(query);
        if (member != null) {
            return member.getId();
        }
        return null;
    }

    @Override
    public String findPassword(String id, String query) {
        Member member = memberRepository.findByIdAndEmailOrPhone(id, query);
        if (member != null) {
            return member.getPassword();
        }
        return null;
    }
}
