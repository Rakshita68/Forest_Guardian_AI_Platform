#include <iostream>
#include "SensorNetwork.h"

using namespace std;

void SensorNetwork::monitorSensors()
{
    EmergencyAlert alert;
    int smoke[5];

    cout << "\n===== SENSOR NETWORK =====\n";

    for(int i=0;i<5;i++)
    {
        cout << "Enter Smoke Level for Sensor "
             << i+1 << ": ";

        cin >> smoke[i];
    }

    cout << "\n===== ZONE STATUS =====\n";

    for(int i=0;i<5;i++)
    {
        if(smoke[i] > 70)
        {
            cout << "Zone "
                 << i+1
                 << " -> CRITICAL RISK\n";

            alert.sendAlert(i+1);
        }
        else if(smoke[i] > 40)
        {
            cout << "Zone "
                 << i+1
                 << " -> HIGH RISK\n";
        }
        else
        {
            cout << "Zone "
                 << i+1
                 << " -> SAFE\n";
        }
    }
}