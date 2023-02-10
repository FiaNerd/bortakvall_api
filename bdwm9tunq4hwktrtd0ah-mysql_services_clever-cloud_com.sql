-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bdwm9tunq4hwktrtd0ah-mysql.services.clever-cloud.com:3306
-- Generation Time: Feb 10, 2023 at 03:34 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Database: `bdwm9tunq4hwktrtd0ah`
--
CREATE DATABASE IF NOT EXISTS `bdwm9tunq4hwktrtd0ah` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdwm9tunq4hwktrtd0ah`;
-- --------------------------------------------------------
--
-- Table structure for table `Order`
--

CREATE TABLE `Order` (
    `id` int UNSIGNED NOT NULL,
    `customer_first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `customer_last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `customer_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `customer_postcode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `customer_city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `customer_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `customer_phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `order_total` int UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--
-- Dumping data for table `Order`
--

INSERT INTO `Order` (
        `id`,
        `customer_first_name`,
        `customer_last_name`,
        `customer_address`,
        `customer_postcode`,
        `customer_city`,
        `customer_email`,
        `customer_phone`,
        `order_total`
    )
VALUES (
        1,
        'Ann-Charlotte',
        'Nilsson',
        'vagngatan 12',
        '23456',
        'Helsingborg',
        'mail@nomail.com',
        '0707123456',
        33
    ),
    (
        2,
        'börje-jönne',
        'ölsson-hje',
        'storgatan 2',
        '24 567',
        'göteborg',
        'tore@nomail.com',
        '0735678902',
        24
    ),
    (
        3,
        'börje-jönne',
        'ölsson-hje',
        'storgatan 2',
        '240 40',
        'göteborg',
        'tore@nomail.com',
        '0735678902',
        24
    ),
    (
        4,
        'anne-frank',
        'stenqvisr',
        'stengatan 2',
        '25267',
        'änglarnas-stad',
        'anne@nomail.com',
        NULL,
        9
    ),
    (
        5,
        'anne-frank',
        'stenqvisr',
        'stengatan 2',
        '252 67',
        'änglarnas-stad',
        'anne@nomail.com',
        NULL,
        9
    ),
    (
        6,
        'my',
        'englund',
        'storstaden',
        '256 78',
        'storstaden',
        'thompa@nomail.com',
        NULL,
        9
    );
-- --------------------------------------------------------
--
-- Table structure for table `OrderItems`
--

