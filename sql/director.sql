CREATE TABLE
IF NOT EXISTS  `director`
(
  `id` INT PRIMARY KEY (11) NOT NULL AUTO_INCREMENT,

  `name` varchar (255) DEFAULT NULL COMMENT `导演`,

  `introduction` varchar (255) DEFAULT NULL COMMENT `简介`,

  `movie_ids` varchar (255) DEFAULT NULL COMMENT '关联的movie id',

  `create_time` varchar (20) DEFAULT NULL,

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
