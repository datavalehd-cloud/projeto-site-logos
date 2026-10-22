Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$src = 'C:\Users\DataVale\Documents\Qoder\2026-10-13\fa8668bb\brand\logo-3d-original.png'
$dst = 'C:\Users\DataVale\Documents\Qoder\2026-10-13\fa8668bb\web\assets\img\logo-simbolo.png'

$bmp0 = New-Object System.Drawing.Bitmap($src)
$w = $bmp0.Width; $h = $bmp0.Height
Write-Output ("source: {0}x{1} {2}" -f $w, $h, $bmp0.PixelFormat)
$bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g0 = [System.Drawing.Graphics]::FromImage($bmp)
$g0.DrawImage($bmp0, 0, 0, $w, $h)
$g0.Dispose()
$bmp0.Dispose()

$thresh = 235
$visited = New-Object 'bool[]' ($w * $h)
$queue = New-Object System.Collections.Generic.Queue[int]
$clear = [System.Drawing.Color]::FromArgb(0, 255, 255, 255)

function IsWhite([System.Drawing.Bitmap]$b, [int]$x, [int]$y) {
    $c = $b.GetPixel($x, $y)
    $mn = [math]::Min($c.R, [math]::Min($c.G, $c.B))
    $mx = [math]::Max($c.R, [math]::Max($c.G, $c.B))
    if ($mn -ge 210) { return $true }
    if (($mx - $mn) -le 40 -and (($c.R + $c.G + $c.B) / 3) -ge 200) { return $true }
    return $false
}

$yTop = 0
$yBot = $h - 1
for ($x = 0; $x -lt $w; $x++) {
    foreach ($y in @($yTop, $yBot)) {
        $i = $y * $w + $x
        if (-not $visited[$i] -and (IsWhite $bmp $x $y)) {
            $visited[$i] = $true
            $queue.Enqueue($i)
        }
    }
}
$xL = 0
$xR = $w - 1
for ($y = 0; $y -lt $h; $y++) {
    foreach ($x in @($xL, $xR)) {
        $i = $y * $w + $x
        if (-not $visited[$i] -and (IsWhite $bmp $x $y)) {
            $visited[$i] = $true
            $queue.Enqueue($i)
        }
    }
}

$dxs = @(1, -1, 0, 0)
$dys = @(0, 0, 1, -1)
while ($queue.Count -gt 0) {
    $i = $queue.Dequeue()
    $y = [math]::Floor($i / $w); $x = $i % $w
    $bmp.SetPixel($x, $y, $clear)
    for ($k = 0; $k -lt 4; $k++) {
        $nx = $x + $dxs[$k]; $ny = $y + $dys[$k]
        if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
            $ni = $ny * $w + $nx
            if (-not $visited[$ni] -and (IsWhite $bmp $nx $ny)) {
                $visited[$ni] = $true
                $queue.Enqueue($ni)
            }
        }
    }
}
Write-Output ("flood done, queue processed")

$minX = $w; $minY = $h; $maxX = -1; $maxY = -1
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        if ($bmp.GetPixel($x, $y).A -gt 0) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
$cropW = $maxX - $minX + 1; $cropH = $maxY - $minY + 1
Write-Output ("crop: {0}x{1} at {2},{3}" -f $cropW, $cropH, $minX, $minY)
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)

$newH = 168
$newW = [int][math]::Round($cropW * ($newH / $cropH))
$out = New-Object System.Drawing.Bitmap($newW, $newH)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($cropped, 0, 0, $newW, $newH)
$g.Dispose()

$out.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output ("saved: {0}x{1}" -f $newW, $newH)
$out.Dispose(); $cropped.Dispose(); $bmp.Dispose()
