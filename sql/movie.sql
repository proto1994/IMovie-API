CREATE TABLE
IF NOT EXISTS  `movie`
(
  `id` INT PRIMARY KEY (11) NOT NULL AUTO_INCREMENT,

  `name` varchar (255) DEFAULT NULL COMMENT `电影名`,

  `actor_names` varchar (255) DEFAULT NULL COMMENT `演员名字， a,b,c`,

  `director_name` varchar (255) DEFAULT NULL COMMENT `导演名字, a,b,c`,

  `type` INT (11) NOT NULL COMMENT `电影类型 [1-6] 喜剧|科幻|悬疑|战争|恐怖|传记`,

  `introduction` varchar (255) DEFAULT NULL COMMENT `简介`,

  `description` varchar (255) DEFAULT NULL COMMENT `描述`,

  `imdb_score` INT (11) DEFAULT NULL COMMENT 'IMDB评分',

  `db_score` INT (11) DEFAULT NULL COMMENT '豆瓣评分',

  `mtime_score` INT (11) DEFAULT NULL COMMENT '时光网评分',

  `create_time` varchar (20) DEFAULT NULL,

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
