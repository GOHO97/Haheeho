create table adblock_member(
	m_id varchar2(12 char) primary key, 
	m_username varchar2(10 char) not null,
	m_pw varchar2(20 char) not null,
	m_email varchar2(30 char) not null,
	m_photo varchar2(100 char) not null
);

select * from ADBLOCK_MEMBER;

drop adblock_member cascade constraint purge;