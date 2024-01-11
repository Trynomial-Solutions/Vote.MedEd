<?php
$cfg = [
    'debug' => true,
    'googleMapsKey' => 'AIzaSyAUZEy5mGMCEOkGQYzJROifDYAl-3l-1IA',
];

\date_default_timezone_set('America/Detroit');

if ($cfg['debug']) {
    \ini_set("display_errors", 1);
    \error_reporting(E_ALL);
}
