<?php
// return next national general election date
require __DIR__ . "/config.inc.php";

$dt = new DateTime("first Monday of November");
$dt->modify("next Tuesday");
$dt->setTime(0, 0, 0);

$rVal = [
    'genElec' => $dt->format("Y-m-d"),
    'genElecFormatted' => $dt->format("l, F j, Y"),
];

$dt->modify("-7 weeks");
$rVal['nvrdFormatted'] = $dt->format("l, F j, Y");
$dt->modify("+4 weeks");
$rVal['nvrdPlusOneMonthFormatted'] = $dt->format("l, F j, Y");

header("Content-Type: application/json");
echo json_encode($rVal);
