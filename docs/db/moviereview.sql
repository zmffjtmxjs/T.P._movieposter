-- MySQL Script generated by MySQL Workbench
-- Tue Jun 30 23:56:12 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema moviereview
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema moviereview
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `moviereview` DEFAULT CHARACTER SET utf8 ;
USE `moviereview` ;

-- -----------------------------------------------------
-- Table `moviereview`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviereview`.`users` (
  `user_id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `nickname` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `moviereview`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviereview`.`movies` (
  `movie_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `relsedate` DATE NOT NULL,
  PRIMARY KEY (`movie_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `moviereview`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviereview`.`posts` (
  `post_id` BIGINT NOT NULL AUTO_INCREMENT,
  `movie_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `title` VARCHAR(255) NULL,
  `description` TEXT NOT NULL,
  `createdate` DATE NOT NULL,
  `modifydate` DATE NULL,
  PRIMARY KEY (`post_id`),
  INDEX `movie_id_idx` (`movie_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `movie_id`
    FOREIGN KEY (`movie_id`)
    REFERENCES `moviereview`.`movies` (`movie_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `moviereview`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `moviereview`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `moviereview`.`comments` (
  `comment_id` BIGINT NOT NULL AUTO_INCREMENT,
  `post_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `score` INT NOT NULL,
  `createdate` DATE NOT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `post_id_idx` (`post_id` ASC) VISIBLE,
  INDEX `fk_comments_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `post_id`
    FOREIGN KEY (`post_id`)
    REFERENCES `moviereview`.`posts` (`post_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `moviereview`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
