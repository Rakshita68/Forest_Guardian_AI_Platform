#include <iostream>
#include <fstream>

#include "IncidentLog.h"

using namespace std;

void IncidentLog::saveLog(int temp,
                          int humidity,
                          int smoke,
                          bool fireDetected)
{
    ofstream file("incident_log.txt", ios::app);

    file << "=========================\n";
    file << "Temperature : " << temp << endl;
    file << "Humidity    : " << humidity << endl;
    file << "Smoke Level : " << smoke << endl;

    if(fireDetected)
        file << "Status      : FIRE DETECTED\n";
    else
        file << "Status      : SAFE\n";

    file << "=========================\n\n";

    file.close();

    cout << "\nIncident saved to incident_log.txt\n";
}