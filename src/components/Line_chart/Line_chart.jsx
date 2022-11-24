// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import React from 'react';
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Line_chart = () => {
  return (
    <div style={{ width: '720px', height: '480px', margin: '0 auto' }}>
    <ResponsiveLine
        data={[
          {
            "id": "japan",
            "color": "hsl(300, 70%, 50%)",
            "data": [
              {
                "x": "plane",
                "y": 131
              },
              {
                "x": "helicopter",
                "y": 210
              },
              {
                "x": "boat",
                "y": 72
              },
              {
                "x": "train",
                "y": 219
              },
              {
                "x": "subway",
                "y": 65
              },
              {
                "x": "bus",
                "y": 5
              },
              {
                "x": "car",
                "y": 211
              },
              {
                "x": "moto",
                "y": 48
              },
              {
                "x": "bicycle",
                "y": 92
              },
              {
                "x": "horse",
                "y": 156
              },
              {
                "x": "skateboard",
                "y": 147
              },
              {
                "x": "others",
                "y": 105
              }
            ]
          },
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'set1'}}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />

    </div>
  );
};

export default Line_chart;
