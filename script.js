let totalIncidents = 0;

let chart;
let zoneChart;
let labels = [];
let temperatureData = [];
let humidityData = [];
let smokeData = [];

window.onload = function()
{
    const canvas =
    document.getElementById("sensorChart");

    if(canvas)
    {
        const ctx =
        canvas.getContext("2d");

        chart = new Chart(ctx,
        {
            type:"line",

            data:
            {
                labels:labels,

                datasets:
                [
                    {
                        label:"Temperature",
                        data:temperatureData,
                        borderColor:"red",
                        backgroundColor:"rgba(255,0,0,0.2)",
                        fill:false,
                        tension:0.4
                    },

                    {
                        label:"Humidity",
                        data:humidityData,
                        borderColor:"blue",
                        backgroundColor:"rgba(0,0,255,0.2)",
                        fill:false,
                        tension:0.4
                    },

                    {
                        label:"Smoke",
                        data:smokeData,
                        borderColor:"orange",
                        backgroundColor:"rgba(255,165,0,0.2)",
                        fill:false,
                        tension:0.4
                    }
                ]
            }
        });
    }
for(let i=1;i<=5;i++)
{
    document
    .getElementById("zone"+i)
    .addEventListener("click",function()
    {
        alert(
        "Zone " + i +
        "\nDetailed Monitoring Information"
        );
    });
}
    const zoneCanvas =
    document.getElementById("zoneChart");

    if(zoneCanvas)
    {
        const zoneCtx =
        zoneCanvas.getContext("2d");

        zoneChart = new Chart(zoneCtx,
        {
            type:"pie",

            data:
            {
                labels:
                [
                    "Critical",
                    "High Risk",
                    "Safe"
                ],

                datasets:
                [
                    {
                        data:[0,0,0],

                        backgroundColor:
                        [
                            "#e74c3c",
                            "#f39c12",
                            "#2ecc71"
                        ]
                    }
                ]
            },

            options:
            {
                responsive:true,

                plugins:
                {
                    legend:
                    {
                        labels:
                        {
                            color:"white"
                        }
                    }
                }
            }
        });
    }
};

