Write-Host "🔧 Renaming asset & CSS files to lowercase and fixing imports..."

# Step 1: Rename all asset/css files to lowercase
$files = Get-ChildItem -Recurse -Path src -Include *.jpg, *.jpeg, *.png, *.webp, *.avif, *.css
foreach ($file in $files) {
    $lowerName = $file.Name.ToLower()
    if ($file.Name -ne $lowerName) {
        $newPath = Join-Path $file.DirectoryName $lowerName
        Write-Host "Renaming: $($file.FullName) -> $newPath"
        Rename-Item -Path $file.FullName -NewName $lowerName -Force
    }
}

# Step 2: Update import statements in source files
$sourceFiles = Get-ChildItem -Recurse -Path src -Include *.js, *.jsx, *.ts, *.tsx
foreach ($src in $sourceFiles) {
    $content = Get-Content $src.FullName
    $updated = $false
    $newContent = foreach ($line in $content) {
        if ($line -match 'import .* from .*.(jpg|jpeg|png|webp|avif|css)') {
            $fixedLine = $line -replace '([A-Za-z0-9_-]+\.(jpg|jpeg|png|webp|avif|css))', { $_.Groups[1].Value.ToLower() }
            if ($fixedLine -ne $line) {
                Write-Host "Fixing import in $($src.FullName): $line -> $fixedLine"
                $updated = $true
            }
            $fixedLine
        }
        else {
            $line
        }
    }
    if ($updated) {
        $newContent | Set-Content $src.FullName -Encoding UTF8
    }
}

Write-Host "✅ All filenames and imports normalized to lowercase."
