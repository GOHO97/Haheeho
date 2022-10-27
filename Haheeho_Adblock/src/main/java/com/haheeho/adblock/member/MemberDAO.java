package com.haheeho.adblock.member;

import java.io.File;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@Service
public class MemberDAO {
	
	@Autowired
	private SqlSession ss;
	
	public void join(Member m, HttpServletRequest req) {
		String path = req.getSession().getServletContext().getRealPath("resources/img");
		MultipartRequest mr = null;
		try {
			mr = new MultipartRequest(req, path, 31457280, "utf-8", new DefaultFileRenamePolicy());
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("result", "회원가입 실패[프사]");
			return; 
		}
		try {
			String id = mr.getParameter("m_id");
			String username = mr.getParameter("m_username");
			String pw = mr.getParameter("m_pw");
			String email = mr.getParameter("m_email");
			String photo = mr.getFilesystemName("m_photo");
			photo = URLEncoder.encode(photo, "utf-8").replace("+", " ");
			
			m.setM_id(id);
			m.setM_username(username);
			m.setM_pw(pw);
			m.setM_email(email);
			m.setM_photo(photo);
			
			if (ss.getMapper(MemberMapper.class).join(m) == 1) {
				req.setAttribute("result", "회원가입 성공");
			} else {
				req.setAttribute("result",  "회원가입 실패[DB1]");
				// 가입 실패했을때 프사 이미지 지우기
				new File(path + "/" + mr.getFilesystemName("m_photo")).delete();
			}
		} catch (Exception e) {
			System.out.println(e);
			req.setAttribute("result", "회원가입 실패[DB2]");
			new File(path + "/" + mr.getFilesystemName("m_photo")).delete();
		}
	}
	
	
	public void login(Member inputmember, HttpServletRequest req) {
		try {
			Member dbMember = ss.getMapper(MemberMapper.class).getMemberByID(inputmember);
			if (dbMember != null) { 
				if(inputmember.getM_pw().equals(dbMember.getM_pw())) {
					req.getSession().setAttribute("loginStatus", dbMember);
					req.setAttribute("result", "로그인 성공");
				} else {
					req.setAttribute("result", "로그인 실패: 비밀번호가 틀렸습니다.");
				}
			} else {
				req.setAttribute("result", "미가입 아이디");
			}
		} catch (Exception e) {
			req.setAttribute("result", "로그인 실패[DB]");
		}
	}
	
}
