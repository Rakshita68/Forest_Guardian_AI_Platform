#include <iostream>
#include <queue>

#include "Evacuation.h"

using namespace std;

void Evacuation::generateRoute()
{
    cout << "\n===== EVACUATION ROUTE =====\n";

    int rows = 5;
    int cols = 5;

    char map[5][5] =
    {
        {'S','O','O','O','O'},
        {'O','X','X','O','O'},
        {'O','O','F','O','O'},
        {'O','X','O','O','O'},
        {'O','O','O','O','E'}
    };

    queue<pair<int,int>> q;

    bool visited[5][5] = {false};

    q.push({0,0});
    visited[0][0] = true;

    int dx[4] = {-1,1,0,0};
    int dy[4] = {0,0,-1,1};

    while(!q.empty())
    {
        pair<int,int> current = q.front();
        q.pop();

        int x = current.first;
        int y = current.second;

        cout << "(" << x << "," << y << ")" << endl;

        if(map[x][y]=='E')
        {
            cout << "\nSAFE EXIT FOUND\n";
            return;
        }

        for(int i=0;i<4;i++)
        {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx>=0 && nx<rows &&
               ny>=0 && ny<cols &&
               !visited[nx][ny] &&
               map[nx][ny]!='X')
            {
                visited[nx][ny]=true;
                q.push({nx,ny});
            }
        }
    }

    cout << "\nNO SAFE ROUTE FOUND\n";
}