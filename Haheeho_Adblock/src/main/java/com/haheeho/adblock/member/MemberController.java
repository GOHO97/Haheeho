package com.haheeho.adblock.member;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MemberController {

	@Autowired
	private MemberDAO mDAO;
	
	@RequestMapping(value = "/member.join.go", method = RequestMethod.GET)
	public String memberJoinGo(HttpServletRequest req) {
		req.setAttribute("searchBar", "main/search.jsp");
		req.setAttribute("contentPage", "main/main.jsp");
		req.setAttribute("loginPage", "member/join.jsp");	
		req.setAttribute("userPage", "member/userPage.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.join.do", method = RequestMethod.POST)
	public String memberJoinDo(Member m, HttpServletRequest req) {
		mDAO.join(m, req);
		req.setAttribute("searchBar", "main/search.jsp");
		req.setAttribute("contentPage", "main/main.jsp");
		req.setAttribute("loginPage", "member/login.jsp");	
		req.setAttribute("userPage", "member/userPage.jsp");
		return "index";
	}

	@RequestMapping(value="/member.login", method=RequestMethod.POST)
	public String memberLoginDo(Member m, HttpServletRequest req) {
		mDAO.login(m, req);
		req.setAttribute("searchBar", "main/search.jsp");
		req.setAttribute("contentPage", "main/main.jsp");
		req.setAttribute("loginPage", "member/welcome.jsp");	
		req.setAttribute("userPage", "member/userPage.jsp");
		return "index";
	}
	
}
