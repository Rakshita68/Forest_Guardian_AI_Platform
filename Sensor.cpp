#include <iostream>
#include "Sensor.h"

using namespace std;

Sensor::Sensor()
{
    temperature = 0;
    humidity = 0;
    smoke = 0;
}

void Sensor::setData(int t, int h, int s)
{
    temperature = t;
    humidity = h;
    smoke = s;
}

bool Sensor::detectFire()
{
    return (temperature > 40 && smoke > 50);
}

int Sensor::getTemperature()
{
    return temperature;
}

int Sensor::getHumidity()
{
    return humidity;
}

int Sensor::getSmokeLevel()
{
    return smoke;
}

void Sensor::predictRisk()
{
    cout << "\nRisk Analysis\n";

    if(smoke > 70 && temperature > 40)
    {
        cout << "CRITICAL FIRE RISK\n";
    }
    else if(smoke > 50)
    {
        cout << "HIGH FIRE RISK\n";
    }
    else if(smoke > 20)
    {
        cout << "MEDIUM FIRE RISK\n";
    }
    else
    {
        cout << "LOW FIRE RISK\n";
    }
}