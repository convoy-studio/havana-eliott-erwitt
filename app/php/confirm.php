<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/config.php';

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);
//$be2bill = Be2bill_Api_ClientBuilder::buildProductionDirectlinkClient('CONVOY', 'I>3Dod7KdP$DJKVT');

if ($be2bill->checkHash($_GET) !== $_GET['HASH']) {
    // Suspicious redirection
    header('Location: /payment-confirmation?result=error');
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
} else if ($_GET['EXECCODE'] != '0000') { {
    header('Location: /payment-confirmation?result=error');
}

$collection = (new MongoDB\Client)->havana->orders;
$order = $collection->findOne(['_id' => new MongoDB\BSON\ObjectID($_GET['ORDERID'])])

if (!$order) {
	header('Location: /payment-confirmation?result=error');
    return;
}

header('Location: /payment-confirmation?result=success');
