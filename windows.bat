@echo off
set ocd=%cd%
cd usr\share\webspace
..\..\..\win32_bin\dist\electron.exe .
cd "%cd%"