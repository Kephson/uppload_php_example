<?php
/* easy job to delete files older than x days */
$files = glob('./uploads/' . "*");
$now = time();
$minutes = 2; // delete files in upload folder after x minutes
$checkTimeInMinutes = 60 * $minutes;

foreach ($files as $file) {
    if (is_file($file)) {
        if ($now - filemtime($file) >= $checkTimeInMinutes) {
            unlink($file);
        }
    }
}
