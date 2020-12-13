
let scrollTop = 0
let bar
let progress
let cloudWrap1
let cloudWrap2

let headerMP4
let logoText

let layer
let man
let man2

let fadeH2

window.onload = () => {

    // loading
    let upPosition = document.getElementsByClassName('upPosition')[0]
    let downPosition = document.getElementsByClassName('downPosition')[0]
    let layerTitle = document.getElementsByClassName('layerTitle')[0]
    let wrapPosition = document.getElementsByClassName('wrapPosition')[0]

    const ani = () => {

        layerTitle.style.transform='rotate(90deg)'

        setTimeout(() => {
            layerTitle.style.opacity="0"    
            upPosition.style.marginTop = '-100vh'
            downPosition.style.marginTop = '100vh'  
            
            wrapPosition.style.opacity='0'
        }, 1000);
        
    }
    ani()
    
    // interactive
    progress = document.getElementsByClassName('progress')[0]
    bar = document.getElementsByClassName('persent')[0]
    cloudWrap1 = document.getElementsByClassName('img1')[0]
    cloudWrap2 = document.getElementsByClassName('img2')[0]
    cloudWrap3 = document.getElementsByClassName('img3')[0]
    cloudWrap4 = document.getElementsByClassName('img4')[0]
    cloudWrap5 = document.getElementsByClassName('img5')[0]
    cloudWrap6 = document.getElementsByClassName('img6')[0]

    headerMP4 = document.getElementsByClassName('headerMP4')[0]
    logoText = document.getElementsByClassName('logoText')[0]
    layer = document.getElementsByClassName('layer')[0]
    man = document.getElementsByClassName('man')[0]
    man2 = document.getElementsByClassName('man2')[0]

    doctorBg = document.getElementsByClassName('doctorBg')[0]
    fadeH2 = document.getElementsByClassName('fadeH2')[0]


    window.addEventListener('mousemove', mouseFunc, false)

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2)
        y = (e.clientY - window.innerHeight / 2)
    }

    loop()
}


window.addEventListener('scroll', (e) => {
    scrollTop = document.documentElement.scrollTop
    console.log(scrollTop)

    let per = Math.ceil(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100)
    console.log(per+"%")

    if(per >= 100){
        per = 99
    }
    bar.style.height = `${per}%`
    cloudWrap1.style.transform = `translate(0, -${scrollTop / 6}px)`
    cloudWrap2.style.transform = `translate(0, -${scrollTop / 25}px)`
    cloudWrap3.style.transform = `translate(0, -${scrollTop / 8}px)`
    cloudWrap4.style.transform = `translate(0, -${scrollTop / 16}px)`
    cloudWrap5.style.transform = `translate(0, -${scrollTop / 32}px)`
    cloudWrap6.style.transform = `translate(0, -${scrollTop / 12}px)`
    // cloudWrap.style.transform = "scale("+ (1 + scrollTop/1000) +")";

    headerMP4.style.transform = "scale("+ (1+scrollTop/1000) +")";

    layer.style.opacity = per*0.08
    man.style.opacity = per*0.008
    man2.style.opacity = per*0.008
    

    // if(per>=10){
    //     cloudWrap1.style.opacity='1'
    // }


    if(per >= 18) {
        bar.style.opacity = "1"
        progress.style.opacity = "1"

        if(per >= 90){
            bar.style.opacity = "0"
            progress.style.opacity = "0"    
        } else {
            bar.style.opacity = "1"
            progress.style.opacity = "1"
        }
    } else if(per < 18){
        bar.style.opacity = "0"
        progress.style.opacity = "0"
    }

    if(per >= 83){
        fadeH2.style.opacity = "1"
    } else{
        fadeH2.style.opacity = "0"
    }
})

// mouseFunc
let doctorBg

let x = 0
let y = 0
let mx = 0
let my = 0
let speed = 0.015





function loop() {
    mx += (x - mx) * speed
    my += (y - my) * speed

    // headerMP4.style.transform = `translate(${-mx/32}px, ${-my/32}px)`
    // still.style.transform = `translate(${-mx/18}px, ${-my/9}px)`

    window.requestAnimationFrame(loop)
}

$(".gapi").click(function(e) {
    e.preventDefault()

    var result = $('.inputData').val()

    $('.oneDay').html('<span>당신은 하루에 <span style="font-weight:bold;">'+ result+ '</span>개피를 핍니다.</span>')
    $('.sevenDay').html('<span>당신은 일주일에 <span style="font-weight:bold;">'+ result*7+ '</span>개피를 핍니다.</span>')
    $('.monthDay').html('<span>당신은 한 달에 <span style="font-weight:bold;">'+ result*30+ '</span>개피를 핍니다.</span>')
    $('.oneYear').html('<span>당신은 일 년에 <span style="font-weight:bold;">'+ result*365+ '</span>개피를 핍니다.</span>')
    $('.tenYear').html('<span>당신은 10년에 <span style="font-weight:bold;">'+ result*3650+ '</span>개피를 핍니다.</span>')
    $('.resultWon').html('<span>당신은 1년에 <span style="font-weight:bold;">'+ result*365/20*4500+ '</span>원을 담배에 씁니다.</span>')

    setTimeout(() => {
        const youtube_box = document.getElementsByClassName('youtube_box')[0]
        youtube_box.style.display="block"
    }, 2300);
})

$(".close").click(function(e){
    e.preventDefault()

    const youtube_box = document.getElementsByClassName('youtube_box')[0]
    youtube_box.style.display="none"
})