"do you use strict, or does strict use you?"; // <-- semicolon, for maximum expression doneness

// ABANDON ALL HOPE YE WHO ENTER
//             _____
//           /       \
//          / /\   /\ \
//         ( /__\ /__\ )
//          \   /\    /
//            )     (
//            \|||||/


// imports are cool, but we're going old school!
(function() {
  const prefixes = [
    "Software",
    "Web",
    "Full Stack",
    "Front End",
    "Technical",
  ];

  const titles = [
    "Developer",
    "Engineer",
    "Architect",
    "Ninja",
    "Rockstar",
    "Jedi",
    "Wizard",
    "Warlock",
    "Hacker",
    "Astronaut",
  ];

  // return a random array entry
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const proportion = (a, b, c) => a * b / c;

  // don't make me type this repeatedly plz
  const $ = document.querySelector.bind(document);

  initMouseMove();
  initConsole();
  initFancyTitle();

  function initFancyTitle() {
    // show the user some random fancy buzzwords
    $("#change-fancy-title").addEventListener("click", () => {
      const title = `${random(prefixes)} ${random(titles)}`;
      const article = /^[AEIOU]/i.test(title) ? "an" : "a";
      $("#fancy-title").innerText = title;
      $('#fancy-article').innerText = article;
    });
  }

  function initMouseMove() {
    // don't move the spaceman on tap, only hover
    if (window.matchMedia("(any-hover: none)").matches) return;

    document.addEventListener('mousemove', ({ x, y }) => {
      const container = $('#spaceman');
      // layout differences in landscape require some tweaks to the transform values
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      const xPosition = (container.offsetWidth + container.offsetLeft) / 2 - x;
      const yPosition = (container.offsetHeight + container.offsetTop) / 2 - y;
      // since the spaceman is positioned on the left in landscape mode
      // let's increase the max value when the cursor is left of the spacemen
      // this will create a more dramatic "look" to the left
      // to account for the smaller hoverable width
      // this is only necessary to help the feel of the animation in landscape mode
      // and not necessary in portrait because the spaceman is centered
      const xMax = isLandscape && xPosition > 0 ? 28 : 18;

      // yeah yeah, I'm reassigning these for brevity, go tell eslint
      x = proportion(xPosition, xMax, container.offsetWidth);
      y = proportion(yPosition, 20, container.offsetHeight);

      // another tweak to increase the leftward look in landscape
      if (isLandscape && x > 0) {
        x = x * 2;
      }

      $('#neck').style.transform = `translateY(${y * -0.01}px)`;
      $('#facemask').style.transform = `translateX(${x * -0.5}px) translateY(${y * -0.5}px)`;
      $('svg').style.transform = `rotateX(${y * 0.5}deg) rotateY(${x * -1}deg) rotateZ(${x * 0.2}deg) translateZ(-100px) scale(1)`;
    });
  }

  function initConsole() {
    console.log('Oh, hello friendly interloper!');
    console.log("Take a look around! Don't do anything I wouldn't do.");
  }
})();
