<?php

require_once __DIR__.'/vendor/autoload.php';

use SSD\DotEnv\DotEnv;

$dotenv = new DotEnv(__DIR__.'/../../.env');
$dotenv->load();

header("Access-Control-Allow-Origin: *");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// BE2BILL
define('BE2BILL_IDENTIFIER', 'CONVOY');
// define('BE2BILL_PASSWORD', '//FellowshipConvoy7');
define('BE2BILL_PASSWORD', 'I>3Dod7KdP$DJKVT');

// MANDRILL
define('MANDRILL_API_KEY', 'yLxCSYWSZH8p8vNT83_i3w');
