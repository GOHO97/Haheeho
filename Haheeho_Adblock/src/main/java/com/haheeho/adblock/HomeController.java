package com.haheeho.adblock;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.haheeho.adblock.board.BoardDAO;
import com.haheeho.adblock.board.BoardSearchOption;
import com.haheeho.adblock.member.MemberDAO;

@Controller
public class HomeController {
	
	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private BoardDAO bDAO;
	
	private boolean isFirst;
	
	public HomeController() {
		isFirst = true;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		if(isFirst) { 
			bDAO.setBoardCount(new BoardSearchOption(0, 0, ""));
			isFirst = false;
		}
		mDAO.isLoggedIn(req);
		req.setAttribute("searchBar", "main/search.jsp");
		req.setAttribute("contentPage", "main/main.jsp");
	
		return "index";
	}
	
	@RequestMapping(value="/index.do", method = RequestMethod.GET)
	public String indexDo(HttpServletRequest req) {
		return home(req);
	}
	
}