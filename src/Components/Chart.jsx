/** Chart.jsx responsible for the chart UI & content which transfered by props from "SecondTask.jsx" **/

const SVG_WIDTH = 700;
const SVG_HEIGHT = 500;

const Chart = ({fetchedData}) => {
let data;
let i = -1;
const colors = ["rgb(255 242 204)","rgb(217 234 211)","rgb(208 223 227)","rgb(234 209 221)","rgb(252 229 205)"];
//"data" will contain the content in structure : [character name, number of episodes apper, color]
data = fetchedData.map((character)=>{
    i++;
    return [character[0],character[1],colors[i]]
})

const x0 = 50;
const xAxisLength = SVG_WIDTH - x0 * 2;
const y0 = 50;
const yAxisLength = SVG_HEIGHT - y0 * 2;
const xAxisY = y0 + yAxisLength;
const dataYMax = 60;
const dataYMin = 0
const dataYRange = dataYMax - dataYMin;
const numYTicks = 6;
const barPlotWidth = xAxisLength / data.length;

return (
    <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
    {/* // <svg height="100%" width="100%"> */}

      {/* X axis */}
      <line
        x1={x0}
        y1={xAxisY}
        x2={x0 + xAxisLength}
        y2={xAxisY}
        stroke="grey"
      />
      {/* Y axis */}
      <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="white" />
      {Array.from({ length: numYTicks }).map((_, index) => {
        const y = y0 + index * (yAxisLength / numYTicks);
        const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));
        return (
          <g key={index}>
            <line x1={x0} y1={y} x2={"650"} y2={y} stroke="lightgrey" />
            <text x={x0 - 5} y={y + 5} textAnchor="end">
              {yValue}
            </text>
          </g>
        );
      })}
     

      {/* Bar plots */}
      {data.map(([name, dataY,color], index) => {
        const x = x0 + index * barPlotWidth;
        const yRatio = (dataY - dataYMin) / dataYRange;
        const y = y0 + (1 - yRatio) * yAxisLength;
        const height = yRatio * yAxisLength;
        const sidePadding = 10;
        if(isNaN(y)){
          return(
            <div key={Math.random()}></div>
          )
        }
        return (
          <g key={index}>
            <rect
              x={x + sidePadding / 2}
              y={y}
              width={barPlotWidth - sidePadding}
              height={height}
              fill={color}
            />
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle">
              {name}
            </text>
          </g>
        );
      })}
    </svg>
)
}
export default Chart;