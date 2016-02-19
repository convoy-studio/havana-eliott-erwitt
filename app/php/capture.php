<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/config.php';

function deleteOrderIfNecessary($execCode) {
	$intExeccode = (int) $execCode;
	if ($intExeccode > 6000) {
		$collection = (new MongoDB\Client)->havana->orders;
		try {
			$order = $collection->findOneAndDelete(
				array('token' => $orderToken),
			);
		} catch(MongoDB\Exception $e) {
		    error_log('Order delete error '.$e->getCode().': '.$e->getMessage());

			return false;
		}
	}

	return true;
}

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);
//$be2bill = Be2bill_Api_ClientBuilder::buildProductionDirectlinkClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);

$mandrill = new Mandrill(MANDRILL_API_KEY);

$transactionId = $_GET['TRANSACTIONID'];
$orderToken = $_GET['ORDERID'];

if (!$be2bill->checkHash($_GET)) {
	echo 'OK';
	exit(1);
}

if ($_GET['EXECCODE'] != '0000') {
	echo deleteOrderIfNecessary($_GET['EXECCODE']) ? 'OK' : 'KO';
	exit(1);
}

// $result = $be2bill->stopNTimes($_GET['schedule']);
$result = $be2bill->capture(
	$transactionId,
	$orderId,
	'capture_transaction_'.$transactionId
);

if ($result['EXECCODE'] != '0000') {
	echo deleteOrderIfNecessary($_GET['EXECCODE']) ? 'OK' : 'KO';
	exit(1);
}

$collection = (new MongoDB\Client)->havana->orders;
try {
	$order = $collection->findOneAndUpdate(
		array('token' => $orderToken),
		array('$set' => array('transactionId' => $transactionId)),
		['new' => true]
	);
} catch(MongoDB\Exception $e) {
    error_log('Order update transactionID error '.$e->getCode().': '.$e->getMessage());
    echo 'KO';
	exit(1);
}

if (!$order) {
	var_dump($order);
	echo 'OK';
	exit(1);
}

try {
	// send client email for validated order
	$template_name = 'havana-opening-shop';
	$template_content = array(
		array(
			'name' => 'example name',
			'content' => 'example content'
		)
	);
	$message = array(
		'from_email' => 'jerome.macias@gmail.com',
		'to' => array(
			array(
				'email' => 'jerome.macias@gmail.com',
				'name' => 'Jérôme Macias',
				'type' => 'to',
			),
		),
		'subject' => 'Elliott Erwitt Havana Club 7 Fellowship - Order',
		'html' => 'html can be used'
	);
	$mandrill->messages->sendTemplate($template_name, $template_content, $message, true);

	// send logistic email for new order
	$message = array(
		'from_email' => 'jerome.macias@gmail.com',
		'from_name' => 'Havana Fellowship',
		'to' => array(
			array(
				'email' => 'jerome.macias@gmail.com',
				'name' => 'Jérôme Macias',
				'type' => 'to'
			),
		),
		'headers' => array('Reply-To' => 'no-reply@havana.com'),
		'subject' => 'Elliott Erwitt Havana Club 7 Fellowship - New order',
		'html' => 'new order'
	);
	$mandrill->messages->send($message, true);

} catch (\Exception $e) {
	error_log('New order email send error: '.$e->getMessage());
}

echo 'OK';