CREATE TABLE `OrderItems` (
    `product_id` int UNSIGNED NOT NULL,
    `qty` int UNSIGNED NOT NULL,
    `item_price` int UNSIGNED NOT NULL,
    `item_total` int UNSIGNED NOT NULL,
    `order_id` int UNSIGNED NOT NULL,
    `id` int UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--
-- Dumping data for table `OrderItems`
--

INSERT INTO `OrderItems` (
        `product_id`,
        `qty`,
        `item_price`,
        `item_total`,
        `order_id`,
        `id`
    )
VALUES (1, 9, 9, 9, 1, 1),
    (2, 4, 8, 4, 2, 2),
    (1, 2, 12, 2, 2, 3),
    (2, 4, 8, 2, 3, 4),
    (1, 2, 12, 2, 3, 5),
    (4, 4, 8, 4, 4, 6),
    (3, 4, 8, 4, 4, 7),
    (1, 2, 2, 2, 4, 8),
    (4, 4, 8, 4, 5, 9),
    (3, 4, 8, 4, 5, 10),
    (1, 2, 2, 2, 5, 11),
    (6, 6, 9, 12, 6, 12),
    (5, 4, 8, 4, 6, 13),
    (4, 13, 8, 32, 6, 14),
    (2, 4, 8, 4, 6, 15);
-- --------------------------------------------------------
--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
    `id` int UNSIGNED NOT NULL,
    `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
    `price` int UNSIGNED NOT NULL,
    `images` json NOT NULL,
    `stock_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    `stock_quantity` int UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (
        `id`,
        `name`,
        `description`,
        `price`,
        `images`,
        `stock_status`,
        `stock_quantity`
    )
VALUES (
        1,
        'Gott & Blandat Giants',
        '<p>En mix av lakrits och gelé med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, VETEMJÖL, melass, syra (citronsyra), fuktighetsbevarande medel (sorbitoler, glycerol), lakritsextrakt, salt, vegetabiliska oljor (kokos, palm), aromer, färgämnen (E153, E120, E100, E141), ytbehandlingsmedel (bivax), stabiliseringsmedel (E471).</p>\n<p><em>Alla priser är per skopa.</em></p>\n',
        9,
        '{\"large\": \"/storage/products/1997509.png\", \"thumbnail\": \"/storage/products/thumbnails/1997509-300x300.png\"}',
        'instock',
        5
    ),
    (
        2,
        'Banana Bubs',
        '<p>Banan/gräddkola</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, surhetsreglerande medel (äppelsyra, natriumcitrat), potatisprotein, aromämnen, färgämnen: (E150d, E100), kokosolja, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n',
        8,
        '{\"large\": \"/storage/products/156622.png\", \"thumbnail\": \"/storage/products/thumbnails/156622-300x300.png\"}',
        'instock',
        8
    ),
    (
        3,
        'Banana Splits',
        '<p>Fyllig vitchoklad med smak av kola krispig banan.</p>\n<p>Innehållsförteckning: Socker, kakaosmör, torkad banan, HELMJÖLKSPULVER, mjölksocker(LAKTOS), SKUMMJÖLKSPULVER, emulgeringsmedel E322 (SOJALECITIN), naturliga aromer, ytbehandlingsmedel (E414, E904).</p>\n<p>Kan innehålla spår av MANDEL, NÖTTER och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n',
        8,
        '{\"large\": \"/storage/products/3827741.png\", \"thumbnail\": \"/storage/products/thumbnails/3827741-300x300.png\"}',
        'instock',
        6
    ),
    (
        4,
        'Center',
        '<p>Mjölkchokladpralin med toffeefyllning</p>\n<p>Innehållsförteckning: Socker, glukossirap, kakaosmör, vegetabiliska fetter (palm, shea), HELMJÖLKSPULVER, kakaomassa, SKUMMJÖLKSPULVER, VASSLEPULVER (MJÖLK), salt, aromer (bl.a. vanillin), emulgeringsmedel (SOJALECITIN).</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>',
        8,
        '{\"large\": \"/storage/products/200423.png\", \"thumbnail\": \"/storage/products/thumbnails/200423-300x300.png\"}',
        'instock',
        13
    ),
    (
        5,
        'Bubs Cool Cola Skalle',
        '<p>Sur cola</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, vatten, majsstärkelse, surhetsreglerande medel (äppelsyra, natriumcitrat), aromämnen, färgämnen (E150d).</p>\n<p><em>Alla priser är per skopa.</em></p>',
        8,
        '{\"large\": \"/storage/products/thumbnails/1595204-300x300.png\", \"thumbnail\": \"/storage/products/thumbnails/1595204-300x300.png\"}',
        'instock',
        4
    ),
    (
        6,
        'Chokladpopcorn',
        '<p>Innehållsförteckning: Socker, kakaosmör, kakaomassa, MJÖLKSOCKER (LAKTOS), HELMJÖLKSPULVER, majs, VASSLEPULVER (av MJÖLK), kokos- och raps fett, mjölkfett, sirap, emulgeringsmedel (E322), SOJALECITIN, kokosolja, ytbehandlingsmedel, E414 (gummi arabikum).</p>\n<p>Kan innehålla MANDEL, HASSELNÖT, CASHEWNÖT och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>',
        9,
        '{\"large\": \"/storage/products/3697328.png\", \"thumbnail\": \"/storage/products/thumbnails/3697328-300x300.png\"}',
        'instock',
        6
    );
-- --------------------------------------------------------
--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
    `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
    `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `finished_at` datetime(3) DEFAULT NULL,
    `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `logs` text COLLATE utf8mb4_unicode_ci,
    `rolled_back_at` datetime(3) DEFAULT NULL,
    `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (
        `id`,
        `checksum`,
        `finished_at`,
        `migration_name`,
        `logs`,
        `rolled_back_at`,
        `applied_steps_count`
    )
VALUES (
        '77f0b1f3-ad40-40ed-b403-4d8bc7d7d290',
        'c1de0b0443901c565639e06373121098427e3adec920f7164672f7c281096918',
        '2023-02-05 02:38:33.577',
        '20230128140048_init',
        NULL,
        NULL,
        1
    ),
    (
        '8b5b7f66-16ad-43d7-9ee9-790d26355f3e',
        '6e542f03989b541f4cfb090862893c8cb2db876dc27bd6479268888ad85510d9',
        '2023-02-05 02:38:34.251',
        '20230129151419_changed_id_to_int',
        NULL,
        NULL,
        1
    ),
    (
        'd0161cd3-343d-41be-9be0-54fa0c2c2415',
        'aded7a514fe084011c832f8fb7c79bf9a4e090e3832a9cff2d0ec5c09dd01577',
        '2023-02-05 02:38:35.088',
        '20230130113721_add_realtions_product_orderitems',
        NULL,
        NULL,
        1
    ),
    (
        'df325d83-e6c8-4123-a5b5-9223597da54c',
        'd7d5923f6a06b533017fb982f1e8a81b6218d5255ce5d4291f651e4fbc0c396e',
        '2023-02-05 02:38:34.670',
        '20230130010652_add_autoicrement_id',
        NULL,
        NULL,
        1
    );
--
-- Indexes for dumped tables
--

--
-- Indexes for table `Order`
--
ALTER TABLE `Order`
ADD PRIMARY KEY (`id`);
--
-- Indexes for table `OrderItems`
--
ALTER TABLE `OrderItems`
ADD PRIMARY KEY (`id`),
    ADD KEY `OrderItems_order_id_fkey` (`order_id`),
    ADD KEY `OrderItems_product_id_fkey` (`product_id`);
--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `Product_name_key` (`name`);
--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Order`
--
ALTER TABLE `Order`
MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 7;
--
-- AUTO_INCREMENT for table `OrderItems`
--
ALTER TABLE `OrderItems`
MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 16;
--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `OrderItems`
--
ALTER TABLE `OrderItems`
ADD CONSTRAINT `OrderItems_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    ADD CONSTRAINT `OrderItems_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;