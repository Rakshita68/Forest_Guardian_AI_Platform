#include <iostream>
#include "Weather.h"

using namespace std;

void Weather::analyzeWeather(int windSpeed, int humidity)
{
    cout << "\n===== WEATHER ANALYSIS =====\n";

    if(windSpeed > 50)
    {
        cout << "Strong winds may spread fire rapidly\n";
    }
    else
    {
        cout << "Wind conditions are stable\n";
    }

    if(humidity < 30)
    {
        cout << "Low humidity increases fire risk\n";
    }
    else
    {
        cout << "Humidity helps reduce fire spread\n";
    }
}