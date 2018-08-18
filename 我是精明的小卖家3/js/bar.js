;function drawChart(data) {
  const xLen = 520;
  const yLen = 420;
  const axisWidth = 1;
  var max = 0;
  const distance = 5;
  const rectWidth = (xLen-20)/12 -distance  ;
  const barWidth = rectWidth/data.length;
  const colors = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"];
  let svg = document.getElementById('svg');
  svg.innerHTML = "";

  var axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisY.setAttribute('x1', 0);
  axisY.setAttribute('x2', 0);
  axisY.setAttribute('y1', yLen);
  axisY.setAttribute('y2', 0);
  axisY.setAttribute('stroke', "black");
  axisY.setAttribute('stroke-width', axisWidth);
  svg.appendChild(axisY);
  var axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisX.setAttribute('x1', 0);
  axisX.setAttribute('x2', xLen);
  axisX.setAttribute('y1', yLen);
  axisX.setAttribute('y2', yLen);
  axisX.setAttribute('stroke', "black");
  axisX.setAttribute('stroke-width', axisWidth);
  svg.appendChild(axisX);

  for (let i = 0;i < data.length; i++) {
    max =  max < Math.max.apply(Math, data[i])? Math.max.apply(Math, data[i]) : max;
  }
  var proportion = (yLen - 20) / max;
  for (let i = 0; i < data.length; i++) {
    let rect_color = colors[i];
    for (let j = 0; j < 12; j++) {
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute("width", barWidth);
      rect.setAttribute("height", data[i][j] * proportion);
      rect.setAttribute("x", (10+ i*barWidth+ j*(rectWidth+distance) + axisWidth));
      rect.setAttribute("y", (yLen - (data[i][j] * proportion) - 1));
      rect.setAttribute('stroke-width', "0");
      rect.setAttribute("fill", rect_color);
      svg.appendChild(rect);
    }
  }
}

