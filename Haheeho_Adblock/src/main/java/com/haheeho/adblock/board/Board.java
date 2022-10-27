package com.haheeho.adblock.board;

import java.util.Date;

public class Board {
	private int b_number;
	private String b_writer_id;
	private String b_writer_username;
	private String b_title;
	private String b_content;
	private Date b_date;
	private String b_photo;
	
	public Board() {
		// TODO Auto-generated constructor stub
	}

	public Board(int b_number, String b_writer_id, String b_writer_username, String b_title, String b_content,
			Date b_date, String b_photo) {
		super();
		this.b_number = b_number;
		this.b_writer_id = b_writer_id;
		this.b_writer_username = b_writer_username;
		this.b_title = b_title;
		this.b_content = b_content;
		this.b_date = b_date;
		this.b_photo = b_photo;
	}

	public int getB_number() {
		return b_number;
	}

	public void setB_number(int b_number) {
		this.b_number = b_number;
	}

	public String getB_writer_id() {
		return b_writer_id;
	}

	public void setB_writer_id(String b_writer_id) {
		this.b_writer_id = b_writer_id;
	}

	public String getB_writer_username() {
		return b_writer_username;
	}

	public void setB_writer_username(String b_writer_username) {
		this.b_writer_username = b_writer_username;
	}

	public String getB_title() {
		return b_title;
	}

	public void setB_title(String b_title) {
		this.b_title = b_title;
	}

	public String getB_content() {
		return b_content;
	}

	public void setB_content(String b_content) {
		this.b_content = b_content;
	}

	public Date getB_date() {
		return b_date;
	}

	public void setB_date(Date b_date) {
		this.b_date = b_date;
	}

	public String getB_photo() {
		return b_photo;
	}

	public void setB_photo(String b_photo) {
		this.b_photo = b_photo;
	}
	
	
}
