-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 12, 2024 at 08:11 PM
-- Server version: 10.11.8-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u175158886_brokercrm`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `category` enum('Renewal','Contact','Service','None') DEFAULT NULL,
  `details` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `client_id`, `date`, `category`, `details`, `created_at`, `updated_at`) VALUES
(3, 2, '2023-02-01', 'Service', 'Provided dental services', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(4, 3, '2023-03-01', 'None', 'Initial policy setup', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(5, 3, '2023-09-01', 'Renewal', 'Renewed annual policy', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(6, 6, '2024-08-03', 'Service', 'Discussed policy renewal and benefits.', '2024-08-03 19:12:01', '2024-08-03 19:12:01'),
(7, 6, '2024-08-03', 'Service', 'Discussed policy renewal and benefits.', '2024-08-12 09:39:37', '2024-08-12 09:39:37');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `broker_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(50) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `sex` enum('Male','Female') DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `verification_id` varchar(255) DEFAULT NULL,
  `proof_of_address` varchar(255) DEFAULT NULL,
  `other_documents` varchar(255) DEFAULT NULL,
  `policy_information` varchar(255) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  `plan_modules` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`plan_modules`)),
  `area_of_cover` varchar(255) DEFAULT NULL,
  `plan_name` varchar(255) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `premium` decimal(10,2) DEFAULT NULL,
  `deductibles_or_copay` text DEFAULT NULL,
  `policy_number` varchar(100) DEFAULT NULL,
  `insurer` varchar(255) DEFAULT NULL,
  `claim` varchar(255) DEFAULT NULL,
  `payment_frequency` enum('Monthly','Annually') DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `commission` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `broker_id`, `name`, `email`, `contact_number`, `date_of_birth`, `sex`, `nationality`, `country`, `address`, `profile_picture`, `verification_id`, `proof_of_address`, `other_documents`, `policy_information`, `invoice`, `plan_modules`, `area_of_cover`, `plan_name`, `currency`, `premium`, `deductibles_or_copay`, `policy_number`, `insurer`, `claim`, `payment_frequency`, `start_date`, `end_date`, `payment_method`, `commission`, `created_at`, `updated_at`) VALUES
