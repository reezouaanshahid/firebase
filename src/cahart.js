import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
const chart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    onClick: (e) => {
      const canvasPosition = getRelativePosition(e, chart);

      // Substitute the appropriate scale IDs
      const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    }
  }
});