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
    "Back End",
    "Agile",
    "Imagination",
  ];

  const titles = [
    "Developer",
    "Ninja",
    "Rockstar",
    "Jedi",
    "Pirate",
    "Wizard",
    "Warlock",
    "Zombie",
    "Visionary",
    "Demigod",
    "Hacker",
    "Pioneer",
    "Evangelist",
    "Engineer",
    "Astronaut"
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

  // This comment is stale, don't read it
  console.log('Oh, hello friendly interloper!');
  console.log("Take a look around! Don't do anything I wouldn't do.");
})();