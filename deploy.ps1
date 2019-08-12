param(
    [string]$fireBaseToken,
    [string]$fireBaseProject,
    [string]$releaseMessage
)
$dir = Split-Path $MyInvocation.MyCommand.Path
Push-Location $dir

npm i -g firebase-tools
write-host "deploy comenzado...";
firebase --version;
firebase deploy --token $fireBaseToken --project $fireBaseProject --message "Release: $releaseMessage";
write-host "deploy completo";

Pop-Location