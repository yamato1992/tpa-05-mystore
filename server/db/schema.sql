CREATE DATABASE `my_store` DEFAULT CHARACTER SET utf8mb4;

USE `my_store`;

CREATE TABLE `items` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` TEXT,
  `price` FLOAT,
  `image_url` TEXT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
