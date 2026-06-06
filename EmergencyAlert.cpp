#include <iostream>
#include "EmergencyAlert.h"

using namespace std;

void EmergencyAlert::sendAlert(int zone)
{
    cout << "\n====================================\n";

    cout << "EMERGENCY ALERT ACTIVATED\n";

    cout << "Zone "
         << zone
         << " is under CRITICAL FIRE RISK\n";

    cout << "Dispatch Fire Response Team\n";

    cout << "Notify Forest Department\n";

    cout << "Initiate Evacuation Protocol\n";

    cout << "====================================\n";
}