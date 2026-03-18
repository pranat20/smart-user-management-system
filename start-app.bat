@echo off
echo ========================================
echo Smart User Management System Starter
echo ========================================
echo.
echo Checking for Java...
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Java is not installed or not in PATH
    echo Please install Java 17+ and try again
    pause
    exit /b 1
)

echo Java found! 
echo.
echo Since Maven is not installed, you have two options:
echo.
echo OPTION 1: Install Maven (Recommended)
echo ------------------------------------
echo 1. Download Maven from: https://maven.apache.org/download.cgi
echo 2. Extract to C:\maven (or any folder)
echo 3. Add MAVEN_HOME environment variable: C:\maven
echo 4. Add C:\maven\bin to your PATH
echo 5. Restart command prompt and run: mvn spring-boot:run
echo.
echo OPTION 2: Use IntelliJ IDEA
echo ---------------------------
echo 1. Download IntelliJ IDEA Community Edition (free)
echo 2. Open this project folder in IntelliJ
echo 3. Right-click UsermanagementApplication.java
echo 4. Select "Run 'UsermanagementApplication.main()'"
echo.
echo OPTION 3: Use VS Code with Java Extension Pack
echo ----------------------------------------------
echo 1. Install VS Code
echo 2. Install Java Extension Pack
echo 3. Open this project folder
echo 4. Press Ctrl+Shift+P and run "Java: Run Java Main"
echo.
echo After starting the application, open: http://localhost:8080
echo.
pause
