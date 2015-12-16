<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'config.php';
require './Be2bill/Api/Autoloader.php';

Be2bill_Api_Autoloader::registerAutoloader();

// Use fallback URL
// Be2bill_Api_ClientBuilder::switchProductionUrls();

// $be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient('CONVOY', '//FellowshipConvoy7');
$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient('CONVOY', 'I>3Dod7KdP$DJKVT');

if($be2bill->checkHash($_GET) == $_GET['HASH']) {
	if($_GET['EXECCODE'] == '0000') {

		$valid = true;
		
		// connexion
		$m = new MongoClient();
		$db = $m->selectDB('havana');

		echo $_GET['ORDERID'];
		// get order prints
		$collection = $db->orders;
		$order = $collection->findOne(array('_id' => new MongoId($_GET['ORDERID'])));

		// check if print is available
		$collection = $db->prints;
		foreach ($order['prints'] as $order_print) {
			$print = $collection->findOne(array('token' => $order_print['token']));
			if ($print['serials'][$order_print['serial']-1] != 1 && $print['serials'][$order_print['serial']-1] != true) {
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
					$serials = $collection->findOne(array('token' => $order_print['token']))['serials'];
					$serials[$order_print['serial']-1] = 0;
					$newdata = array('$set' => array('serials' => $serials));
					$collection->update(array('token' => $order_print['token']), $newdata);
				}

				// $url = 'https://mandrillapp.com/api/1.0/messages/send.json';
				// $data = array(
				// 	'key' => 'yLxCSYWSZH8p8vNT83_i3w',
				// 	'template_name' => 'havana-opening-shop',
				// 	'template_content' => array(
				// 		'name' => 'example name',
				// 		'content' => 'example content'
				// 	),
				// 	'message' => array(
				// 		'from_email' => 'nicolas.daniel.29@gmail.com',
				// 		'to' => array(
				// 			'email' => 'nicolas.daniel.29@gmail.com',
				// 			'name' => 'Nicolas Daniel',
				// 			'type' => 'to'
				// 		),
				// 		'subject' => 'Elliott Erwitt Havana Club 7 Fellowship - Shop opening subscribe',
				// 		'html' => 'html can be used'
				// 	)
				// );
				// // use key 'http' even if you send the request to https://...
				// $options = array(
				// 		'http' => array(
				// 		'method' => 'POST',
				// 		'header' => 'Content-Type: application/xml',
				// 		'content' => http_build_query($data)
				//     ),
				// );

				// $context  = stream_context_create($options);
				// $result_mail = file_get_contents($url, false, $context);

				// $authToken = 'OAuth 2.0 token here';
				$postdata = array(
					'key' => 'yLxCSYWSZH8p8vNT83_i3w',
					'template_name' => 'havana-opening-shop',
					'template_content' => array(
						'name' => 'example name',
						'content' => 'example content'
					),
					'message' => array(
						'from_email' => 'nicolas.daniel.29@gmail.com',
						'to' => array(
							'email' => 'nicolas.daniel.29@gmail.com',
							'name' => 'Nicolas Daniel',
							'type' => 'to'
						),
						'subject' => 'Elliott Erwitt Havana Club 7 Fellowship - Shop opening subscribe',
						'html' => 'html can be used'
					)
				);

				// Create the context for the request
				$context = stream_context_create(array(
					'http' => array(
						'method' => 'POST',
						'header' => "Authorization: {$authToken}\r\n".
							"Content-Type: application/json\r\n",
						'content' => json_encode($postData)
					)
				));

				// Send the request
				$response = file_get_contents('https://mandrillapp.com/api/1.0/messages/send.json', FALSE, $context);


				// $data = array("name" => "Hagrid", "age" => "36");
				// $data_string = json_encode($postdata);

				// $ch = curl_init('https://mandrillapp.com/api/1.0/messages/send.json');
				// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
				// curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
				// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				// curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				// 	'Content-Type: application/json',
				// 	'Content-Length: ' . strlen($data_string))
				// );

				// $result = curl_exec($ch);

	    		header('Location: /payment-confirmation?result=success');
			} else {
				print_r($result);
			}
		} else {
	    	header('Location: /payment-confirmation?result=error');
		}
	} else if ($_GET['EXECCODE'] == '4001') {
		header('Location: /payment-confirmation?result=transaction-refused');
	} else if ($_GET['EXECCODE'] == '4002') {
		header('Location: /payment-confirmation?result=insuffisiant-funds');
	} else if ($_GET['EXECCODE'] == '4005') {
		header('Location: /payment-confirmation?result=suspected-fraud');
	} else if ($_GET['EXECCODE'] == '4006') {
		header('Location: /payment-confirmation?result=lost-card');
	} else if ($_GET['EXECCODE'] == '4007') {
		header('Location: /payment-confirmation?result=stolen-card');
	} else if ($_GET['EXECCODE'] == '4004') {
		header('Location: /payment-confirmation?result=echec-transaction');
	} else if ($_GET['EXECCODE'] == '4012') {
		header('Location: /payment-confirmation?result=invalid-card-information');
	} else if ($_GET['EXECCODE'] == '4015') {
		header('Location: /payment-confirmation?result=expired-card');
	} else {
		header('Location: /payment-confirmation?result=error');
	}
} else {
    // Suspicious redirection
    header('Location: /payment-confirmation?result=error');
}

?>