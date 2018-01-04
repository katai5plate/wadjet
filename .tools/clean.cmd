@ECHO OFF

CD /d %~dp0\..
RMDIR /S /Q __tests__ >NUL 2>&1
RMDIR /S /Q coverage >NUL 2>&1
RMDIR /S /Q dist >NUL 2>&1
RMDIR /S /Q node_modules >NUL 2>&1
CALL yarn cache clean
