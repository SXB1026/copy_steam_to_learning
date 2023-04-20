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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='存游戏的图片，一对多，故建表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_id_photo`
--

LOCK TABLES `game_id_photo` WRITE;
/*!40000 ALTER TABLE `game_id_photo` DISABLE KEYS */;
INSERT INTO `game_id_photo` VALUES (1,1,'/images/sekiro5.jpg'),(2,1,'/images/sekiro2.jpg'),(3,1,'/images/sekiro3.jpg'),(4,1,'/images/sekiro4.jpg'),(5,1,'/images/sekiro1.jpg'),(6,2,'/images/kof1.jpg'),(7,2,'/images/kof2.jpg'),(8,2,'/images/kof3.jpg'),(9,2,'/images/kof4.jpg'),(10,2,'/images/kof5.jpg'),(11,3,'/images/c1.png'),(12,3,'/images/c2.png'),(13,3,'/images/c3.png'),(14,3,'/images/c4.png'),(15,3,'/images/c5.png'),(16,4,'/images/d1.png'),(17,4,'/images/d2.png'),(18,4,'/images/d3.png'),(19,4,'/images/d4.png'),(20,4,'/images/d5.png'),(21,5,'/images/e1.png'),(22,5,'/images/e2.png'),(23,5,'/images/e3.png'),(24,5,'/images/e4.png'),(25,5,'/images/e5.png'),(26,6,'/images/f1.png'),(27,6,'/images/f2.png'),(28,6,'/images/f3.png'),(29,6,'/images/f4.png'),(30,6,'/images/f5.png');
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
INSERT INTO `game_id_type` VALUES (1,'1','单人'),(2,'1','高难'),(3,'4','冒险'),(4,'1','热血'),(5,'2','多人'),(6,'3','单人'),(7,'4','多人'),(8,'5','单人'),(9,'6','多人'),(10,'7','单人'),(11,'8','单人'),(12,'9','单人'),(13,'10','单人'),(14,'11','单人'),(15,'12','单人'),(16,'13','多人'),(17,'14','单人'),(18,'15','单人'),(19,'16','单人'),(20,'17','单人'),(21,'18','单人'),(22,'19','单人'),(23,'20','单人'),(24,'21','单人'),(25,'2','格斗'),(26,'11','格斗'),(27,'18','格斗'),(28,'2','高难'),(29,'5','高难'),(30,'6','高难'),(31,'13','高难'),(32,'15','高难'),(33,'12','高难'),(34,'8','高难'),(35,'5','冒险'),(36,'8','冒险'),(37,'9','冒险'),(38,'16','冒险'),(39,'17','冒险');
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
  `game_about` varchar(2550) DEFAULT NULL,
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
INSERT INTO `items` VALUES (1,'Sekiro™: Shadows Die Twice - GOTY Edition','/images/sekiro_logo.jpg','129','在《Sekiro: Shadows Die Twice》中你是“独臂之狼”，一个名誉不再、伤痕累累的忍者，一个从死亡边缘捡回一命的战士。你效忠守护继承古老血统的年轻皇子，与危险的苇名一族以及众多凶恶之徒为敌。年轻的皇子被抓走后，为挽回荣誉，你将不畏死亡，踏上危机四伏的征程','日本，久远的战国时代。一座被大雪覆盖的大山前方，有一个叫苇名的国家。人称“剑圣”的苇名一心，篡夺权力建立了苇名国，乃是北国之雄。但是，现在苇名国正处于存亡的危机之中。一心的孙子苇名的大将军，困境之中秘密召集了自己的军队。“事已至此，为 了守护住苇名，我们已经别无选择了”、“现在，我们需要那个御子”。就这样，御子开始被孤独地囚禁，身边没有家人、没有家臣、什么都没有。除了一个忍者。这是个无依无靠、孤独的主仆二人所展开的故事',5,NULL,'2022-10-10',NULL,NULL,NULL),(2,'THE KING OF FIGHTERS XIII STEAM EDITION','/images/kof_logo.jpg','68','THE KING OF FIGHTERS XIII”[/i], SNK PLAYMORE’s flagship 2D versus fighting title returns in an ultimate version on Steam!!','《拳皇13》是由SNK Playmore制作的格斗游戏，是“拳皇”系列的第13部作品。游戏于2010年首次发布，之后又在2011年、2012年和2013年推出了多个版本和补丁。游戏以经典的“拳皇”系列格斗玩法为基础，新增了许多新的技能和特色，同时也有更好的画面和音效效果。游戏支持多人对战和在线对战模式，是一款备受玩家喜爱的格斗游戏之一。',5,NULL,'2022-10-10',NULL,NULL,NULL),(3,'Red Dead Redemption 2','/images/h3.png','259','Red Dead Redemption 2 已荣获超过 175 项年度游戏奖项且获得超过 250 个满分评价，游戏中述说亚瑟·摩根和声名狼藉的范德林德帮派的传奇故事','亚瑟·摩根和范德林德帮众是一群逃亡在外的亡命之徒。联邦侦探和全国顶尖的赏金猎人在他们的身后穷追不舍，亚瑟一行人必须在广袤蛮荒的美国腹地上四处劫掠、挣扎求生。而帮派内部的矛盾分化日渐加深，摆在亚瑟面前的将是他无法避免的抉择：究竟是选择自己的理想，还是选择效忠于抚养了自己的帮派。',5,NULL,'2022-10-10',NULL,NULL,NULL),(4,'双人成行','/images/h4.png','94','游玩《双人成行》，踏上生命中最疯狂的旅程。利用好友通行证*邀请一位好友免费游玩，共同体验多种多样的乐趣，享受颠覆性的玩法挑战。','游玩《双人成行》，踏上生命中最疯狂的旅程，这是一款别开生面的平台冒险游戏，完全为合作模式而设计。利用好友通行证*邀请一位好友免费游玩，共同体验多种多样的乐趣，享受颠覆性的玩法挑战。扮演相互看不顺眼的科迪和小梅夫妇，这两个人被魔咒变成了玩偶。他们一起被困在一个奇幻世界里，每个角落都隐藏着意想不到的东西，他们不得不一起克服挑战，同时挽救他们破裂的关系。',5,NULL,'2022-10-10',NULL,NULL,NULL),(5,'Braid','/images/h5.png','68','Braid is a puzzle-platformer, drawn in a painterly style, where you can manipulate the flow of time in strange and unusual ways','Braid is a puzzle-platformer, drawn in a painterly style, where you can manipulate the flow of time in strange and unusual ways. From a house in the city, journey to a series of worlds and solve puzzles to rescue an abducted princess.',5,NULL,'2022-10-10',NULL,NULL,NULL),(6,'CSGO','/images/h6.png','0','《反恐精英：全球攻势》（CS: GO）延续了 1999 年原作在团队竞技类游戏上取得的成就。 CS: GO 的特色包含全新的地图、人物、武器、全新的游戏模式，并提供翻新后的 CS 经典内容（de_dust2 等）。','“《反恐精英》这个模组于 1999 年 8月推出时，立刻成了世界上玩家数量最多的线上 PC 动作游戏，使得游戏业为之一惊。”Valve 的 Doug Lombardi 如是说道。“在过去的 12 年中，它一直是世界上拥有玩家数量最多的游戏之一，引领着竞技游戏赛事，并且在全球创下了超过 2500 万套的游戏销量。CS: GO 承诺将增强屡获殊荣的 CS 系列之游戏体验，并把它带给 PC 平台、次世代主机平台和 Mac 平台的玩家。”',5,NULL,'2022-10-10',NULL,NULL,NULL),(7,'just_go','/images/h7.png','5','休闲',NULL,3,NULL,'2022-10-10',NULL,NULL,NULL),(8,'艾尔登法环','/images/h8.png','6','热血',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(9,'WOLONG','/images/h9.png','7','冒险',NULL,4,NULL,'2022-10-10',NULL,NULL,NULL),(10,'赛博朋克2077','/images/h10.png','5','经营',NULL,2,NULL,'2022-10-10',NULL,NULL,NULL),(11,'真人快打11','/images/h11.png','6','单人',NULL,4,NULL,'2022-10-10',NULL,NULL,NULL),(12,'武士0','/images/h12.png','8','单人',NULL,4,NULL,'2022-10-10',NULL,NULL,NULL),(13,'茶杯头','/images/h13.png','5','单人',NULL,2,NULL,'2022-10-10',NULL,NULL,NULL),(14,'死亡搁浅','/images/h14.png','5','单人',NULL,3,NULL,'2022-10-10',NULL,NULL,NULL),(15,'黑魂','/images/h15.png','2','单人',NULL,3,NULL,'2022-10-10',NULL,NULL,NULL),(16,'LIMBO','/images/h16.png','2','单人',NULL,6,NULL,'2022-10-10',NULL,NULL,NULL),(17,'STRAY','/images/h17.png','8','单人',NULL,9,NULL,'2022-10-10',NULL,NULL,NULL),(18,'KOF14','/images/h18.png','7','单人',NULL,9,NULL,'2022-10-10',NULL,NULL,NULL),(19,'地平线','/images/h19.png','65','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(20,'战神4','/images/h20.png','35','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(21,'无间','/images/h21.png','35','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(22,'gdh','/images/voice.png','35','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(23,'jr','/images/voice.png','35','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(24,'dd','/images/voice.png','25','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(25,'ee','/images/voice.png','3','单人',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(26,'jh','/images/voice.png','85','格斗',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(27,'hn','/images/voice.png','38','格斗',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(28,'fn','/images/voice.png','35','格斗',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(29,'nr','/images/voice.png','35','格斗',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL),(30,'rm','/images/voice.png','35','格斗',NULL,4,NULL,'2022-10-10',NULL,NULL,NULL),(31,'m','/images/voice.png','3','格斗',NULL,5,NULL,'2022-10-10',NULL,NULL,NULL);
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
  `player_money` int(11) DEFAULT NULL,
  PRIMARY KEY (`player_id`),
  UNIQUE KEY `player_account_number_UNIQUE` (`player_account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='记录每一个玩家';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'塔塔开，下后下前拳，乌利亚','草薙京','/images/cao.jpg','0',0,'sunxiangbo','sunxiangbo',77895),(2,'1','1','1','1',1,'guohan','guohan',1);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_talk_games`
--

DROP TABLE IF EXISTS `players_talk_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_talk_games` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `the_talk` varchar(255) DEFAULT NULL,
  `the_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='放游戏的讨论，评论之类的，由于一个人可以对一个游戏评论多次，一个游戏可以被多人评论。。。等等，故建表。';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_talk_games`
--

LOCK TABLES `players_talk_games` WRITE;
/*!40000 ALTER TABLE `players_talk_games` DISABLE KEYS */;
INSERT INTO `players_talk_games` VALUES (1,1,2,'这真是一个好游戏呀',NULL),(2,1,2,'真的好玩，推荐',NULL),(3,1,2,'好玩呢',NULL),(4,2,1,'好游戏',NULL),(5,2,1,'信息',NULL);
/*!40000 ALTER TABLE `players_talk_games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_with_games`
--

DROP TABLE IF EXISTS `players_with_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_with_games` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `game_time` varchar(45) DEFAULT NULL,
  `player_to_game_star` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='存放某个玩家拥有的游戏，用于库页面的建设。';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_with_games`
--

LOCK TABLES `players_with_games` WRITE;
/*!40000 ALTER TABLE `players_with_games` DISABLE KEYS */;
INSERT INTO `players_with_games` VALUES (1,1,2,NULL,NULL),(2,1,1,NULL,NULL),(3,1,3,NULL,NULL);
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

-- Dump completed on 2023-04-20 16:00:15
