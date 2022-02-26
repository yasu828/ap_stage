import { ref } from 'vue'

export default function () {
  let increasingColor = "ratio";
  const Contents2 = ref()
  let ggt;
  
  let thresholds = [];
  let numSteps = 10;
  let prevRatio = 0.0;
  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0)
  
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: thresholds
  }
  
  function firstCallback() {
    console.log("observ33er")  
    let observer;
    observer = new IntersectionObserver(firstCall, options);
    // const Contents = ref()
    let boxElement = document.querySelector("#first");
    observer.observe(boxElement);//ここで指定した要素を監視する。
  }

  function firstCall(entries) {
    console.log("entries")
    console.log(entries)
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {  //prevRatioの初期値は0.0と最初に指定している。
        ggt = document.querySelector(".p");
        console.log(ggt.style.opacity)
        
        ggt.style.opacity = increasingColor.replace("ratio", entry.intersectionRatio);
        Contents2.value = true
        
        if (entry.intersectionRatio < "0.5") {
          console.log("999132")
        }
        
      } else {
        ggt.style.opacity = increasingColor.replace("ratio", entry.intersectionRatio);
        console.log(ggt.style.opacity)
        console.log(entry.intersectionRatio)
        
        Contents2.value = false
      }
      prevRatio = entry.intersectionRatio;
    });
  }


  const dhuck = ref()
  let guRatio = 0.0;
  console.log(dhuck)

  const bhandleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > guRatio) {  //prevRatioの初期値は0.0と最初に指定している。
        console.log(entry.intersectionRatio)
      } else {
        console.log(entry.intersectionRatio)
      }
      guRatio = entry.intersectionRatio;
    });
  }
  // IntersectionObserverEntry.isIntersecting){
  //   refの要素出現
  //   }
  //   IntersectionObserverEntry.intersectionRatio>=0.3){
  //   fixed
  //   }
  //   IntersectionObserverEntry.intersectionRatio>=0.5){
    
  //   アニメーション
    
  //   }
  //   IntersectionObserverEntry.intersectionRatio=1){
    
  //   fixed解除
    
  //   }

  return {
    Contents2,
    firstCallback,
    firstCall,
    bhandleIntersect,
    dhuck,
  }
}