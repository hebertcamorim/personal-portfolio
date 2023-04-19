function progressHtml() {
    const progressBar = document.getElementById('progress-bar-html');
    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        document.querySelector('.html-progress').innerHTML = `${counter} %`
      progressBar.style.width = `${counter * 6}px`;
      if (counter === 80) {
        clearInterval(intervalId);
      }
    }, 100);
} 
progressHtml()

function progressCss() {
    const progressBar = document.getElementById('progress-bar-css');
    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        document.querySelector('.css-progress').innerHTML = counter + '%'
      progressBar.style.width = `${counter * 6}px`;
      if (counter === 60) {
        clearInterval(intervalId);
      }
    }, 100);
}
progressCss()

function progressJavascript() {
    const progressBar = document.getElementById('progress-bar-javascript');  
    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        document.querySelector('.javascript-progress').innerHTML = counter + '%'
      progressBar.style.width = `${counter * 6}px`;
      if (counter === 50) {
        clearInterval(intervalId);
      }
    }, 100);
}
progressJavascript()

