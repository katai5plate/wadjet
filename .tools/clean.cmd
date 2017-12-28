@ECHO OFF

CD /d %~dp0\..
ECHO Clean up temporary files.
RMDIR /S /Q __tests__
RMDIR /S /Q coverage
RMDIR /S /Q dist
RMDIR /S /Q node_modules
CALL yarn cache clean
