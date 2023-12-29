import ReactEcharts from 'echarts-for-react'
import React, {
    forwardRef,
    useImperativeHandle,
    useMemo,
    useRef
} from 'react';
export default function EchartsLine() {
    const Line = useRef();
    const option = {
        grid: {
            left: 40,
            right: 30,
            top: 30,
            bottom: 30
          },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      lineStyle: {
                          color: '#57617B'
                      }
                  }
              },
              xAxis: {
                  type: 'category',
                  data: ['1', '2', '3', '4', '5', '6'],
                  axisLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
              },
              yAxis: {
                  type: 'value',
                  splitLine: {
                      lineStyle: {
                          type: "dashed",
                      }
                  },
              },
              series: [
                  {
                      data: [19, 17, 30, 11, 22, 20],
                      type: 'line',
                      showSymbol: false,
                      smooth: true,
                      symbol: 'circle',     //设定为实心点
                      lineStyle: {
                          normal: {
                              color: 'rgba(25, 189, 122, 1)',//折线的颜色
                              width: '3'//折线粗细
                          }
                      },
      
                      itemStyle:{
                          normal:{
                                  color:'red',//拐点颜色
                                  borderColor:'#fff',//拐点边框颜色
                                  borderWidth:3//拐点边框大小
                          },
                      },
                      symbolSize: 16,   //设定实心点的大小
                      markPoint: {
                          silent: true,
                          label: { fontSize: 33.12 },
                          data: [
                              {
                                  yAxis: 20,
                                  x: '96%',
                                  symbolSize: 0,
                                  label: {
                                      textStyle: { color: 'rgba(25, 189, 122, 1)' },
                                      fontSize: 14,
                                      position: 'left',
                                      formatter: '发电量'
                                  }
                              }
                          ]
                      }
                  },
      
              ]
          };
    return (<>
        <ReactEcharts
            option={option}      // option：图表配置项
            ref={Line}
        />
    </>)
}