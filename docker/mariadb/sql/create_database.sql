CREATE TABLE mercy_kids.user (
	`id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
	`uid` varchar(200) NOT NULL,
	`email` varchar(32) NOT NULL,
	`password` varchar(64) NOT NULL,
	`name` varchar(10) NOT NULL,
	`nickname` varchar(10) NOT NULL,
	`registered_at` datetime(6) NOT NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
