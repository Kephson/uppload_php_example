<?php
$ds = DIRECTORY_SEPARATOR;
$storeFolder = 'uploads';
if (!is_dir($storeFolder)) {
    mkdir($storeFolder);
}

$data = [
    'url' => '',
    'status' => 'error',
];
if (isset($_FILES['upload-01'])) {
    $tempFile = $_FILES['upload-01']['tmp_name'];
    $targetPath = dirname(__FILE__) . $ds . $storeFolder . $ds;
    $targetFilename = $_FILES['upload-01']['name'];
    $targetFile = $targetPath . $targetFilename;
    if (file_exists($targetFile)) {
        $targetFilename = uniqid() . '-' . $targetFilename;
        $targetFile = $targetPath . $targetFilename;
    }
    $publicFilename = $ds . $storeFolder . $ds . $targetFilename;

    $upload = move_uploaded_file($tempFile, $targetFile);
    if ($upload) {
        $data['url'] = $publicFilename;
        $data['status'] = 'ok';
    }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
