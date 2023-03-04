const stopwatchEl = document.querySelector(".stopwatch");
      let intervalId;
      let elapsedTime = 0;

    //   Here we are writing the function 'start' which will start the timer
      function start() {
        intervalId = setInterval(() => {
          elapsedTime++;
          stopwatchEl.innerHTML = formatTime(elapsedTime);
        }, 1000);
      }

    //   Here we are writing the function 'pause' which will puase the timer
      function pause() {
        clearInterval(intervalId);
      }

      //   Here we are writing the function 'reset' which will reset the timer at 00:00:00
      function reset() {
        clearInterval(intervalId);
        elapsedTime = 0;
        stopwatchEl.innerHTML = "00:00:00";
      }

    //   Here this function decides the hour : minute : seconds of the stop watch by below logic
      function formatTime(timeInSeconds) {
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor((timeInSeconds % 3600) / 60);
        let seconds = timeInSeconds % 60;
        return (
          (hours < 10 ? "0" + hours : hours) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ":" +
          (seconds < 10 ? "0" + seconds : seconds)
        );
      }

    /* The Java Script code  is the Ended here  */