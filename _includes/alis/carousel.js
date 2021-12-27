const TOTAL_NUM_SEEDS = 128;
// const IMAGES_LOCATION = 'https://kaust-cair.s3.amazonaws.com/alis/demo';
const IMAGES_LOCATION = 'http://gpu210-06.ibex.kaust.edu.sa:10808';
let randomSeeds = [2, 11, 12, 5, 4, 5, 6, 7, 8, 9];

let slider = new Splide('#alis-slider', {
    type: 'slide',
    speed: 800,
    perPage: 3,
    perMove: 1,
    pagination: false,
}).mount();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

slider.on('moved', function(newSlideIndex) {
    if (newSlideIndex >= slider.length - 3) {
        loadNewSlides(slider);
    }
});

function loadNewSlides(slider) {
    for (var i = 0; i < 3; i++) {
        var seed = getRandomInt(TOTAL_NUM_SEEDS);
        var seedFromStr = zeroPad(randomSeeds[randomSeeds.length - 1], 6);
        var seedToStr = zeroPad(seed, 6);
        slider.add(`<li class="splide__slide"><img src="${IMAGES_LOCATION}/${seedFromStr}-${seedToStr}.jpg"></li>`)
        randomSeeds.push(seed);
        console.log('loaded', seedFromStr, seedToStr);
    }
}

function zeroPad(n, num_pads) {
    return String(n).padStart(num_pads, '0');
}

function resample(side) {
    let leftImg = slider.Components.Elements.slides[slider.index].children[0];
    let centerImg = slider.Components.Elements.slides[slider.index + 1].children[0];
    let rightImg = slider.Components.Elements.slides[slider.index + 2].children[0];

    // The slider display 3 images, i.e. 4 codes w0, w1, w2 and w3
    let w0_seed = randomSeeds[slider.index];
    let w1_seed = randomSeeds[slider.index + 1];
    let w2_seed = randomSeeds[slider.index + 2];
    let w3_seed = randomSeeds[slider.index + 3];

    // left.src = `${IMAGES_LOCATION}/${randomSeeds[-1]}-${seed}.jpg`
    let newSeed = getRandomInt(TOTAL_NUM_SEEDS);

    if (side == "left") {
        // Resampling w1
        leftImg.src = `${IMAGES_LOCATION}/${zeroPad(w0_seed, 6)}-${zeroPad(newSeed, 6)}.jpg`
        centerImg.src = `${IMAGES_LOCATION}/${zeroPad(newSeed, 6)}-${zeroPad(w2_seed, 6)}.jpg`
        randomSeeds[slider.index + 1] = newSeed;
    } else {
        // Resampling w2
        console.log()
        centerImg.src = `${IMAGES_LOCATION}/${zeroPad(w1_seed, 6)}-${zeroPad(newSeed, 6)}.jpg`
        rightImg.src = `${IMAGES_LOCATION}/${zeroPad(newSeed, 6)}-${zeroPad(w3_seed, 6)}.jpg`
        randomSeeds[slider.index + 2] = newSeed;
    }
}

document.querySelector("#resample-left").onclick = () => { resample("left"); };
document.querySelector("#resample-right").onclick = () => { resample("right"); };
