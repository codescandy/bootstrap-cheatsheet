// document.addEventListener('DOMContentLoaded', function () {
//     'use strict';
//      (function () {

//   var darkMode = localStorage.getItem('darkMode');
//   var darkModeToggle = document.querySelector('.theme-switcher');

//   var enableDarkMode = function enableDarkMode() {
//     document.body.classList.add('darkmode');
//     localStorage.setItem('darkMode', 'enabled');
//   };

//   var disableDarkMode = function disableDarkMode() {
//     document.body.classList.remove('darkmode');
//     localStorage.setItem('darkMode', null);
//   };

//   if (darkMode === 'enabled') {
//     enableDarkMode();
//   }

//   if (darkModeToggle) {
//     darkModeToggle.addEventListener('click', function () {
//       darkMode = localStorage.getItem('darkMode');

//       if (darkMode !== 'enabled') {
//         enableDarkMode();
//       } else {
//         disableDarkMode();
//       }


//     });
//   }
//   })();



//   });



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);