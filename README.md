# adxl-code-challenge

# Task breakdown

| Task # | Summary | Status |
|--------|---------|--------|
| task1 | Create initial dashboard setup | Done |
| task2 | Create initial api setup | Done |
| task3 | Develop nav bar and ui structure | Done |
| task4 | Develop input form (screen 1) in dashboard | Done |
| task5 | Develop security scan result list (screen 2) in dashboard | Done |
| task6 | Develop security scan findings list (screen 3) in dashboard | Done |
| task7 | Design database model | Done |
| task8 | Develop api for insert security scan result and integrate with screen 1 | Done |
| task9 | Develop api for retrieve security scan results and integrate with screen 2 | Done |
| task10 | Develop api for retrieve findings and integrate with screen 3 | Done |
| task11 | Containerize dashboard | Done |
| task12 | Containerize api | Done |
| task13 | Containerize database | Done |
| task14 | Compose dashboard, api, and database containers | Done |

## System architecture

![system-architecture](./system-architecture.png)

## Steps to run the system
1. `cd` into project directory

2. Execute one of below commands to start
    1. Command to run only (build happens only during first attempt)
    ```
    docker-compose up -d
    ```
    2. Command to always build and run
    ```
    docker-compose up --build -d
    ```

2. Execute below command to stop
```
docker-compose down