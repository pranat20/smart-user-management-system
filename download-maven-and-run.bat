@echo off
echo ========================================
echo Download Maven and Run Application
echo ========================================
echo.

set MAVEN_VERSION=3.9.6
set MAVEN_URL=https://archive.apache.org/dist/maven/maven-3/%MAVEN_VERSION%/binaries/apache-maven-%MAVEN_VERSION%-bin.zip
set MAVEN_ZIP=apache-maven-%MAVEN_VERSION%-bin.zip
set MAVEN_DIR=apache-maven-%MAVEN_VERSION%

if not exist "%MAVEN_ZIP%" (
    echo Downloading Maven %MAVEN_VERSION%...
    echo This may take a few minutes...
    
    rem Try using PowerShell to download
    powershell -Command "Invoke-WebRequest -Uri '%MAVEN_URL%' -OutFile '%MAVEN_ZIP%'"
    
    if %errorlevel% neq 0 (
        echo Failed to download Maven automatically.
        echo Please download manually from: %MAVEN_URL%
        pause
        exit /b 1
    )
)

if not exist "%MAVEN_DIR%" (
    echo Extracting Maven...
    powershell -Command "Expand-Archive -Path '%MAVEN_ZIP%' -DestinationPath '.'"
    
    if %errorlevel% neq 0 (
        echo Failed to extract Maven.
        echo Please extract %MAVEN_ZIP% manually.
        pause
        exit /b 1
    )
)

echo Maven is ready! Starting the application...
echo.

set MAVEN_HOME=%CD%\%MAVEN_DIR%
set PATH=%MAVEN_HOME%\bin;%PATH%

echo Running: mvn spring-boot:run
echo.
echo When the application starts, open: http://localhost:8080
echo Press Ctrl+C to stop the server
echo.

%MAVEN_DIR%\bin\mvn spring-boot:run
