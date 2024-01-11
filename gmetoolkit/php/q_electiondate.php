<?php
// return next national general election date
require __DIR__ . "/config.inc.php";

$dt = new DateTime("first Monday of November");
$dt->modify("next Tuesday");
$dt->setTime(0, 0, 0);

header("Content-Type: application/json");
echo json_encode([
    'genElec' => $dt->format("Y-m-d"),
    'genElecFormatted' => $dt->format("m-d-Y"),
]);
