package com.haheeho.adblock;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		
		req.setAttribute("searchBar", "main/search.jsp");
		req.setAttribute("contentPage", "main/main.jsp");
		req.setAttribute("loginPage", "member/login.jsp");
		req.setAttribute("userPage", "member/emptyUserPage.jsp");
		return "index";
	}
	
	@RequestMapping(value="/index.do", method = RequestMethod.GET)
	public String indexDo(HttpServletRequest req) {
		return home(req);
	}
	
}
