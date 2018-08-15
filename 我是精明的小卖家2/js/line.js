;function drawLine(data) {
    const xLen = 520;
    const yLen = 420;
    const axisWidth = 1;
    const distance = (xLen - 100) / 12;
    const axisColor = "black";
    const lineColor = "blue";
    const colors = ["red", "green", "blue", "black", "yellow", "orange", "purple", "aqua", "brown"];
    var canvas = document.getElementById('canvas');
    var maxArr = [];
    var maxNum = 0;
    var proportion = 1;
    for (let i = 0; i < data.length; i++) {
      maxArr.push(Math.max.apply(Math, data[i]));
    }
    maxNum = Math.max.apply(Math, maxArr);
    proportion = (yLen - 20) / maxNum;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = axisColor;
    context.fillStyle = lineColor;
    context.lineWidth = axisWidth;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, yLen);
    context.lineTo(xLen, yLen);
    context.stroke();

    context.lineWidth = 0.2;

    for (let i =0; i < data.length; i++) {//先画圆
      context.beginPath();
      context.strokeStyle = colors[i];
      context.fillStyle = colors[i];
      for ( let j =0; j<12; j++) {
        context.lineTo(distance * (j + 1), yLen - data[i][j] * proportion);
        context.stroke();
      }
      for ( let j =0; j<12; j++) {
        context.beginPath();
        context.arc(distance * (j + 1), yLen - data[i][j] * proportion, 2.5, 0, 2 * (Math.PI), false);
        context.closePath();
        context.fill();
      }
    }



  }
