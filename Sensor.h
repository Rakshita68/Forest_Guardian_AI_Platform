#ifndef SENSOR_H
#define SENSOR_H

class Sensor
{
private:
    int temperature;
    int humidity;
    int smoke;

public:
    Sensor();

    void setData(int t, int h, int s);

    bool detectFire();

    int getTemperature();
    int getHumidity();
    int getSmokeLevel();

    void predictRisk();
};

#endif