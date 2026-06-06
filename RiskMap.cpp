#include <iostream>
#include "RiskMap.h"

using namespace std;

void RiskMap::displayMap()
{
    cout << "\n===== FIRE RISK MAP =====\n\n";

    char risk[5][5] =
    {
        {'L','L','M','H','H'},
        {'L','M','H','C','C'},
        {'L','M','M','H','C'},
        {'L','L','M','H','H'},
        {'L','L','L','M','H'}
    };

    for(int i=0;i<5;i++)
    {
        for(int j=0;j<5;j++)
        {
            cout << risk[i][j] << " ";
        }

        cout << endl;
    }

    cout << "\nL = Low Risk";
    cout << "\nM = Medium Risk";
    cout << "\nH = High Risk";
    cout << "\nC = Critical Risk\n";
}