<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'config.php';
require './Be2bill/Api/Autoloader.php';

Be2bill_Api_Autoloader::registerAutoloader();

// Use fallback URL
// Be2bill_Api_ClientBuilder::switchProductionUrls();

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);

// $result = $be2bill->stopNTimes($_GET['schedule']);
$result = $be2bill->capture(
	$_GET['TRANSACTIONID'],
	$_GET['ORDERID'],
	'capture_transaction_'.$_GET['TRANSACTIONID']
);

var_dump($result)

?>