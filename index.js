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
    "Ninja",
    "Rockstar",
    "Jedi",
    "Wizard",
    "Warlock",
    "Hacker",
    "Engineer",
    "Astronaut",
  ];

  function random(arr) {
  // officer, I'd like to report a robbery
  // this code was stolen from stack overflow
  return arr[Math.floor(Math.random() * arr.length)];
  }

  // if you're into the whole brevity thing
  const $ = document.querySelector.bind(document);

  // TODO: add more TODOs
  $("#change-fancy-title").addEventListener("click", () => {
    const title = `${random(prefixes)} ${random(titles)}`;
    const article = /^[AEIOU]/i.test(title) ? "an" : "a";
    $("#fancy-title").innerText = title;
    $('#fancy-article').innerText = article;
  });

  const proportion = (a,b,c) => a*b/c;

  document.addEventListener('mousemove', ({x, y}) => {
    // don't move the spaceman on tap, only hover
    if (window.matchMedia("(any-hover: none)").matches) return;

    const container = $('#spaceman');
    const relativeX = (container.offsetWidth + container.offsetLeft) / 2;
    const relativeY = (container.offsetHeight + container.offsetTop) / 2;

    $('#neck').style.transform = `translateY(${y * -0.01}px)`;

    x = proportion(relativeX - x, 20, container.offsetWidth);
    y = proportion(relativeY - y, 20, container.offsetHeight);

    $('#facemask').style.transform = `translateX(${x * -0.5}px) translateY(${y * -0.5}px)`;
    $('svg').style.transform = `rotateX(${y * 0.5}deg) rotateY(${x * -1}deg) rotateZ(${x * 0.2}deg) translateZ(-100px) scale(1.2)`;
  });

  // This comment is stale, don't read it
  console.log('Oh, hello friendly interloper!');
  console.log("Take a look around! Don't do anything I wouldn't do.");
})();