(2, 6, 'Client B', 'client.b@example.com', '+400500600', '1990-07-20', 'Female', 'Canadian', 'Canada', '456 Oak Avenue', NULL, NULL, NULL, NULL, NULL, NULL, '[\"Dental\", \"Maternity\"]', 'Worldwide', 'Plan B', 'CAD', 1500.00, '700 CAD', 'POL67890', 'Insurer B', NULL, 'Monthly', '2023-02-01', '2024-01-31', 'Bank Transfer', 150.00, '2024-07-26 19:33:57', '2024-08-03 18:19:39'),
(3, 2, 'Client C', 'client.c@example.com', '+700800900', '1975-03-15', 'Male', 'British', 'UK', '789 Pine Road', NULL, NULL, NULL, NULL, NULL, NULL, '[\"Inpatient\", \"Outpatient\", \"Dental\"]', 'Europe', 'Plan C', 'GBP', 2000.00, '800 GBP', 'POL11223', 'Insurer C', NULL, 'Annually', '2023-03-01', '2024-02-29', 'PayPal', 200.00, '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(6, 6, 'Sun Doe', 'john@example.com', '+6621234567', '1980-01-01', 'Male', 'Thai', 'Thailand', 'House 123, 4 Street', 'path/to/profile_picture.jpg', 'path/to/verification_id.jpg', 'path/to/proof_of_address.jpg', 'path/to/other_documents.jpg', 'path/to/policy_information.jpg', 'path/to/invoice.jpg', '[\"Inpatient\",\"Outpatient\",\"Dental\",\"Maternity\"]', 'Worldwide', 'Plan A', 'USD', 1000.00, '500', 'POL123456', 'Insurer A', 'none', '', '2023-01-01', '2024-01-01', 'Credit Card', 200.00, '2024-08-03 18:39:13', '2024-08-03 18:42:36'),
(8, 6, 'John Doe', 'john@example.com', '+6621234567', '1980-01-01', 'Male', 'Thai', 'Thailand', 'House 123, 4 Street', 'path/to/profile_picture.jpg', 'path/to/verification_id.jpg', 'path/to/proof_of_address.jpg', 'path/to/other_documents.jpg', 'path/to/policy_information.jpg', 'path/to/invoice.jpg', '[\"Inpatient\",\"Outpatient\",\"Dental\",\"Maternity\"]', 'Worldwide', 'Plan A', 'USD', 1000.00, '500', 'POL123456', 'Insurer A', 'none', '', '2023-01-01', '2024-01-01', 'Credit Card', 200.00, '2024-08-03 18:59:32', '2024-08-03 18:59:32');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `broker_id` int(11) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `details` text DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `status` enum('Sent','Paid','Pending') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `broker_id`, `due_date`, `details`, `amount`, `currency`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, '2023-12-31', 'Annual fee for Client A - updated', 1100.00, 'USD', 'Sent', '2024-07-26 19:33:57', '2024-08-02 07:59:34'),
(2, 1, '2024-01-31', 'Monthly fee for Client B', 150.00, 'CAD', 'Sent', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(3, 2, '2024-02-28', 'Annual fee for Client C', 2000.00, 'GBP', 'Sent', '2024-07-26 19:33:57', '2024-07-26 19:33:57');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `relation` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `client_id`, `name`, `nationality`, `date_of_birth`, `relation`, `created_at`, `updated_at`) VALUES
(3, 2, 'Member B1', 'Canadian', '2015-09-10', 'Child', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(10, 8, 'John Doe', 'Thai', '1980-01-01', 'Self', '2024-08-03 18:59:32', '2024-08-03 18:59:32');

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `id` int(11) NOT NULL,
  `broker_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_number` varchar(50) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `plan_modules` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`plan_modules`)),
  `area_of_cover` varchar(255) DEFAULT NULL,
  `plan_name` varchar(255) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `premium` decimal(10,2) DEFAULT NULL,
  `deductibles_or_copay` text DEFAULT NULL,
  `insurer` varchar(255) DEFAULT NULL,
  `status` enum('Quote Downloaded','Contacted','Application Sent','Policy Issued') DEFAULT NULL,
  `members` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotes`
--

INSERT INTO `quotes` (`id`, `broker_id`, `name`, `email`, `contact_number`, `nationality`, `age`, `country`, `plan_modules`, `area_of_cover`, `plan_name`, `currency`, `premium`, `deductibles_or_copay`, `insurer`, `status`, `members`, `created_at`, `updated_at`) VALUES
(2, 1, 'Lead B', 'lead.b@example.com', '+321321321', 'Canadian', 29, 'Canada', '[\"Dental\", \"Maternity\"]', 'Worldwide', 'Plan B', 'CAD', 1500.00, '700 CAD', 'Insurer B', 'Contacted', NULL, '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(3, 2, 'Lead C', 'lead.c@example.com', '+456456456', 'British', 40, 'UK', '[\"Inpatient\", \"Outpatient\", \"Dental\"]', 'Europe', 'Plan C', 'GBP', 3000.00, '800 GBP', 'Insurer C', 'Application Sent', NULL, '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(4, 2, 'Lead D', 'lead.d@example.com', '+654654654', 'Australian', 45, 'Australia', '[\"Maternity\"]', 'Australia', 'Plan D', 'AUD', 2500.00, '600 AUD', 'Insurer D', 'Policy Issued', NULL, '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(13, 1, 'Quote A', 'lead.a@example.com', '+123123123', 'American', 35, 'USA', '[\"Inpatient\",\"Outpatient\",\"Dental\",\"Maternity\"]', 'Worldwide', 'Plan B', 'USD', 1200.00, '600', 'Insurer B', NULL, '[object Object]', '2024-08-12 10:12:35', '2024-08-12 10:12:35'),
(14, 1, 'Quote A', 'lead.a@example.com', '+123123123', 'American', 35, 'USA', '[\"Inpatient\",\"Outpatient\",\"Dental\",\"Maternity\"]', 'Worldwide', 'Plan B', 'USD', 1200.00, '600', 'Insurer B', NULL, '[{\"name\":\"Member A\",\"nationality\":\"American\",\"age\":10,\"relation\":\"Child\"}]', '2024-08-12 10:14:27', '2024-08-12 10:14:27'),
(15, 1, 'Quote A', 'lead.a@example.com', '+123123123', 'American', 35, 'USA', '[\"Inpatient\",\"Outpatient\",\"Dental\",\"Maternity\"]', 'Worldwide', 'Plan B', 'USD', 1200.00, '600', 'Insurer B', 'Contacted', '[{\"name\":\"Member A\",\"nationality\":\"American\",\"age\":10,\"relation\":\"Child\"}]', '2024-08-12 10:15:49', '2024-08-12 10:15:49'),
(16, 1, 'Quote A', 'lead.a@example.com', '+123123123', 'American', 35, 'USA', '[\"Inpatient\",\"Outpatient\",\"Dental\",\"Maternity\"]', 'Worldwide', 'Plan B', 'USD', 1200.00, '600', 'Insurer B', 'Contacted', '[{\"name\":\"Member A\",\"nationality\":\"American\",\"age\":10,\"relation\":\"Child\"}]', '2024-08-12 10:16:19', '2024-08-12 10:16:19');

-- --------------------------------------------------------

--
-- Table structure for table `support_tickets`
--

CREATE TABLE `support_tickets` (
  `id` int(11) NOT NULL,
  `broker_id` int(11) DEFAULT NULL,
  `issue_category` varchar(255) DEFAULT NULL,
  `status` enum('Open','Resolved') DEFAULT NULL,
  `initiated_date` date DEFAULT NULL,
  `response_date` date DEFAULT NULL,
  `message` text DEFAULT NULL,
  `response` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `support_tickets`
--

INSERT INTO `support_tickets` (`id`, `broker_id`, `issue_category`, `status`, `initiated_date`, `response_date`, `message`, `response`, `created_at`, `updated_at`) VALUES
(2, 1, 'Technical Issue', 'Open', '2023-05-01', '2023-05-02', 'Issue with policy details', 'Solved', '2024-07-26 19:33:57', '2024-08-12 19:56:41'),
(4, 1, 'Technical Issue', 'Open', '2023-05-01', '2023-05-02', 'Issue with policy details', '', '2024-08-12 19:54:28', '2024-08-12 19:54:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `contact_number` varchar(50) DEFAULT NULL,
  `type` enum('Broker','Admin') DEFAULT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `contact_number`, `type`, `status`, `profile_picture`, `created_at`, `updated_at`) VALUES
(1, 'Shah', 'admin11@admin.com', '$2a$10$hPeuhtyIquPg.fTJXrrzceUlaeKeJU0n3/dEu4pSmyBRKrnbYGBZO', '+1234567890', 'Admin', 'Active', 'profile_updated.png', '2024-07-26 19:33:57', '2024-08-02 08:06:51'),
(2, 'Jane Smith', 'jane.smith@example.com', '', '+0987654321', 'Broker', 'Inactive', 'profile2.png', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(3, 'Admin User', 'admin.user@example.com', '', '+1122334455', 'Admin', 'Active', 'profile3.png', '2024-07-26 19:33:57', '2024-07-26 19:33:57'),
(4, 'shahabal', 'shahabhamdani@hotmail.com', '$2a$10$4Z6gfCUDCeJzNLdagi6x7O7tZqa43MJ7zbs19AnOyRgj44OcFeAnG', NULL, 'Admin', 'Active', NULL, '2024-08-02 07:52:11', '2024-08-02 07:52:11'),
(5, 'shahabal', 'shah@instlytechnologies.com', '$2a$10$4r99xBPmh86lxAAOnw7r3eVgQeSBDPYRpgmOPG4ntUI8AQ7XzFSA2', NULL, 'Broker', 'Active', NULL, '2024-08-02 07:52:49', '2024-08-02 07:52:49'),
(6, 'admin', 'admin@admin.com', '$2a$10$i7svFrH2OVS7/CMsrsaD7.oaE6A3GhnxETnomw8e/uhwYMx183jk6', NULL, 'Admin', 'Active', NULL, '2024-08-02 07:53:54', '2024-08-02 07:53:54'),
(7, 'John Doe', 'test@test.com', '$2a$10$hNVbKKhnW94QO7tzY2UJIuJBHsIHW7YhVpIrFslz8R8SMdsVpo4Xi', '+1234567890', 'Broker', 'Active', 'profile1.png', '2024-08-02 08:03:35', '2024-08-02 08:03:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `broker_id` (`broker_id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `broker_id` (`broker_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `broker_id` (`broker_id`);

--
-- Indexes for table `support_tickets`
--
ALTER TABLE `support_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `broker_id` (`broker_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `support_tickets`
--
ALTER TABLE `support_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`broker_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`broker_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `members_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Constraints for table `quotes`
--
ALTER TABLE `quotes`
  ADD CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`broker_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `support_tickets`
--
ALTER TABLE `support_tickets`
  ADD CONSTRAINT `support_tickets_ibfk_1` FOREIGN KEY (`broker_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
