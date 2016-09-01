<?php

require_once __DIR__.'/config.php';

use GuzzleHttp\Client as HttpClient;
use Symfony\Component\HttpFoundation\Request;

/**
 * @param void
 * @return string
 */
function client_protocol()
{
    return $_SERVER['SERVER_PROTOCOL'] ?? 'HTTP/1.1';
}

/**
 * Return a list of HTTP methods that are proxyable
 * @param void
 * @return 
 */
function proxyable_methods()
{
    return ['GET', 'HEAD', 'OPTIONS'];
}

/**
 * @param void
 * @return \GuzzleHttp\Client
 */
function http_client($env=null)
{
    $env = $env ?? $_ENV;

    $key = $env['PRESTASHOP_API_KEY'];
    $scheme = $env['PRESTASHOP_API_SCHEME'];
    $host = $env['PRESTASHOP_API_HOST'];
    $root = ltrim($env['PRESTASHOP_API_ROOT'], '/');
    $base_uri = "{$scheme}://{$key}@{$host}/{$root}";

    return new HttpClient(['base_uri'=>$base_uri]);
}

/**
 * This function "pipes" the current request to the Prestashop API
 * @param \Symfony\Component\HttpFoundation\Request $request
 * @param \GuzzleHttp\Client $api
 * @return \GuzzleHttp\Psr7\Response
 */
function proxy($request, $api)
{
    $method = $request->getMethod();

    if (!in_array($method, proxyable_methods())) {
        header("{$_SERVER['SERVER_PROTOCOL']} 405 Method Not Allowed");
        exit;
    }

    return $api->request($method, $request->getUri(), [
        'body' => $request->getBody(),
    ]);
}

/**
 * This function "pipes" the API response back to the browser
 * @param \Illuminate\
 *
 */
function send($response, $output)
{
    $protocol = client_protocol();
    $status = $response->getStatusCode();
    $reason = $response->getReasonPhrase();
    $body = $response->getBody();
    $length = null;

    if ($response->hasHeader('Content-Length')) {
        $length = $response->getHeader('Content-Length');
    }
    else {
        $length = mb_strlen($body);
    }

    fputs($output, "$protocol {$status} {$reason}\n");
    fputs($output, "Content-Type: {$response->getHeader('Content-Type')}\n");
    fputs($output, "Content-Length: {$length}\n");
    fputs($output, "\n");
    fputs($output, $response->getBody());
}

////////////////////////////////////////////////////////////////////////////////

$request = Request::createFromGlobals();
$response = proxy($request, http_client());

$output = fopen('php://stdout', 'w');
send($response, $output);
fclose($output);

// done.
