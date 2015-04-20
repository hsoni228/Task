-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2015 at 05:10 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `himanshu`
--

-- --------------------------------------------------------

--
-- Table structure for table `places`
--

CREATE TABLE IF NOT EXISTS `places` (
  `sr_no` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `lat` varchar(20) NOT NULL,
  `lng` varchar(20) NOT NULL,
  PRIMARY KEY (`sr_no`),
  UNIQUE KEY `lat` (`lat`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `places`
--

INSERT INTO `places` (`sr_no`, `name`, `lat`, `lng`) VALUES
(1, 'Sydney', '-33.8674869', '151.20699020000006'),
(2, 'Kurukshetra', '29.9695121', '76.87828200000001'),
(3, 'Yamuna Nagar', '30.1290485', '77.26739010000006'),
(4, 'Kurnell', '-34.0115236', '151.20978820000005'),
(7, 'York St Near Barrack St', '-33.86792', '151.206049'),
(8, 'Wollongong', '-34.4250728', '150.89314939999997'),
(11, 'Kuruk Pl', '-33.7481321', '151.11839699999996'),
(13, 'Uttarakhand', '28.5492382', '77.16936609999993'),
(14, 'Kajang', '2.993518', '101.78740579999999'),
(15, 'Ksubi', '-33.88393', '151.22287000000006'),
(16, 'JJ Kelly Park', '-34.437999', '150.89364999999998');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
