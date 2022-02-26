
// const numSteps = 20.0;
export default function () {


  let boxElement;
  let boxElement2;
  let prevRatio = 0.0;
  let increasingColor = "rgba(40, 40, 190, ratio)";
  let decreasingColor = "rgba(190, 40, 40, ratio)";

  // Set things up
  window.addEventListener("load", (event) => {
    boxElement = document.querySelector("#box");  // 監視する要素
    boxElement2 = document.querySelector(".lplp");

    createObserver();
    console.log("event")
    console.log(event)
  }, false);

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList() // 指定した要素が通過した割合ごとにcallackさせる[]
    };

    observer = new IntersectionObserver(handleIntersect, options);
    console.log("observer3")
    console.log(observer)
    // console.log(observer)

    observer.observe(boxElement);
  }

  function buildThresholdList() { // thresholdの値をpushしている。numStep(20等分(5%毎))を指定
    let thresholds = [];
    let numSteps = 20;
    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries) { //閾値を超えるたびに発火する関数
    // console.log("entries")
    // console.log(entries)
    console.log("entries")
    console.log(entries)
    // console.log("entries")
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {  //prevRatioの初期値は0.0と最初に指定している。
        boxElement2.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
        console.log("entry")
    console.log(entry)
        // console.log(entry.intersectionRatio)
        // console.log("entry.intersectionRatio")
      } else {
        boxElement2.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
        // console.log(entry.intersectionRatio)
        // console.log("entry")
      }
      prevRatio = entry.intersectionRatio;
    });
  }
  console.log("buildThresholdList()")
  console.log(buildThresholdList())
  console.log("buildThresholdList()")

  return {
    createObserver,
    buildThresholdList,
    handleIntersect,
  }
}