function analyzeData()
{
    let temp =
    parseInt(document.getElementById("temp").value);

    let humidity =
    parseInt(document.getElementById("humidity").value);

    let smoke =
    parseInt(document.getElementById("smoke").value);

    if(isNaN(temp) || isNaN(humidity) || isNaN(smoke))
    {
        alert("Please enter all values");
        return;
    }

    document.getElementById("tempValue").innerText =
    temp + "°C";

    document.getElementById("humidityValue").innerText =
    humidity + "%";

    document.getElementById("smokeValue").innerText =
    smoke;

    let fireStatus = "SAFE";

    if(smoke > 70 && temp > 40)
    {
        fireStatus = "FIRE DETECTED";

        alert(
        "🚨 EMERGENCY ALERT!\n\n" +
        "Critical Fire Risk Detected!\n" +
        "Dispatch Fire Team Immediately."
        );
    }

    document.getElementById("fireStatus").innerText =
    fireStatus;

    let wind = "Low";

    if(temp > 40)
    {
        wind = "High";
    }

    let humidityStatus = "Normal";

    if(humidity < 30)
    {
        humidityStatus = "Low";
    }

    let spread = "Slow";

    if(temp > 40 && humidity < 30)
    {
        spread = "Rapid";
    }

    document.getElementById("weatherAnalysis").innerHTML =
    `
    <p>💨 Wind Speed : ${wind}</p>
    <p>💧 Humidity : ${humidityStatus}</p>
    <p>🔥 Fire Spread : ${spread}</p>
    `;

    let zoneHTML = "";

    let critical = 0;
    let high = 0;
    let safe = 0;

    for(let i = 1; i <= 5; i++)
    {
        let randomSmoke =
        Math.floor(Math.random() * 100);

        if(randomSmoke > 70)
        {
            critical++;

            zoneHTML +=
            `<p>Zone ${i} : 🔴 Critical</p>`;
        }
        else if(randomSmoke > 40)
        {
            high++;

            zoneHTML +=
            `<p>Zone ${i} : 🟠 High Risk</p>`;
        }
        else
        {
            safe++;

            zoneHTML +=
            `<p>Zone ${i} : 🟢 Safe</p>`;
        }
    }

    document.getElementById("zoneStatus").innerHTML =
    zoneHTML;

    document.getElementById("criticalCount").innerText =
    critical;

    document.getElementById("highCount").innerText =
    high;

    document.getElementById("safeCount").innerText =
    safe;

if(zoneChart)
{
    zoneChart.data.datasets[0].data =
    [
        critical,
        high,
        safe
    ];

    zoneChart.update();
}
    for(let i = 1; i <= 5; i++)
{
    let zone =
    document.getElementById("zone" + i);

    let randomValue =
    Math.floor(Math.random() * 100);

    if(randomValue > 70)
    {
        zone.className =
        "zone-card critical-zone";

        let zoneTemp =
Math.floor(Math.random() * 20) + temp;

zone.innerHTML =
`
<h3>🌲 Zone ${i}</h3>
<p>🔴 Critical</p>
<p>🌡 ${zoneTemp}°C</p>
`;
    }
    else if(randomValue > 40)
    {
        zone.className =
        "zone-card high-zone";

        let zoneTemp =
Math.floor(Math.random() * 20) + temp;

zone.innerHTML =
`
<h3>🌲 Zone ${i}</h3>
<p>🟠 High Risk</p>
<p>🌡 ${zoneTemp}°C</p>
`;
    }   
    else
    {
        zone.className =
        "zone-card safe-zone";

        let zoneTemp =
Math.floor(Math.random() * 20) + temp;

zone.innerHTML =
`
<h3>🌲 Zone ${i}</h3>
<p>🟢 Safe</p>
<p>🌡 ${zoneTemp}°C</p>
`;
    }
}

    let riskScore = Math.floor(
        (temp * 0.4) +
        ((100 - humidity) * 0.2) +
        (smoke * 0.4)
    );

    if(riskScore > 100)
    {
        riskScore = 100;
    }

    document.getElementById("riskScore").innerText =
    riskScore + "%";

    let battery =
Math.max(20, 100 - totalIncidents * 2);

document.getElementById("droneBattery").innerText =
battery + "%";

document.getElementById("droneArea").innerText =
"Zone " + (Math.floor(Math.random()*5)+1);

if(riskScore > 70)
{
    document.getElementById("droneHotspot").innerText =
    "Fire Detected";

    document.getElementById("droneStatus").innerText =
    "Emergency Patrol";
}
else
{
    document.getElementById("droneHotspot").innerText =
    "None";

    document.getElementById("droneStatus").innerText =
    "Routine Patrol";
}

    document.getElementById("meterFill").style.width =
riskScore + "%";


document.getElementById("meterText").innerText =
riskScore + "%";

if(riskScore >= 80)
{
    document.getElementById("meterFill").style.background =
    "#e74c3c";
}
else if(riskScore >= 60)
{
    document.getElementById("meterFill").style.background =
    "#f39c12";
}
else
{
    document.getElementById("meterFill").style.background =
    "#2ecc71";
}
    let banner =
document.getElementById("alertBanner");

if(riskScore >= 80)
{
    banner.style.background =
    "#e74c3c";

    banner.innerHTML =
    "🚨 CRITICAL FIRE ALERT";
}
else if(riskScore >= 60)
{
    banner.style.background =
    "#f39c12";

    banner.innerHTML =
    "⚠️ HIGH FIRE RISK";
}
else
{
    banner.style.background =
    "#2ecc71";

    banner.innerHTML =
    "🟢 FOREST STATUS NORMAL";
}
    // AI RECOMMENDATION

let recommendation = "";

if(riskScore >= 80)
{
    recommendation =
    `
    🚨 <b>Critical Fire Risk Detected</b><br><br>
    • Dispatch fire response teams immediately<br>
    • Evacuate nearby forest zones<br>
    • Activate emergency monitoring systems<br>
    • Continuous surveillance required
    `;
}
else if(riskScore >= 60)
{
    recommendation =
    `
    ⚠️ <b>High Fire Risk</b><br><br>
    • Increase patrol frequency<br>
    • Monitor smoke levels closely<br>
    • Keep response teams on standby<br>
    • Track weather conditions
    `;
}
else if(riskScore >= 40)
{
    recommendation =
    `
    🟡 <b>Moderate Risk</b><br><br>
    • Continue regular monitoring<br>
    • Check sensor readings periodically<br>
    • Observe environmental changes
    `;
}
else
{
    recommendation =
    `
    ✅ <b>Forest Conditions Stable</b><br><br>
    • No emergency action required<br>
    • Continue routine monitoring<br>
    • System operating normally
    `;
}

document.getElementById("aiRecommendation").innerHTML =
recommendation;

    let mapHTML = "";

    for(let i = 0; i < 25; i++)
    {
        let value;
        let color;

        if(smoke > 80)
        {
            let arr =
            ["C","C","H","H","M"];

            value =
            arr[Math.floor(Math.random()*5)];
        }
        else if(smoke > 50)
        {
            let arr =
            ["H","H","M","M","L"];

            value =
            arr[Math.floor(Math.random()*5)];
        }
        else
        {
            let arr =
            ["L","L","L","M","L"];

            value =
            arr[Math.floor(Math.random()*5)];
        }

        if(value === "L")
        {
            color = "#2ecc71";
        }
        else if(value === "M")
        {
            color = "#f1c40f";
        }
        else if(value === "H")
        {
            color = "#e67e22";
        }
        else
        {
            color = "#e74c3c";
        }

        mapHTML +=
        `<div style="background:${color};">${value}</div>`;
    }

    document.getElementById("riskMap").innerHTML =
    mapHTML;

    let currentTime =
    new Date().toLocaleTimeString();

    let row =
    `
    <tr>
        <td>${currentTime}</td>
        <td>${temp}</td>
        <td>${humidity}</td>
        <td>${smoke}</td>
        <td>${fireStatus}</td>
    </tr>
    `;

    document.getElementById("incidentTable")
    .insertAdjacentHTML("beforeend", row);

    totalIncidents++;

    document.getElementById("incidentCount").innerText =
    totalIncidents;

    // GRAPH UPDATE

    labels.push("Reading " + totalIncidents);

    temperatureData.push(temp);
    humidityData.push(humidity);
    smokeData.push(smoke);

    if(chart)
    {
        chart.update();
    }
}

function downloadReport()
{
    let table =
    document.getElementById("incidentTable");

    let csv =
    "Time,Temperature,Humidity,Smoke,Status\n";

    for(let row of table.rows)
    {
        let cols = row.cells;

        csv +=
        cols[0].innerText + "," +
        cols[1].innerText + "," +
        cols[2].innerText + "," +
        cols[3].innerText + "," +
        cols[4].innerText + "\n";
    }

    let blob =
    new Blob([csv],
    {
        type:"text/csv"
    });

    let a =
    document.createElement("a");

    a.href =
    URL.createObjectURL(blob);

    a.download =
    "ForestGuardian_Report.csv";

    a.click();
}