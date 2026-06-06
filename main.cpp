#include <iostream>
#include "Sensor.h"
#include "Forest.h"
#include "SensorNetwork.h"
#include "Evacuation.h"
#include "RiskMap.h"
#include "IncidentLog.h"
#include "Weather.h"
#include "Dashboard.h"

using namespace std;

int main()
{
    Forest forest;

    Sensor sensor;

    SensorNetwork network;

    int temp, humidity, smoke;

cout << "Enter Temperature: ";
cin >> temp;

cout << "Enter Humidity: ";
cin >> humidity;

cout << "Enter Smoke Level: ";
cin >> smoke;

sensor.setData(temp, humidity, smoke);

    forest.displayFireSpread();

    cout << "\nSensor Data\n";

    cout << "Temperature : "
         << sensor.getTemperature()
         << endl;

    cout << "Humidity : "
         << sensor.getHumidity()
         << endl;

    cout << "Smoke Level : "
         << sensor.getSmokeLevel()
         << endl;

    sensor.predictRisk();

    if(sensor.detectFire())
    {
        cout << "\nFIRE DETECTED\n";
    }
    else
    {
        cout << "\nNO FIRE DETECTED\n";
    }

    network.monitorSensors();

    Evacuation route;
    route.generateRoute();

    RiskMap map;
    map.displayMap();

    IncidentLog log;

        log.saveLog(
            sensor.getTemperature(),
            sensor.getHumidity(),
            sensor.getSmokeLevel(),
            sensor.detectFire()
        );
    Weather weather;

    weather.analyzeWeather(60,20);
    Dashboard dashboard;
    dashboard.showSummary();
    return 0;
}