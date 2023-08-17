// 1. nested setTimeOut with callback & delayInms
let timerId = setTimeout(
    function tick() {
        alert('tick');
        timerId = setTimeout(tick, 2000);
    },
    2000
);

