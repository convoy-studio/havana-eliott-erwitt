<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'config.php';
require './Be2bill/Api/Autoloader.php';

Be2bill_Api_Autoloader::registerAutoloader();

// Use fallback URL
// Be2bill_Api_ClientBuilder::switchProductionUrls();

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient('CONVOY', 'I>3Dod7KdP$DJKVT');

if($be2bill->checkHash($_GET) == $_GET['HASH'] && $_GET['EXECCODE'] == '0000') {

	$valid = true;
	
	// connexion
	$m = new MongoClient();
	$db = $m->selectDB('havana');

	// get order prints
	$collection = $db->orders;
	$order = $collection->findOne(array('_id' => new MongoId($_GET['ORDERID'])));

	// check if print is available
	$collection = $db->prints;
	foreach ($order['prints'] as $order_print) {
		$print = $collection->findOne(array('token' => $order_print['printId']));
		if ($print['serials'][$order_print['serial']-1] != 1) {
			$valid = false;
		}
	}

	// mettre à jour la BDD si besoin et renvoyer le message en fonction du succès ou non de la transaction
	if ($valid) {
		$result = $be2bill->capture(
			$_GET['TRANSACTIONID'],
			$_GET['ORDERID'],
			'capture_transaction_'.$_GET['TRANSACTIONID']
		);
		if ($result['EXECCODE'] == '0000') {
			foreach ($order['prints'] as $order_print) {
				$serials = $collection->findOne(array('token' => $order_print['printId']))['serials'];
				$serials[$order_print['serial']-1] = 0;
				$newdata = array('$set' => array('serials' => $serials));
				$collection->update(array('token' => $order_print['printId']), $newdata);
			}
    		header('Location: /#/payment/result?result=success');
		} else {
			print_r($result);
		}
	} else {
    	header('Location: /#/payment/result?result=echec');
	}
	
} else {
    // Suspicious redirection
    header('Location: /#/payment/result?result=echec');
}

?>