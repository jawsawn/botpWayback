document.addEventListener('scroll', function () {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const scrollHeightRem = 30; // Desired scroll height in rem
    const scrollHeightPx = scrollHeightRem * rootFontSize;

    // const image1 = 'url("./images/botp1.png")'; // Image URL before scroll
    // const image2 = 'url("./images/botp2.png")'; // Image URL after scroll
    const backgroundDiv = document.querySelector('.background')

    // if (window.scrollY > scrollHeightPx) {
    //     backgroundDiv.style.backgroundImage = image2;
    // } else {
    //     backgroundDiv.style.backgroundImage = image1;
    // }
    backgroundDiv.style.backgroundImage = `url("./images/botp${Math.floor(window.scrollY/scrollHeightPx)+1}.png")`;
});