CREATE DATABASE  IF NOT EXISTS `the_steam` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `the_steam`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: the_steam
-- ------------------------------------------------------
-- Server version	5.6.34-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game_type`
--

DROP TABLE IF EXISTS `game_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_type` (
  `no` int(11) NOT NULL,
  `game_id` varchar(45) DEFAULT NULL,
  `game_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='game_id with the type';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_type`
--

LOCK TABLES `game_type` WRITE;
/*!40000 ALTER TABLE `game_type` DISABLE KEYS */;
INSERT INTO `game_type` VALUES (1,'1','单人'),(2,'1','格斗'),(3,'1','冒险'),(4,'1','热血'),(5,'2','单人'),(6,'3','单人'),(7,'4','单人'),(8,'5','单人'),(9,'6','单人'),(10,'7','单人'),(11,'8','单人'),(12,'9','单人'),(13,'10','单人'),(14,'11','单人'),(15,'12','单人'),(16,'13','单人'),(17,'14','单人'),(18,'15','单人'),(19,'16','单人'),(20,'17','单人'),(21,'18','格斗'),(22,'19','格斗'),(23,'20','格斗'),(24,'21','格斗'),(25,'22','格斗'),(26,'23','格斗'),(27,'24','格斗'),(28,'25','格斗'),(29,'26','格斗'),(30,'27','格斗'),(31,'28','格斗');
/*!40000 ALTER TABLE `game_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `game_id` int(11) NOT NULL AUTO_INCREMENT,
  `game_name` varchar(255) DEFAULT NULL,
  `game_photo` varchar(255) DEFAULT NULL,
  `game_price` varchar(255) DEFAULT NULL,
  `game_introduction` varchar(2550) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'sekiro','/images/voice.png','129','单人',5),(2,'kof','/images/whiplash.jpg','14','格斗',5),(3,'的','/images/whiplash.jpg','10','游戏',3),(4,'到','/images/whiplash.jpg','3','搜索',2),(5,'asd','/images/1.png','2','竞技',4),(6,'sff','/images/2.png','4','养成',5),(7,'cdd','/images/3.png','5','休闲',3),(8,'xsw','/images/4.png','6','热血',5),(9,'sdf','/images/5.png','7','冒险',4),(10,'dsc','/images/6.png','5','经营',2),(11,'fg','/images/voice.png','6','单人',4),(12,'sfgs','/images/voice.png','8','单人',4),(13,'sfdg','/images/voice.png','5','单人',2),(14,'jyt','/images/voice.png','5','单人',3),(15,'tyjter','/images/voice.png','2','单人',3),(16,'erty','/images/voice.png','2','单人',6),(17,'ery','/images/voice.png','8','单人',9),(18,'b','/images/voice.png','7','单人',9),(19,'v','/images/voice.png','65','单人',5),(20,'c','/images/voice.png','35','单人',5),(21,'dghj','/images/voice.png','35','单人',5),(22,'gdh','/images/voice.png','35','单人',5),(23,'jr','/images/voice.png','35','单人',5),(24,'dd','/images/voice.png','25','单人',5),(25,'ee','/images/voice.png','3','单人',5),(26,'jh','/images/voice.png','85','格斗',5),(27,'hn','/images/voice.png','38','格斗',5),(28,'fn','/images/voice.png','35','格斗',5),(29,'nr','/images/voice.png','35','格斗',5),(30,'rm','/images/voice.png','35','格斗',4),(31,'m','/images/voice.png','3','格斗',5);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `the_fighters`
--

DROP TABLE IF EXISTS `the_fighters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `the_fighters` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `attack` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `the_fighters`
--

LOCK TABLES `the_fighters` WRITE;
/*!40000 ALTER TABLE `the_fighters` DISABLE KEYS */;
INSERT INTO `the_fighters` VALUES (1,'孙祥博',7),(2,'田佳平',-7),(4,'黄保天',8);
/*!40000 ALTER TABLE `the_fighters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-10 14:12:54
