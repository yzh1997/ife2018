;function drawChart(data) {
    const xLen = 520;
    const yLen = 420;
    const axisWidth = 1;
    const distance = 5;
    const rectWidth = (xLen - 12 * distance - 20) / 12;
    const rectColor = 'red';
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
    axisX.setAttribute('x2', xLen );
    axisX.setAttribute('y1', yLen);
    axisX.setAttribute('y2', yLen);
    axisX.setAttribute('stroke', "black");
    axisX.setAttribute('stroke-width', axisWidth);

    svg.appendChild(axisX);

    var max = Math.max.apply(Math, data);
    var proportion = (yLen - 20) / max;
    for (let i = 0; i < data.length; i++) {
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute("width", rectWidth);
      rect.setAttribute("height", data[i] * proportion);
      rect.setAttribute("x", (  i * rectWidth + (i + 1) * distance + axisWidth));
      rect.setAttribute("y", (yLen - (data[i] * proportion) - 1));
      rect.setAttribute('stroke-width', "0");
      rect.setAttribute("fill", rectColor);
      svg.appendChild(rect);

    }
  }

