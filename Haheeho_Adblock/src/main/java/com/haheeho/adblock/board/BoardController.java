package com.haheeho.adblock.board;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.haheeho.adblock.TokenGenerator;
import com.haheeho.adblock.member.MemberDAO;

@Controller
public class BoardController {

	@Autowired
	private MemberDAO mDAO;
	
	@RequestMapping(value="/board.go", method = RequestMethod.GET)
	public String board(HttpServletRequest req) {
//		if(mDAO.isLoggedIn)
		req.setAttribute("searchBar", "board/boardSearch.jsp");
		req.setAttribute("contentPage", "board/board.jsp");
		req.setAttribute("loginPage", "member/welcome.jsp");
		req.setAttribute("userPage", "member/userPage.jsp");
		return "index";
	}
	
	@RequestMapping(value="/board.write.go", method = RequestMethod.POST)
	public String boardPostGo(HttpServletRequest req) {
//		if(mDAO.isLoggedIn) 해야됨
		TokenGenerator.generate(req);
		req.setAttribute("searchBar", "board/boardSearch.jsp");
		req.setAttribute("contentPage", "board/boardWrite.jsp");
		req.setAttribute("loginPage", "member/welcome.jsp");
		req.setAttribute("userPage", "member/userPage.jsp");
		return "index";
	}
}
