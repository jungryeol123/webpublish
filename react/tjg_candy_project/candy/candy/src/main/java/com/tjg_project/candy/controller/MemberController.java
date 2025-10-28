package com.tjg_project.candy.controller;

import com.tjg_project.candy.service.MemberService;
import com.tjg_project.candy.dto.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    // 로그인
    @PostMapping("/login")
    public Member login(@RequestBody Member member) {
        return memberService.login(member.getId(), member.getPassword());
    }

    // 아이디 찾기
    @GetMapping("/find-userId")
    public String findUserId(@RequestParam String query) {
        String userId = memberService.findUserId(query);
        return userId != null ? userId : "일치하는 아이디가 없습니다.";
    }

    // 비밀번호 찾기
    @GetMapping("/find-password")
    public String findPassword(@RequestParam String id, @RequestParam String query) {
        String password = memberService.findPassword(id, query);
        return password != null ? password : "일치하는 회원이 없습니다.";
    }
}
