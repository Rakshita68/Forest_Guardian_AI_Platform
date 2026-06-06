#include <iostream>
#include <queue>
#include <thread>
#include <chrono>

#include "Forest.h"

using namespace std;

void Forest::displayFireSpread()
{
    char forest[5][5];

    for(int i=0;i<5;i++)
    {
        for(int j=0;j<5;j++)
        {
            forest[i][j]='T';
        }
    }

    queue<pair<int,int>> q;

    forest[2][2]='F';

    q.push({2,2});

    int dx[4]={-1,1,0,0};
    int dy[4]={0,0,-1,1};

    while(!q.empty())
    {
        cout << "\n===== FOREST STATUS =====\n\n";

        for(int i=0;i<5;i++)
        {
            for(int j=0;j<5;j++)
            {
                cout << forest[i][j] << " ";
            }
            cout << endl;
        }

        int size=q.size();

        for(int k=0;k<size;k++)
        {
            auto current=q.front();
            q.pop();

            int x=current.first;
            int y=current.second;

            for(int d=0;d<4;d++)
            {
                int nx=x+dx[d];
                int ny=y+dy[d];

                if(nx>=0 && nx<5 && ny>=0 && ny<5 &&
                   forest[nx][ny]=='T')
                {
                    forest[nx][ny]='F';
                    q.push({nx,ny});
                }
            }
        }

        this_thread::sleep_for(chrono::seconds(1));
    }
}