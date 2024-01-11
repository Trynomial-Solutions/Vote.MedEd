<?php
// get state from lat/long
if (!isset($_REQUEST['lat'], $_REQUEST['long'])) throw new \RuntimeException("Missing params");
require __DIR__ . "/config.inc.php";

$googleMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
$queryStr = \http_build_query(
    [
        'latlng' => $_REQUEST['lat'] . "," . $_REQUEST['long'],
        'key' => $cfg['googleMapsKey'],
        'result_type' => 'administrative_area_level_1',
        'region' => 'us',
    ]
);

$results = \json_decode(\file_get_contents($googleMapsUrl . $queryStr), true);
$state = $results['results'][0]['address_components'][0];
unset($state['types']);

\header("Content-Type: application/json");
echo \json_encode($state);
