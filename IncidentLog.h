#ifndef INCIDENTLOG_H
#define INCIDENTLOG_H

class IncidentLog
{
public:
    void saveLog(int temp,
                 int humidity,
                 int smoke,
                 bool fireDetected);
};

#endif