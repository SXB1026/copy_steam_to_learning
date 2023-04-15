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
-- Table structure for table `game_id_photo`
--

DROP TABLE IF EXISTS `game_id_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_id_photo` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `game_id` int(11) DEFAULT NULL,
  `photo_path` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='存游戏的图片，一对多，故建表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_id_photo`
--

LOCK TABLES `game_id_photo` WRITE;
/*!40000 ALTER TABLE `game_id_photo` DISABLE KEYS */;
INSERT INTO `game_id_photo` VALUES (1,1,'/images/sekiro5.jpg'),(2,1,'/images/sekiro2.jpg'),(3,1,'/images/sekiro3.jpg'),(4,1,'/images/sekiro4.jpg'),(5,1,'/images/sekiro1.jpg'),(6,2,'/images/kof1.jpg'),(7,2,'/images/kof2.jpg'),(8,2,'/images/kof3.jpg'),(9,2,'/images/kof4.jpg'),(10,2,'/images/kof5.jpg');
/*!40000 ALTER TABLE `game_id_photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_id_type`
--

DROP TABLE IF EXISTS `game_id_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_id_type` (
  `no` int(11) NOT NULL,
  `game_id` varchar(45) DEFAULT NULL,
  `game_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='游戏和游戏类型是多对多的关系，故建表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_id_type`
--

LOCK TABLES `game_id_type` WRITE;
/*!40000 ALTER TABLE `game_id_type` DISABLE KEYS */;
INSERT INTO `game_id_type` VALUES (1,'1','单人'),(2,'1','fight'),(3,'1','冒险'),(4,'1','热血'),(5,'2','单人'),(6,'3','单人'),(7,'4','单人'),(8,'5','单人'),(9,'6','单人'),(10,'7','单人'),(11,'8','单人'),(12,'9','单人'),(13,'10','单人'),(14,'11','单人'),(15,'12','单人'),(16,'13','单人'),(17,'14','单人'),(18,'15','单人'),(19,'16','单人'),(20,'17','单人'),(21,'18','格斗'),(22,'19','格斗'),(23,'20','格斗'),(24,'21','格斗'),(25,'22','格斗'),(26,'23','格斗'),(27,'24','格斗'),(28,'25','格斗'),(29,'26','格斗'),(30,'27','格斗'),(31,'28','格斗');
/*!40000 ALTER TABLE `game_id_type` ENABLE KEYS */;
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
  `game_star` int(11) DEFAULT NULL,
  `game_photo2` varchar(225) DEFAULT NULL,
  `game_release_date` date DEFAULT NULL,
  `game_discount` varchar(45) DEFAULT NULL,
  `game_video` varchar(255) DEFAULT NULL,
  `game_players_num` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COMMENT='这张表是存储每个游戏的表，一对一的都放在这。';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Sekiro™: Shadows Die Twice - GOTY Edition','/images/sekiro_logo.jpg','129','在《Sekiro: Shadows Die Twice》中你是“独臂之狼”，一个名誉不再、伤痕累累的忍者，一个从死亡边缘捡回一命的战士。你效忠守护继承古老血统的年轻皇子，与危险的苇名一族以及众多凶恶之徒为敌。年轻的皇子被抓走后，为挽回荣誉，你将不畏死亡，踏上危机四伏的征程',5,NULL,'2022-10-10',NULL,NULL,NULL),(2,'THE KING OF FIGHTERS XIII STEAM EDITION','/images/kof_logo.jpg','68','THE KING OF FIGHTERS XIII”[/i], SNK PLAYMORE’s flagship 2D versus fighting title returns in an ultimate version on Steam!!',5,NULL,'2022-10-10',NULL,NULL,NULL),(3,'的','/images/whiplash.jpg','10','游戏',3,NULL,'2022-10-10',NULL,NULL,NULL),(4,'到','/images/whiplash.jpg','3','搜索',2,NULL,'2022-10-10',NULL,NULL,NULL),(5,'asd','/images/1.png','2','竞技',4,NULL,'2022-10-10',NULL,NULL,NULL),(6,'sff','/images/2.png','4','养成',5,NULL,'2022-10-10',NULL,NULL,NULL),(7,'cdd','/images/3.png','5','休闲',3,NULL,'2022-10-10',NULL,NULL,NULL),(8,'xsw','/images/4.png','6','热血',5,NULL,'2022-10-10',NULL,NULL,NULL),(9,'sdf','/images/5.png','7','冒险',4,NULL,'2022-10-10',NULL,NULL,NULL),(10,'dsc','/images/6.png','5','经营',2,NULL,'2022-10-10',NULL,NULL,NULL),(11,'fg','/images/voice.png','6','单人',4,NULL,'2022-10-10',NULL,NULL,NULL),(12,'sfgs','/images/voice.png','8','单人',4,NULL,'2022-10-10',NULL,NULL,NULL),(13,'sfdg','/images/voice.png','5','单人',2,NULL,'2022-10-10',NULL,NULL,NULL),(14,'jyt','/images/voice.png','5','单人',3,NULL,'2022-10-10',NULL,NULL,NULL),(15,'tyjter','/images/voice.png','2','单人',3,NULL,'2022-10-10',NULL,NULL,NULL),(16,'erty','/images/voice.png','2','单人',6,NULL,'2022-10-10',NULL,NULL,NULL),(17,'ery','/images/voice.png','8','单人',9,NULL,'2022-10-10',NULL,NULL,NULL),(18,'b','/images/voice.png','7','单人',9,NULL,'2022-10-10',NULL,NULL,NULL),(19,'v','/images/voice.png','65','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(20,'c','/images/voice.png','35','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(21,'dghj','/images/voice.png','35','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(22,'gdh','/images/voice.png','35','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(23,'jr','/images/voice.png','35','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(24,'dd','/images/voice.png','25','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(25,'ee','/images/voice.png','3','单人',5,NULL,'2022-10-10',NULL,NULL,NULL),(26,'jh','/images/voice.png','85','格斗',5,NULL,'2022-10-10',NULL,NULL,NULL),(27,'hn','/images/voice.png','38','格斗',5,NULL,'2022-10-10',NULL,NULL,NULL),(28,'fn','/images/voice.png','35','格斗',5,NULL,'2022-10-10',NULL,NULL,NULL),(29,'nr','/images/voice.png','35','格斗',5,NULL,'2022-10-10',NULL,NULL,NULL),(30,'rm','/images/voice.png','35','格斗',4,NULL,'2022-10-10',NULL,NULL,NULL),(31,'m','/images/voice.png','3','格斗',5,NULL,'2022-10-10',NULL,NULL,NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `player_id` int(11) NOT NULL AUTO_INCREMENT,
  `player_introduce` varchar(225) DEFAULT NULL,
  `player_name` varchar(45) DEFAULT NULL,
  `player_photo` varchar(45) DEFAULT NULL,
  `player_game_time` varchar(45) DEFAULT NULL,
  `player_game_num` int(11) DEFAULT NULL,
  `player_account_number` varchar(45) DEFAULT NULL,
  `player_account_password` varchar(45) DEFAULT NULL,
  `player_money` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`player_id`),
  UNIQUE KEY `player_account_number_UNIQUE` (`player_account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='记录每一个玩家';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,NULL,NULL,NULL,NULL,NULL,'sunxiangbo','sunxiangbo',NULL),(2,NULL,NULL,NULL,NULL,NULL,'guohan','guohan',NULL);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_talk_games`
--

DROP TABLE IF EXISTS `players_talk_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_talk_games` (
  `no` int(11) NOT NULL,
  `player_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `the_talk` varchar(255) DEFAULT NULL,
  `the_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='放游戏的讨论，评论之类的，由于一个人可以对一个游戏评论多次，一个游戏可以被多人评论。。。等等，故建表。';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_talk_games`
--

LOCK TABLES `players_talk_games` WRITE;
/*!40000 ALTER TABLE `players_talk_games` DISABLE KEYS */;
/*!40000 ALTER TABLE `players_talk_games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_with_games`
--

DROP TABLE IF EXISTS `players_with_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_with_games` (
  `no` int(11) NOT NULL,
  `player_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `game_time` varchar(45) DEFAULT NULL,
  `player_to_game_star` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='存放某个玩家拥有的游戏，用于库页面的建设。';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_with_games`
--

LOCK TABLES `players_with_games` WRITE;
/*!40000 ALTER TABLE `players_with_games` DISABLE KEYS */;
/*!40000 ALTER TABLE `players_with_games` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-15  8:47:41
