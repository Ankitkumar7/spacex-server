(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-ui-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/buttons/buttons.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/buttons/buttons.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone buttons-basic\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Basic buttons</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Normal</span>\n        </li>\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-{{ color }}\">\n            Button\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disabled</span>\n        </li>\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised button--colored-{{ color }}\" disabled>\n            Button\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone buttons-with-icons\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Buttons with icons</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Normal</span>\n        </li>\n        <li *ngFor=\"let item of buttonsWithIcons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\">\n            <i class=\"material-icons\">{{ item.icon }}</i>\n            {{ item.action | titlecase }}\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disabled</span>\n        </li>\n        <li *ngFor=\"let item of buttonsWithIcons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\" disabled>\n            <i class=\"material-icons\">{{ item.icon }}</i>\n            {{ item.action | titlecase }}\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone buttons-social\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Social buttons</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Normal</span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--{{ name }}\">\n            <i class=\"material-icons\"></i>\n            {{ name | titlecase }}\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disabled</span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--{{ name }}\" disabled>\n            <i class=\"material-icons\"></i>\n            {{ name | titlecase }}\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone buttons-icons\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Icon buttons</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Normal</span>\n        </li>\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--colored-{{ item.color }}\">\n            <i class=\"material-icons\">{{ item.icon }}</i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Social</span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--{{ name }}\">\n            <i class=\"material-icons\"></i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disabled</span>\n        </li>\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--colored-{{ item.color }}\" disabled>\n            <i class=\"material-icons\">{{ item.icon }}</i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\"></span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--{{ name }}\" disabled>\n            <i class=\"material-icons\"></i>\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone buttons-icons\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\"> Raised Icon buttons</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Normal</span>\n        </li>\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\">\n            <i class=\"material-icons\">{{ item.icon }}</i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Social</span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--{{ name }}\">\n            <i class=\"material-icons\"></i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disabled</span>\n        </li>\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\" disabled>\n            <i class=\"material-icons\">{{ item.icon }}</i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\"></span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--{{ name }}\" disabled>\n            <i class=\"material-icons\"></i>\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Buttons without background</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Basic button</span>\n        </li>\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect color-text--{{ color }}\">\n            Button\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disabled</span>\n        </li>\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button button--colored-{{ color }}\" disabled>\n            Button\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Button with icon</span>\n        </li>\n        <li *ngFor=\"let item of buttonsWithIcons\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect button--colored-{{ item.color }}\">\n            <i class=\"material-icons\">{{ item.icon }}</i>\n            {{ item.action | titlecase }}\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Social</span>\n        </li>\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect button--{{ name }}\">\n            <i class=\"material-icons\"></i>\n            {{ name | titlecase }}\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--5-col-tablet mdl-cell--4-col-phone buttons-fab\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Fab button</h2>\n    </base-card-title>\n    <base-card-body>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Colored FAB</span>\n        </li>\n        <li class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\">\n            <i class=\"material-icons\">add</i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">With ripple</span>\n        </li>\n        <li class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n            <i class=\"material-icons\">add</i>\n          </button>\n        </li>\n      </ul>\n      <ul class=\"mdl-list pull-left\">\n        <li class=\"mdl-list__item\">\n          <span class=\"text-color--gray\">Disable</span>\n        </li>\n        <li class=\"mdl-list__item\">\n          <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" disabled>\n            <i class=\"material-icons\">add</i>\n          </button>\n        </li>\n      </ul>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">How to use</h2>\n    </base-card-title>\n    <base-card-body>\n      <p>\n        To use button with color background, you need to use CSS class naming as the\n        corresponding color in lowercase with prefix <code><b>button--colored-</b></code>.<br>\n        If the color name is composed of more than one world, the words are separated by a dash \"-\".<br>\n        You can see the names of the colors <a href=\"ui-colors.html\">here</a>.\n        <br><br>\n        <i class=\"color-text--teal\">Example: You want to use colored button with color naming \"Teal\". CSS class for this case is <code><b>.button--colored-teal</b></code></i>\n        <br><br><br>\n        To use social button, you need to use CSS class naming as the\n        corresponding social network in lowercase with prefix <code><b>button--</b></code>.\n        <br><br>\n        <i class=\"color-text--teal\">Example: You want to use Facebook button. CSS class for this case is <code><b>.button--facebook</b></code></i>\n      </p>\n    </base-card-body>\n  </base-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/cards/cards.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/cards/cards.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <h3>Basic cards</h3>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Shanghai</h2>\n    </base-card-title>\n    <base-card-body>\n      <small>City in China</small>\n\n      Shanghai, on China’s central coast, is the country's biggest city and a global financial hub.\n      Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings.\n      Across the Huangpu River rises the Pudong district’s futuristic skyline, including\n      632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres.\n      Sprawling Yu Garden has traditional pavilions, towers and ponds.\n      <br><br>\n      <b>Weather:</b> 9°C, Wind NE at 11 km/h, 79% Humidity\n      <br>\n      <b>Local time:</b> Thursday 9:58 PM\n      <br>\n      <b>Population:</b> 24.15 million (2015)\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Moscow</h2>\n    </base-card-title>\n    <base-card-body expanded>\n      <small>Capital of Russia</small>\n      Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital.\n      In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury.\n      Outside its walls is Red Square, Russia's symbolic center. It's home to Lenin’s Mausoleum,\n      the State Historical Museum's comprehensive collection and St. Basil’s Cathedral, known for its colorful,\n      onion-shaped domes.\n      <br><br>\n      <b>Weather:</b> 9°C, Wind W at 26 km/h, 47% Humidity\n      <br>\n      <b>Local time:</b> Thursday 5:13 PM\n      <br>\n      <b>Population:</b> 11.92 million (2012)\n    </base-card-body>\n    <base-card-actions class=\"mdl-card--border\">\n      <a\n        class=\"mdl-button button--colored-orange mdl-js-button mdl-js-ripple-effect\"\n        href=\"https://www.google.by/maps/place/Moscow,+Russia/@55.7494733,37.35232,10z/data=!3m1!4b1!4m5!3m4!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6173\"\n        target=\"_blank\">\n        Show on map\n      </a>\n    </base-card-actions>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">London</h2>\n    </base-card-title>\n    <base-card-body expanded>\n      <small>Capital of England</small>\n      London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.\n      At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey,\n      site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic\n      views of the South Bank cultural complex, and the entire city.\n      <br><br>\n      <b>Weather:</b> 11°C, Wind NE at 31 km/h, 57% Humidity\n      <br>\n      <b>Local time:</b> Thursday 2:22 PM\n      <br>\n      <b>Population:</b> 8.674 million (2015)\n    </base-card-body>\n    <base-card-actions>\n      <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-orange pull-right\"\n         href=\"https://www.google.by/maps/place/London,+UK/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99?sa=X&ved=0ahUKEwig76SihPfSAhVCCpoKHTuzBDsQ8gEIeTAN\"\n         target=\"_blank\">\n        Show on map\n      </a>\n    </base-card-actions>\n    <base-card-menu>\n      <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n        <i class=\"material-icons\">more_vert</i>\n      </button>\n    </base-card-menu>\n  </base-card>\n</div>\n\n\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <h3>Image cards</h3>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Istanbul</h2>\n    </base-card-title>\n    <base-card-body>\n      <small>City in Turkey</small>\n      Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.\n      Its Old City reflects cultural influences of the many empires that once ruled here.\n      In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races,\n      and Egyptian obelisks also remain.\n      The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.\n      <br><br>\n      <b>Weather:</b> 12°C, Wind S at 13 km/h, 71% Humidity\n      <br>\n      <b>Local time:</b> Friday 4:00 PM\n      <br>\n      <b>Population:</b> 14.8 million (Dec 31, 2016)\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Tokyo</h2>\n    </base-card-title>\n    <base-card-body expanded>\n      <small>Capital of Japan</small>\n      Tokyo, officially Tokyo Metropolis, is the capital of Japan and one of its 47 prefectures.\n      The Greater Tokyo Area is the most populous metropolitan area in the world.\n      It is the seat of the Emperor of Japan and the Japanese government.\n      <a class=\"color-text--light-blue\" href=\"https://en.wikipedia.org/wiki/Tokyo\" target=\"_blank\">Wikipedia</a>\n      <br><br>\n      <b>Weather:</b> 5°C, Wind NW at 26 km/h, 54% Humidity\n      <br>\n      <b>Local time:</b> Friday 10:04 PM\n      <br>\n      <b>Population:</b> 13.62 million (Jul 31, 2016)\n    </base-card-body>\n    <base-card-actions class=\"mdl-card--border\">\n      <a class=\"mdl-button button--colored-light-blue mdl-js-button mdl-js-ripple-effect\"\n         href=\"https://www.google.by/maps/place/Tokyo,+Japan/@35.6730185,139.4302008,10z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6894875!4d139.6917064\"\n         target=\"_blank\">\n        Show on map\n      </a>\n    </base-card-actions>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">São Paulo</h2>\n    </base-card-title>\n    <base-card-body expanded>\n      <small>Municipality in Brazil</small>\n      São Paulo, Brazil’s vibrant financial center, is among the world's most populous cities,\n      with numerous cultural institutions and a rich architectural tradition.\n      Its iconic buildings range from its neo-Gothic cathedral and the 1929 Martinelli skyscraper to modernist\n      architect Oscar Niemeyer’s curvy Edifício Copan.\n      The colonial-style Pátio do Colégio church marks where Jesuit priests founded the city in 1554.\n      <br><br>\n      <b>Weather:</b> 24°C, Wind E at 10 km/h, 62% Humidity\n      <br>\n      <b>Local time:</b> Friday 10:05 AM\n      <br>\n      <b>Population:</b> 12.04 million (2016)\n    </base-card-body>\n    <base-card-actions>\n      <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-light-blue pull-right\"\n         href=\"https://www.google.by/maps/place/S%C3%A3o+Paulo,+State+of+S%C3%A3o+Paulo,+Brazil/data=!4m2!3m1!1s0x94ce448183a461d1:0x9ba94b08ff335bae?sa=X&ved=0ahUKEwjQ1pf_g_fSAhVHWSwKHQoNDc0Q8gEIjwEwEQ\"\n         target=\"_blank\">\n        Show on map\n      </a>\n    </base-card-actions>\n    <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n      <i class=\"material-icons\">favorite_border</i>\n    </button>\n    <base-card-menu>\n      <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n        <i class=\"material-icons\">share</i>\n      </button>\n    </base-card-menu>\n  </base-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/colors/colors.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/colors/colors.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"teal\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Teal</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#00bcd4</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"red\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Red</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#f44336</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"green\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Green</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#00d45a</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"gray\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Basic gray</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#444747</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"orange\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Orange</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#ffc107</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"purple\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Purple</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#7726d3</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"light-blue\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Light blue</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#03A9F4</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\n  <base-card class=\"dark-gray\">\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Dark gray</h2>\n    </base-card-title>\n    <base-card-body>\n      <h3>#333434</h3>\n    </base-card-body>\n  </base-card>\n</div>\n\n\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">How to use</h2>\n    </base-card-title>\n    <base-card-body>\n      To use any color, you need to use Sass variable naming as the\n      corresponding color in lowercase with prefix <code>\"color-\"</code>.<br>\n      If the color name is composed of more than one world, the words are separated by a dash \"-\".\n      <br><br>\n      <i class=\"color-text--teal\">Example: You want to use color naming \"Teal\". Sass variable for this color is <code><b>$color-teal</b></code></i>\n    </base-card-body>\n  </base-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/forms.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/forms.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--7-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h5 class=\"mdl-card__title-text text-color--white\">Text fields</h5>\n    </base-card-title>\n    <base-card-body>\n      <form class=\"form form--basic\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone form__article\">\n            <h3 class=\"text-color--smooth-gray\">BASIC INPUT</h3>\n            <div class=\"mdl-textfield mdl-js-textfield full-size\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"first-name\">\n              <label class=\"mdl-textfield__label\" for=\"first-name\">First Name</label>\n            </div>\n            <div class=\"mdl-textfield mdl-js-textfield full-size\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"last-name\">\n              <label class=\"mdl-textfield__label\" for=\"last-name\">Last Name</label>\n            </div>\n            <div class=\"mdl-textfield mdl-js-textfield full-size\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"e-mail\">\n              <label class=\"mdl-textfield__label\" for=\"e-mail\">Email</label>\n            </div>\n          </div>\n          <div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone form__article\">\n            <h3 class=\"text-color--smooth-gray\">INPUT WITH FLOATING LABEL</h3>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"floating-first-name\">\n              <label class=\"mdl-textfield__label\" for=\"floating-first-name\">First Name</label>\n            </div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"floating-last-name\">\n              <label class=\"mdl-textfield__label\" for=\"floating-last-name\">Last Name</label>\n            </div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"floating-e-mail\">\n              <label class=\"mdl-textfield__label\" for=\"floating-e-mail\">Email</label>\n            </div>\n          </div>\n        </div>\n      </form>\n    </base-card-body>\n  </base-card>\n</div>\n\n<div class=\"mdl-cell mdl-cell--5-col-desktop mdl-cell--5-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h5 class=\"mdl-card__title-text text-color--white\">PROFILE INFO</h5>\n    </base-card-title>\n    <base-card-body>\n    <form class=\"form form--basic\">\n      <div class=\"mdl-grid\">\n        <div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone\">\n          <div class=\"profile-image color--smooth-gray profile-image--round\">\n            <img src=\"/assets/images/Bobby.PNG\">\n          </div>\n        </div>\n        <div class=\"mdl-cell mdl-cell--8-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone form__article\">\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"Bob\" id=\"profile-floating-first-name\">\n            <label class=\"mdl-textfield__label\" for=\"profile-floating-first-name\">First Name</label>\n          </div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"Kelso\" id=\"profile-floating-last-name\">\n            <label class=\"mdl-textfield__label\" for=\"profile-floating-last-name\">Last Name</label>\n          </div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"BobbyK@darkboard.io\" id=\"profile-floating-e-mail\">\n            <label class=\"mdl-textfield__label\" for=\"floating-e-mail\">Email</label>\n          </div>\n          <material-angular-select [data]=\"countries\"\n                            [name]=\"'location'\"\n                            [label]=\"'Location'\"\n                            [currentValue]=\"locationValue\"></material-angular-select>\n        </div>\n      </div>\n    </form>\n    </base-card-body>\n  </base-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/icons/icons.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/icons/icons.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <div class=\"ui-icons-title\">\n    <span class=\"text-color--gray\">This is Official Material Design Icons. You can download them directly from the <a target=\"_blank\" href=\"https://material.io/icons/\">Material Design spec.</a></span>\n  </div>\n</div>\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h2 class=\"mdl-card__title-text\">Icons</h2>\n    </base-card-title>\n    <base-card-body>\n      <div *ngFor=\"let section of data\" class=\"section\">\n        <div class=\"text-color--gray section-name\">{{ section.name | titlecase }}</div>\n        <div>\n          <div *ngFor=\"let icon of section.icons\" class=\"itemcontainer\">\n            <div class=\"item\" [ngClass]=\"section.name\">\n              <div class=\"itemBox\" [id]=\"icon\">\n                <i class=\"material-icons\">{{ icon }}</i>\n                <div class=\"caption\">{{ icon.length > 12 ? (icon | slice:0:12) + '...' : icon }}</div>\n              </div>\n              <!-- NOTE: it prevents scrolling -->\n              <!-- <div class=\"mdl-tooltip\" [attr.for]=\"icon\">{{ icon }}</div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </base-card-body>\n  </base-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/right-sidebar/filters/filters.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/right-sidebar/filters/filters.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--12-col\">\n  <material-angular-select [data]=\"languages\"\n                    [name]=\"'language'\"\n                    [label]=\"'Language'\"\n                    [currentValue]=\"currentLanguage\"></material-angular-select>\n</div>\n\n<div class=\"mdl-cell mdl-cell--12-col\">\n  <material-angular-select [data]=\"currencies\"\n                    [name]=\"'currency'\"\n                    [label]=\"'Currency'\"\n                    [currentValue]=\"currentCurrency\"></material-angular-select>\n</div>\n\n<div class=\"mdl-cell mdl-cell--12-col\">\n  <material-angular-select [data]=\"['Male', 'Female']\"\n                    [name]=\"'gender'\"\n                    [label]=\"'Gender'\"\n                    [currentValue]=\"'Male'\"></material-angular-select>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/right-sidebar/right-sidebar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/right-sidebar/right-sidebar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<base-right-sidebar-layout>\n  <base-right-sidebar-content>\n  </base-right-sidebar-content>\n\n  <base-right-sidebar [title]=\"'Filters'\">\n    <app-filters></app-filters>\n  </base-right-sidebar>\n\n</base-right-sidebar-layout>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/tables/tables.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/tables/tables.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h1 class=\"mdl-card__title-text\">Simple table</h1>\n    </base-card-title>\n    <base-card-body class=\"no-padding\">\n      <table class=\"mdl-data-table mdl-js-data-table\">\n        <thead>\n        <tr>\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of simpleTable\">\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\n            <span *ngSwitchCase=\"'read'\" class=\"label label--mini background-color--primary\">Read</span>\n            <span *ngSwitchCase=\"'unread'\" class=\"label label--mini background-color--secondary\">Unread</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </base-card-body>\n  </base-card>\n</div>\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h1 class=\"mdl-card__title-text\">Bordered table</h1>\n    </base-card-title>\n    <base-card-body class=\"no-padding\">\n      <table class=\"mdl-data-table mdl-js-data-table bordered-table\">\n        <thead>\n        <tr>\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of borderedTable\">\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\n            <span *ngSwitchCase=\"'read'\" class=\"label label--mini background-color--primary\">Read</span>\n            <span *ngSwitchCase=\"'unread'\" class=\"label label--mini background-color--secondary\">Unread</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </base-card-body>\n  </base-card>\n</div>\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h1 class=\"mdl-card__title-text\">Stripped table</h1>\n    </base-card-title>\n    <base-card-body class=\"no-padding\">\n      <table class=\"mdl-data-table mdl-js-data-table stripped-table\">\n        <thead>\n        <tr>\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of strippedTable\">\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\n            <span *ngSwitchCase=\"'unavailable'\" class=\"label label--mini color--orange\">Unavailable</span>\n            <span *ngSwitchCase=\"'available'\" class=\"label label--mini background-color--primary\">Available</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </base-card-body>\n  </base-card>\n</div>\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h1 class=\"mdl-card__title-text\">Borderless table</h1>\n    </base-card-title>\n    <base-card-body class=\"no-padding\">\n      <table class=\"mdl-data-table mdl-js-data-table borderless-table\">\n        <thead>\n        <tr>\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of borderlessTable\">\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\n            <span *ngSwitchCase=\"'unavailable'\" class=\"label label--mini color--orange\">Unavailable</span>\n            <span *ngSwitchCase=\"'available'\" class=\"label label--mini background-color--primary\">Available</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </base-card-body>\n  </base-card>\n</div>\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n  <base-card>\n    <base-card-title>\n      <h1 class=\"mdl-card__title-text\">Advanced table</h1>\n      <div class=\"mdl-layout-spacer\"></div>\n      <base-pagination [numPage]=\"numPage\"\n                       [currentPage]=\"currentPage\"\n                       (changePage)=\"changePage($event)\"></base-pagination>\n    </base-card-title>\n    <base-card-body class=\"no-padding\">\n      <table class=\"mdl-data-table mdl-js-data-table sorting-table\">\n        <thead>\n        <tr>\n          <th *ngFor=\"let header of advancedHeaders; let i = index\" class=\"mdl-data-table__cell--non-numeric\"\n              (click)=\"changeSorting(header, i)\">\n            <span>{{ header.name }}</span>\n            <i *ngIf=\"header.sort !== null \" class=\"material-icons sorting\"\n               [class.asc]=\"header.sort === sortOrder.asc\"\n               [class.active]=\"header.sort === sortOrder.asc || header.sort === sortOrder.desc\">sort</i>\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of advancedTable\">\n          <td *ngFor=\"let cell of row.slice(0, 3)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\n          <td class=\"mdl-data-table__cell--non-numeric\">\n            <span *ngFor=\"let genre of row[3]\"\n                  class=\"label label--mini color--{{ genreColors[genre] }}\">{{ genre }}</span>\n          </td>\n          <td *ngFor=\"let cell of row.slice(4, 8)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\n          <td class=\"mdl-data-table__cell--non-numeric\">\n              <span *ngFor=\"let i of Array(row[8])\" class=\"label label--mini label__availability\"\n                    [class.background-color--secondary]=\"row[8] === 1\"\n                    [class.color--orange]=\"row[8] === 2\"\n                    [class.background-color--primary]=\"row[8] === 4\"\n                    [class.color--green]=\"row[8] === 3\"></span>\n            <span *ngFor=\"let i of Array(4 - row[8])\" class=\"label label--mini label__availability\"></span>\n          </td>\n          <td class=\"mdl-data-table__cell--non-numeric\">\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-teal\">Add to\n              cart\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </base-card-body>\n  </base-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/typography/typography.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/typography/typography.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdl-cell mdl-cell--9-col-desktop mdl-cell--9-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">General</h2>\n      </base-card-title>\n      <base-card-body>\n        <span class=\"text-color--gray\">Roboto is the standart typefaces of Material Design style</span>\n        <p>Roboto weight 200 30px</p>\n        <p>Roboto weight 300 30px</p>\n        <p>Roboto weight 400 30px</p>\n        <p>Roboto weight 500 30px</p>\n        <p>Roboto weight 600 30px</p>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Text samples</h2>\n      </base-card-title>\n      <base-card-body>\n      <span class=\"text-color--gray\">SAMPLE TEXT</span>\n      <p>\n        Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.\n        Rationibus reprimique vis an, mei vidit solum sententiae no, rebum blandit eleifend cum id. Id amet mucius aperiri mea.\n        Eu eam audiam utroque gloriatur, cu duis graeci disputationi mea, has an harum nihil blandit.\n        <br><br>\n        Facer cetero est ne, no duo commodo tincidunt scribentur, in quo maiorum iudicabit.\n        Everti liberavisse cu ius. Eam ea antiopam referrentur, probo affert docendi no usu, est no odio perpetua electram.\n        Clita viderer eum ea.\n        Partem democritum qui in. In nec sale choro inermis, et vel audiam philosophia.\n      </p>\n      <span class=\"text-color--gray\">SAMPLE TEXT WITH LEAD BODY</span>\n\n      <h5>Lead body. Has consul possim sadipscing no</h5>\n      <p>\n        Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.\n        Rationibus reprimique vis an, mei vidit solum sententiae no, rebum blandit eleifend cum id. Id amet mucius aperiri mea.\n        Eu eam audiam utroque gloriatur, cu duis graeci disputationi mea, has an harum nihil blandit.\n        <br><br>\n        Facer cetero est ne, no duo commodo tincidunt scribentur, in quo maiorum iudicabit.\n        Everti liberavisse cu ius. Eam ea antiopam referrentur, probo affert docendi no usu, est no odio perpetua electram.\n        Clita viderer eum ea.\n        Partem democritum qui in. In nec sale choro inermis, et vel audiam philosophia.\n      </p>\n      <span class=\"text-color--gray\">COLORED TEXT SAMPLES</span>\n      <p>\n        <span class=\"color-text--red\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\n        <br>\n        <span class=\"color-text--orange\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\n        <br>\n        <span class=\"color-text--teal\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\n        <br>\n        <span class=\"color-text--light-blue\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\n        <br>\n        <span class=\"color-text--purple\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\n        <br>\n        <span class=\"color-text--green\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\n      </p>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Headers</h2>\n      </base-card-title>\n      <base-card-body>\n        <h1>Heading h1</h1>\n        <h2>Heading h2</h2>\n        <h3>Heading h3</h3>\n        <h4>Heading h4</h4>\n        <h5>Heading h5</h5>\n        <h6>Heading h6</h6>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Alignment</h2>\n      </base-card-title>\n      <base-card-body>\n        <div>Left aligned text</div>\n        <div>Center aligned text</div>\n        <div>Right aligned text</div>\n      </base-card-body>\n    </base-card>\n  </div>\n</div>\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Unordered list</h2>\n      </base-card-title>\n      <base-card-body>\n        <ul>\n          <li>Code</li>\n          <li>\n            Eating\n            <ul>\n              <li>Breakfast</li>\n              <li>Lunch</li>\n              <li>Dinner</li>\n            </ul>\n          </li>\n          <li>Sleeping</li>\n          <li>Meditation</li>\n          <li>The fight against evil</li>\n        </ul>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Ordered list</h2>\n      </base-card-title>\n      <base-card-body>\n        <ol>\n          <li>Code</li>\n          <li>\n            Eating\n            <ul>\n              <li>Breakfast</li>\n              <li>Lunch</li>\n              <li>Dinner</li>\n            </ul>\n          </li>\n          <li>Sleeping</li>\n          <li>Meditation</li>\n          <li>The fight against evil</li>\n        </ol>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Unstyled list</h2>\n      </base-card-title>\n      <base-card-body>\n        <ul>\n          <li>Code</li>\n          <li>\n            Eating\n            <ul>\n              <li>Breakfast</li>\n              <li>Lunch</li>\n              <li>Dinner</li>\n            </ul>\n          </li>\n          <li>Sleeping</li>\n          <li>Meditation</li>\n          <li>The fight against evil</li>\n        </ul>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Inline list</h2>\n      </base-card-title>\n      <base-card-body>\n        <ol>\n          <li>Code</li>\n          <li>Eating</li>\n          <li>Sleeping</li>\n        </ol>\n      </base-card-body>\n    </base-card>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\n    <base-card>\n      <base-card-title>\n        <h2 class=\"mdl-card__title-text\">Description list</h2>\n      </base-card-title>\n      <base-card-body>\n        <dl>\n          <dt>Material Design</dt>\n          <dd>\n            Design language developed in 2014 by Google.\n            Expanding upon the \"card\" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts,\n            responsive animations and transitions, padding, and depth effects such as lighting and shadows.\n          </dd>\n          <dt>Material Design Lite</dt>\n          <dd>\n            This library lets you add a Material Design look and feel to your static content websites.\n            It doesn't rely on any JavaScript frameworks or libraries.\n            Optimized for cross-device use, gracefully degrades in older browsers, and offers an experience that is accessible from the get-go.\n          </dd>\n          <dt>Material Dashboard Lite</dt>\n          <dd>\n            First dark dashboard on the Material Design Lite!\n            Material Dashboard Lite admin template is absolutely free for commercial usage theme,\n            that uses google's implementation of material design - Material Design Lite library.\n          </dd>\n        </dl>\n      </base-card-body>\n    </base-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/ui/buttons/buttons.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host h6 {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n:host .mdl-button--icon .material-icons {\n  font-size: 20px;\n}\n:host .mdl-list__item {\n  padding: 8px 16px;\n}\n:host .mdl-card__supporting-text {\n  display: flex;\n  justify-content: space-around;\n}\n:host .buttons-with-icons,\n:host .buttons-social,\n:host .buttons-basic,\n:host .buttons-icons {\n  min-width: 350px;\n}\n:host .buttons-with-icons .mdl-card,\n:host .buttons-social .mdl-card,\n:host .buttons-basic .mdl-card,\n:host .buttons-icons .mdl-card {\n  height: 100%;\n}\n:host .buttons-with-icons .mdl-button:not(.mdl-button--icon),\n:host .buttons-social .mdl-button:not(.mdl-button--icon),\n:host .buttons-basic .mdl-button:not(.mdl-button--icon),\n:host .buttons-icons .mdl-button:not(.mdl-button--icon) {\n  padding: 0 8px;\n  min-width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7QUFESjtBQUlFO0VBQ0UsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBSEo7QUFNRTs7OztFQUlFLGdCQUFBO0FBSko7QUFNSTs7OztFQUNFLFlBQUE7QUFETjtBQUlJOzs7O0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91aS9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGg2IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5tZGwtYnV0dG9uLS1pY29uIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLm1kbC1saXN0X19pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgfVxuXG4gIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG5cbiAgLmJ1dHRvbnMtd2l0aC1pY29ucyxcbiAgLmJ1dHRvbnMtc29jaWFsLFxuICAuYnV0dG9ucy1iYXNpYyxcbiAgLmJ1dHRvbnMtaWNvbnMge1xuICAgIG1pbi13aWR0aDogMzUwcHg7XG5cbiAgICAubWRsLWNhcmQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5tZGwtYnV0dG9uOm5vdCgubWRsLWJ1dHRvbi0taWNvbikge1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICBtaW4td2lkdGg6IDEyNXB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/ui/buttons/buttons.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ButtonsComponent = /** @class */ (function (_super) {
    __extends(ButtonsComponent, _super);
    function ButtonsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiButtons = true;
        _this.colors1 = [
            'light-blue',
            'teal',
            'orange',
            'red',
            'green',
            'purple',
        ];
        _this.colors2 = [
            'light-blue',
            'teal',
            'orange',
            'red',
            'purple',
            'white',
        ];
        _this.actions = [
            'archive',
            'create',
            'drafts',
            'forward',
            'attach',
            'reply',
        ];
        _this.icons1 = [
            'assignment_returned',
            'create',
            'drafts',
            'forward',
            'attach_file',
            'reply',
        ];
        _this.icons2 = [
            'assignment_returned',
            'create',
            'drafts',
            'forward',
            'reply',
            'send',
        ];
        _this.socials = [
            'facebook',
            'twitter',
            'dribbble',
            'behance',
            'linkedin',
            'github',
        ];
        _this.buttonsWithIcons = _this.colors1.map(function (color, i) { return ({ color: color, action: _this.actions[i], icon: _this.icons1[i] }); });
        _this.iconButtons = _this.colors2.map(function (color, i) { return ({ color: color, icon: _this.icons2[i] }); });
        return _this;
    }
    ButtonsComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        uiButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ui-buttons',] }]
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/buttons/buttons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./buttons.component.scss */ "./src/app/pages/ui/buttons/buttons.component.scss")).default]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/buttons/index.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/ui/buttons/index.ts ***!
  \*******************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.component */ "./src/app/pages/ui/buttons/buttons.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return _buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/cards/cards.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666;\n}\n.color--gray {\n  background-color: #444 !important;\n}\n.color--dark-gray {\n  background-color: #333;\n}\n.color--smooth-gray {\n  background-color: #999 !important;\n}\n.text-color--smooth-gray {\n  color: #999 !important;\n}\n.color--red {\n  background-color: #f44336 !important;\n}\n.color-text--red {\n  color: #f44336 !important;\n}\n.color--orange {\n  background-color: #ffc107 !important;\n}\n.color-text--orange {\n  color: #ffc107 !important;\n}\n.color--amber {\n  background-color: #ff9800 !important;\n}\n.color-text--amber {\n  color: #ff9800 !important;\n}\n.color--green {\n  background-color: #00d45a !important;\n}\n.color-text--green {\n  color: #00d45a !important;\n}\n.color--light-blue {\n  background-color: #03a9f4 !important;\n}\n.color-text--light-blue {\n  color: #03a9f4 !important;\n}\n.color--purple {\n  background-color: #7726d3 !important;\n}\n.color-text--purple {\n  color: #7726d3 !important;\n}\n.color--teal {\n  background-color: #00bcd4 !important;\n}\n.color-text--teal {\n  color: #00bcd4 !important;\n}\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n:host .mdl-card {\n  height: 100%;\n}\n:host .mdl-card .mdl-card__actions {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n:host .mdl-button--fab {\n  position: absolute;\n  top: 212px;\n  right: 20px;\n}\n:host .mdl-cell:nth-last-of-type(1) .mdl-card__title, :host .mdl-cell:nth-last-of-type(2) .mdl-card__title, :host .mdl-cell:nth-last-of-type(3) .mdl-card__title {\n  color: #fff;\n  height: 240px;\n  background: transparent no-repeat center;\n  background-size: cover;\n}\n:host .mdl-cell:nth-last-of-type(1) .mdl-card__title .mdl-card__title-text, :host .mdl-cell:nth-last-of-type(2) .mdl-card__title .mdl-card__title-text, :host .mdl-cell:nth-last-of-type(3) .mdl-card__title .mdl-card__title-text {\n  font-size: 40px;\n}\n:host .mdl-cell:nth-last-of-type(1) .mdl-card__title {\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(\"/assets/images/sao_paulo.jpg\");\n}\n:host .mdl-cell:nth-last-of-type(2) .mdl-card__title {\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(\"/assets/images/tokyo.jpg\");\n}\n:host .mdl-cell:nth-last-of-type(3) .mdl-card__title {\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(\"/assets/images/istanbul.jpg\");\n}\n:host small {\n  color: #aaa;\n  display: block;\n  margin-bottom: 15px;\n}\n:host b {\n  color: #fff;\n  line-height: 1.4;\n}\n:host h3 {\n  color: #fff;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24tbGl0ZS9zcmMvX2Z1bmN0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWxpdGUvc3JjL19jb2xvci1kZWZpbml0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9wYWxldHRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VpL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkE7O3VDQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFtQ0EsdUNBQUE7QUFFQTs7Ozs7Ozs7O0NBQUE7QUFhQSxtQ0FBQTtBQUVBOzs7OztFQUFBO0FDdkVBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBLDJDQUFBO0FBaWtCQSxnQkFBQTtBRmpsQkE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUNpRkEsbUNBQUE7QUFHQSwyQ0FBQTtBQThCQSx1Q0FBQTtBQWdCQSx1Q0FBQTtBQUVBLDZDQUFBO0FBa0NBLHlDQUFBO0FBUUEsMENBQUE7QUFNQSwwQ0FBQTtBQUlBLG1DQUFBO0FBcUJBLHlDQUFBO0FBT0EsdUNBQUE7QUFRQSxxQ0FBQTtBQVlBLG9DQUFBO0FBU0Esd0NBQUE7QUFVQSxpQ0FBQTtBQVNBLG1DQUFBO0FBT0EsbUNBQUE7QUFNQSxnQ0FBQTtBQU9BLGdDQUFBO0FBYUEseUNBQUE7QUFJQSxxQ0FBQTtBQUtBLG1DQUFBO0FBU0EsY0FBQTtBQVlBLFdBQUE7QUFZQSxZQUFBO0FBZ0JBLFVBQUE7QUFXQSxTQUFBO0FBS0EsU0FBQTtBQWVBLFdBQUE7QUE2QkEsZ0JBQUE7QUFNQSxXQUFBO0FBRUEsY0FBQTtBQU9BLGNBQUE7QUFNQSxhQUFBO0FBV0EsU0FBQTtBQUVBLG9CQUFBO0FBMEJBLGdCQUFBO0FBS0EsV0FBQTtBQUNBOzs7O0VBQUE7QUFtQkEsY0FBQTtBQVFBLGFBQUE7QUFHQSxVQUFBO0FBVUEsWUFBQTtBQU1BLFNBQUE7QUFxQkEsZUFBQTtBQTZCQSxXQUFBO0FBR0EsYUFBQTtBQU9BLFlBQUE7QUFJQSxTQUFBO0FFM2tCQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdCQSxlQUFBO0FBK01BLFlBQUE7QUE2Q0EsZUFBQTtBQXNCQSxXQUFBO0FEbFNBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBLDJDQUFBO0FBaWtCQSxnQkFBQTtBQWpsQkE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkEsMkNBQUE7QUFpa0JBLGdCQUFBO0FFL2tCQSxtQ0FBQTtBQUlBLDJDQUFBO0FDdUJBO0VBQ0UsV0ExQlk7QUM4TmQ7QURqTUE7RUFDRSxpQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHNCQXRDZ0I7QUMwT2xCO0FEak1BO0VBQ0UsaUNBQUE7QUNvTUY7QURqTUE7RUFDRSxzQkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QUY5UkEsdUNBQUE7QUFHQSx1Q0FBQTtBQUVBLDZDQUFBO0FBb0JBLHlDQUFBO0FBRUEsMENBQUE7QUFFQSwwQ0FBQTtBQUVBLG1DQUFBO0FBd0JBLHlDQUFBO0FBRUEsdUNBQUE7QUFJQSxxQ0FBQTtBQUVBLG9DQUFBO0FBRUEsd0NBQUE7QUFZQSxpQ0FBQTtBQWdCQSxtQ0FBQTtBQUtBLG1DQUFBO0FBSUEsZ0NBQUE7QUFTQSxnQ0FBQTtBQVNBLHlDQUFBO0FBU0EscUNBQUE7QUFHQSxtQ0FBQTtBQUVBLGNBQUE7QUFFQSxXQUFBO0FBR0EsWUFBQTtBQU1BLFVBQUE7QUFJQSxTQUFBO0FBRUEsU0FBQTtBQVFBLFdBQUE7QUFNQSxTQUFBO0FBRUEsZ0JBQUE7QUFFQSxXQUFBO0FBRUEsZ0JBQUE7QUFFQSxnQkFBQTtBQUVBLGFBQUE7QUFLQSxTQUFBO0FBRUEsb0JBQUE7QUFPQSxnQkFBQTtBQUVBLFdBQUE7QUFHQSxjQUFBO0FBRUEsYUFBQTtBQUVBLFVBQUE7QUFJQSxZQUFBO0FBRUEsU0FBQTtBQVdBLGVBQUE7QUFZQSxZQUFBO0FBT0EseUJBQUE7QUFFQSxhQUFBO0FBS0EsVUFBQTtBQUlBLFdBQUE7QUFZQSxrQkFBQTtBQVNBLFFBQUE7QUFHQSxXQUFBO0FFdFJFO0VBQ0UsWUFBQTtBQTZWSjtBQTNWSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUE2Vk47QUF6VkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBMlZKO0FBcFZNO0VBQ0UsV0RYTTtFQ1lOLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FBc1ZSO0FBcFZRO0VBQ0UsZUFBQTtBQXNWVjtBQWpWSTtFQUNFLDROQUNFO0FBa1ZSO0FBOVVJO0VBQ0Usd05BQ0U7QUErVVI7QUEzVUk7RUFDRSwyTkFDRTtBQTRVUjtBQXZVRTtFQUNFLFdEdkNtQjtFQ3dDbkIsY0FBQTtFQUNBLG1CQUFBO0FBeVVKO0FBdFVFO0VBQ0UsV0RoRFU7RUNpRFYsZ0JBQUE7QUF3VUo7QUFyVUU7RUFDRSxXRHJEVTtFQ3NEVixnQkFBQTtBQXVVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuQGZ1bmN0aW9uIHN0cmlwLXVuaXRzKCRudW1iZXIpIHtcbiAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICAgICRDT05URU5UU1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogU1RZTEUgR1VJREUgVkFSSUFCTEVTLS0tLS0tLS0tLS0tLS0tLS0tRGVjbGFyYXRpb25zIG9mIFNhc3MgdmFyaWFibGVzXG4gKiAtLS0tLVR5cG9ncmFwaHlcbiAqIC0tLS0tQ29sb3JzXG4gKiAtLS0tLVRleHRmaWVsZFxuICogLS0tLS1Td2l0Y2hcbiAqIC0tLS0tU3Bpbm5lclxuICogLS0tLS1SYWRpb1xuICogLS0tLS1NZW51XG4gKiAtLS0tLUxpc3RcbiAqIC0tLS0tTGF5b3V0XG4gKiAtLS0tLUljb24gdG9nZ2xlc1xuICogLS0tLS1Gb290ZXJcbiAqIC0tLS0tQ29sdW1uXG4gKiAtLS0tLUNoZWNrYm94XG4gKiAtLS0tLUNhcmRcbiAqIC0tLS0tQnV0dG9uXG4gKiAtLS0tLUFuaW1hdGlvblxuICogLS0tLS1Qcm9ncmVzc1xuICogLS0tLS1CYWRnZVxuICogLS0tLS1TaGFkb3dzXG4gKiAtLS0tLUdyaWRcbiAqIC0tLS0tRGF0YSB0YWJsZVxuICogLS0tLS1EaWFsb2dcbiAqIC0tLS0tU25hY2tiYXJcbiAqIC0tLS0tVG9vbHRpcFxuICogLS0tLS1DaGlwXG4gKlxuICogRXZlbiB0aG91Z2ggYWxsIHZhcmlhYmxlcyBoYXZlIHRoZSBgIWRlZmF1bHRgIGRpcmVjdGl2ZSwgbW9zdCBvZiB0aGVtXG4gKiBzaG91bGQgbm90IGJlIGNoYW5nZWQgYXMgdGhleSBhcmUgZGVwZW5kZW50IG9uZSBhbm90aGVyLiBUaGlzIGNhbiBjYXVzZVxuICogdmlzdWFsIGRpc3RvcnRpb25zIChsaWtlIGFsaWdubWVudCBpc3N1ZXMpIHRoYXQgYXJlIGhhcmQgdG8gdHJhY2sgZG93blxuICogYW5kIGZpeC5cbiAqL1xuXG5cbi8qID09PT09PT09PT0gIFRZUE9HUkFQSFkgID09PT09PT09PT0gKi9cblxuLyogV2UncmUgc3BsaXR0aW5nIGZvbnRzIGludG8gXCJwcmVmZXJyZWRcIiBhbmQgXCJwZXJmb3JtYW5jZVwiIGluIG9yZGVyIHRvIG9wdGltaXplXG4gICBwYWdlIGxvYWRpbmcuIEZvciBpbXBvcnRhbnQgdGV4dCwgc3VjaCBhcyB0aGUgYm9keSwgd2Ugd2FudCBpdCB0byBsb2FkXG4gICBpbW1lZGlhdGVseSBhbmQgbm90IHdhaXQgZm9yIHRoZSB3ZWIgZm9udCBsb2FkLCB3aGVyZWFzIGZvciBvdGhlciBzZWN0aW9ucyxcbiAgIHN1Y2ggYXMgaGVhZGVycyBhbmQgdGl0bGVzLCB3ZSdyZSBPSyB3aXRoIHRoaW5ncyB0YWtpbmcgYSBiaXQgbG9uZ2VyIHRvIGxvYWQuXG4gICBXZSBkbyBoYXZlIHNvbWUgb3B0aW9uYWwgY2xhc3NlcyBhbmQgcGFyYW1ldGVycyBpbiB0aGUgbWl4aW5zLCBpbiBjYXNlIHlvdVxuICAgZGVmaW5pdGVseSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UncmUgdXNpbmcgdGhlIHByZWZlcnJlZCBmb250IGFuZCBkb24ndCBtaW5kXG4gICB0aGUgcGVyZm9ybWFuY2UgaGl0LlxuICAgV2Ugc2hvdWxkIGJlIGFibGUgdG8gaW1wcm92ZSBvbiB0aGlzIG9uY2UgQ1NTIEZvbnQgTG9hZGluZyBMMyBiZWNvbWVzIG1vcmVcbiAgIHdpZGVseSBhdmFpbGFibGUuXG4qL1xuJHByZWZlcnJlZF9mb250OiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kcGVyZm9ybWFuY2VfZm9udDogJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENPTE9SUyAgPT09PT09PT09PSAqL1xuXG4vKipcbipcbiogTWF0ZXJpYWwgZGVzaWduIGNvbG9yIHBhbGV0dGVzLlxuKiBAc2VlIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS9jb2xvci5odG1sXG4qXG4qKi9cblxuQGltcG9ydCBcImNvbG9yLWRlZmluaXRpb25zXCI7XG5AaW1wb3J0IFwiZnVuY3Rpb25zXCI7XG5cbi8qID09PT09PT09PT0gIElNQUdFUyAgPT09PT09PT09PSAqL1xuJGltYWdlX3BhdGg6ICcvaW1hZ2VzJyAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgQ29sb3IgJiBUaGVtZXMgID09PT09PT09PT0gKi9cblxuLy8gRGVmaW5lIHdoZXRoZXIgaW5kaXZpZHVhbCBjb2xvciBwYWxldHRlIGl0ZW1zIHNob3VsZCBoYXZlIGNsYXNzZXMgY3JlYXRlZC5cbi8vIFNldHRpbmcgdGhpcyB0byB0cnVlIHdpbGwgcmVtb3ZlIGluZGl2aWR1YWwgY29sb3IgY2xhc3NlcyBmb3IgZWFjaCBjb2xvciBpbiB0aGUgcGFsZXR0ZXMuXG4vLyBUbyBpbXByb3ZlIG92ZXJhbGwgcGVyZm9ybWFuY2UgKGFzc3VtaW5nIHRoZXkgYXJlbid0IHVzZWQpIGJ5OlxuLy8gKiBTYXZpbmcgc2VydmVyIGJhbmR3aWR0aCBzZW5kaW5nIHRoZSBleHRyYSBjbGFzc2VzXG4vLyAqIFNhdmUgY2xpZW50IGNvbXB1dGF0aW9uIGFnYWluc3QgdGhlIGNsYXNzZXNcbi8vIGl0IGlzIFJFQ09NTUVOREVEIHlvdSBzZXQgdGhpcyB0byB0cnVlLlxuJHRyaW0tY29sb3ItY2xhc3NlczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFVzZSBjb2xvciBwcmltYXJpbHkgZm9yIGVtcGhhc2lzLiBDaG9vc2UgY29sb3JzIHRoYXQgZml0IHdpdGhcbi8vIHlvdXIgYnJhbmQgYW5kIHByb3ZpZGUgZ29vZCBjb250cmFzdCBiZXR3ZWVuIHZpc3VhbCBjb21wb25lbnRzLlxuJGNvbG9yLXByaW1hcnk6ICRwYWxldHRlLWluZGlnby01MDAgIWRlZmF1bHQ7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAkcGFsZXR0ZS1pbmRpZ28tNzAwICFkZWZhdWx0O1xuJGNvbG9yLWFjY2VudDogJHBhbGV0dGUtcGluay1BMjAwICFkZWZhdWx0O1xuXG4vLyBPdXIgcHJpbWFyeSBpcyBkYXJrLCBzbyB1c2UgJGNvbG9yLWRhcmstY29udHJhc3QgZm9yIG92ZXJsYWlkIHRleHQuXG4kY29sb3ItcHJpbWFyeS1jb250cmFzdDogJGNvbG9yLWRhcmstY29udHJhc3QgIWRlZmF1bHQ7XG4vLyBPdXIgYWNjZW50IGlzIGRhcmssIHNvIHVzZSAkY29sb3ItZGFyay1jb250cmFzdCBmb3Igb3ZlcmxhaWQgdGV4dC5cbiRjb2xvci1hY2NlbnQtY29udHJhc3Q6ICRjb2xvci1kYXJrLWNvbnRyYXN0ICFkZWZhdWx0O1xuXG4vLyBSZXBsYWNlIGFsbCBjb2xvcnMgd2l0aCBwbGFjZWhvbGRlcnMgaWYgd2UncmUgZ2VuZXJhdGluZyBhIHRlbXBsYXRlLlxuQGlmICRzdHlsZWd1aWRlLWdlbmVyYXRlLXRlbXBsYXRlID09IHRydWUge1xuICAkY29sb3ItcHJpbWFyeTogJyRjb2xvci1wcmltYXJ5JztcbiAgJGNvbG9yLXByaW1hcnktZGFyazogJyRjb2xvci1wcmltYXJ5LWRhcmsnO1xuICAkY29sb3ItYWNjZW50OiAnJGNvbG9yLWFjY2VudCc7XG4gICRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAnJGNvbG9yLXByaW1hcnktY29udHJhc3QnO1xuICAkY29sb3ItYWNjZW50LWNvbnRyYXN0OiAnJGNvbG9yLWFjY2VudC1jb250cmFzdCc7XG59XG5cbi8qID09PT09PT09PT0gIFR5cG9ncmFwaHkgID09PT09PT09PT0gKi9cblxuLy8gV2UgdXNlIHRoZSBmb2xsb3dpbmcgZGVmYXVsdCBjb2xvciBzdHlsZXM6IHRleHQtY29sb3ItcHJpbWFyeSBhbmRcbi8vIHRleHQtY29sb3Itc2Vjb25kYXJ5LiBGb3IgbGlnaHQgdGhlbWVzLCB1c2UgdGV4dC1jb2xvci1wcmltYXJ5LWludmVyc2Vcbi8vIGFuZCB0ZXh0LWNvbG9yLXNlY29uZGFyeS1pbnZlcnNlLlxuXG4kdGV4dC1jb2xvci1wcmltYXJ5OiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJHRleHQtbGluay1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcblxuLy8gRGVmaW5lIHdoZXRoZXIgdG8gdGFyZ2V0IGVsZW1lbnRzIGRpcmVjdGx5IGZvciB0eXBvZ3JhcGhpYyBlbmhhbmNlbWVudHMuXG4vLyBUdXJuaW5nIHRoaXMgb2ZmIG1lYW5zIHlvdSBuZWVkIHRvIHVzZSBtZGwtKiBjbGFzc2VzIG1vcmUgb2Z0ZW4uXG4vLyBPdGhlciBjb21wb25lbnRzIG1heSBhbHNvIGZhaWwgdG8gYWRoZXJlIHRvIE1EIHdpdGhvdXQgdGhlc2UgcnVsZXMuXG4vLyBJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB5b3UgbGVhdmUgdGhpcyBhcyB0cnVlLlxuXG4kdGFyZ2V0LWVsZW1lbnRzLWRpcmVjdGx5OiB0cnVlICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDb21wb25lbnRzICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFN0YW5kYXJkIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuLy8gRGVmYXVsdCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1wcmltYXJ5LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNTAwfSwgMC4yMClcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1ibGFja30pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1ob3Zlci1jb2xvcjogJGJ1dHRvbi1wcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xuJGJ1dHRvbi1hY3RpdmUtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JHBhbGV0dGUtZ3JleS01MDB9LCAwLjQwKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8vIENvbG9yZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1zZWNvbmRhcnktY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24taG92ZXItY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tYWN0aXZlLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWZvY3VzLWNvbG9yLWFsdDogJGJ1dHRvbi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuLy8gUmlwcGxlIGNvbG9yIGZvciBjb2xvcmVkIHJhaXNlZCBidXR0b25zLlxuJGJ1dHRvbi1yaXBwbGUtY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1kaXNhYmxlZDogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yLWRpc2FibGVkOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuXG4vLyBGQUIgY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24tZmFiLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLWhvdmVyLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLWFjdGl2ZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWZhYi10ZXh0LWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLXJpcHBsZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50LWNvbnRyYXN0fSlcIikgIWRlZmF1bHQ7XG5cbi8vIEljb24gYnV0dG9uIGNvbG9ycyBhbmQgc2l6ZXMuXG4kYnV0dG9uLWljb24tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTcwMH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1pY29uLWZvY3VzLWNvbG9yOiAkYnV0dG9uLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBJY29uIFRvZ2dsZXMgID09PT09PT09PT0gKi9cblxuJGljb24tdG9nZ2xlLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS03MDB9KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1mb2N1cy1jb2xvcjogJGJ1dHRvbi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1jaGVja2VkLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1jaGVja2VkLWZvY3VzLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kaWNvbi10b2dnbGUtZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFJhZGlvIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuJHJhZGlvLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRyYWRpby1vZmYtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kcmFkaW8tZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFJpcHBsZSBlZmZlY3QgID09PT09PT09PT0gKi9cblxuJHJpcHBsZS1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1saWdodC1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBMYXlvdXQgID09PT09PT09PT0gKi9cblxuJGxheW91dC1uYXYtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuXG4vLyBEcmF3ZXJcbiRsYXlvdXQtZHJhd2VyLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS01MH0pXCIpICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYm9yZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktODAwfSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItbmF2aWdhdGlvbi1saW5rLWFjdGl2ZS1iYWNrZ3JvdW5kOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItbGlnaHQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gSGVhZGVyXG4kbGF5b3V0LWhlYWRlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLW5hdi1ob3Zlci1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skcGFsZXR0ZS1ncmV5LTcwMH0sIDAuNilcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci10YWItdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0sIDAuNilcIikgIWRlZmF1bHQ7XG5cbi8vIFRhYnNcbiRsYXlvdXQtaGVhZGVyLXRhYi1oaWdobGlnaHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENvbnRlbnQgVGFicyAgPT09PT09PT09PSAqL1xuXG4kdGFiLWhpZ2hsaWdodC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kdGFiLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJHRhYi1ib3JkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDaGVja2JveGVzICA9PT09PT09PT09ICovXG5cbiRjaGVja2JveC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtb2ZmLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuNTQpXCIpICFkZWZhdWx0O1xuJGNoZWNrYm94LWRpc2FibGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuJGNoZWNrYm94LWZvY3VzLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtaW1hZ2UtcGF0aDogJGltYWdlX3BhdGg7XG5cbi8qID09PT09PT09PT0gIFN3aXRjaGVzICA9PT09PT09PT09ICovXG5cbiRzd2l0Y2gtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1mYWRlZC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeX0sIDAuMjYpXCIpICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi1jb2xvcjogJHN3aXRjaC1jb2xvciAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnl9LCAwLjUpXCIpICFkZWZhdWx0O1xuXG4kc3dpdGNoLW9mZi10aHVtYi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTB9KVwiKSAhZGVmYXVsdDtcbiRzd2l0Y2gtb2ZmLXRyYWNrLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1kaXNhYmxlZC10aHVtYi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG4kc3dpdGNoLWRpc2FibGVkLXRyYWNrLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBTcGlubmVyICA9PT09PT09PT09ICovXG5cbiRzcGlubmVyLWNvbG9yLTE6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ibHVlLTQwMH0pXCIpICFkZWZhdWx0O1xuJHNwaW5uZXItY29sb3ItMjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXJlZC01MDB9KVwiKSAhZGVmYXVsdDtcbiRzcGlubmVyLWNvbG9yLTM6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS15ZWxsb3ctNjAwfSlcIikgIWRlZmF1bHQ7XG4kc3Bpbm5lci1jb2xvci00OiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JlZW4tNTAwfSlcIikgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXNpbmdsZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFRleHQgZmllbGRzICA9PT09PT09PT09ICovXG5cbiRpbnB1dC10ZXh0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtbGFiZWwtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1ib3R0b20tYm9yZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuJGlucHV0LXRleHQtaGlnaGxpZ2h0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LWRpc2FibGVkLWNvbG9yOiAkaW5wdXQtdGV4dC1ib3R0b20tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZGlzYWJsZWQtdGV4dC1jb2xvcjogJGlucHV0LXRleHQtbGFiZWwtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1lcnJvci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXJlZC1BNzAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENhcmQgID09PT09PT09PT0gKi9cblxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci13aGl0ZX0pXCIpICFkZWZhdWx0O1xuJGNhcmQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1ibGFja30pXCIpICFkZWZhdWx0O1xuJGNhcmQtaW1hZ2UtcGxhY2Vob2xkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjEpICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFNsaWRlcnMgPT09PT09PT09PSAqL1xuXG4kcmFuZ2UtYmctY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHJhbmdlLWZhZGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtYmctZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gUHJvZ3Jlc3MgPT09PT09PT09PSAqL1xuJHByb2dyZXNzLW1haW4tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLXNlY29uZGFyeS1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0sIDAuNylcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZmFsbGJhY2stYnVmZmVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5LWNvbnRyYXN0fSwgMC45KVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1pbWFnZS1wYXRoOiAkaW1hZ2VfcGF0aDtcblxuLyogPT09PT09PT09PSAgTGlzdCA9PT09PT09PT09ICovXG5cbiRsaXN0LW1haW4tdGV4dC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJGxpc3Qtc3VwcG9ydGluZy10ZXh0LXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kbGlzdC1pY29uLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS02MDB9KVwiKSAhZGVmYXVsdDtcbiRsaXN0LWF2YXRhci1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIEl0ZW0gPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IEl0ZW0gQ29sb3JzXG4kZGVmYXVsdC1pdGVtLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC44NylcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLW91dGxpbmUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTQwMH0pXCIpICFkZWZhdWx0O1xuJGRlZmF1bHQtaXRlbS1ob3Zlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktMjAwfSlcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLWZvY3VzLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0yMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tZGl2aWRlci1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZWQgQnV0dG9uIENvbG9yc1xuJGRpc2FibGVkLWl0ZW0tdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIERyb3Bkb3duIG1lbnUgPT09PT09PT09PSAqL1xuXG4kZGVmYXVsdC1kcm9wZG93bi1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci13aGl0ZX0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBUb29sdGlwcyAgPT09PT09PT09PSAqL1xuXG4kdG9vbHRpcC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXdoaXRlfSlcIikgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNzAwfSwgMC45KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgRm9vdGVyICA9PT09PT09PT09ICovXG5cbiRmb290ZXItYmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTgwMH0pXCIpICFkZWZhdWx0O1xuJGZvb3Rlci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTAwfSlcIikgIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuJGZvb3Rlci1idXR0b24tZmlsbC1jb2xvcjogJGZvb3Rlci1jb2xvciAhZGVmYXVsdDtcbiRmb290ZXItdW5kZXJsaW5lLWNvbG9yOiAkZm9vdGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8qIFRFWFRGSUVMRCAqL1xuXG4kaW5wdXQtdGV4dC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC13aWR0aDogMTAwJSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXBhZGRpbmc6IDRweCAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXZlcnRpY2FsLXNwYWNpbmc6IDIwcHggIWRlZmF1bHQ7XG5cbiRpbnB1dC10ZXh0LWJ1dHRvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZmxvYXRpbmctbGFiZWwtZm9udHNpemU6IDEycHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1leHBhbmRhYmxlLWljb24tdG9wOiAxNnB4ICFkZWZhdWx0O1xuXG5cbi8qIFNXSVRDSCAqL1xuXG4kc3dpdGNoLWxhYmVsLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRzd2l0Y2gtbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJHN3aXRjaC10cmFjay1oZWlnaHQ6IDE0cHggIWRlZmF1bHQ7XG4kc3dpdGNoLXRyYWNrLWxlbmd0aDogMzZweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdGh1bWItc2l6ZTogMjBweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stdG9wOiAoJHN3aXRjaC1sYWJlbC1oZWlnaHQgLSAkc3dpdGNoLXRyYWNrLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi10b3A6ICgkc3dpdGNoLWxhYmVsLWhlaWdodCAtICRzd2l0Y2gtdGh1bWItc2l6ZSkgLyAyICFkZWZhdWx0O1xuJHN3aXRjaC1yaXBwbGUtc2l6ZTogJHN3aXRjaC1sYWJlbC1oZWlnaHQgKiAyICFkZWZhdWx0O1xuJHN3aXRjaC1oZWxwZXItc2l6ZTogOHB4ICFkZWZhdWx0O1xuXG4vKiBTUElOTkVSICovXG5cbiRzcGlubmVyLXNpemU6IDI4cHggIWRlZmF1bHQ7XG4kc3Bpbm5lci1zdHJva2Utd2lkdGg6IDNweCAhZGVmYXVsdDtcblxuLy8gQW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwLlxuJHNwaW5uZXItYXJjLXNpemU6IDI3MGRlZyAhZGVmYXVsdDtcbi8vIFRpbWUgaXQgdGFrZXMgdG8gZXhwYW5kIGFuZCBjb250cmFjdCBhcmMuXG4kc3Bpbm5lci1hcmMtdGltZTogMTMzM21zICFkZWZhdWx0O1xuLy8gSG93IG11Y2ggdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBhcmMgc2hvdWxkIHJvdGF0ZSBlYWNoIHRpbWUuXG4kc3Bpbm5lci1hcmMtc3RhcnQtcm90OiAyMTZkZWcgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLWR1cmF0aW9uOiAzNjAgKiAkc3Bpbm5lci1hcmMtdGltZSAvIChcbiAgICBzdHJpcC11bml0cygkc3Bpbm5lci1hcmMtc3RhcnQtcm90ICsgKDM2MGRlZyAtICRzcGlubmVyLWFyYy1zaXplKSkpO1xuXG5cbi8qIFJBRElPICovXG5cbiRyYWRpby1sYWJlbC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kcmFkaW8tbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJHJhZGlvLWJ1dHRvbi1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJHJhZGlvLWlubmVyLW1hcmdpbjogJHJhZGlvLWJ1dHRvbi1zaXplIC8gNDtcbiRyYWRpby1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4kcmFkaW8tdG9wLW9mZnNldDogKCRyYWRpby1sYWJlbC1oZWlnaHQgLSAkcmFkaW8tYnV0dG9uLXNpemUpIC8gMjtcbiRyYWRpby1yaXBwbGUtc2l6ZTogNDJweCAhZGVmYXVsdDtcblxuXG4vKiBNRU5VICovXG5cbiRtZW51LWV4cGFuZC1kdXJhdGlvbjogMC4zcyAhZGVmYXVsdDtcbiRtZW51LWZhZGUtZHVyYXRpb246IDAuMnMgIWRlZmF1bHQ7XG5cbi8qIExJU1QgKi9cblxuJGxpc3QtYm9yZGVyOiA4cHggIWRlZmF1bHQ7XG4kbGlzdC1taW4taGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJGxpc3QtbWluLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kbGlzdC1ib3R0b20tcGFkZGluZzogMjBweCAhZGVmYXVsdDtcbiRsaXN0LWF2YXRhci10ZXh0LWxlZnQtZGlzdGFuY2U6IDcycHggIWRlZmF1bHQ7XG4kbGlzdC1pY29uLXRleHQtbGVmdC1kaXN0YW5jZTogNzJweCAhZGVmYXVsdDtcblxuJGxpc3QtYXZhdGFyLXNpemU6IDQwcHggIWRlZmF1bHQ7XG4kbGlzdC1pY29uLXNpemU6IDI0cHggIWRlZmF1bHQ7XG5cbiRsaXN0LXR3by1saW5lLWhlaWdodDogNzJweCAhZGVmYXVsdDtcbiRsaXN0LXRocmVlLWxpbmUtaGVpZ2h0OiA4OHB4ICFkZWZhdWx0O1xuXG4vKiBMQVlPVVQgKi9cblxuJGxheW91dC1kcmF3ZXItbmFycm93OiAyNDBweCAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLXdpZGU6IDQ1NnB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItd2lkdGg6ICRsYXlvdXQtZHJhd2VyLW5hcnJvdyAhZGVmYXVsdDtcblxuJGxheW91dC1oZWFkZXItaWNvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGxheW91dC1zY3JlZW4tc2l6ZS10aHJlc2hvbGQ6IDEwMjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLWljb24tbWFyZ2luOiAyNHB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYnV0dG9uLW1vYmlsZS1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYnV0dG9uLWRlc2t0b3Atc2l6ZTogNDhweCAhZGVmYXVsdDtcblxuJGxheW91dC1oZWFkZXItbW9iaWxlLXJvdy1oZWlnaHQ6IDU2cHggIWRlZmF1bHQ7XG4kbGF5b3V0LW1vYmlsZS1oZWFkZXItaGVpZ2h0OiAkbGF5b3V0LWhlYWRlci1tb2JpbGUtcm93LWhlaWdodDtcbiRsYXlvdXQtaGVhZGVyLWRlc2t0b3Atcm93LWhlaWdodDogNjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtZGVza3RvcC1oZWFkZXItaGVpZ2h0OiAkbGF5b3V0LWhlYWRlci1kZXNrdG9wLXJvdy1oZWlnaHQ7XG5cbiRsYXlvdXQtaGVhZGVyLWRlc2t0b3AtYmFzZWxpbmU6IDgwcHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtYmFzZWxpbmU6IDcycHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtaW5kZW50OiAxNnB4ICFkZWZhdWx0O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1pbmRlbnQ6IDQwcHggIWRlZmF1bHQ7XG5cbiRsYXlvdXQtdGFiLWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWJhci1oZWlnaHQ6IDQ4cHggIWRlZmF1bHQ7XG4kbGF5b3V0LXRhYi1tb2JpbGUtcGFkZGluZzogMTJweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWRlc2t0b3AtcGFkZGluZzogMjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWhpZ2hsaWdodC10aGlja25lc3M6IDJweCAhZGVmYXVsdDtcblxuXG4vKiBJQ09OIFRPR0dMRSAqL1xuXG4kaWNvbi10b2dnbGUtc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kaWNvbi10b2dnbGUtcmlwcGxlLXNpemU6IDM2cHggIWRlZmF1bHQ7XG5cbi8qIEZPT1RFUiAqL1xuXG4vKm1lZ2EtZm9vdGVyKi9cbiRmb290ZXItbWluLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kZm9vdGVyLXBhZGRpbmctc2lkZXM6IDQwcHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGZvb3Rlci1oZWFkaW5nLWxpbmUtaGVpZ2h0OiAoMS43ICogJGZvb3Rlci1oZWFkaW5nLWZvbnQtc2l6ZSkgIWRlZmF1bHQ7XG4kZm9vdGVyLWJ0bi1zaXplOiAzNnB4ICAhZGVmYXVsdDtcblxuLyptaW5pLWZvb3RlciovXG4kcGFkZGluZzogMTZweCAhZGVmYXVsdDtcbiRmb290ZXItaGVhZGluZy1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctbGluZS1oZWlnaHQ6ICgxLjUgKiAkZm9vdGVyLWhlYWRpbmctZm9udC1zaXplKSAhZGVmYXVsdDtcbiRmb290ZXItYnRuLXNpemU6IDM2cHggIWRlZmF1bHQ7XG5cbi8qIENIRUNLQk9YICovXG5cbiRjaGVja2JveC1sYWJlbC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LWJ1dHRvbi1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LWlubmVyLW1hcmdpbjogMnB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbiRjaGVja2JveC10b3Atb2Zmc2V0OlxuKCRjaGVja2JveC1sYWJlbC1oZWlnaHQgLSAkY2hlY2tib3gtYnV0dG9uLXNpemUgLSAkY2hlY2tib3gtaW5uZXItbWFyZ2luKSAvIDI7XG4kY2hlY2tib3gtcmlwcGxlLXNpemU6ICRjaGVja2JveC1sYWJlbC1oZWlnaHQgKiAxLjU7XG5cbi8qIENBUkQgKi9cblxuLyogQ2FyZCBkaW1lbnNpb25zICovXG4kY2FyZC13aWR0aDogMzMwcHggIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6IDIwMHB4ICFkZWZhdWx0O1xuJGNhcmQtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGNhcmQtdmVydGljYWwtcGFkZGluZzogMTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtcGVyc3BlY3RpdmUtb3JpZ2luLXg6IDE2NXB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtcGVyc3BlY3RpdmUtb3JpZ2luLXk6IDU2cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXRpdGxlLXRyYW5zZm9ybS1vcmlnaW4teDogMTY1cHggIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS10cmFuc2Zvcm0tb3JpZ2luLXk6IDU2cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXRpdGxlLXRleHQtdHJhbnNmb3JtLW9yaWdpbi14OiAxNDlweCAhZGVmYXVsdDtcbiRjYXJkLXRpdGxlLXRleHQtdHJhbnNmb3JtLW9yaWdpbi15OiA0OHB4ICFkZWZhdWx0O1xuXG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGNhcmQtc3VwcG9ydGluZy10ZXh0LWxpbmUtaGVpZ2h0OiAxOHB4ICFkZWZhdWx0O1xuXG4kY2FyZC1hY3Rpb25zLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtdGV4dC1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGNhcmQtei1pbmRleDogMSAhZGVmYXVsdDtcblxuLyogQ292ZXIgaW1hZ2UgKi9cbiRjYXJkLWNvdmVyLWltYWdlLWhlaWdodDogMTg2cHggIWRlZmF1bHQ7XG4kY2FyZC1iYWNrZ3JvdW5kLWltYWdlLXVybDogJycgIWRlZmF1bHQ7XG5cblxuLyogQlVUVE9OICovXG4vKipcbiAqXG4gKiBEaW1lbnNpb25zXG4gKlxuICovXG4kYnV0dG9uLW1pbi13aWR0aDogNjRweCAhZGVmYXVsdDtcbiRidXR0b24taGVpZ2h0OiAzNnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1tYXJnaW46IDRweCAhZGVmYXVsdDtcbiRidXR0b24tYm9yZGVyLXJhZGl1czogMnB4ICFkZWZhdWx0O1xuXG4kYnV0dG9uLWZhYi1zaXplOiA1NnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItc2l6ZS1taW5pOiA0MHB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuXG4kYnV0dG9uLWljb24tc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRidXR0b24taWNvbi1zaXplLW1pbmk6IDI0cHggIWRlZmF1bHQ7XG5cblxuLyogQU5JTUFUSU9OICovXG4kYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW46IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kYW5pbWF0aW9uLWN1cnZlLWxpbmVhci1vdXQtc2xvdy1pbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LWxpbmVhci1pbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRhbmltYXRpb24tY3VydmUtZGVmYXVsdDogJGFuaW1hdGlvbi1jdXJ2ZS1mYXN0LW91dC1zbG93LWluICFkZWZhdWx0O1xuXG5cbi8qIFBST0dSRVNTICovXG4kYmFyLWhlaWdodDogNHB4ICFkZWZhdWx0O1xuXG4vKiBCQURHRSAqL1xuJGJhZGdlLWZvbnQtc2l6ZTogMTJweCAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvci1pbnZlcnNlOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuJGJhZGdlLWJhY2tncm91bmQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYmFkZ2UtYmFja2dyb3VuZC1pbnZlcnNlOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9LDAuMilcIikgIWRlZmF1bHQ7XG4kYmFkZ2Utc2l6ZSA6IDIycHggIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZzogMnB4ICFkZWZhdWx0O1xuJGJhZGdlLW92ZXJsYXA6IDEycHggIWRlZmF1bHQ7XG5cbi8qIFNIQURPV1MgKi9cblxuJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eTogMC4xMiAhZGVmYXVsdDtcblxuLyogR1JJRCAqL1xuXG4kZ3JpZC1kZXNrdG9wLWNvbHVtbnM6IDEyICFkZWZhdWx0O1xuJGdyaWQtZGVza3RvcC1ndXR0ZXI6IDE2cHggIWRlZmF1bHQ7XG4kZ3JpZC1kZXNrdG9wLW1hcmdpbjogMTZweCAhZGVmYXVsdDtcblxuJGdyaWQtZGVza3RvcC1icmVha3BvaW50OiA4NDBweCAhZGVmYXVsdDtcblxuJGdyaWQtdGFibGV0LWNvbHVtbnM6IDggIWRlZmF1bHQ7XG4kZ3JpZC10YWJsZXQtZ3V0dGVyOiAkZ3JpZC1kZXNrdG9wLWd1dHRlciAhZGVmYXVsdDtcbiRncmlkLXRhYmxldC1tYXJnaW46ICRncmlkLWRlc2t0b3AtbWFyZ2luICFkZWZhdWx0O1xuXG4kZ3JpZC10YWJsZXQtYnJlYWtwb2ludDogNDgwcHggIWRlZmF1bHQ7XG5cbiRncmlkLXBob25lLWNvbHVtbnM6IDQgIWRlZmF1bHQ7XG4kZ3JpZC1waG9uZS1ndXR0ZXI6ICRncmlkLWRlc2t0b3AtZ3V0dGVyICFkZWZhdWx0O1xuJGdyaWQtcGhvbmUtbWFyZ2luOiAkZ3JpZC1kZXNrdG9wLW1hcmdpbiAhZGVmYXVsdDtcblxuJGdyaWQtY2VsbC1kZWZhdWx0LWNvbHVtbnM6ICRncmlkLXBob25lLWNvbHVtbnMgIWRlZmF1bHQ7XG4kZ3JpZC1tYXgtY29sdW1uczogJGdyaWQtZGVza3RvcC1jb2x1bW5zICFkZWZhdWx0O1xuXG4vKiBEQVRBIFRBQkxFICovXG5cbiRkYXRhLXRhYmxlLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1mb250LXNpemU6IDEycHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItc29ydC1pY29uLXNpemU6IDE2cHggIWRlZmF1bHQ7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci1jb2xvcjogcmdiYSgjMDAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1zb3J0ZWQtY29sb3I6IHJnYmEoIzAwMCwgMC44NykgIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItc29ydGVkLWljb24taG92ZXItY29sb3I6IHJnYmEoIzAwMCwgMC4yNikgIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yOiByZ2JhKCMwMDAsIDAuMTIpICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1ob3Zlci1jb2xvcjogI2VlZWVlZSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLXNlbGVjdGlvbi1jb2xvcjogI2UwZTBlMCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtZGl2aWRlcnM6IDFweCBzb2xpZCAkZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1yb3ctaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtbGFzdC1yb3ctaGVpZ2h0OiA1NnB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtaGVhZGVyLWhlaWdodDogNTZweCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmc6IDM2cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jb2x1bW4tcGFkZGluZzogJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmcgLyAyO1xuXG4kZGF0YS10YWJsZS1jYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jYXJkLXRpdGxlLXRvcDogMjBweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWNhcmQtcGFkZGluZzogMjRweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWJ1dHRvbi1wYWRkaW5nLXJpZ2h0OiAxNnB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtY2VsbC10b3A6ICRkYXRhLXRhYmxlLWNhcmQtcGFkZGluZyAvIDI7XG5cbi8qIERJQUxPRyAqL1xuJGRpYWxvZy1jb250ZW50LWNvbG9yOiAkY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjtcblxuLyogU05BQ0tCQVIgKi9cblxuLy8gSGFyZCBjb2RlZCBzaW5jZSB0aGUgY29sb3IgaXMgbm90IHByZXNlbnQgaW4gYW55IHBhbGV0dGUuXG4kc25hY2tiYXItYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhZGVmYXVsdDtcbiRzbmFja2Jhci10YWJsZXQtYnJlYWtwb2ludDogJGdyaWQtdGFibGV0LWJyZWFrcG9pbnQ7XG4kc25hY2tiYXItYWN0aW9uLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuXG4vKiBUT09MVElQICovXG4kdG9vbHRpcC1mb250LXNpemU6IDEwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1mb250LXNpemUtbGFyZ2U6IDE0cHggIWRlZmF1bHQ7XG5cbi8qIENISVAgKi9cbiRjaGlwLWJnLWNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMikgIWRlZmF1bHQ7XG4kY2hpcC1iZy1hY3RpdmUtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KSAhZGVmYXVsdDtcbiRjaGlwLWhlaWdodDogMzJweCAhZGVmYXVsdDtcbiRjaGlwLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDsgXG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiA9PT09PT09PT09ICBDb2xvciBQYWxldHRlcyAgPT09PT09PT09PSAqL1xuXG4vLyBDb2xvciBvcmRlcjogNTAsIDEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDAsIEExMDAsIEEyMDAsXG4vLyBBNDAwLCBBNzAwLlxuXG4kcGFsZXR0ZS1yZWQ6XG5cIjI1NSwyMzUsMjM4XCJcblwiMjU1LDIwNSwyMTBcIlxuXCIyMzksMTU0LDE1NFwiXG5cIjIyOSwxMTUsMTE1XCJcblwiMjM5LDgzLDgwXCJcblwiMjQ0LDY3LDU0XCJcblwiMjI5LDU3LDUzXCJcblwiMjExLDQ3LDQ3XCJcblwiMTk4LDQwLDQwXCJcblwiMTgzLDI4LDI4XCJcblwiMjU1LDEzOCwxMjhcIlxuXCIyNTUsODIsODJcIlxuXCIyNTUsMjMsNjhcIlxuXCIyMTMsMCwwXCI7XG5cbiRwYWxldHRlLXJlZC01MDogbnRoKCRwYWxldHRlLXJlZCwgMSk7XG4kcGFsZXR0ZS1yZWQtMTAwOiBudGgoJHBhbGV0dGUtcmVkLCAyKTtcbiRwYWxldHRlLXJlZC0yMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDMpO1xuJHBhbGV0dGUtcmVkLTMwMDogbnRoKCRwYWxldHRlLXJlZCwgNCk7XG4kcGFsZXR0ZS1yZWQtNDAwOiBudGgoJHBhbGV0dGUtcmVkLCA1KTtcbiRwYWxldHRlLXJlZC01MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDYpO1xuJHBhbGV0dGUtcmVkLTYwMDogbnRoKCRwYWxldHRlLXJlZCwgNyk7XG4kcGFsZXR0ZS1yZWQtNzAwOiBudGgoJHBhbGV0dGUtcmVkLCA4KTtcbiRwYWxldHRlLXJlZC04MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDkpO1xuJHBhbGV0dGUtcmVkLTkwMDogbnRoKCRwYWxldHRlLXJlZCwgMTApO1xuJHBhbGV0dGUtcmVkLUExMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDExKTtcbiRwYWxldHRlLXJlZC1BMjAwOiBudGgoJHBhbGV0dGUtcmVkLCAxMik7XG4kcGFsZXR0ZS1yZWQtQTQwMDogbnRoKCRwYWxldHRlLXJlZCwgMTMpO1xuJHBhbGV0dGUtcmVkLUE3MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDE0KTtcblxuJHBhbGV0dGUtcGluazpcblwiMjUyLDIyOCwyMzZcIlxuXCIyNDgsMTg3LDIwOFwiXG5cIjI0NCwxNDMsMTc3XCJcblwiMjQwLDk4LDE0NlwiXG5cIjIzNiw2NCwxMjJcIlxuXCIyMzMsMzAsOTlcIlxuXCIyMTYsMjcsOTZcIlxuXCIxOTQsMjQsOTFcIlxuXCIxNzMsMjAsODdcIlxuXCIxMzYsMTQsNzlcIlxuXCIyNTUsMTI4LDE3MVwiXG5cIjI1NSw2NCwxMjlcIlxuXCIyNDUsMCw4N1wiXG5cIjE5NywxNyw5OFwiO1xuXG4kcGFsZXR0ZS1waW5rLTUwOiBudGgoJHBhbGV0dGUtcGluaywgMSk7XG4kcGFsZXR0ZS1waW5rLTEwMDogbnRoKCRwYWxldHRlLXBpbmssIDIpO1xuJHBhbGV0dGUtcGluay0yMDA6IG50aCgkcGFsZXR0ZS1waW5rLCAzKTtcbiRwYWxldHRlLXBpbmstMzAwOiBudGgoJHBhbGV0dGUtcGluaywgNCk7XG4kcGFsZXR0ZS1waW5rLTQwMDogbnRoKCRwYWxldHRlLXBpbmssIDUpO1xuJHBhbGV0dGUtcGluay01MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA2KTtcbiRwYWxldHRlLXBpbmstNjAwOiBudGgoJHBhbGV0dGUtcGluaywgNyk7XG4kcGFsZXR0ZS1waW5rLTcwMDogbnRoKCRwYWxldHRlLXBpbmssIDgpO1xuJHBhbGV0dGUtcGluay04MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA5KTtcbiRwYWxldHRlLXBpbmstOTAwOiBudGgoJHBhbGV0dGUtcGluaywgMTApO1xuJHBhbGV0dGUtcGluay1BMTAwOiBudGgoJHBhbGV0dGUtcGluaywgMTEpO1xuJHBhbGV0dGUtcGluay1BMjAwOiBudGgoJHBhbGV0dGUtcGluaywgMTIpO1xuJHBhbGV0dGUtcGluay1BNDAwOiBudGgoJHBhbGV0dGUtcGluaywgMTMpO1xuJHBhbGV0dGUtcGluay1BNzAwOiBudGgoJHBhbGV0dGUtcGluaywgMTQpO1xuXG4kcGFsZXR0ZS1wdXJwbGU6XG5cIjI0MywyMjksMjQ1XCJcblwiMjI1LDE5MCwyMzFcIlxuXCIyMDYsMTQ3LDIxNlwiXG5cIjE4NiwxMDQsMjAwXCJcblwiMTcxLDcxLDE4OFwiXG5cIjE1NiwzOSwxNzZcIlxuXCIxNDIsMzYsMTcwXCJcblwiMTIzLDMxLDE2MlwiXG5cIjEwNiwyNywxNTRcIlxuXCI3NCwyMCwxNDBcIlxuXCIyMzQsMTI4LDI1MlwiXG5cIjIyNCw2NCwyNTFcIlxuXCIyMTMsMCwyNDlcIlxuXCIxNzAsMCwyNTVcIjtcblxuJHBhbGV0dGUtcHVycGxlLTUwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxKTtcbiRwYWxldHRlLXB1cnBsZS0xMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDIpO1xuJHBhbGV0dGUtcHVycGxlLTIwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMyk7XG4kcGFsZXR0ZS1wdXJwbGUtMzAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA0KTtcbiRwYWxldHRlLXB1cnBsZS00MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDUpO1xuJHBhbGV0dGUtcHVycGxlLTUwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgNik7XG4kcGFsZXR0ZS1wdXJwbGUtNjAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA3KTtcbiRwYWxldHRlLXB1cnBsZS03MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDgpO1xuJHBhbGV0dGUtcHVycGxlLTgwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgOSk7XG4kcGFsZXR0ZS1wdXJwbGUtOTAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMCk7XG4kcGFsZXR0ZS1wdXJwbGUtQTEwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTEpO1xuJHBhbGV0dGUtcHVycGxlLUEyMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDEyKTtcbiRwYWxldHRlLXB1cnBsZS1BNDAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMyk7XG4kcGFsZXR0ZS1wdXJwbGUtQTcwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTQpO1xuXG4kcGFsZXR0ZS1kZWVwLXB1cnBsZTpcblwiMjM3LDIzMSwyNDZcIlxuXCIyMDksMTk2LDIzM1wiXG5cIjE3OSwxNTcsMjE5XCJcblwiMTQ5LDExNywyMDVcIlxuXCIxMjYsODcsMTk0XCJcblwiMTAzLDU4LDE4M1wiXG5cIjk0LDUzLDE3N1wiXG5cIjgxLDQ1LDE2OFwiXG5cIjY5LDM5LDE2MFwiXG5cIjQ5LDI3LDE0NlwiXG5cIjE3OSwxMzYsMjU1XCJcblwiMTI0LDc3LDI1NVwiXG5cIjEwMSwzMSwyNTVcIlxuXCI5OCwwLDIzNFwiO1xuXG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS01MDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTEwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAyKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTIwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAzKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTMwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA0KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTQwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA1KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTUwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA2KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTYwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA3KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTcwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA4KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTgwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA5KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTkwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMCk7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BMTAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDExKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLUEyMDA6IG50aCgkcGFsZXR0ZS1kZWVwLXB1cnBsZSwgMTIpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtQTQwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMyk7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BNzAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDE0KTtcblxuJHBhbGV0dGUtaW5kaWdvOlxuXCIyMzIsMjM0LDI0NlwiXG5cIjE5NywyMDIsMjMzXCJcblwiMTU5LDE2OCwyMThcIlxuXCIxMjEsMTM0LDIwM1wiXG5cIjkyLDEwNywxOTJcIlxuXCI2Myw4MSwxODFcIlxuXCI1Nyw3MywxNzFcIlxuXCI0OCw2MywxNTlcIlxuXCI0MCw1MywxNDdcIlxuXCIyNiwzNSwxMjZcIlxuXCIxNDAsMTU4LDI1NVwiXG5cIjgzLDEwOSwyNTRcIlxuXCI2MSw5MCwyNTRcIlxuXCI0OCw3OSwyNTRcIjtcblxuJHBhbGV0dGUtaW5kaWdvLTUwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxKTtcbiRwYWxldHRlLWluZGlnby0xMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDIpO1xuJHBhbGV0dGUtaW5kaWdvLTIwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMyk7XG4kcGFsZXR0ZS1pbmRpZ28tMzAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA0KTtcbiRwYWxldHRlLWluZGlnby00MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDUpO1xuJHBhbGV0dGUtaW5kaWdvLTUwMDogbnRoKCRwYWxldHRlLWluZGlnbywgNik7XG4kcGFsZXR0ZS1pbmRpZ28tNjAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA3KTtcbiRwYWxldHRlLWluZGlnby03MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDgpO1xuJHBhbGV0dGUtaW5kaWdvLTgwMDogbnRoKCRwYWxldHRlLWluZGlnbywgOSk7XG4kcGFsZXR0ZS1pbmRpZ28tOTAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMCk7XG4kcGFsZXR0ZS1pbmRpZ28tQTEwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTEpO1xuJHBhbGV0dGUtaW5kaWdvLUEyMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDEyKTtcbiRwYWxldHRlLWluZGlnby1BNDAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMyk7XG4kcGFsZXR0ZS1pbmRpZ28tQTcwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTQpO1xuXG4kcGFsZXR0ZS1ibHVlOlxuXCIyMjcsMjQyLDI1M1wiXG5cIjE4NywyMjIsMjUxXCJcblwiMTQ0LDIwMiwyNDlcIlxuXCIxMDAsMTgxLDI0NlwiXG5cIjY2LDE2NSwyNDVcIlxuXCIzMywxNTAsMjQzXCJcblwiMzAsMTM2LDIyOVwiXG5cIjI1LDExOCwyMTBcIlxuXCIyMSwxMDEsMTkyXCJcblwiMTMsNzEsMTYxXCJcblwiMTMwLDE3NywyNTVcIlxuXCI2OCwxMzgsMjU1XCJcblwiNDEsMTIxLDI1NVwiXG5cIjQxLDk4LDI1NVwiO1xuXG4kcGFsZXR0ZS1ibHVlLTUwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMSk7XG4kcGFsZXR0ZS1ibHVlLTEwMDogbnRoKCRwYWxldHRlLWJsdWUsIDIpO1xuJHBhbGV0dGUtYmx1ZS0yMDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAzKTtcbiRwYWxldHRlLWJsdWUtMzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNCk7XG4kcGFsZXR0ZS1ibHVlLTQwMDogbnRoKCRwYWxldHRlLWJsdWUsIDUpO1xuJHBhbGV0dGUtYmx1ZS01MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA2KTtcbiRwYWxldHRlLWJsdWUtNjAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNyk7XG4kcGFsZXR0ZS1ibHVlLTcwMDogbnRoKCRwYWxldHRlLWJsdWUsIDgpO1xuJHBhbGV0dGUtYmx1ZS04MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA5KTtcbiRwYWxldHRlLWJsdWUtOTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTApO1xuJHBhbGV0dGUtYmx1ZS1BMTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTEpO1xuJHBhbGV0dGUtYmx1ZS1BMjAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTIpO1xuJHBhbGV0dGUtYmx1ZS1BNDAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTMpO1xuJHBhbGV0dGUtYmx1ZS1BNzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTQpO1xuXG4kcGFsZXR0ZS1saWdodC1ibHVlOlxuXCIyMjUsMjQ1LDI1NFwiXG5cIjE3OSwyMjksMjUyXCJcblwiMTI5LDIxMiwyNTBcIlxuXCI3OSwxOTUsMjQ3XCJcblwiNDEsMTgyLDI0NlwiXG5cIjMsMTY5LDI0NFwiXG5cIjMsMTU1LDIyOVwiXG5cIjIsMTM2LDIwOVwiXG5cIjIsMTE5LDE4OVwiXG5cIjEsODcsMTU1XCJcblwiMTI4LDIxNiwyNTVcIlxuXCI2NCwxOTYsMjU1XCJcblwiMCwxNzYsMjU1XCJcblwiMCwxNDUsMjM0XCI7XG5cbiRwYWxldHRlLWxpZ2h0LWJsdWUtNTA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtMTAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgMik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTIwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDMpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS0zMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA0KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNDAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgNSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTUwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDYpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS02MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA3KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNzAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgOCk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTgwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDkpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS05MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMCk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUExMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUEyMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUE0MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMyk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUE3MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxNCk7XG5cbiRwYWxldHRlLWN5YW46XG5cIjIyNCwyNDcsMjUwXCJcblwiMTc4LDIzNSwyNDJcIlxuXCIxMjgsMjIyLDIzNFwiXG5cIjc3LDIwOCwyMjVcIlxuXCIzOCwxOTgsMjE4XCJcblwiMCwxODgsMjEyXCJcblwiMCwxNzIsMTkzXCJcblwiMCwxNTEsMTY3XCJcblwiMCwxMzEsMTQzXCJcblwiMCw5NiwxMDBcIlxuXCIxMzIsMjU1LDI1NVwiXG5cIjI0LDI1NSwyNTVcIlxuXCIwLDIyOSwyNTVcIlxuXCIwLDE4NCwyMTJcIjtcblxuJHBhbGV0dGUtY3lhbi01MDogbnRoKCRwYWxldHRlLWN5YW4sIDEpO1xuJHBhbGV0dGUtY3lhbi0xMDA6IG50aCgkcGFsZXR0ZS1jeWFuLCAyKTtcbiRwYWxldHRlLWN5YW4tMjAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMyk7XG4kcGFsZXR0ZS1jeWFuLTMwMDogbnRoKCRwYWxldHRlLWN5YW4sIDQpO1xuJHBhbGV0dGUtY3lhbi00MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA1KTtcbiRwYWxldHRlLWN5YW4tNTAwOiBudGgoJHBhbGV0dGUtY3lhbiwgNik7XG4kcGFsZXR0ZS1jeWFuLTYwMDogbnRoKCRwYWxldHRlLWN5YW4sIDcpO1xuJHBhbGV0dGUtY3lhbi03MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA4KTtcbiRwYWxldHRlLWN5YW4tODAwOiBudGgoJHBhbGV0dGUtY3lhbiwgOSk7XG4kcGFsZXR0ZS1jeWFuLTkwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEwKTtcbiRwYWxldHRlLWN5YW4tQTEwMDogbnRoKCRwYWxldHRlLWN5YW4sIDExKTtcbiRwYWxldHRlLWN5YW4tQTIwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEyKTtcbiRwYWxldHRlLWN5YW4tQTQwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEzKTtcbiRwYWxldHRlLWN5YW4tQTcwMDogbnRoKCRwYWxldHRlLWN5YW4sIDE0KTtcblxuJHBhbGV0dGUtdGVhbDpcblwiMjI0LDI0MiwyNDFcIlxuXCIxNzgsMjIzLDIxOVwiXG5cIjEyOCwyMDMsMTk2XCJcblwiNzcsMTgyLDE3MlwiXG5cIjM4LDE2NiwxNTRcIlxuXCIwLDE1MCwxMzZcIlxuXCIwLDEzNywxMjNcIlxuXCIwLDEyMSwxMDdcIlxuXCIwLDEwNSw5MlwiXG5cIjAsNzcsNjRcIlxuXCIxNjcsMjU1LDIzNVwiXG5cIjEwMCwyNTUsMjE4XCJcblwiMjksMjMzLDE4MlwiXG5cIjAsMTkxLDE2NVwiO1xuXG4kcGFsZXR0ZS10ZWFsLTUwOiBudGgoJHBhbGV0dGUtdGVhbCwgMSk7XG4kcGFsZXR0ZS10ZWFsLTEwMDogbnRoKCRwYWxldHRlLXRlYWwsIDIpO1xuJHBhbGV0dGUtdGVhbC0yMDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAzKTtcbiRwYWxldHRlLXRlYWwtMzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNCk7XG4kcGFsZXR0ZS10ZWFsLTQwMDogbnRoKCRwYWxldHRlLXRlYWwsIDUpO1xuJHBhbGV0dGUtdGVhbC01MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA2KTtcbiRwYWxldHRlLXRlYWwtNjAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNyk7XG4kcGFsZXR0ZS10ZWFsLTcwMDogbnRoKCRwYWxldHRlLXRlYWwsIDgpO1xuJHBhbGV0dGUtdGVhbC04MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA5KTtcbiRwYWxldHRlLXRlYWwtOTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTApO1xuJHBhbGV0dGUtdGVhbC1BMTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTEpO1xuJHBhbGV0dGUtdGVhbC1BMjAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTIpO1xuJHBhbGV0dGUtdGVhbC1BNDAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTMpO1xuJHBhbGV0dGUtdGVhbC1BNzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTQpO1xuXG4kcGFsZXR0ZS1ncmVlbjpcblwiMjMyLDI0NSwyMzNcIlxuXCIyMDAsMjMwLDIwMVwiXG5cIjE2NSwyMTQsMTY3XCJcblwiMTI5LDE5OSwxMzJcIlxuXCIxMDIsMTg3LDEwNlwiXG5cIjc2LDE3NSw4MFwiXG5cIjY3LDE2MCw3MVwiXG5cIjU2LDE0Miw2MFwiXG5cIjQ2LDEyNSw1MFwiXG5cIjI3LDk0LDMyXCJcblwiMTg1LDI0NiwyMDJcIlxuXCIxMDUsMjQwLDE3NFwiXG5cIjAsMjMwLDExOFwiXG5cIjAsMjAwLDgzXCI7XG5cbiRwYWxldHRlLWdyZWVuLTUwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEpO1xuJHBhbGV0dGUtZ3JlZW4tMTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDIpO1xuJHBhbGV0dGUtZ3JlZW4tMjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDMpO1xuJHBhbGV0dGUtZ3JlZW4tMzAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDQpO1xuJHBhbGV0dGUtZ3JlZW4tNDAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDUpO1xuJHBhbGV0dGUtZ3JlZW4tNTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDYpO1xuJHBhbGV0dGUtZ3JlZW4tNjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDcpO1xuJHBhbGV0dGUtZ3JlZW4tNzAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDgpO1xuJHBhbGV0dGUtZ3JlZW4tODAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDkpO1xuJHBhbGV0dGUtZ3JlZW4tOTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEwKTtcbiRwYWxldHRlLWdyZWVuLUExMDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTEpO1xuJHBhbGV0dGUtZ3JlZW4tQTIwMDogbnRoKCRwYWxldHRlLWdyZWVuLCAxMik7XG4kcGFsZXR0ZS1ncmVlbi1BNDAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEzKTtcbiRwYWxldHRlLWdyZWVuLUE3MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTQpO1xuXG4kcGFsZXR0ZS1saWdodC1ncmVlbjpcblwiMjQxLDI0OCwyMzNcIlxuXCIyMjAsMjM3LDIwMFwiXG5cIjE5NywyMjUsMTY1XCJcblwiMTc0LDIxMywxMjlcIlxuXCIxNTYsMjA0LDEwMVwiXG5cIjEzOSwxOTUsNzRcIlxuXCIxMjQsMTc5LDY2XCJcblwiMTA0LDE1OSw1NlwiXG5cIjg1LDEzOSw0N1wiXG5cIjUxLDEwNSwzMFwiXG5cIjIwNCwyNTUsMTQ0XCJcblwiMTc4LDI1NSw4OVwiXG5cIjExOCwyNTUsM1wiXG5cIjEwMCwyMjEsMjNcIjtcblxuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tNTA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0xMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMik7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0yMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0zMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi00MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi01MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNik7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi02MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi03MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgOCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi04MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgOSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi05MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTApO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTEwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxMSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi1BMjAwOiBudGgoJHBhbGV0dGUtbGlnaHQtZ3JlZW4sIDEyKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLUE0MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTMpO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTcwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxNCk7XG5cbiRwYWxldHRlLWxpbWU6XG5cIjI0OSwyNTEsMjMxXCJcblwiMjQwLDI0NCwxOTVcIlxuXCIyMzAsMjM4LDE1NlwiXG5cIjIyMCwyMzEsMTE3XCJcblwiMjEyLDIyNSw4N1wiXG5cIjIwNSwyMjAsNTdcIlxuXCIxOTIsMjAyLDUxXCJcblwiMTc1LDE4MCw0M1wiXG5cIjE1OCwxNTcsMzZcIlxuXCIxMzAsMTE5LDIzXCJcblwiMjQ0LDI1NSwxMjlcIlxuXCIyMzgsMjU1LDY1XCJcblwiMTk4LDI1NSwwXCJcblwiMTc0LDIzNCwwXCI7XG5cbiRwYWxldHRlLWxpbWUtNTA6IG50aCgkcGFsZXR0ZS1saW1lLCAxKTtcbiRwYWxldHRlLWxpbWUtMTAwOiBudGgoJHBhbGV0dGUtbGltZSwgMik7XG4kcGFsZXR0ZS1saW1lLTIwMDogbnRoKCRwYWxldHRlLWxpbWUsIDMpO1xuJHBhbGV0dGUtbGltZS0zMDA6IG50aCgkcGFsZXR0ZS1saW1lLCA0KTtcbiRwYWxldHRlLWxpbWUtNDAwOiBudGgoJHBhbGV0dGUtbGltZSwgNSk7XG4kcGFsZXR0ZS1saW1lLTUwMDogbnRoKCRwYWxldHRlLWxpbWUsIDYpO1xuJHBhbGV0dGUtbGltZS02MDA6IG50aCgkcGFsZXR0ZS1saW1lLCA3KTtcbiRwYWxldHRlLWxpbWUtNzAwOiBudGgoJHBhbGV0dGUtbGltZSwgOCk7XG4kcGFsZXR0ZS1saW1lLTgwMDogbnRoKCRwYWxldHRlLWxpbWUsIDkpO1xuJHBhbGV0dGUtbGltZS05MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMCk7XG4kcGFsZXR0ZS1saW1lLUExMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMSk7XG4kcGFsZXR0ZS1saW1lLUEyMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMik7XG4kcGFsZXR0ZS1saW1lLUE0MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMyk7XG4kcGFsZXR0ZS1saW1lLUE3MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxNCk7XG5cbiRwYWxldHRlLXllbGxvdzpcblwiMjU1LDI1MywyMzFcIlxuXCIyNTUsMjQ5LDE5NlwiXG5cIjI1NSwyNDUsMTU3XCJcblwiMjU1LDI0MSwxMThcIlxuXCIyNTUsMjM4LDg4XCJcblwiMjU1LDIzNSw1OVwiXG5cIjI1MywyMTYsNTNcIlxuXCIyNTEsMTkyLDQ1XCJcblwiMjQ5LDE2OCwzN1wiXG5cIjI0NSwxMjcsMjNcIlxuXCIyNTUsMjU1LDE0MVwiXG5cIjI1NSwyNTUsMFwiXG5cIjI1NSwyMzQsMFwiXG5cIjI1NSwyMTQsMFwiO1xuXG4kcGFsZXR0ZS15ZWxsb3ctNTA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEpO1xuJHBhbGV0dGUteWVsbG93LTEwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMik7XG4kcGFsZXR0ZS15ZWxsb3ctMjAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAzKTtcbiRwYWxldHRlLXllbGxvdy0zMDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDQpO1xuJHBhbGV0dGUteWVsbG93LTQwMDogbnRoKCRwYWxldHRlLXllbGxvdywgNSk7XG4kcGFsZXR0ZS15ZWxsb3ctNTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA2KTtcbiRwYWxldHRlLXllbGxvdy02MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDcpO1xuJHBhbGV0dGUteWVsbG93LTcwMDogbnRoKCRwYWxldHRlLXllbGxvdywgOCk7XG4kcGFsZXR0ZS15ZWxsb3ctODAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA5KTtcbiRwYWxldHRlLXllbGxvdy05MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEwKTtcbiRwYWxldHRlLXllbGxvdy1BMTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxMSk7XG4kcGFsZXR0ZS15ZWxsb3ctQTIwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMTIpO1xuJHBhbGV0dGUteWVsbG93LUE0MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEzKTtcbiRwYWxldHRlLXllbGxvdy1BNzAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxNCk7XG5cbiRwYWxldHRlLWFtYmVyOlxuXCIyNTUsMjQ4LDIyNVwiXG5cIjI1NSwyMzYsMTc5XCJcblwiMjU1LDIyNCwxMzBcIlxuXCIyNTUsMjEzLDc5XCJcblwiMjU1LDIwMiw0MFwiXG5cIjI1NSwxOTMsN1wiXG5cIjI1NSwxNzksMFwiXG5cIjI1NSwxNjAsMFwiXG5cIjI1NSwxNDMsMFwiXG5cIjI1NSwxMTEsMFwiXG5cIjI1NSwyMjksMTI3XCJcblwiMjU1LDIxNSw2NFwiXG5cIjI1NSwxOTYsMFwiXG5cIjI1NSwxNzEsMFwiO1xuXG4kcGFsZXR0ZS1hbWJlci01MDogbnRoKCRwYWxldHRlLWFtYmVyLCAxKTtcbiRwYWxldHRlLWFtYmVyLTEwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAyKTtcbiRwYWxldHRlLWFtYmVyLTIwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAzKTtcbiRwYWxldHRlLWFtYmVyLTMwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA0KTtcbiRwYWxldHRlLWFtYmVyLTQwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA1KTtcbiRwYWxldHRlLWFtYmVyLTUwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA2KTtcbiRwYWxldHRlLWFtYmVyLTYwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA3KTtcbiRwYWxldHRlLWFtYmVyLTcwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA4KTtcbiRwYWxldHRlLWFtYmVyLTgwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA5KTtcbiRwYWxldHRlLWFtYmVyLTkwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMCk7XG4kcGFsZXR0ZS1hbWJlci1BMTAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDExKTtcbiRwYWxldHRlLWFtYmVyLUEyMDA6IG50aCgkcGFsZXR0ZS1hbWJlciwgMTIpO1xuJHBhbGV0dGUtYW1iZXItQTQwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMyk7XG4kcGFsZXR0ZS1hbWJlci1BNzAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDE0KTtcblxuJHBhbGV0dGUtb3JhbmdlOlxuXCIyNTUsMjQzLDIyNFwiXG5cIjI1NSwyMjQsMTc4XCJcblwiMjU1LDIwNCwxMjhcIlxuXCIyNTUsMTgzLDc3XCJcblwiMjU1LDE2NywzOFwiXG5cIjI1NSwxNTIsMFwiXG5cIjI1MSwxNDAsMFwiXG5cIjI0NSwxMjQsMFwiXG5cIjIzOSwxMDgsMFwiXG5cIjIzMCw4MSwwXCJcblwiMjU1LDIwOSwxMjhcIlxuXCIyNTUsMTcxLDY0XCJcblwiMjU1LDE0NSwwXCJcblwiMjU1LDEwOSwwXCI7XG5cbiRwYWxldHRlLW9yYW5nZS01MDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMSk7XG4kcGFsZXR0ZS1vcmFuZ2UtMTAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAyKTtcbiRwYWxldHRlLW9yYW5nZS0yMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDMpO1xuJHBhbGV0dGUtb3JhbmdlLTMwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNCk7XG4kcGFsZXR0ZS1vcmFuZ2UtNDAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA1KTtcbiRwYWxldHRlLW9yYW5nZS01MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDYpO1xuJHBhbGV0dGUtb3JhbmdlLTYwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNyk7XG4kcGFsZXR0ZS1vcmFuZ2UtNzAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA4KTtcbiRwYWxldHRlLW9yYW5nZS04MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDkpO1xuJHBhbGV0dGUtb3JhbmdlLTkwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTApO1xuJHBhbGV0dGUtb3JhbmdlLUExMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDExKTtcbiRwYWxldHRlLW9yYW5nZS1BMjAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAxMik7XG4kcGFsZXR0ZS1vcmFuZ2UtQTQwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTMpO1xuJHBhbGV0dGUtb3JhbmdlLUE3MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDE0KTtcblxuJHBhbGV0dGUtZGVlcC1vcmFuZ2U6XG5cIjI1MSwyMzMsMjMxXCJcblwiMjU1LDIwNCwxODhcIlxuXCIyNTUsMTcxLDE0NVwiXG5cIjI1NSwxMzgsMTAxXCJcblwiMjU1LDExMiw2N1wiXG5cIjI1NSw4NywzNFwiXG5cIjI0NCw4MSwzMFwiXG5cIjIzMCw3NCwyNVwiXG5cIjIxNiw2NywyMVwiXG5cIjE5MSw1NCwxMlwiXG5cIjI1NSwxNTgsMTI4XCJcblwiMjU1LDExMCw2NFwiXG5cIjI1NSw2MSwwXCJcblwiMjIxLDQ0LDBcIjtcblxuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtNTA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0xMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMik7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0yMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0zMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS00MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS01MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNik7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS02MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS03MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgOCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS04MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgOSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS05MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTApO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTEwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxMSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS1BMjAwOiBudGgoJHBhbGV0dGUtZGVlcC1vcmFuZ2UsIDEyKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLUE0MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTMpO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTcwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxNCk7XG5cblxuLy8gQ29sb3Igb3JkZXI6IDUwLCAxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwLlxuXG4kcGFsZXR0ZS1icm93bjpcblwiMjM5LDIzNSwyMzNcIlxuXCIyMTUsMjA0LDIwMFwiXG5cIjE4OCwxNzAsMTY0XCJcblwiMTYxLDEzNiwxMjdcIlxuXCIxNDEsMTEwLDk5XCJcblwiMTIxLDg1LDcyXCJcblwiMTA5LDc2LDY1XCJcblwiOTMsNjQsNTVcIlxuXCI3OCw1Miw0NlwiXG5cIjYyLDM5LDM1XCI7XG5cbiRwYWxldHRlLWJyb3duLTUwOiBudGgoJHBhbGV0dGUtYnJvd24sIDEpO1xuJHBhbGV0dGUtYnJvd24tMTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDIpO1xuJHBhbGV0dGUtYnJvd24tMjAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDMpO1xuJHBhbGV0dGUtYnJvd24tMzAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDQpO1xuJHBhbGV0dGUtYnJvd24tNDAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDUpO1xuJHBhbGV0dGUtYnJvd24tNTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDYpO1xuJHBhbGV0dGUtYnJvd24tNjAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDcpO1xuJHBhbGV0dGUtYnJvd24tNzAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDgpO1xuJHBhbGV0dGUtYnJvd24tODAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDkpO1xuJHBhbGV0dGUtYnJvd24tOTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDEwKTtcblxuJHBhbGV0dGUtZ3JleTpcblwiMjUwLDI1MCwyNTBcIlxuXCIyNDUsMjQ1LDI0NVwiXG5cIjIzOCwyMzgsMjM4XCJcblwiMjI0LDIyNCwyMjRcIlxuXCIxODksMTg5LDE4OVwiXG5cIjE1OCwxNTgsMTU4XCJcblwiMTE3LDExNywxMTdcIlxuXCI5Nyw5Nyw5N1wiXG5cIjY2LDY2LDY2XCJcblwiMzMsMzMsMzNcIjtcblxuJHBhbGV0dGUtZ3JleS01MDogbnRoKCRwYWxldHRlLWdyZXksIDEpO1xuJHBhbGV0dGUtZ3JleS0xMDA6IG50aCgkcGFsZXR0ZS1ncmV5LCAyKTtcbiRwYWxldHRlLWdyZXktMjAwOiBudGgoJHBhbGV0dGUtZ3JleSwgMyk7XG4kcGFsZXR0ZS1ncmV5LTMwMDogbnRoKCRwYWxldHRlLWdyZXksIDQpO1xuJHBhbGV0dGUtZ3JleS00MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA1KTtcbiRwYWxldHRlLWdyZXktNTAwOiBudGgoJHBhbGV0dGUtZ3JleSwgNik7XG4kcGFsZXR0ZS1ncmV5LTYwMDogbnRoKCRwYWxldHRlLWdyZXksIDcpO1xuJHBhbGV0dGUtZ3JleS03MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA4KTtcbiRwYWxldHRlLWdyZXktODAwOiBudGgoJHBhbGV0dGUtZ3JleSwgOSk7XG4kcGFsZXR0ZS1ncmV5LTkwMDogbnRoKCRwYWxldHRlLWdyZXksIDEwKTtcblxuJHBhbGV0dGUtYmx1ZS1ncmV5OlxuXCIyMzYsMjM5LDI0MVwiXG5cIjIwNywyMTYsMjIwXCJcblwiMTc2LDE5MCwxOTdcIlxuXCIxNDQsMTY0LDE3NFwiXG5cIjEyMCwxNDQsMTU2XCJcblwiOTYsMTI1LDEzOVwiXG5cIjg0LDExMCwxMjJcIlxuXCI2OSw5MCwxMDBcIlxuXCI1NSw3MSw3OVwiXG5cIjM4LDUwLDU2XCI7XG5cbiRwYWxldHRlLWJsdWUtZ3JleS01MDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMSk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktMTAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCAyKTtcbiRwYWxldHRlLWJsdWUtZ3JleS0yMDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDMpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTMwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNCk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNDAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA1KTtcbiRwYWxldHRlLWJsdWUtZ3JleS01MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDYpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTYwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNyk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNzAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA4KTtcbiRwYWxldHRlLWJsdWUtZ3JleS04MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDkpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTkwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMTApO1xuXG4kY29sb3ItYmxhY2s6IFwiMCwwLDBcIjtcbiRjb2xvci13aGl0ZTogXCIyNTUsMjU1LDI1NVwiO1xuXG5cbi8qIGNvbG9ycy5zY3NzICovXG4kc3R5bGVndWlkZS1nZW5lcmF0ZS10ZW1wbGF0ZTogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFRoZSB0d28gcG9zc2libGUgY29sb3JzIGZvciBvdmVybGF5ZWQgdGV4dC5cbiRjb2xvci1kYXJrLWNvbnRyYXN0OiAkY29sb3Itd2hpdGUgIWRlZmF1bHQ7XG4kY29sb3ItbGlnaHQtY29udHJhc3Q6ICRjb2xvci1ibGFjayAhZGVmYXVsdDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIFR5cG9ncmFwaHkgKi9cblxuQG1peGluIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaWYgJHVzZVByZWZlcnJlZCB7XG4gICAgZm9udC1mYW1pbHk6ICRwcmVmZXJyZWRfZm9udDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTQoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tZGlzcGxheS0zKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tZGlzcGxheS0yKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTEoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWhlYWRsaW5lKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby10aXRsZSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tc3ViaGVhZCgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tc3ViaGVhZC0yKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1ib2R5LTIoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiBmYWxzZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIEBpZiAkdXNlUHJlZmVycmVkIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IEBlbHNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJvZHktMSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1jYXB0aW9uKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJsb2NrcXVvdGUoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTAuNWVtO1xuICAgIGNvbnRlbnQ6ICfigJwnO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJ+KAnSc7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjA1ZW07XG4gIH1cblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tbWVudSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJ1dHRvbigkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWljb24oKSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIFNoYWRvd3MgKi9cblxuLy8gRm9jdXMgc2hhZG93IG1peGluLlxuQG1peGluIGZvY3VzLXNoYWRvdygpIHtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsMCwwLC4xOCksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4zNik7XG59XG5cbkBtaXhpbiBzaGFkb3ctMmRwKCkge1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTNkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS11bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpO1xufVxuQG1peGluIHNoYWRvdy00ZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTZkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LThkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpO1xufVxuXG5AbWl4aW4gc2hhZG93LTE2ZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwICA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwICA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5cbkBtaXhpbiBzaGFkb3ctMjRkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAgOXB4IDQ2cHggIDhweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAyNHB4IDM4cHggIDNweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tZmFzdC1vdXQtc2xvdy1pbigkZHVyYXRpb246MC4ycykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW47XG59XG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tbGluZWFyLW91dC1zbG93LWluKCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtbGluZWFyLW91dC1zbG93LWluO1xufVxuXG5AbWl4aW4gbWF0ZXJpYWwtYW5pbWF0aW9uLWZhc3Qtb3V0LWxpbmVhci1pbigkZHVyYXRpb246MC4ycykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LWxpbmVhci1pbjtcbn1cblxuQG1peGluIG1hdGVyaWFsLWFuaW1hdGlvbi1kZWZhdWx0KCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtZGVmYXVsdDtcbn1cblxuLyogRGlhbG9nICovXG5cbkBtaXhpbiBkaWFsb2ctd2lkdGgoJHVuaXRzOjUpIHtcbiAgQGlmKHR5cGVfb2YoJHVuaXRzKSAhPSAnbnVtYmVyJykge1xuICAgIEBlcnJvciBcIlRoZSB1bml0IGdpdmVuIHRvIGRpYWxvZy13aWR0aCBzaG91bGQgYmUgYSBudW1iZXIuXCI7XG4gIH1cbiAgLy8gNTZkcCBpcyB0aGUgYmFzZSB1bml0IHdpZHRoIGZvciBEaWFsb2dzLlxuICAvLyBXaXRoIDUgdW5pdHMgYmVpbmcgdGhlIG51bWJlciBvZiB1bml0cyBmb3IgYSBtb2JpbGUgZGV2aWNlLlxuICAvLyBodHRwczovL2dvby5nbC9zSzJPNW9cbiAgd2lkdGg6ICR1bml0cyAqIDU2cHg7XG59XG4iLCJAaW1wb3J0IFwifm1hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9jb2xvci1kZWZpbml0aW9uc1wiO1xuXG4vKiA9PT09PT09PT09ICBJTUFHRVMgID09PT09PT09PT0gKi9cbiRpbWFnZS1wYXRoOiAnL2Fzc2V0cy9pbWFnZXMnO1xuJGNoZWNrYm94LWltYWdlLXBhdGg6ICRpbWFnZS1wYXRoO1xuXG4vKiA9PT09PT09PT09ICBDb2xvciAmIFRoZW1lcyAgPT09PT09PT09PSAqL1xuQGltcG9ydCBcIi4vcGFsZXR0ZVwiO1xuXG4kYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XG4kYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICMyMDIwMjA7XG5cbi8qID09PT09PT09PT0gIFR5cG9ncmFwaHkgID09PT09PT09PT0gKi9cbiR0ZXh0LWNvbG9yLXByaW1hcnk6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjg3KTtcblxuLyogPT09PT09PT09PSAgQ29tcG9uZW50cyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBTdGFuZGFyZCBCdXR0b25zICA9PT09PT09PT09ICovXG5cbi8vIERlZmF1bHQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yOiAkY29sb3Itd2hpdGU7XG4vLyBDb2xvcmVkIGJ1dHRvbiBjb2xvcnMuXG4kYnV0dG9uLXByaW1hcnktY29sb3ItYWx0OiAkY29sb3Itc2Vjb25kYXJ5O1xuLy8gUmlwcGxlIGNvbG9yIGZvciBjb2xvcmVkIHJhaXNlZCBidXR0b25zLlxuLy8gRGlzYWJsZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1kaXNhYmxlZDogIzZiNmI2Yjtcbi8vYmFja2dyb3VuZC1jb2xvcjpcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yLWRpc2FibGVkOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4zKTtcbi8vY29sb3I6XG4vLyBGQUIgY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24tZmFiLWNvbG9yLWFsdDogJGNvbG9yLXNlY29uZGFyeTtcblxuJGJ1dHRvbi1mYWItdGV4dC1jb2xvci1hbHQ6ICRjb2xvci13aGl0ZTtcbiRidXR0b24tZmFiLWhvdmVyLWNvbG9yLWFsdDogI2ZmNGM0YztcbiRidXR0b24tZmFiLWFjdGl2ZS1jb2xvci1hbHQ6ICNmMjNkM2Q7XG4vLyBJY29uIGJ1dHRvbiBjb2xvcnMgYW5kIHNpemVzLlxuXG4vKiA9PT09PT09PT09ICBJY29uIFRvZ2dsZXMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgUmFkaW8gQnV0dG9ucyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBSaXBwbGUgZWZmZWN0ICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIExheW91dCAgPT09PT09PT09PSAqL1xuXG4vLyBEcmF3ZXJcbiRsYXlvdXQtZHJhd2VyLXdpZHRoOiAyMzZweDtcbiRsYXlvdXQtZHJhd2VyLWJnLWNvbG9yOiAjMjAyMDIwO1xuJGxheW91dC1uYXYtY29sb3I6ICMyMDIwMjA7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWxpbmstYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjI1KTtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGxheW91dC1uYXYtY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjI1KTtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1pY29uLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41Nik7XG4kbGF5b3V0LWRyYXdlci1oZWFkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcbiRsYXlvdXQtZHJhd2VyLWhlYWRlci1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuODUpO1xuXG4vLyBSaWdodCBTaWRlYmFyXG4kcmlnaHQtc2lkZWJhci13aWR0aDogMjMwcHg7XG5cbi8vIEhlYWRlclxuJGxheW91dC1oZWFkZXItdGV4dC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4kbGF5b3V0LWhlYWRlci1iZy1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xuJGxheW91dC1oZWFkZXItbmFtZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kbGF5b3V0LWhlYWRlci1pY29uLWhvdmVyLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4zKTtcblxuLy8gVGFic1xuXG4vKiA9PT09PT09PT09ICBDb250ZW50IFRhYnMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgQ2hlY2tib3hlcyAgPT09PT09PT09PSAqL1xuJGNoZWNrYm94LW9mZi1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNoZWNrYm94LWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiA9PT09PT09PT09ICBTd2l0Y2hlcyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBTcGlubmVyICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFRleHQgZmllbGRzICA9PT09PT09PT09ICovXG4kdG9kby1pbnB1dC10ZXh0LWxhYmVsLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4yKTtcblxuJGlucHV0LXRleHQtaGlnaGxpZ2h0LWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiRpbnB1dC10ZXh0LWJvdHRvbS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiRpbnB1dC10ZXh0LWRpc2FibGVkLXRleHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblxuLy9wbGFjZWhvbGRlciBjb2xvclxuJHRvZG8taW5wdXQtdGV4dC1oaWdobGlnaHQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjcpO1xuXG4vL2JvdHRvbSBsaW5lIGNvbG9yXG5cbi8qID09PT09PT09PT0gIENhcmQgID09PT09PT09PT0gKi9cbiRjYXJkLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuJGNhcmQtdGV4dC1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuOCk7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtc3VidGl0bGUtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjUpO1xuJGNhcmQtYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4wNSk7XG5cbiRjYXJkLXRpdGxlLWJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLWdyYXk7XG4kY2FyZC1hY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjA1KTtcbiRjYXJkLXRleHQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRjYXJkLWxpbmstY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGNhcmQtaHJlZi1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG5cbiRjYXJkLXRpdGxlLWltZy1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtZGVnLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC45KTtcblxuLyogPT09PT09PT09PSAgU2xpZGVycyA9PT09PT09PT09ICovXG5cbiRyYW5nZS1iZy1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNDUpO1xuJHJhbmdlLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiA9PT09PT09PT09IFByb2dyZXNzID09PT09PT09PT0gKi9cbiRwcm9ncmVzcy1tYWluLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuJHByb2dyZXNzLXNlY29uZGFyeS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNCk7XG5cbi8qID09PT09PT09PT0gIExpc3QgPT09PT09PT09PSAqL1xuJGxpc3QtbWFpbi10ZXh0LXRleHQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRsaXN0LXN1cHBvcnRpbmctdGV4dC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41NCk7XG4kbGlzdC1pY29uLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRsaXN0LWljb24taG92ZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuXG4kbGlzdC1ib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjEpO1xuJGxpc3QtaXRlbS1ib3JkZXI6IDFweCBzb2xpZCAkbGlzdC1ib3JkZXItY29sb3I7XG5cbi8qID09PT09PT09PT0gIEl0ZW0gPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IEl0ZW0gQ29sb3JzXG4kZGVmYXVsdC1pdGVtLWZvY3VzLWJnLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4xNSk7XG4kZGVmYXVsdC1pdGVtLWFjdGl2ZS1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMTUpO1xuJGRlZmF1bHQtaXRlbS1ob3Zlci1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMik7XG5cbi8vIERpc2FibGVkIEJ1dHRvbiBDb2xvcnNcblxuLyogPT09PT09PT09PSAgRHJvcGRvd24gbWVudSA9PT09PT09PT09ICovXG4kZGVmYXVsdC1kcm9wZG93bi1iZy1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG5cbiRkcm9wZG93bi1tZW51LXdpZHRoOiAzMTBweDtcbiRkcm9wZG93bi1tZW51LWhlYWRlci1mb250LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRzZXR0aW5nc19kcm9wZG93bl93aWR0aDogMTM1cHg7XG4kYWNjb3VudC1kcm9wZG93bi1hdmF0YXItc2l6ZTogNDhweDtcbiRtZXNzYWdlcy1kcm9wZG93bi1sYWJlbC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcblxuLyogPT09PT09PT09PSAgVG9vbHRpcHMgID09PT09PT09PT0gKi9cbiR0b29sdGlwLWJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG5cbi8qID09PT09PT09PT0gIEZvb3RlciAgPT09PT09PT09PSAqL1xuXG4vKiBURVhURklFTEQgKi9cblxuLyogU1dJVENIICovXG4kc3dpdGNoLW9mZi10aHVtYi1jb2xvcjogJHBhbGV0dGUtZ3JleS01MDA7XG5cbi8qIFNQSU5ORVIgKi9cblxuLy8gQW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwLlxuLy8gVGltZSBpdCB0YWtlcyB0byBleHBhbmQgYW5kIGNvbnRyYWN0IGFyYy5cbi8vIEhvdyBtdWNoIHRoZSBzdGFydCBsb2NhdGlvbiBvZiB0aGUgYXJjIHNob3VsZCByb3RhdGUgZWFjaCB0aW1lLlxuXG4vKiBSQURJTyAqL1xuJHJhZGlvLW9mZi1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuOCk7XG4kcmFkaW8tY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuOCk7XG5cbi8qIE1FTlUgKi9cblxuLyogTElTVCAqL1xuJGxpc3QtYm9yZGVyOiAwO1xuJGxpc3QtYm90dG9tLXBhZGRpbmc6IDE2cHg7XG4kbGlzdC1hdmF0YXItdGV4dC1sZWZ0LWRpc3RhbmNlOiA2NHB4O1xuJGxpc3QtaWNvbi10ZXh0LWxlZnQtZGlzdGFuY2U6IDU2cHg7XG4kbGlzdC1hdmF0YXItc2l6ZTogMzJweDtcbiRsaXN0LXR3by1saW5lLWhlaWdodDogNjRweDtcblxuLyogTEFZT1VUICovXG4kbGF5b3V0LWRyYXdlci1uYXJyb3c6IDIzNnB4O1xuJGxheW91dC1oZWFkZXItbW9iaWxlLWluZGVudDogOHB4O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1pbmRlbnQ6IDIwcHg7XG4kbGF5b3V0LXNjcmVlbi1zaXplLXRocmVzaG9sZDogMTQ0MHB4O1xuXG4vKiBJQ09OICovXG5cbi8qIElDT04gVE9HR0xFICovXG5cbi8qIEZPT1RFUiAqL1xuXG4vKiBtZWdhLWZvb3RlciAqL1xuXG4vKiBtaW5pLWZvb3RlciAqL1xuXG4vKiBDSEVDS0JPWCAqL1xuJGNoZWNrYm94LWJ1dHRvbi1zaXplOiAxOHB4O1xuJGNoZWNrYm94LWxhYmVsLWhlaWdodDogMjRweDtcbiRjaGVja2JveC1wYWRkaW5nOiA4cHg7XG5cbi8qIENBUkQgKi9cblxuLyogQ2FyZCBkaW1lbnNpb25zICovXG4kY2FyZC1oZWlnaHQ6IGF1dG87XG4kY2FyZC13aWR0aDogYXV0bztcbiRjYXJkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcbiRjYXJkLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IDQwMDtcbiRjYXJkLXZlcnRpY2FsLXBhZGRpbmc6IDIwcHg7XG5cbi8qIENvdmVyIGltYWdlICovXG5cbi8qIEJVVFRPTiAqL1xuJGJ1dHRvbi1mb250LXdlaWd0aDogNDAwO1xuXG4vKiBBTklNQVRJT04gKi9cblxuLyogUFJPR1JFU1MgKi9cblxuLyogQkFER0UgKi9cbiRiYWRnZS1iYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcbiRiYWRnZS1jb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4vKiBTSEFET1dTICovXG5cbi8qIEdSSUQgKi9cbiRncmlkLXRhYmxldC1jb2x1bW5zOiAxMjtcbiRncmlkLXBob25lLWNvbHVtbnM6IDQ7XG5cbiRncmlkLWRlc2t0b3AtZ3V0dGVyOiAzMnB4O1xuJGdyaWQtZGVza3RvcC1tYXJnaW46IDE2cHg7XG5cbiRncmlkLXRhYmxldC1icmVha3BvaW50OiAxMTUycHg7XG4kZ3JpZC1kZXNrdG9wLWJyZWFrcG9pbnQ6IDE5MjBweDtcbiRwaG9uZS1icmVha3BvaW50OiA4MDBweDtcblxuLyogREFUQSBUQUJMRSAqL1xuJGRhdGEtdGFibGUtZm9udC1zaXplOiAxNnB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogMTNweDtcblxuJGRhdGEtdGFibGUtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRkYXRhLXRhYmxlLWhlYWRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGRhdGEtdGFibGUtZGl2aWRlci1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuMDUpO1xuJGRhdGEtdGFibGUtaG92ZXItY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjIpO1xuJGRhdGEtdGFibGUtc2VsZWN0aW9uLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcblxuJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmc6IDE2cHg7XG5cbi8qIFRPT0xUSVAgKi9cbiR0b29sdGlwLWZvbnQtc2l6ZTogMTJweDtcbiR0YWJsZS10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6IDVweDtcbiR0YWJsZS10b29sdGlwLWhvcml6b250YWwtcGFkZGluZzogOHB4O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogV0lER0VUUyAmIENPTVBPTkVOVFMgKi9cblxuLyogVHJlbmRpbmcgKi9cbiR0cmVuZGluZy1hcnJvdy1zaXplOiA0OHB4O1xuJHRyZW5kaW5nLWFycm93LXVwLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiR0cmVuZGluZy1hcnJvdy1kb3duLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiBsYWJlbCAqL1xuJGxhYmVsLWhlaWdodDogMTJweDtcbiRsYWJlbC1wYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XG5cbi8qIGNoYXJ0cyAqL1xuJHBpZS1jaGFydC1oZWlnaHQ6IDIyOHB4O1xuXG4kbGluZS1jaGFydC1oZWlnaHQ6IDI4MHB4O1xuJGxpbmUtY2hhcnQtd2lkdGg6IDEwMCU7XG4kbGluZS1jaGFydC1heGlzLWxhYmVsLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcbiRsaW5lLWNoYXJ0LWd1aWRlbGluZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kbGluZS1jaGFydC1ndWlkZWxpbmUtd2lkdGg6IDAuNXB4O1xuXG4kbGVnZW5kLW1hcmstc2l6ZTogOHB4O1xuJGxlZ2VuZC10ZXh0LWluZGVudDogJGxlZ2VuZC1tYXJrLXNpemUgKyAxNjtcblxuLyogZW1wbG95ZXIgZm9ybSAqL1xuJGVtcGxveWVyLWZvcm0td2lkdGg6IDY3MHB4O1xuJGVtcGxveWVyLWZvcm0tY29sb3ItYnJpZ2h0ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4kZW1wbG95ZXItZm9ybS1jb2xvci1kYXJrZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiRlbXBsb3llci1mb3JtLWhvcml6b250YWwtcGFkZGluZzogMTVweDtcblxuJHdlYXRoZXItc2hhZG93LWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC40KTtcbiR3ZWF0aGVyLXNoYWRvdy00cHg6IDRweCA0cHggNHB4ICR3ZWF0aGVyLXNoYWRvdy1jb2xvcjtcblxuLyogcm93ICovXG4kcm93LWNvbC1wYWRkaW5nOiAzMHB4O1xuXG4vKiBzY3JvbGwgKi9cbiRzY3JvbGxiYXItdGh1bWI6ICRjb2xvci1zbW9vdGgtZ3JheTtcbiRzY3JvbGxiYXItdHJhY2s6ICRjb2xvci1zbW9rZTtcbiIsIiRjb2xvci1kYXJrLWdyYXk6ICMzMzM7XG4kY29sb3ItZ3JheTogIzQ0NDtcbiRjb2xvci10YWJsZS1ib3JkZXI6ICM2MDYwNjA7XG4kY29sb3Itc21vb3RoLWdyYXk6ICM5OTk7XG4kY29sb3Itc21va2U6ICM2NjY7XG4kY29sb3ItcmVkOiAjZjQ0MzM2O1xuJGNvbG9yLWxpZ2h0LWJsdWU6ICMwM2E5ZjQ7XG4kY29sb3Itb3JhbmdlOiAjZmZjMTA3O1xuJGNvbG9yLWFtYmVyOiAjZmY5ODAwO1xuJGNvbG9yLXRlYWw6ICMwMGJjZDQ7XG4kY29sb3ItcHVycGxlOiAjNzcyNmQzO1xuJGNvbG9yLWdyZWVuOiAjMDBkNDVhO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWFsdG86ICNkZGQ7XG4kY29sb3Itc2lsdmVyLWNoYWxpY2U6ICNhYWE7XG4kY29sb3ItY2hhbWJyYXk6ICMzYjU5OTg7XG4kY29sb3ItY2VsdXJlYW46ICMwMGFiZjE7XG4kY29sb3ItbG9jaG1hcmE6ICMwMDgzYmU7XG4kY29sb3ItZnJvbHk6ICNmMjY3OTg7XG4kY29sb3ItZG9kZ2VyLWJsdWU6ICM0MTc2ZmI7XG4kY29sb3ItZG92ZS1ncmF5OiAjNjc2NzY3O1xuJGNvbG9yLXByaW1hcnk6IHJnYigwLCAxODgsIDIxMik7XG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjQ0LCA2NywgNTQpO1xuJGNvbG9yLWJhYnktYmx1ZTogcmdiKDExNiwgMTk5LCAyMDkpO1xuJGNvbG9yLWNlcnVsZWFuOiByZ2IoODAsIDE1MCwgMjE1KTtcbiRjb2xvci1taW50OiByZ2IoOTYsIDE5NiwgMTUwKTtcbiRjb2xvci1ncmV5LTUwMDogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTAwfSlcIik7XG5cbi50ZXh0LWNvbG9yLS1zbW9rZSB7XG4gIGNvbG9yOiAkY29sb3Itc21va2U7XG59XG5cbi5jb2xvci0tZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tZGFyay1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstZ3JheTtcbn1cblxuLmNvbG9yLS1zbW9vdGgtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zbW9vdGgtZ3JheSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb2xvci0tc21vb3RoLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLXNtb290aC1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1vcmFuZ2Uge1xuICBjb2xvcjogJGNvbG9yLW9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItLWFtYmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFtYmVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1hbWJlciB7XG4gIGNvbG9yOiAkY29sb3ItYW1iZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbiAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tZ3JlZW4ge1xuICBjb2xvcjogJGNvbG9yLWdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tbGlnaHQtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1saWdodC1ibHVlIHtcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tcHVycGxlIHtcbiAgY29sb3I6ICRjb2xvci1wdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS10ZWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlYWwgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXRleHQtLXRlYWwge1xuICBjb2xvcjogJGNvbG9yLXRlYWwgIWltcG9ydGFudDtcbn1cbiIsIkBpbXBvcnQgJ350aGVtZS9oZWxwZXJzJztcblxuOmhvc3Qge1xuICAubWRsLWNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5tZGwtY2FyZF9fYWN0aW9ucyB7XG4gICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tZGwtYnV0dG9uLS1mYWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIxMnB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLm1kbC1jZWxsIHtcbiAgICAmOm50aC1sYXN0LW9mLXR5cGUoMSksXG4gICAgJjpudGgtbGFzdC1vZi10eXBlKDIpLFxuICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgzKSB7XG4gICAgICAubWRsLWNhcmRfX3RpdGxlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgICAubWRsLWNhcmRfX3RpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgxKSAubWRsLWNhcmRfX3RpdGxlIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjQpKSxcbiAgICAgICAgdXJsKFwiI3skaW1hZ2UtcGF0aH0vc2FvX3BhdWxvLmpwZ1wiKTtcbiAgICB9XG5cbiAgICAmOm50aC1sYXN0LW9mLXR5cGUoMikgLm1kbC1jYXJkX190aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgICAgIHVybChcIiN7JGltYWdlLXBhdGh9L3Rva3lvLmpwZ1wiKTtcbiAgICB9XG5cbiAgICAmOm50aC1sYXN0LW9mLXR5cGUoMykgLm1kbC1jYXJkX190aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC40KSksXG4gICAgICAgIHVybChcIiN7JGltYWdlLXBhdGh9L2lzdGFuYnVsLmpwZ1wiKTtcbiAgICB9XG4gIH1cblxuICBzbWFsbCB7XG4gICAgY29sb3I6ICRjb2xvci1zaWx2ZXItY2hhbGljZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgYiB7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/ui/cards/cards.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.ts ***!
  \***************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CardsComponent = /** @class */ (function (_super) {
    __extends(CardsComponent, _super);
    function CardsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiCards = true;
        return _this;
    }
    CardsComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        uiCards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ui-cards',] }]
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/cards/cards.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cards.component.scss */ "./src/app/pages/ui/cards/cards.component.scss")).default]
        })
    ], CardsComponent);
    return CardsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/cards/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ui/cards/index.ts ***!
  \*****************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.component */ "./src/app/pages/ui/cards/cards.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return _cards_component__WEBPACK_IMPORTED_MODULE_0__["CardsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/colors/colors.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/colors/colors.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666;\n}\n.color--gray {\n  background-color: #444 !important;\n}\n.color--dark-gray {\n  background-color: #333;\n}\n.color--smooth-gray {\n  background-color: #999 !important;\n}\n.text-color--smooth-gray {\n  color: #999 !important;\n}\n.color--red {\n  background-color: #f44336 !important;\n}\n.color-text--red {\n  color: #f44336 !important;\n}\n.color--orange {\n  background-color: #ffc107 !important;\n}\n.color-text--orange {\n  color: #ffc107 !important;\n}\n.color--amber {\n  background-color: #ff9800 !important;\n}\n.color-text--amber {\n  color: #ff9800 !important;\n}\n.color--green {\n  background-color: #00d45a !important;\n}\n.color-text--green {\n  color: #00d45a !important;\n}\n.color--light-blue {\n  background-color: #03a9f4 !important;\n}\n.color-text--light-blue {\n  color: #03a9f4 !important;\n}\n.color--purple {\n  background-color: #7726d3 !important;\n}\n.color-text--purple {\n  color: #7726d3 !important;\n}\n.color--teal {\n  background-color: #00bcd4 !important;\n}\n.color-text--teal {\n  color: #00bcd4 !important;\n}\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n:host h3 {\n  text-align: center;\n  opacity: 0.2;\n}\n:host .teal .mdl-card__supporting-text {\n  background: #00bcd4;\n}\n:host .red .mdl-card__supporting-text {\n  background: #f44336;\n}\n:host .green .mdl-card__supporting-text {\n  background: #00d45a;\n}\n:host .gray .mdl-card__supporting-text {\n  background: #444;\n}\n:host .orange .mdl-card__supporting-text {\n  background: #ffc107;\n}\n:host .purple .mdl-card__supporting-text {\n  background: #7726d3;\n}\n:host .light-blue .mdl-card__supporting-text {\n  background: #03a9f4;\n}\n:host .dark-gray .mdl-card__title {\n  background: #444;\n}\n:host .dark-gray .mdl-card__supporting-text {\n  background: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24tbGl0ZS9zcmMvX2Z1bmN0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWxpdGUvc3JjL19jb2xvci1kZWZpbml0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9wYWxldHRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VpL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUNBQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdCQTs7dUNBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQW1DQSx1Q0FBQTtBQUVBOzs7Ozs7Ozs7Q0FBQTtBQWFBLG1DQUFBO0FBRUE7Ozs7O0VBQUE7QUN2RUE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkEsMkNBQUE7QUFpa0JBLGdCQUFBO0FGamxCQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQ2lGQSxtQ0FBQTtBQUdBLDJDQUFBO0FBOEJBLHVDQUFBO0FBZ0JBLHVDQUFBO0FBRUEsNkNBQUE7QUFrQ0EseUNBQUE7QUFRQSwwQ0FBQTtBQU1BLDBDQUFBO0FBSUEsbUNBQUE7QUFxQkEseUNBQUE7QUFPQSx1Q0FBQTtBQVFBLHFDQUFBO0FBWUEsb0NBQUE7QUFTQSx3Q0FBQTtBQVVBLGlDQUFBO0FBU0EsbUNBQUE7QUFPQSxtQ0FBQTtBQU1BLGdDQUFBO0FBT0EsZ0NBQUE7QUFhQSx5Q0FBQTtBQUlBLHFDQUFBO0FBS0EsbUNBQUE7QUFTQSxjQUFBO0FBWUEsV0FBQTtBQVlBLFlBQUE7QUFnQkEsVUFBQTtBQVdBLFNBQUE7QUFLQSxTQUFBO0FBZUEsV0FBQTtBQTZCQSxnQkFBQTtBQU1BLFdBQUE7QUFFQSxjQUFBO0FBT0EsY0FBQTtBQU1BLGFBQUE7QUFXQSxTQUFBO0FBRUEsb0JBQUE7QUEwQkEsZ0JBQUE7QUFLQSxXQUFBO0FBQ0E7Ozs7RUFBQTtBQW1CQSxjQUFBO0FBUUEsYUFBQTtBQUdBLFVBQUE7QUFVQSxZQUFBO0FBTUEsU0FBQTtBQXFCQSxlQUFBO0FBNkJBLFdBQUE7QUFHQSxhQUFBO0FBT0EsWUFBQTtBQUlBLFNBQUE7QUUza0JBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBLGVBQUE7QUErTUEsWUFBQTtBQTZDQSxlQUFBO0FBc0JBLFdBQUE7QURsU0E7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkEsMkNBQUE7QUFpa0JBLGdCQUFBO0FBamxCQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdCQSwyQ0FBQTtBQWlrQkEsZ0JBQUE7QUUva0JBLG1DQUFBO0FBSUEsMkNBQUE7QUN1QkE7RUFDRSxXQTFCWTtBQzhOZDtBRGpNQTtFQUNFLGlDQUFBO0FDb01GO0FEak1BO0VBQ0Usc0JBdENnQjtBQzBPbEI7QURqTUE7RUFDRSxpQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHNCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRjlSQSx1Q0FBQTtBQUdBLHVDQUFBO0FBRUEsNkNBQUE7QUFvQkEseUNBQUE7QUFFQSwwQ0FBQTtBQUVBLDBDQUFBO0FBRUEsbUNBQUE7QUF3QkEseUNBQUE7QUFFQSx1Q0FBQTtBQUlBLHFDQUFBO0FBRUEsb0NBQUE7QUFFQSx3Q0FBQTtBQVlBLGlDQUFBO0FBZ0JBLG1DQUFBO0FBS0EsbUNBQUE7QUFJQSxnQ0FBQTtBQVNBLGdDQUFBO0FBU0EseUNBQUE7QUFTQSxxQ0FBQTtBQUdBLG1DQUFBO0FBRUEsY0FBQTtBQUVBLFdBQUE7QUFHQSxZQUFBO0FBTUEsVUFBQTtBQUlBLFNBQUE7QUFFQSxTQUFBO0FBUUEsV0FBQTtBQU1BLFNBQUE7QUFFQSxnQkFBQTtBQUVBLFdBQUE7QUFFQSxnQkFBQTtBQUVBLGdCQUFBO0FBRUEsYUFBQTtBQUtBLFNBQUE7QUFFQSxvQkFBQTtBQU9BLGdCQUFBO0FBRUEsV0FBQTtBQUdBLGNBQUE7QUFFQSxhQUFBO0FBRUEsVUFBQTtBQUlBLFlBQUE7QUFFQSxTQUFBO0FBV0EsZUFBQTtBQVlBLFlBQUE7QUFPQSx5QkFBQTtBQUVBLGFBQUE7QUFLQSxVQUFBO0FBSUEsV0FBQTtBQVlBLGtCQUFBO0FBU0EsUUFBQTtBQUdBLFdBQUE7QUV0UkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUE2Vko7QUF6Vkk7RUFDRSxtQkRETztBQzRWYjtBQXRWSTtFQUNFLG1CRFhNO0FDbVdaO0FBblZJO0VBQ0UsbUJEWFE7QUNnV2Q7QUFoVkk7RUFDRSxnQkQzQk87QUM2V2I7QUE3VUk7RUFDRSxtQkQzQlM7QUMwV2Y7QUExVUk7RUFDRSxtQkQ5QlM7QUMwV2Y7QUF2VUk7RUFDRSxtQkR4Q2E7QUNpWG5CO0FBcFVJO0VBQ0UsZ0JEbkRPO0FDeVhiO0FBblVJO0VBQ0UsZ0JEeERZO0FDNlhsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5AZnVuY3Rpb24gc3RyaXAtdW5pdHMoJG51bWJlcikge1xuICBAcmV0dXJuICRudW1iZXIgLyAoJG51bWJlciAqIDAgKyAxKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4gICAgJENPTlRFTlRTXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBTVFlMRSBHVUlERSBWQVJJQUJMRVMtLS0tLS0tLS0tLS0tLS0tLS1EZWNsYXJhdGlvbnMgb2YgU2FzcyB2YXJpYWJsZXNcbiAqIC0tLS0tVHlwb2dyYXBoeVxuICogLS0tLS1Db2xvcnNcbiAqIC0tLS0tVGV4dGZpZWxkXG4gKiAtLS0tLVN3aXRjaFxuICogLS0tLS1TcGlubmVyXG4gKiAtLS0tLVJhZGlvXG4gKiAtLS0tLU1lbnVcbiAqIC0tLS0tTGlzdFxuICogLS0tLS1MYXlvdXRcbiAqIC0tLS0tSWNvbiB0b2dnbGVzXG4gKiAtLS0tLUZvb3RlclxuICogLS0tLS1Db2x1bW5cbiAqIC0tLS0tQ2hlY2tib3hcbiAqIC0tLS0tQ2FyZFxuICogLS0tLS1CdXR0b25cbiAqIC0tLS0tQW5pbWF0aW9uXG4gKiAtLS0tLVByb2dyZXNzXG4gKiAtLS0tLUJhZGdlXG4gKiAtLS0tLVNoYWRvd3NcbiAqIC0tLS0tR3JpZFxuICogLS0tLS1EYXRhIHRhYmxlXG4gKiAtLS0tLURpYWxvZ1xuICogLS0tLS1TbmFja2JhclxuICogLS0tLS1Ub29sdGlwXG4gKiAtLS0tLUNoaXBcbiAqXG4gKiBFdmVuIHRob3VnaCBhbGwgdmFyaWFibGVzIGhhdmUgdGhlIGAhZGVmYXVsdGAgZGlyZWN0aXZlLCBtb3N0IG9mIHRoZW1cbiAqIHNob3VsZCBub3QgYmUgY2hhbmdlZCBhcyB0aGV5IGFyZSBkZXBlbmRlbnQgb25lIGFub3RoZXIuIFRoaXMgY2FuIGNhdXNlXG4gKiB2aXN1YWwgZGlzdG9ydGlvbnMgKGxpa2UgYWxpZ25tZW50IGlzc3VlcykgdGhhdCBhcmUgaGFyZCB0byB0cmFjayBkb3duXG4gKiBhbmQgZml4LlxuICovXG5cblxuLyogPT09PT09PT09PSAgVFlQT0dSQVBIWSAgPT09PT09PT09PSAqL1xuXG4vKiBXZSdyZSBzcGxpdHRpbmcgZm9udHMgaW50byBcInByZWZlcnJlZFwiIGFuZCBcInBlcmZvcm1hbmNlXCIgaW4gb3JkZXIgdG8gb3B0aW1pemVcbiAgIHBhZ2UgbG9hZGluZy4gRm9yIGltcG9ydGFudCB0ZXh0LCBzdWNoIGFzIHRoZSBib2R5LCB3ZSB3YW50IGl0IHRvIGxvYWRcbiAgIGltbWVkaWF0ZWx5IGFuZCBub3Qgd2FpdCBmb3IgdGhlIHdlYiBmb250IGxvYWQsIHdoZXJlYXMgZm9yIG90aGVyIHNlY3Rpb25zLFxuICAgc3VjaCBhcyBoZWFkZXJzIGFuZCB0aXRsZXMsIHdlJ3JlIE9LIHdpdGggdGhpbmdzIHRha2luZyBhIGJpdCBsb25nZXIgdG8gbG9hZC5cbiAgIFdlIGRvIGhhdmUgc29tZSBvcHRpb25hbCBjbGFzc2VzIGFuZCBwYXJhbWV0ZXJzIGluIHRoZSBtaXhpbnMsIGluIGNhc2UgeW91XG4gICBkZWZpbml0ZWx5IHdhbnQgdG8gbWFrZSBzdXJlIHlvdSdyZSB1c2luZyB0aGUgcHJlZmVycmVkIGZvbnQgYW5kIGRvbid0IG1pbmRcbiAgIHRoZSBwZXJmb3JtYW5jZSBoaXQuXG4gICBXZSBzaG91bGQgYmUgYWJsZSB0byBpbXByb3ZlIG9uIHRoaXMgb25jZSBDU1MgRm9udCBMb2FkaW5nIEwzIGJlY29tZXMgbW9yZVxuICAgd2lkZWx5IGF2YWlsYWJsZS5cbiovXG4kcHJlZmVycmVkX2ZvbnQ6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRwZXJmb3JtYW5jZV9mb250OiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgQ09MT1JTICA9PT09PT09PT09ICovXG5cbi8qKlxuKlxuKiBNYXRlcmlhbCBkZXNpZ24gY29sb3IgcGFsZXR0ZXMuXG4qIEBzZWUgaHR0cDovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL3N0eWxlL2NvbG9yLmh0bWxcbipcbioqL1xuXG5AaW1wb3J0IFwiY29sb3ItZGVmaW5pdGlvbnNcIjtcbkBpbXBvcnQgXCJmdW5jdGlvbnNcIjtcblxuLyogPT09PT09PT09PSAgSU1BR0VTICA9PT09PT09PT09ICovXG4kaW1hZ2VfcGF0aDogJy9pbWFnZXMnICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDb2xvciAmIFRoZW1lcyAgPT09PT09PT09PSAqL1xuXG4vLyBEZWZpbmUgd2hldGhlciBpbmRpdmlkdWFsIGNvbG9yIHBhbGV0dGUgaXRlbXMgc2hvdWxkIGhhdmUgY2xhc3NlcyBjcmVhdGVkLlxuLy8gU2V0dGluZyB0aGlzIHRvIHRydWUgd2lsbCByZW1vdmUgaW5kaXZpZHVhbCBjb2xvciBjbGFzc2VzIGZvciBlYWNoIGNvbG9yIGluIHRoZSBwYWxldHRlcy5cbi8vIFRvIGltcHJvdmUgb3ZlcmFsbCBwZXJmb3JtYW5jZSAoYXNzdW1pbmcgdGhleSBhcmVuJ3QgdXNlZCkgYnk6XG4vLyAqIFNhdmluZyBzZXJ2ZXIgYmFuZHdpZHRoIHNlbmRpbmcgdGhlIGV4dHJhIGNsYXNzZXNcbi8vICogU2F2ZSBjbGllbnQgY29tcHV0YXRpb24gYWdhaW5zdCB0aGUgY2xhc3Nlc1xuLy8gaXQgaXMgUkVDT01NRU5ERUQgeW91IHNldCB0aGlzIHRvIHRydWUuXG4kdHJpbS1jb2xvci1jbGFzc2VzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gVXNlIGNvbG9yIHByaW1hcmlseSBmb3IgZW1waGFzaXMuIENob29zZSBjb2xvcnMgdGhhdCBmaXQgd2l0aFxuLy8geW91ciBicmFuZCBhbmQgcHJvdmlkZSBnb29kIGNvbnRyYXN0IGJldHdlZW4gdmlzdWFsIGNvbXBvbmVudHMuXG4kY29sb3ItcHJpbWFyeTogJHBhbGV0dGUtaW5kaWdvLTUwMCAhZGVmYXVsdDtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICRwYWxldHRlLWluZGlnby03MDAgIWRlZmF1bHQ7XG4kY29sb3ItYWNjZW50OiAkcGFsZXR0ZS1waW5rLUEyMDAgIWRlZmF1bHQ7XG5cbi8vIE91ciBwcmltYXJ5IGlzIGRhcmssIHNvIHVzZSAkY29sb3ItZGFyay1jb250cmFzdCBmb3Igb3ZlcmxhaWQgdGV4dC5cbiRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAkY29sb3ItZGFyay1jb250cmFzdCAhZGVmYXVsdDtcbi8vIE91ciBhY2NlbnQgaXMgZGFyaywgc28gdXNlICRjb2xvci1kYXJrLWNvbnRyYXN0IGZvciBvdmVybGFpZCB0ZXh0LlxuJGNvbG9yLWFjY2VudC1jb250cmFzdDogJGNvbG9yLWRhcmstY29udHJhc3QgIWRlZmF1bHQ7XG5cbi8vIFJlcGxhY2UgYWxsIGNvbG9ycyB3aXRoIHBsYWNlaG9sZGVycyBpZiB3ZSdyZSBnZW5lcmF0aW5nIGEgdGVtcGxhdGUuXG5AaWYgJHN0eWxlZ3VpZGUtZ2VuZXJhdGUtdGVtcGxhdGUgPT0gdHJ1ZSB7XG4gICRjb2xvci1wcmltYXJ5OiAnJGNvbG9yLXByaW1hcnknO1xuICAkY29sb3ItcHJpbWFyeS1kYXJrOiAnJGNvbG9yLXByaW1hcnktZGFyayc7XG4gICRjb2xvci1hY2NlbnQ6ICckY29sb3ItYWNjZW50JztcbiAgJGNvbG9yLXByaW1hcnktY29udHJhc3Q6ICckY29sb3ItcHJpbWFyeS1jb250cmFzdCc7XG4gICRjb2xvci1hY2NlbnQtY29udHJhc3Q6ICckY29sb3ItYWNjZW50LWNvbnRyYXN0Jztcbn1cblxuLyogPT09PT09PT09PSAgVHlwb2dyYXBoeSAgPT09PT09PT09PSAqL1xuXG4vLyBXZSB1c2UgdGhlIGZvbGxvd2luZyBkZWZhdWx0IGNvbG9yIHN0eWxlczogdGV4dC1jb2xvci1wcmltYXJ5IGFuZFxuLy8gdGV4dC1jb2xvci1zZWNvbmRhcnkuIEZvciBsaWdodCB0aGVtZXMsIHVzZSB0ZXh0LWNvbG9yLXByaW1hcnktaW52ZXJzZVxuLy8gYW5kIHRleHQtY29sb3Itc2Vjb25kYXJ5LWludmVyc2UuXG5cbiR0ZXh0LWNvbG9yLXByaW1hcnk6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC44NylcIikgIWRlZmF1bHQ7XG4kdGV4dC1saW5rLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuXG4vLyBEZWZpbmUgd2hldGhlciB0byB0YXJnZXQgZWxlbWVudHMgZGlyZWN0bHkgZm9yIHR5cG9ncmFwaGljIGVuaGFuY2VtZW50cy5cbi8vIFR1cm5pbmcgdGhpcyBvZmYgbWVhbnMgeW91IG5lZWQgdG8gdXNlIG1kbC0qIGNsYXNzZXMgbW9yZSBvZnRlbi5cbi8vIE90aGVyIGNvbXBvbmVudHMgbWF5IGFsc28gZmFpbCB0byBhZGhlcmUgdG8gTUQgd2l0aG91dCB0aGVzZSBydWxlcy5cbi8vIEl0IGlzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHlvdSBsZWF2ZSB0aGlzIGFzIHRydWUuXG5cbiR0YXJnZXQtZWxlbWVudHMtZGlyZWN0bHk6IHRydWUgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENvbXBvbmVudHMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgU3RhbmRhcmQgQnV0dG9ucyAgPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IGJ1dHRvbiBjb2xvcnMuXG4kYnV0dG9uLXByaW1hcnktY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JHBhbGV0dGUtZ3JleS01MDB9LCAwLjIwKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWJsYWNrfSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWhvdmVyLWNvbG9yOiAkYnV0dG9uLXByaW1hcnktY29sb3IgIWRlZmF1bHQ7XG4kYnV0dG9uLWFjdGl2ZS1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skcGFsZXR0ZS1ncmV5LTUwMH0sIDAuNDApXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1mb2N1cy1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcblxuLy8gQ29sb3JlZCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1wcmltYXJ5LWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLXNlY29uZGFyeS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1ob3Zlci1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1hY3RpdmUtY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZm9jdXMtY29sb3ItYWx0OiAkYnV0dG9uLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBSaXBwbGUgY29sb3IgZm9yIGNvbG9yZWQgcmFpc2VkIGJ1dHRvbnMuXG4kYnV0dG9uLXJpcHBsZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuXG4vLyBEaXNhYmxlZCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1wcmltYXJ5LWNvbG9yLWRpc2FibGVkOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1zZWNvbmRhcnktY29sb3ItZGlzYWJsZWQ6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8vIEZBQiBjb2xvcnMgYW5kIHNpemVzLlxuJGJ1dHRvbi1mYWItY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItaG92ZXItY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItYWN0aXZlLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLXRleHQtY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudC1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItcmlwcGxlLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gSWNvbiBidXR0b24gY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24taWNvbi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNzAwfSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWljb24tZm9jdXMtY29sb3I6ICRidXR0b24tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIEljb24gVG9nZ2xlcyAgPT09PT09PT09PSAqL1xuXG4kaWNvbi10b2dnbGUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTcwMH0pXCIpICFkZWZhdWx0O1xuJGljb24tdG9nZ2xlLWZvY3VzLWNvbG9yOiAkYnV0dG9uLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuJGljb24tdG9nZ2xlLWNoZWNrZWQtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJGljb24tdG9nZ2xlLWNoZWNrZWQtZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnl9LCAwLjI2KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1kaXNhYmxlZC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjI2KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgUmFkaW8gQnV0dG9ucyAgPT09PT09PT09PSAqL1xuXG4kcmFkaW8tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHJhZGlvLW9mZi1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcbiRyYWRpby1kaXNhYmxlZC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjI2KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgUmlwcGxlIGVmZmVjdCAgPT09PT09PT09PSAqL1xuXG4kcmlwcGxlLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWxpZ2h0LWNvbnRyYXN0fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIExheW91dCAgPT09PT09PT09PSAqL1xuXG4kbGF5b3V0LW5hdi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktMzAwfSlcIikgIWRlZmF1bHQ7XG5cbi8vIERyYXdlclxuJGxheW91dC1kcmF3ZXItYmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTUwfSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1ib3JkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuJGxheW91dC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS04MDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWxpbmstYWN0aXZlLWJhY2tncm91bmQ6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItbmF2aWdhdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1saWdodC1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuXG4vLyBIZWFkZXJcbiRsYXlvdXQtaGVhZGVyLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuJGxheW91dC1oZWFkZXItbmF2LWhvdmVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNzAwfSwgMC42KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLXRhYi10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5LWNvbnRyYXN0fSwgMC42KVwiKSAhZGVmYXVsdDtcblxuLy8gVGFic1xuJGxheW91dC1oZWFkZXItdGFiLWhpZ2hsaWdodDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgQ29udGVudCBUYWJzICA9PT09PT09PT09ICovXG5cbiR0YWItaGlnaGxpZ2h0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiR0YWItdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcbiR0YWItYWN0aXZlLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC44NylcIikgIWRlZmF1bHQ7XG4kdGFiLWJvcmRlci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktMzAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENoZWNrYm94ZXMgID09PT09PT09PT0gKi9cblxuJGNoZWNrYm94LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRjaGVja2JveC1vZmYtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnl9LCAwLjI2KVwiKSAhZGVmYXVsdDtcbiRjaGVja2JveC1pbWFnZS1wYXRoOiAkaW1hZ2VfcGF0aDtcblxuLyogPT09PT09PT09PSAgU3dpdGNoZXMgID09PT09PT09PT0gKi9cblxuJHN3aXRjaC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kc3dpdGNoLWZhZGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kc3dpdGNoLXRodW1iLWNvbG9yOiAkc3dpdGNoLWNvbG9yICFkZWZhdWx0O1xuJHN3aXRjaC10cmFjay1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeX0sIDAuNSlcIikgIWRlZmF1bHQ7XG5cbiRzd2l0Y2gtb2ZmLXRodW1iLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS01MH0pXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1vZmYtdHJhY2stY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kc3dpdGNoLWRpc2FibGVkLXRodW1iLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS00MDB9KVwiKSAhZGVmYXVsdDtcbiRzd2l0Y2gtZGlzYWJsZWQtdHJhY2stY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFNwaW5uZXIgID09PT09PT09PT0gKi9cblxuJHNwaW5uZXItY29sb3ItMTogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWJsdWUtNDAwfSlcIikgIWRlZmF1bHQ7XG4kc3Bpbm5lci1jb2xvci0yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtcmVkLTUwMH0pXCIpICFkZWZhdWx0O1xuJHNwaW5uZXItY29sb3ItMzogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXllbGxvdy02MDB9KVwiKSAhZGVmYXVsdDtcbiRzcGlubmVyLWNvbG9yLTQ6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmVlbi01MDB9KVwiKSAhZGVmYXVsdDtcblxuJHNwaW5uZXItc2luZ2xlLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgVGV4dCBmaWVsZHMgID09PT09PT09PT0gKi9cblxuJGlucHV0LXRleHQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1sYWJlbC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjI2KVwiKSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LWJvdHRvbS1ib3JkZXItY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1oaWdobGlnaHQtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZGlzYWJsZWQtY29sb3I6ICRpbnB1dC10ZXh0LWJvdHRvbS1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1kaXNhYmxlZC10ZXh0LWNvbG9yOiAkaW5wdXQtdGV4dC1sYWJlbC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LWVycm9yLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtcmVkLUE3MDB9KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgQ2FyZCAgPT09PT09PT09PSAqL1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXdoaXRlfSlcIikgIWRlZmF1bHQ7XG4kY2FyZC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWJsYWNrfSlcIikgIWRlZmF1bHQ7XG4kY2FyZC1pbWFnZS1wbGFjZWhvbGRlci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRjYXJkLXN1cHBvcnRpbmctdGV4dC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuNTQpXCIpICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSkgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgU2xpZGVycyA9PT09PT09PT09ICovXG5cbiRyYW5nZS1iZy1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjI2KVwiKSAhZGVmYXVsdDtcbiRyYW5nZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtZmFkZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnl9LCAwLjI2KVwiKSAhZGVmYXVsdDtcbiRyYW5nZS1iZy1mb2N1cy1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSBQcm9ncmVzcyA9PT09PT09PT09ICovXG4kcHJvZ3Jlc3MtbWFpbi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3Mtc2Vjb25kYXJ5LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5LWNvbnRyYXN0fSwgMC43KVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mYWxsYmFjay1idWZmZXItY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9LCAwLjkpXCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWltYWdlLXBhdGg6ICRpbWFnZV9wYXRoO1xuXG4vKiA9PT09PT09PT09ICBMaXN0ID09PT09PT09PT0gKi9cblxuJGxpc3QtbWFpbi10ZXh0LXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC44NylcIikgIWRlZmF1bHQ7XG4kbGlzdC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcbiRsaXN0LWljb24tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTYwMH0pXCIpICFkZWZhdWx0O1xuJGxpc3QtYXZhdGFyLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgSXRlbSA9PT09PT09PT09ICovXG5cbi8vIERlZmF1bHQgSXRlbSBDb2xvcnNcbiRkZWZhdWx0LWl0ZW0tdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjg3KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tb3V0bGluZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLWhvdmVyLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0yMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tZm9jdXMtYmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTIwMH0pXCIpICFkZWZhdWx0O1xuJGRlZmF1bHQtaXRlbS1hY3RpdmUtYmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuJGRlZmF1bHQtaXRlbS1kaXZpZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuXG4vLyBEaXNhYmxlZCBCdXR0b24gQ29sb3JzXG4kZGlzYWJsZWQtaXRlbS10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS00MDB9KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgRHJvcGRvd24gbWVudSA9PT09PT09PT09ICovXG5cbiRkZWZhdWx0LWRyb3Bkb3duLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXdoaXRlfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFRvb2x0aXBzICA9PT09PT09PT09ICovXG5cbiR0b29sdGlwLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3Itd2hpdGV9KVwiKSAhZGVmYXVsdDtcbiR0b29sdGlwLWJhY2tncm91bmQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JHBhbGV0dGUtZ3JleS03MDB9LCAwLjkpXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBGb290ZXIgID09PT09PT09PT0gKi9cblxuJGZvb3Rlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktODAwfSlcIikgIWRlZmF1bHQ7XG4kZm9vdGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS01MDB9KVwiKSAhZGVmYXVsdDtcbiRmb290ZXItaGVhZGluZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktMzAwfSlcIikgIWRlZmF1bHQ7XG4kZm9vdGVyLWJ1dHRvbi1maWxsLWNvbG9yOiAkZm9vdGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvb3Rlci11bmRlcmxpbmUtY29sb3I6ICRmb290ZXItY29sb3IgIWRlZmF1bHQ7XG5cblxuLyogVEVYVEZJRUxEICovXG5cbiRpbnB1dC10ZXh0LWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXdpZHRoOiAxMDAlICFkZWZhdWx0O1xuJGlucHV0LXRleHQtcGFkZGluZzogNHB4ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtdmVydGljYWwtc3BhY2luZzogMjBweCAhZGVmYXVsdDtcblxuJGlucHV0LXRleHQtYnV0dG9uLXNpemU6IDMycHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1mbG9hdGluZy1sYWJlbC1mb250c2l6ZTogMTJweCAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LWV4cGFuZGFibGUtaWNvbi10b3A6IDE2cHggIWRlZmF1bHQ7XG5cblxuLyogU1dJVENIICovXG5cbiRzd2l0Y2gtbGFiZWwtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJHN3aXRjaC1sYWJlbC1oZWlnaHQ6IDI0cHggIWRlZmF1bHQ7XG4kc3dpdGNoLXRyYWNrLWhlaWdodDogMTRweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stbGVuZ3RoOiAzNnB4ICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi1zaXplOiAyMHB4ICFkZWZhdWx0O1xuJHN3aXRjaC10cmFjay10b3A6ICgkc3dpdGNoLWxhYmVsLWhlaWdodCAtICRzd2l0Y2gtdHJhY2staGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG4kc3dpdGNoLXRodW1iLXRvcDogKCRzd2l0Y2gtbGFiZWwtaGVpZ2h0IC0gJHN3aXRjaC10aHVtYi1zaXplKSAvIDIgIWRlZmF1bHQ7XG4kc3dpdGNoLXJpcHBsZS1zaXplOiAkc3dpdGNoLWxhYmVsLWhlaWdodCAqIDIgIWRlZmF1bHQ7XG4kc3dpdGNoLWhlbHBlci1zaXplOiA4cHggIWRlZmF1bHQ7XG5cbi8qIFNQSU5ORVIgKi9cblxuJHNwaW5uZXItc2l6ZTogMjhweCAhZGVmYXVsdDtcbiRzcGlubmVyLXN0cm9rZS13aWR0aDogM3B4ICFkZWZhdWx0O1xuXG4vLyBBbW91bnQgb2YgY2lyY2xlIHRoZSBhcmMgdGFrZXMgdXAuXG4kc3Bpbm5lci1hcmMtc2l6ZTogMjcwZGVnICFkZWZhdWx0O1xuLy8gVGltZSBpdCB0YWtlcyB0byBleHBhbmQgYW5kIGNvbnRyYWN0IGFyYy5cbiRzcGlubmVyLWFyYy10aW1lOiAxMzMzbXMgIWRlZmF1bHQ7XG4vLyBIb3cgbXVjaCB0aGUgc3RhcnQgbG9jYXRpb24gb2YgdGhlIGFyYyBzaG91bGQgcm90YXRlIGVhY2ggdGltZS5cbiRzcGlubmVyLWFyYy1zdGFydC1yb3Q6IDIxNmRlZyAhZGVmYXVsdDtcblxuJHNwaW5uZXItZHVyYXRpb246IDM2MCAqICRzcGlubmVyLWFyYy10aW1lIC8gKFxuICAgIHN0cmlwLXVuaXRzKCRzcGlubmVyLWFyYy1zdGFydC1yb3QgKyAoMzYwZGVnIC0gJHNwaW5uZXItYXJjLXNpemUpKSk7XG5cblxuLyogUkFESU8gKi9cblxuJHJhZGlvLWxhYmVsLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRyYWRpby1sYWJlbC1oZWlnaHQ6IDI0cHggIWRlZmF1bHQ7XG4kcmFkaW8tYnV0dG9uLXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kcmFkaW8taW5uZXItbWFyZ2luOiAkcmFkaW8tYnV0dG9uLXNpemUgLyA0O1xuJHJhZGlvLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbiRyYWRpby10b3Atb2Zmc2V0OiAoJHJhZGlvLWxhYmVsLWhlaWdodCAtICRyYWRpby1idXR0b24tc2l6ZSkgLyAyO1xuJHJhZGlvLXJpcHBsZS1zaXplOiA0MnB4ICFkZWZhdWx0O1xuXG5cbi8qIE1FTlUgKi9cblxuJG1lbnUtZXhwYW5kLWR1cmF0aW9uOiAwLjNzICFkZWZhdWx0O1xuJG1lbnUtZmFkZS1kdXJhdGlvbjogMC4ycyAhZGVmYXVsdDtcblxuLyogTElTVCAqL1xuXG4kbGlzdC1ib3JkZXI6IDhweCAhZGVmYXVsdDtcbiRsaXN0LW1pbi1oZWlnaHQ6IDQ4cHggIWRlZmF1bHQ7XG4kbGlzdC1taW4tcGFkZGluZzogMTZweCAhZGVmYXVsdDtcbiRsaXN0LWJvdHRvbS1wYWRkaW5nOiAyMHB4ICFkZWZhdWx0O1xuJGxpc3QtYXZhdGFyLXRleHQtbGVmdC1kaXN0YW5jZTogNzJweCAhZGVmYXVsdDtcbiRsaXN0LWljb24tdGV4dC1sZWZ0LWRpc3RhbmNlOiA3MnB4ICFkZWZhdWx0O1xuXG4kbGlzdC1hdmF0YXItc2l6ZTogNDBweCAhZGVmYXVsdDtcbiRsaXN0LWljb24tc2l6ZTogMjRweCAhZGVmYXVsdDtcblxuJGxpc3QtdHdvLWxpbmUtaGVpZ2h0OiA3MnB4ICFkZWZhdWx0O1xuJGxpc3QtdGhyZWUtbGluZS1oZWlnaHQ6IDg4cHggIWRlZmF1bHQ7XG5cbi8qIExBWU9VVCAqL1xuXG4kbGF5b3V0LWRyYXdlci1uYXJyb3c6IDI0MHB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItd2lkZTogNDU2cHggIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci13aWR0aDogJGxheW91dC1kcmF3ZXItbmFycm93ICFkZWZhdWx0O1xuXG4kbGF5b3V0LWhlYWRlci1pY29uLXNpemU6IDMycHggIWRlZmF1bHQ7XG4kbGF5b3V0LXNjcmVlbi1zaXplLXRocmVzaG9sZDogMTAyNHB4ICFkZWZhdWx0O1xuJGxheW91dC1oZWFkZXItaWNvbi1tYXJnaW46IDI0cHggIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1idXR0b24tbW9iaWxlLXNpemU6IDMycHggIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1idXR0b24tZGVza3RvcC1zaXplOiA0OHB4ICFkZWZhdWx0O1xuXG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtcm93LWhlaWdodDogNTZweCAhZGVmYXVsdDtcbiRsYXlvdXQtbW9iaWxlLWhlYWRlci1oZWlnaHQ6ICRsYXlvdXQtaGVhZGVyLW1vYmlsZS1yb3ctaGVpZ2h0O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1yb3ctaGVpZ2h0OiA2NHB4ICFkZWZhdWx0O1xuJGxheW91dC1kZXNrdG9wLWhlYWRlci1oZWlnaHQ6ICRsYXlvdXQtaGVhZGVyLWRlc2t0b3Atcm93LWhlaWdodDtcblxuJGxheW91dC1oZWFkZXItZGVza3RvcC1iYXNlbGluZTogODBweCAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLW1vYmlsZS1iYXNlbGluZTogNzJweCAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLW1vYmlsZS1pbmRlbnQ6IDE2cHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1kZXNrdG9wLWluZGVudDogNDBweCAhZGVmYXVsdDtcblxuJGxheW91dC10YWItZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGxheW91dC10YWItYmFyLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLW1vYmlsZS1wYWRkaW5nOiAxMnB4ICFkZWZhdWx0O1xuJGxheW91dC10YWItZGVza3RvcC1wYWRkaW5nOiAyNHB4ICFkZWZhdWx0O1xuJGxheW91dC10YWItaGlnaGxpZ2h0LXRoaWNrbmVzczogMnB4ICFkZWZhdWx0O1xuXG5cbi8qIElDT04gVE9HR0xFICovXG5cbiRpY29uLXRvZ2dsZS1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGljb24tdG9nZ2xlLWZvbnQtc2l6ZTogMjRweCAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1yaXBwbGUtc2l6ZTogMzZweCAhZGVmYXVsdDtcblxuLyogRk9PVEVSICovXG5cbi8qbWVnYS1mb290ZXIqL1xuJGZvb3Rlci1taW4tcGFkZGluZzogMTZweCAhZGVmYXVsdDtcbiRmb290ZXItcGFkZGluZy1zaWRlczogNDBweCAhZGVmYXVsdDtcbiRmb290ZXItaGVhZGluZy1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctbGluZS1oZWlnaHQ6ICgxLjcgKiAkZm9vdGVyLWhlYWRpbmctZm9udC1zaXplKSAhZGVmYXVsdDtcbiRmb290ZXItYnRuLXNpemU6IDM2cHggICFkZWZhdWx0O1xuXG4vKm1pbmktZm9vdGVyKi9cbiRwYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGZvb3Rlci1oZWFkaW5nLWZvbnQtc2l6ZTogMjRweCAhZGVmYXVsdDtcbiRmb290ZXItaGVhZGluZy1saW5lLWhlaWdodDogKDEuNSAqICRmb290ZXItaGVhZGluZy1mb250LXNpemUpICFkZWZhdWx0O1xuJGZvb3Rlci1idG4tc2l6ZTogMzZweCAhZGVmYXVsdDtcblxuLyogQ0hFQ0tCT1ggKi9cblxuJGNoZWNrYm94LWxhYmVsLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRjaGVja2JveC1sYWJlbC1oZWlnaHQ6IDI0cHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtYnV0dG9uLXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtaW5uZXItbWFyZ2luOiAycHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LXRvcC1vZmZzZXQ6XG4oJGNoZWNrYm94LWxhYmVsLWhlaWdodCAtICRjaGVja2JveC1idXR0b24tc2l6ZSAtICRjaGVja2JveC1pbm5lci1tYXJnaW4pIC8gMjtcbiRjaGVja2JveC1yaXBwbGUtc2l6ZTogJGNoZWNrYm94LWxhYmVsLWhlaWdodCAqIDEuNTtcblxuLyogQ0FSRCAqL1xuXG4vKiBDYXJkIGRpbWVuc2lvbnMgKi9cbiRjYXJkLXdpZHRoOiAzMzBweCAhZGVmYXVsdDtcbiRjYXJkLWhlaWdodDogMjAwcHggIWRlZmF1bHQ7XG4kY2FyZC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XG4kY2FyZC1ob3Jpem9udGFsLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kY2FyZC12ZXJ0aWNhbC1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuXG4kY2FyZC10aXRsZS1wZXJzcGVjdGl2ZS1vcmlnaW4teDogMTY1cHggIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS1wZXJzcGVjdGl2ZS1vcmlnaW4teTogNTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtdHJhbnNmb3JtLW9yaWdpbi14OiAxNjVweCAhZGVmYXVsdDtcbiRjYXJkLXRpdGxlLXRyYW5zZm9ybS1vcmlnaW4teTogNTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtdGV4dC10cmFuc2Zvcm0tb3JpZ2luLXg6IDE0OXB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtdGV4dC10cmFuc2Zvcm0tb3JpZ2luLXk6IDQ4cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXN1cHBvcnRpbmctdGV4dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtbGluZS1oZWlnaHQ6IDE4cHggIWRlZmF1bHQ7XG5cbiRjYXJkLWFjdGlvbnMtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuXG4kY2FyZC10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiAzMDAgIWRlZmF1bHQ7XG4kY2FyZC16LWluZGV4OiAxICFkZWZhdWx0O1xuXG4vKiBDb3ZlciBpbWFnZSAqL1xuJGNhcmQtY292ZXItaW1hZ2UtaGVpZ2h0OiAxODZweCAhZGVmYXVsdDtcbiRjYXJkLWJhY2tncm91bmQtaW1hZ2UtdXJsOiAnJyAhZGVmYXVsdDtcblxuXG4vKiBCVVRUT04gKi9cbi8qKlxuICpcbiAqIERpbWVuc2lvbnNcbiAqXG4gKi9cbiRidXR0b24tbWluLXdpZHRoOiA2NHB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1oZWlnaHQ6IDM2cHggIWRlZmF1bHQ7XG4kYnV0dG9uLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kYnV0dG9uLW1hcmdpbjogNHB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1ib3JkZXItcmFkaXVzOiAycHggIWRlZmF1bHQ7XG5cbiRidXR0b24tZmFiLXNpemU6IDU2cHggIWRlZmF1bHQ7XG4kYnV0dG9uLWZhYi1zaXplLW1pbmk6IDQwcHggIWRlZmF1bHQ7XG4kYnV0dG9uLWZhYi1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG5cbiRidXR0b24taWNvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1pY29uLXNpemUtbWluaTogMjRweCAhZGVmYXVsdDtcblxuXG4vKiBBTklNQVRJT04gKi9cbiRhbmltYXRpb24tY3VydmUtZmFzdC1vdXQtc2xvdy1pbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRhbmltYXRpb24tY3VydmUtbGluZWFyLW91dC1zbG93LWluOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRhbmltYXRpb24tY3VydmUtZmFzdC1vdXQtbGluZWFyLWluOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGFuaW1hdGlvbi1jdXJ2ZS1kZWZhdWx0OiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW4gIWRlZmF1bHQ7XG5cblxuLyogUFJPR1JFU1MgKi9cbiRiYXItaGVpZ2h0OiA0cHggIWRlZmF1bHQ7XG5cbi8qIEJBREdFICovXG4kYmFkZ2UtZm9udC1zaXplOiAxMnB4ICFkZWZhdWx0O1xuJGJhZGdlLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudC1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuJGJhZGdlLWNvbG9yLWludmVyc2U6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYmFkZ2UtYmFja2dyb3VuZDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRiYWRnZS1iYWNrZ3JvdW5kLWludmVyc2U6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWFjY2VudC1jb250cmFzdH0sMC4yKVwiKSAhZGVmYXVsdDtcbiRiYWRnZS1zaXplIDogMjJweCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nOiAycHggIWRlZmF1bHQ7XG4kYmFkZ2Utb3ZlcmxhcDogMTJweCAhZGVmYXVsdDtcblxuLyogU0hBRE9XUyAqL1xuXG4kc2hhZG93LWtleS11bWJyYS1vcGFjaXR5OiAwLjIgIWRlZmF1bHQ7XG4kc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5OiAwLjE0ICFkZWZhdWx0O1xuJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5OiAwLjEyICFkZWZhdWx0O1xuXG4vKiBHUklEICovXG5cbiRncmlkLWRlc2t0b3AtY29sdW1uczogMTIgIWRlZmF1bHQ7XG4kZ3JpZC1kZXNrdG9wLWd1dHRlcjogMTZweCAhZGVmYXVsdDtcbiRncmlkLWRlc2t0b3AtbWFyZ2luOiAxNnB4ICFkZWZhdWx0O1xuXG4kZ3JpZC1kZXNrdG9wLWJyZWFrcG9pbnQ6IDg0MHB4ICFkZWZhdWx0O1xuXG4kZ3JpZC10YWJsZXQtY29sdW1uczogOCAhZGVmYXVsdDtcbiRncmlkLXRhYmxldC1ndXR0ZXI6ICRncmlkLWRlc2t0b3AtZ3V0dGVyICFkZWZhdWx0O1xuJGdyaWQtdGFibGV0LW1hcmdpbjogJGdyaWQtZGVza3RvcC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRncmlkLXRhYmxldC1icmVha3BvaW50OiA0ODBweCAhZGVmYXVsdDtcblxuJGdyaWQtcGhvbmUtY29sdW1uczogNCAhZGVmYXVsdDtcbiRncmlkLXBob25lLWd1dHRlcjogJGdyaWQtZGVza3RvcC1ndXR0ZXIgIWRlZmF1bHQ7XG4kZ3JpZC1waG9uZS1tYXJnaW46ICRncmlkLWRlc2t0b3AtbWFyZ2luICFkZWZhdWx0O1xuXG4kZ3JpZC1jZWxsLWRlZmF1bHQtY29sdW1uczogJGdyaWQtcGhvbmUtY29sdW1ucyAhZGVmYXVsdDtcbiRncmlkLW1heC1jb2x1bW5zOiAkZ3JpZC1kZXNrdG9wLWNvbHVtbnMgIWRlZmF1bHQ7XG5cbi8qIERBVEEgVEFCTEUgKi9cblxuJGRhdGEtdGFibGUtZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogMTJweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1zb3J0LWljb24tc2l6ZTogMTZweCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtaGVhZGVyLXNvcnRlZC1jb2xvcjogcmdiYSgjMDAwLCAwLjg3KSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1zb3J0ZWQtaWNvbi1ob3Zlci1jb2xvcjogcmdiYSgjMDAwLCAwLjI2KSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWRpdmlkZXItY29sb3I6IHJnYmEoIzAwMCwgMC4xMikgIWRlZmF1bHQ7XG5cbiRkYXRhLXRhYmxlLWhvdmVyLWNvbG9yOiAjZWVlZWVlICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtc2VsZWN0aW9uLWNvbG9yOiAjZTBlMGUwICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1kaXZpZGVyczogMXB4IHNvbGlkICRkYXRhLXRhYmxlLWRpdmlkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRkYXRhLXRhYmxlLXJvdy1oZWlnaHQ6IDQ4cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1sYXN0LXJvdy1oZWlnaHQ6IDU2cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItaGVpZ2h0OiA1NnB4ICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1jb2x1bW4tc3BhY2luZzogMzZweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWNvbHVtbi1wYWRkaW5nOiAkZGF0YS10YWJsZS1jb2x1bW4tc3BhY2luZyAvIDI7XG5cbiRkYXRhLXRhYmxlLWNhcmQtaGVhZGVyLWhlaWdodDogNjRweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWNhcmQtdGl0bGUtdG9wOiAyMHB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtY2FyZC1wYWRkaW5nOiAyNHB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtYnV0dG9uLXBhZGRpbmctcmlnaHQ6IDE2cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jZWxsLXRvcDogJGRhdGEtdGFibGUtY2FyZC1wYWRkaW5nIC8gMjtcblxuLyogRElBTE9HICovXG4kZGlhbG9nLWNvbnRlbnQtY29sb3I6ICRjYXJkLXN1cHBvcnRpbmctdGV4dC10ZXh0LWNvbG9yO1xuXG4vKiBTTkFDS0JBUiAqL1xuXG4vLyBIYXJkIGNvZGVkIHNpbmNlIHRoZSBjb2xvciBpcyBub3QgcHJlc2VudCBpbiBhbnkgcGFsZXR0ZS5cbiRzbmFja2Jhci1iYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyICFkZWZhdWx0O1xuJHNuYWNrYmFyLXRhYmxldC1icmVha3BvaW50OiAkZ3JpZC10YWJsZXQtYnJlYWtwb2ludDtcbiRzbmFja2Jhci1hY3Rpb24tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG5cbi8qIFRPT0xUSVAgKi9cbiR0b29sdGlwLWZvbnQtc2l6ZTogMTBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWZvbnQtc2l6ZS1sYXJnZTogMTRweCAhZGVmYXVsdDtcblxuLyogQ0hJUCAqL1xuJGNoaXAtYmctY29sb3I6IHJnYigyMjIsIDIyMiwgMjIyKSAhZGVmYXVsdDtcbiRjaGlwLWJnLWFjdGl2ZS1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpICFkZWZhdWx0O1xuJGNoaXAtaGVpZ2h0OiAzMnB4ICFkZWZhdWx0O1xuJGNoaXAtZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0OyBcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qID09PT09PT09PT0gIENvbG9yIFBhbGV0dGVzICA9PT09PT09PT09ICovXG5cbi8vIENvbG9yIG9yZGVyOiA1MCwgMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwLCA4MDAsIDkwMCwgQTEwMCwgQTIwMCxcbi8vIEE0MDAsIEE3MDAuXG5cbiRwYWxldHRlLXJlZDpcblwiMjU1LDIzNSwyMzhcIlxuXCIyNTUsMjA1LDIxMFwiXG5cIjIzOSwxNTQsMTU0XCJcblwiMjI5LDExNSwxMTVcIlxuXCIyMzksODMsODBcIlxuXCIyNDQsNjcsNTRcIlxuXCIyMjksNTcsNTNcIlxuXCIyMTEsNDcsNDdcIlxuXCIxOTgsNDAsNDBcIlxuXCIxODMsMjgsMjhcIlxuXCIyNTUsMTM4LDEyOFwiXG5cIjI1NSw4Miw4MlwiXG5cIjI1NSwyMyw2OFwiXG5cIjIxMywwLDBcIjtcblxuJHBhbGV0dGUtcmVkLTUwOiBudGgoJHBhbGV0dGUtcmVkLCAxKTtcbiRwYWxldHRlLXJlZC0xMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDIpO1xuJHBhbGV0dGUtcmVkLTIwMDogbnRoKCRwYWxldHRlLXJlZCwgMyk7XG4kcGFsZXR0ZS1yZWQtMzAwOiBudGgoJHBhbGV0dGUtcmVkLCA0KTtcbiRwYWxldHRlLXJlZC00MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDUpO1xuJHBhbGV0dGUtcmVkLTUwMDogbnRoKCRwYWxldHRlLXJlZCwgNik7XG4kcGFsZXR0ZS1yZWQtNjAwOiBudGgoJHBhbGV0dGUtcmVkLCA3KTtcbiRwYWxldHRlLXJlZC03MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDgpO1xuJHBhbGV0dGUtcmVkLTgwMDogbnRoKCRwYWxldHRlLXJlZCwgOSk7XG4kcGFsZXR0ZS1yZWQtOTAwOiBudGgoJHBhbGV0dGUtcmVkLCAxMCk7XG4kcGFsZXR0ZS1yZWQtQTEwMDogbnRoKCRwYWxldHRlLXJlZCwgMTEpO1xuJHBhbGV0dGUtcmVkLUEyMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDEyKTtcbiRwYWxldHRlLXJlZC1BNDAwOiBudGgoJHBhbGV0dGUtcmVkLCAxMyk7XG4kcGFsZXR0ZS1yZWQtQTcwMDogbnRoKCRwYWxldHRlLXJlZCwgMTQpO1xuXG4kcGFsZXR0ZS1waW5rOlxuXCIyNTIsMjI4LDIzNlwiXG5cIjI0OCwxODcsMjA4XCJcblwiMjQ0LDE0MywxNzdcIlxuXCIyNDAsOTgsMTQ2XCJcblwiMjM2LDY0LDEyMlwiXG5cIjIzMywzMCw5OVwiXG5cIjIxNiwyNyw5NlwiXG5cIjE5NCwyNCw5MVwiXG5cIjE3MywyMCw4N1wiXG5cIjEzNiwxNCw3OVwiXG5cIjI1NSwxMjgsMTcxXCJcblwiMjU1LDY0LDEyOVwiXG5cIjI0NSwwLDg3XCJcblwiMTk3LDE3LDk4XCI7XG5cbiRwYWxldHRlLXBpbmstNTA6IG50aCgkcGFsZXR0ZS1waW5rLCAxKTtcbiRwYWxldHRlLXBpbmstMTAwOiBudGgoJHBhbGV0dGUtcGluaywgMik7XG4kcGFsZXR0ZS1waW5rLTIwMDogbnRoKCRwYWxldHRlLXBpbmssIDMpO1xuJHBhbGV0dGUtcGluay0zMDA6IG50aCgkcGFsZXR0ZS1waW5rLCA0KTtcbiRwYWxldHRlLXBpbmstNDAwOiBudGgoJHBhbGV0dGUtcGluaywgNSk7XG4kcGFsZXR0ZS1waW5rLTUwMDogbnRoKCRwYWxldHRlLXBpbmssIDYpO1xuJHBhbGV0dGUtcGluay02MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA3KTtcbiRwYWxldHRlLXBpbmstNzAwOiBudGgoJHBhbGV0dGUtcGluaywgOCk7XG4kcGFsZXR0ZS1waW5rLTgwMDogbnRoKCRwYWxldHRlLXBpbmssIDkpO1xuJHBhbGV0dGUtcGluay05MDA6IG50aCgkcGFsZXR0ZS1waW5rLCAxMCk7XG4kcGFsZXR0ZS1waW5rLUExMDA6IG50aCgkcGFsZXR0ZS1waW5rLCAxMSk7XG4kcGFsZXR0ZS1waW5rLUEyMDA6IG50aCgkcGFsZXR0ZS1waW5rLCAxMik7XG4kcGFsZXR0ZS1waW5rLUE0MDA6IG50aCgkcGFsZXR0ZS1waW5rLCAxMyk7XG4kcGFsZXR0ZS1waW5rLUE3MDA6IG50aCgkcGFsZXR0ZS1waW5rLCAxNCk7XG5cbiRwYWxldHRlLXB1cnBsZTpcblwiMjQzLDIyOSwyNDVcIlxuXCIyMjUsMTkwLDIzMVwiXG5cIjIwNiwxNDcsMjE2XCJcblwiMTg2LDEwNCwyMDBcIlxuXCIxNzEsNzEsMTg4XCJcblwiMTU2LDM5LDE3NlwiXG5cIjE0MiwzNiwxNzBcIlxuXCIxMjMsMzEsMTYyXCJcblwiMTA2LDI3LDE1NFwiXG5cIjc0LDIwLDE0MFwiXG5cIjIzNCwxMjgsMjUyXCJcblwiMjI0LDY0LDI1MVwiXG5cIjIxMywwLDI0OVwiXG5cIjE3MCwwLDI1NVwiO1xuXG4kcGFsZXR0ZS1wdXJwbGUtNTA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDEpO1xuJHBhbGV0dGUtcHVycGxlLTEwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMik7XG4kcGFsZXR0ZS1wdXJwbGUtMjAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAzKTtcbiRwYWxldHRlLXB1cnBsZS0zMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDQpO1xuJHBhbGV0dGUtcHVycGxlLTQwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgNSk7XG4kcGFsZXR0ZS1wdXJwbGUtNTAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA2KTtcbiRwYWxldHRlLXB1cnBsZS02MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDcpO1xuJHBhbGV0dGUtcHVycGxlLTcwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgOCk7XG4kcGFsZXR0ZS1wdXJwbGUtODAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA5KTtcbiRwYWxldHRlLXB1cnBsZS05MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDEwKTtcbiRwYWxldHRlLXB1cnBsZS1BMTAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMSk7XG4kcGFsZXR0ZS1wdXJwbGUtQTIwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTIpO1xuJHBhbGV0dGUtcHVycGxlLUE0MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDEzKTtcbiRwYWxldHRlLXB1cnBsZS1BNzAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxNCk7XG5cbiRwYWxldHRlLWRlZXAtcHVycGxlOlxuXCIyMzcsMjMxLDI0NlwiXG5cIjIwOSwxOTYsMjMzXCJcblwiMTc5LDE1NywyMTlcIlxuXCIxNDksMTE3LDIwNVwiXG5cIjEyNiw4NywxOTRcIlxuXCIxMDMsNTgsMTgzXCJcblwiOTQsNTMsMTc3XCJcblwiODEsNDUsMTY4XCJcblwiNjksMzksMTYwXCJcblwiNDksMjcsMTQ2XCJcblwiMTc5LDEzNiwyNTVcIlxuXCIxMjQsNzcsMjU1XCJcblwiMTAxLDMxLDI1NVwiXG5cIjk4LDAsMjM0XCI7XG5cbiRwYWxldHRlLWRlZXAtcHVycGxlLTUwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDEpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtMTAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDIpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtMjAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDMpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtMzAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDQpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtNDAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDUpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtNTAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDYpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtNjAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDcpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtNzAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDgpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtODAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDkpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtOTAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDEwKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLUExMDA6IG50aCgkcGFsZXR0ZS1kZWVwLXB1cnBsZSwgMTEpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtQTIwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMik7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BNDAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDEzKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLUE3MDA6IG50aCgkcGFsZXR0ZS1kZWVwLXB1cnBsZSwgMTQpO1xuXG4kcGFsZXR0ZS1pbmRpZ286XG5cIjIzMiwyMzQsMjQ2XCJcblwiMTk3LDIwMiwyMzNcIlxuXCIxNTksMTY4LDIxOFwiXG5cIjEyMSwxMzQsMjAzXCJcblwiOTIsMTA3LDE5MlwiXG5cIjYzLDgxLDE4MVwiXG5cIjU3LDczLDE3MVwiXG5cIjQ4LDYzLDE1OVwiXG5cIjQwLDUzLDE0N1wiXG5cIjI2LDM1LDEyNlwiXG5cIjE0MCwxNTgsMjU1XCJcblwiODMsMTA5LDI1NFwiXG5cIjYxLDkwLDI1NFwiXG5cIjQ4LDc5LDI1NFwiO1xuXG4kcGFsZXR0ZS1pbmRpZ28tNTA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDEpO1xuJHBhbGV0dGUtaW5kaWdvLTEwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMik7XG4kcGFsZXR0ZS1pbmRpZ28tMjAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAzKTtcbiRwYWxldHRlLWluZGlnby0zMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDQpO1xuJHBhbGV0dGUtaW5kaWdvLTQwMDogbnRoKCRwYWxldHRlLWluZGlnbywgNSk7XG4kcGFsZXR0ZS1pbmRpZ28tNTAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA2KTtcbiRwYWxldHRlLWluZGlnby02MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDcpO1xuJHBhbGV0dGUtaW5kaWdvLTcwMDogbnRoKCRwYWxldHRlLWluZGlnbywgOCk7XG4kcGFsZXR0ZS1pbmRpZ28tODAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA5KTtcbiRwYWxldHRlLWluZGlnby05MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDEwKTtcbiRwYWxldHRlLWluZGlnby1BMTAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMSk7XG4kcGFsZXR0ZS1pbmRpZ28tQTIwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTIpO1xuJHBhbGV0dGUtaW5kaWdvLUE0MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDEzKTtcbiRwYWxldHRlLWluZGlnby1BNzAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxNCk7XG5cbiRwYWxldHRlLWJsdWU6XG5cIjIyNywyNDIsMjUzXCJcblwiMTg3LDIyMiwyNTFcIlxuXCIxNDQsMjAyLDI0OVwiXG5cIjEwMCwxODEsMjQ2XCJcblwiNjYsMTY1LDI0NVwiXG5cIjMzLDE1MCwyNDNcIlxuXCIzMCwxMzYsMjI5XCJcblwiMjUsMTE4LDIxMFwiXG5cIjIxLDEwMSwxOTJcIlxuXCIxMyw3MSwxNjFcIlxuXCIxMzAsMTc3LDI1NVwiXG5cIjY4LDEzOCwyNTVcIlxuXCI0MSwxMjEsMjU1XCJcblwiNDEsOTgsMjU1XCI7XG5cbiRwYWxldHRlLWJsdWUtNTA6IG50aCgkcGFsZXR0ZS1ibHVlLCAxKTtcbiRwYWxldHRlLWJsdWUtMTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMik7XG4kcGFsZXR0ZS1ibHVlLTIwMDogbnRoKCRwYWxldHRlLWJsdWUsIDMpO1xuJHBhbGV0dGUtYmx1ZS0zMDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA0KTtcbiRwYWxldHRlLWJsdWUtNDAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNSk7XG4kcGFsZXR0ZS1ibHVlLTUwMDogbnRoKCRwYWxldHRlLWJsdWUsIDYpO1xuJHBhbGV0dGUtYmx1ZS02MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA3KTtcbiRwYWxldHRlLWJsdWUtNzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgOCk7XG4kcGFsZXR0ZS1ibHVlLTgwMDogbnRoKCRwYWxldHRlLWJsdWUsIDkpO1xuJHBhbGV0dGUtYmx1ZS05MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAxMCk7XG4kcGFsZXR0ZS1ibHVlLUExMDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAxMSk7XG4kcGFsZXR0ZS1ibHVlLUEyMDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAxMik7XG4kcGFsZXR0ZS1ibHVlLUE0MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAxMyk7XG4kcGFsZXR0ZS1ibHVlLUE3MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAxNCk7XG5cbiRwYWxldHRlLWxpZ2h0LWJsdWU6XG5cIjIyNSwyNDUsMjU0XCJcblwiMTc5LDIyOSwyNTJcIlxuXCIxMjksMjEyLDI1MFwiXG5cIjc5LDE5NSwyNDdcIlxuXCI0MSwxODIsMjQ2XCJcblwiMywxNjksMjQ0XCJcblwiMywxNTUsMjI5XCJcblwiMiwxMzYsMjA5XCJcblwiMiwxMTksMTg5XCJcblwiMSw4NywxNTVcIlxuXCIxMjgsMjE2LDI1NVwiXG5cIjY0LDE5NiwyNTVcIlxuXCIwLDE3NiwyNTVcIlxuXCIwLDE0NSwyMzRcIjtcblxuJHBhbGV0dGUtbGlnaHQtYmx1ZS01MDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDEpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS0xMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAyKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtMjAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgMyk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTMwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDQpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS00MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA1KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNTAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgNik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTYwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDcpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS03MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA4KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtODAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgOSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTkwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDEwKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtQTEwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDExKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtQTIwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDEyKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtQTQwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDEzKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtQTcwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDE0KTtcblxuJHBhbGV0dGUtY3lhbjpcblwiMjI0LDI0NywyNTBcIlxuXCIxNzgsMjM1LDI0MlwiXG5cIjEyOCwyMjIsMjM0XCJcblwiNzcsMjA4LDIyNVwiXG5cIjM4LDE5OCwyMThcIlxuXCIwLDE4OCwyMTJcIlxuXCIwLDE3MiwxOTNcIlxuXCIwLDE1MSwxNjdcIlxuXCIwLDEzMSwxNDNcIlxuXCIwLDk2LDEwMFwiXG5cIjEzMiwyNTUsMjU1XCJcblwiMjQsMjU1LDI1NVwiXG5cIjAsMjI5LDI1NVwiXG5cIjAsMTg0LDIxMlwiO1xuXG4kcGFsZXR0ZS1jeWFuLTUwOiBudGgoJHBhbGV0dGUtY3lhbiwgMSk7XG4kcGFsZXR0ZS1jeWFuLTEwMDogbnRoKCRwYWxldHRlLWN5YW4sIDIpO1xuJHBhbGV0dGUtY3lhbi0yMDA6IG50aCgkcGFsZXR0ZS1jeWFuLCAzKTtcbiRwYWxldHRlLWN5YW4tMzAwOiBudGgoJHBhbGV0dGUtY3lhbiwgNCk7XG4kcGFsZXR0ZS1jeWFuLTQwMDogbnRoKCRwYWxldHRlLWN5YW4sIDUpO1xuJHBhbGV0dGUtY3lhbi01MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA2KTtcbiRwYWxldHRlLWN5YW4tNjAwOiBudGgoJHBhbGV0dGUtY3lhbiwgNyk7XG4kcGFsZXR0ZS1jeWFuLTcwMDogbnRoKCRwYWxldHRlLWN5YW4sIDgpO1xuJHBhbGV0dGUtY3lhbi04MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA5KTtcbiRwYWxldHRlLWN5YW4tOTAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMTApO1xuJHBhbGV0dGUtY3lhbi1BMTAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMTEpO1xuJHBhbGV0dGUtY3lhbi1BMjAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMTIpO1xuJHBhbGV0dGUtY3lhbi1BNDAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMTMpO1xuJHBhbGV0dGUtY3lhbi1BNzAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMTQpO1xuXG4kcGFsZXR0ZS10ZWFsOlxuXCIyMjQsMjQyLDI0MVwiXG5cIjE3OCwyMjMsMjE5XCJcblwiMTI4LDIwMywxOTZcIlxuXCI3NywxODIsMTcyXCJcblwiMzgsMTY2LDE1NFwiXG5cIjAsMTUwLDEzNlwiXG5cIjAsMTM3LDEyM1wiXG5cIjAsMTIxLDEwN1wiXG5cIjAsMTA1LDkyXCJcblwiMCw3Nyw2NFwiXG5cIjE2NywyNTUsMjM1XCJcblwiMTAwLDI1NSwyMThcIlxuXCIyOSwyMzMsMTgyXCJcblwiMCwxOTEsMTY1XCI7XG5cbiRwYWxldHRlLXRlYWwtNTA6IG50aCgkcGFsZXR0ZS10ZWFsLCAxKTtcbiRwYWxldHRlLXRlYWwtMTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMik7XG4kcGFsZXR0ZS10ZWFsLTIwMDogbnRoKCRwYWxldHRlLXRlYWwsIDMpO1xuJHBhbGV0dGUtdGVhbC0zMDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA0KTtcbiRwYWxldHRlLXRlYWwtNDAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNSk7XG4kcGFsZXR0ZS10ZWFsLTUwMDogbnRoKCRwYWxldHRlLXRlYWwsIDYpO1xuJHBhbGV0dGUtdGVhbC02MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA3KTtcbiRwYWxldHRlLXRlYWwtNzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgOCk7XG4kcGFsZXR0ZS10ZWFsLTgwMDogbnRoKCRwYWxldHRlLXRlYWwsIDkpO1xuJHBhbGV0dGUtdGVhbC05MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAxMCk7XG4kcGFsZXR0ZS10ZWFsLUExMDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAxMSk7XG4kcGFsZXR0ZS10ZWFsLUEyMDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAxMik7XG4kcGFsZXR0ZS10ZWFsLUE0MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAxMyk7XG4kcGFsZXR0ZS10ZWFsLUE3MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAxNCk7XG5cbiRwYWxldHRlLWdyZWVuOlxuXCIyMzIsMjQ1LDIzM1wiXG5cIjIwMCwyMzAsMjAxXCJcblwiMTY1LDIxNCwxNjdcIlxuXCIxMjksMTk5LDEzMlwiXG5cIjEwMiwxODcsMTA2XCJcblwiNzYsMTc1LDgwXCJcblwiNjcsMTYwLDcxXCJcblwiNTYsMTQyLDYwXCJcblwiNDYsMTI1LDUwXCJcblwiMjcsOTQsMzJcIlxuXCIxODUsMjQ2LDIwMlwiXG5cIjEwNSwyNDAsMTc0XCJcblwiMCwyMzAsMTE4XCJcblwiMCwyMDAsODNcIjtcblxuJHBhbGV0dGUtZ3JlZW4tNTA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMSk7XG4kcGFsZXR0ZS1ncmVlbi0xMDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMik7XG4kcGFsZXR0ZS1ncmVlbi0yMDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMyk7XG4kcGFsZXR0ZS1ncmVlbi0zMDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgNCk7XG4kcGFsZXR0ZS1ncmVlbi00MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgNSk7XG4kcGFsZXR0ZS1ncmVlbi01MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgNik7XG4kcGFsZXR0ZS1ncmVlbi02MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgNyk7XG4kcGFsZXR0ZS1ncmVlbi03MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgOCk7XG4kcGFsZXR0ZS1ncmVlbi04MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgOSk7XG4kcGFsZXR0ZS1ncmVlbi05MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTApO1xuJHBhbGV0dGUtZ3JlZW4tQTEwMDogbnRoKCRwYWxldHRlLWdyZWVuLCAxMSk7XG4kcGFsZXR0ZS1ncmVlbi1BMjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEyKTtcbiRwYWxldHRlLWdyZWVuLUE0MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTMpO1xuJHBhbGV0dGUtZ3JlZW4tQTcwMDogbnRoKCRwYWxldHRlLWdyZWVuLCAxNCk7XG5cbiRwYWxldHRlLWxpZ2h0LWdyZWVuOlxuXCIyNDEsMjQ4LDIzM1wiXG5cIjIyMCwyMzcsMjAwXCJcblwiMTk3LDIyNSwxNjVcIlxuXCIxNzQsMjEzLDEyOVwiXG5cIjE1NiwyMDQsMTAxXCJcblwiMTM5LDE5NSw3NFwiXG5cIjEyNCwxNzksNjZcIlxuXCIxMDQsMTU5LDU2XCJcblwiODUsMTM5LDQ3XCJcblwiNTEsMTA1LDMwXCJcblwiMjA0LDI1NSwxNDRcIlxuXCIxNzgsMjU1LDg5XCJcblwiMTE4LDI1NSwzXCJcblwiMTAwLDIyMSwyM1wiO1xuXG4kcGFsZXR0ZS1saWdodC1ncmVlbi01MDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTEwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAyKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTIwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAzKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTMwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCA0KTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTQwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCA1KTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTUwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCA2KTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTYwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCA3KTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTcwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCA4KTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTgwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCA5KTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLTkwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxMCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi1BMTAwOiBudGgoJHBhbGV0dGUtbGlnaHQtZ3JlZW4sIDExKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLUEyMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTIpO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTQwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxMyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi1BNzAwOiBudGgoJHBhbGV0dGUtbGlnaHQtZ3JlZW4sIDE0KTtcblxuJHBhbGV0dGUtbGltZTpcblwiMjQ5LDI1MSwyMzFcIlxuXCIyNDAsMjQ0LDE5NVwiXG5cIjIzMCwyMzgsMTU2XCJcblwiMjIwLDIzMSwxMTdcIlxuXCIyMTIsMjI1LDg3XCJcblwiMjA1LDIyMCw1N1wiXG5cIjE5MiwyMDIsNTFcIlxuXCIxNzUsMTgwLDQzXCJcblwiMTU4LDE1NywzNlwiXG5cIjEzMCwxMTksMjNcIlxuXCIyNDQsMjU1LDEyOVwiXG5cIjIzOCwyNTUsNjVcIlxuXCIxOTgsMjU1LDBcIlxuXCIxNzQsMjM0LDBcIjtcblxuJHBhbGV0dGUtbGltZS01MDogbnRoKCRwYWxldHRlLWxpbWUsIDEpO1xuJHBhbGV0dGUtbGltZS0xMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAyKTtcbiRwYWxldHRlLWxpbWUtMjAwOiBudGgoJHBhbGV0dGUtbGltZSwgMyk7XG4kcGFsZXR0ZS1saW1lLTMwMDogbnRoKCRwYWxldHRlLWxpbWUsIDQpO1xuJHBhbGV0dGUtbGltZS00MDA6IG50aCgkcGFsZXR0ZS1saW1lLCA1KTtcbiRwYWxldHRlLWxpbWUtNTAwOiBudGgoJHBhbGV0dGUtbGltZSwgNik7XG4kcGFsZXR0ZS1saW1lLTYwMDogbnRoKCRwYWxldHRlLWxpbWUsIDcpO1xuJHBhbGV0dGUtbGltZS03MDA6IG50aCgkcGFsZXR0ZS1saW1lLCA4KTtcbiRwYWxldHRlLWxpbWUtODAwOiBudGgoJHBhbGV0dGUtbGltZSwgOSk7XG4kcGFsZXR0ZS1saW1lLTkwMDogbnRoKCRwYWxldHRlLWxpbWUsIDEwKTtcbiRwYWxldHRlLWxpbWUtQTEwMDogbnRoKCRwYWxldHRlLWxpbWUsIDExKTtcbiRwYWxldHRlLWxpbWUtQTIwMDogbnRoKCRwYWxldHRlLWxpbWUsIDEyKTtcbiRwYWxldHRlLWxpbWUtQTQwMDogbnRoKCRwYWxldHRlLWxpbWUsIDEzKTtcbiRwYWxldHRlLWxpbWUtQTcwMDogbnRoKCRwYWxldHRlLWxpbWUsIDE0KTtcblxuJHBhbGV0dGUteWVsbG93OlxuXCIyNTUsMjUzLDIzMVwiXG5cIjI1NSwyNDksMTk2XCJcblwiMjU1LDI0NSwxNTdcIlxuXCIyNTUsMjQxLDExOFwiXG5cIjI1NSwyMzgsODhcIlxuXCIyNTUsMjM1LDU5XCJcblwiMjUzLDIxNiw1M1wiXG5cIjI1MSwxOTIsNDVcIlxuXCIyNDksMTY4LDM3XCJcblwiMjQ1LDEyNywyM1wiXG5cIjI1NSwyNTUsMTQxXCJcblwiMjU1LDI1NSwwXCJcblwiMjU1LDIzNCwwXCJcblwiMjU1LDIxNCwwXCI7XG5cbiRwYWxldHRlLXllbGxvdy01MDogbnRoKCRwYWxldHRlLXllbGxvdywgMSk7XG4kcGFsZXR0ZS15ZWxsb3ctMTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAyKTtcbiRwYWxldHRlLXllbGxvdy0yMDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDMpO1xuJHBhbGV0dGUteWVsbG93LTMwMDogbnRoKCRwYWxldHRlLXllbGxvdywgNCk7XG4kcGFsZXR0ZS15ZWxsb3ctNDAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA1KTtcbiRwYWxldHRlLXllbGxvdy01MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDYpO1xuJHBhbGV0dGUteWVsbG93LTYwMDogbnRoKCRwYWxldHRlLXllbGxvdywgNyk7XG4kcGFsZXR0ZS15ZWxsb3ctNzAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA4KTtcbiRwYWxldHRlLXllbGxvdy04MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDkpO1xuJHBhbGV0dGUteWVsbG93LTkwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMTApO1xuJHBhbGV0dGUteWVsbG93LUExMDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDExKTtcbiRwYWxldHRlLXllbGxvdy1BMjAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxMik7XG4kcGFsZXR0ZS15ZWxsb3ctQTQwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMTMpO1xuJHBhbGV0dGUteWVsbG93LUE3MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDE0KTtcblxuJHBhbGV0dGUtYW1iZXI6XG5cIjI1NSwyNDgsMjI1XCJcblwiMjU1LDIzNiwxNzlcIlxuXCIyNTUsMjI0LDEzMFwiXG5cIjI1NSwyMTMsNzlcIlxuXCIyNTUsMjAyLDQwXCJcblwiMjU1LDE5Myw3XCJcblwiMjU1LDE3OSwwXCJcblwiMjU1LDE2MCwwXCJcblwiMjU1LDE0MywwXCJcblwiMjU1LDExMSwwXCJcblwiMjU1LDIyOSwxMjdcIlxuXCIyNTUsMjE1LDY0XCJcblwiMjU1LDE5NiwwXCJcblwiMjU1LDE3MSwwXCI7XG5cbiRwYWxldHRlLWFtYmVyLTUwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDEpO1xuJHBhbGV0dGUtYW1iZXItMTAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDIpO1xuJHBhbGV0dGUtYW1iZXItMjAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDMpO1xuJHBhbGV0dGUtYW1iZXItMzAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDQpO1xuJHBhbGV0dGUtYW1iZXItNDAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDUpO1xuJHBhbGV0dGUtYW1iZXItNTAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDYpO1xuJHBhbGV0dGUtYW1iZXItNjAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDcpO1xuJHBhbGV0dGUtYW1iZXItNzAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDgpO1xuJHBhbGV0dGUtYW1iZXItODAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDkpO1xuJHBhbGV0dGUtYW1iZXItOTAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDEwKTtcbiRwYWxldHRlLWFtYmVyLUExMDA6IG50aCgkcGFsZXR0ZS1hbWJlciwgMTEpO1xuJHBhbGV0dGUtYW1iZXItQTIwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMik7XG4kcGFsZXR0ZS1hbWJlci1BNDAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDEzKTtcbiRwYWxldHRlLWFtYmVyLUE3MDA6IG50aCgkcGFsZXR0ZS1hbWJlciwgMTQpO1xuXG4kcGFsZXR0ZS1vcmFuZ2U6XG5cIjI1NSwyNDMsMjI0XCJcblwiMjU1LDIyNCwxNzhcIlxuXCIyNTUsMjA0LDEyOFwiXG5cIjI1NSwxODMsNzdcIlxuXCIyNTUsMTY3LDM4XCJcblwiMjU1LDE1MiwwXCJcblwiMjUxLDE0MCwwXCJcblwiMjQ1LDEyNCwwXCJcblwiMjM5LDEwOCwwXCJcblwiMjMwLDgxLDBcIlxuXCIyNTUsMjA5LDEyOFwiXG5cIjI1NSwxNzEsNjRcIlxuXCIyNTUsMTQ1LDBcIlxuXCIyNTUsMTA5LDBcIjtcblxuJHBhbGV0dGUtb3JhbmdlLTUwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAxKTtcbiRwYWxldHRlLW9yYW5nZS0xMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDIpO1xuJHBhbGV0dGUtb3JhbmdlLTIwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMyk7XG4kcGFsZXR0ZS1vcmFuZ2UtMzAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA0KTtcbiRwYWxldHRlLW9yYW5nZS00MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDUpO1xuJHBhbGV0dGUtb3JhbmdlLTUwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNik7XG4kcGFsZXR0ZS1vcmFuZ2UtNjAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA3KTtcbiRwYWxldHRlLW9yYW5nZS03MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDgpO1xuJHBhbGV0dGUtb3JhbmdlLTgwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgOSk7XG4kcGFsZXR0ZS1vcmFuZ2UtOTAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAxMCk7XG4kcGFsZXR0ZS1vcmFuZ2UtQTEwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTEpO1xuJHBhbGV0dGUtb3JhbmdlLUEyMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDEyKTtcbiRwYWxldHRlLW9yYW5nZS1BNDAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAxMyk7XG4kcGFsZXR0ZS1vcmFuZ2UtQTcwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTQpO1xuXG4kcGFsZXR0ZS1kZWVwLW9yYW5nZTpcblwiMjUxLDIzMywyMzFcIlxuXCIyNTUsMjA0LDE4OFwiXG5cIjI1NSwxNzEsMTQ1XCJcblwiMjU1LDEzOCwxMDFcIlxuXCIyNTUsMTEyLDY3XCJcblwiMjU1LDg3LDM0XCJcblwiMjQ0LDgxLDMwXCJcblwiMjMwLDc0LDI1XCJcblwiMjE2LDY3LDIxXCJcblwiMTkxLDU0LDEyXCJcblwiMjU1LDE1OCwxMjhcIlxuXCIyNTUsMTEwLDY0XCJcblwiMjU1LDYxLDBcIlxuXCIyMjEsNDQsMFwiO1xuXG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS01MDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTEwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAyKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTIwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAzKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTMwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCA0KTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTQwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCA1KTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTUwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCA2KTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTYwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCA3KTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTcwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCA4KTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTgwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCA5KTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLTkwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxMCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS1BMTAwOiBudGgoJHBhbGV0dGUtZGVlcC1vcmFuZ2UsIDExKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLUEyMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTIpO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTQwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxMyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS1BNzAwOiBudGgoJHBhbGV0dGUtZGVlcC1vcmFuZ2UsIDE0KTtcblxuXG4vLyBDb2xvciBvcmRlcjogNTAsIDEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDAuXG5cbiRwYWxldHRlLWJyb3duOlxuXCIyMzksMjM1LDIzM1wiXG5cIjIxNSwyMDQsMjAwXCJcblwiMTg4LDE3MCwxNjRcIlxuXCIxNjEsMTM2LDEyN1wiXG5cIjE0MSwxMTAsOTlcIlxuXCIxMjEsODUsNzJcIlxuXCIxMDksNzYsNjVcIlxuXCI5Myw2NCw1NVwiXG5cIjc4LDUyLDQ2XCJcblwiNjIsMzksMzVcIjtcblxuJHBhbGV0dGUtYnJvd24tNTA6IG50aCgkcGFsZXR0ZS1icm93biwgMSk7XG4kcGFsZXR0ZS1icm93bi0xMDA6IG50aCgkcGFsZXR0ZS1icm93biwgMik7XG4kcGFsZXR0ZS1icm93bi0yMDA6IG50aCgkcGFsZXR0ZS1icm93biwgMyk7XG4kcGFsZXR0ZS1icm93bi0zMDA6IG50aCgkcGFsZXR0ZS1icm93biwgNCk7XG4kcGFsZXR0ZS1icm93bi00MDA6IG50aCgkcGFsZXR0ZS1icm93biwgNSk7XG4kcGFsZXR0ZS1icm93bi01MDA6IG50aCgkcGFsZXR0ZS1icm93biwgNik7XG4kcGFsZXR0ZS1icm93bi02MDA6IG50aCgkcGFsZXR0ZS1icm93biwgNyk7XG4kcGFsZXR0ZS1icm93bi03MDA6IG50aCgkcGFsZXR0ZS1icm93biwgOCk7XG4kcGFsZXR0ZS1icm93bi04MDA6IG50aCgkcGFsZXR0ZS1icm93biwgOSk7XG4kcGFsZXR0ZS1icm93bi05MDA6IG50aCgkcGFsZXR0ZS1icm93biwgMTApO1xuXG4kcGFsZXR0ZS1ncmV5OlxuXCIyNTAsMjUwLDI1MFwiXG5cIjI0NSwyNDUsMjQ1XCJcblwiMjM4LDIzOCwyMzhcIlxuXCIyMjQsMjI0LDIyNFwiXG5cIjE4OSwxODksMTg5XCJcblwiMTU4LDE1OCwxNThcIlxuXCIxMTcsMTE3LDExN1wiXG5cIjk3LDk3LDk3XCJcblwiNjYsNjYsNjZcIlxuXCIzMywzMywzM1wiO1xuXG4kcGFsZXR0ZS1ncmV5LTUwOiBudGgoJHBhbGV0dGUtZ3JleSwgMSk7XG4kcGFsZXR0ZS1ncmV5LTEwMDogbnRoKCRwYWxldHRlLWdyZXksIDIpO1xuJHBhbGV0dGUtZ3JleS0yMDA6IG50aCgkcGFsZXR0ZS1ncmV5LCAzKTtcbiRwYWxldHRlLWdyZXktMzAwOiBudGgoJHBhbGV0dGUtZ3JleSwgNCk7XG4kcGFsZXR0ZS1ncmV5LTQwMDogbnRoKCRwYWxldHRlLWdyZXksIDUpO1xuJHBhbGV0dGUtZ3JleS01MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA2KTtcbiRwYWxldHRlLWdyZXktNjAwOiBudGgoJHBhbGV0dGUtZ3JleSwgNyk7XG4kcGFsZXR0ZS1ncmV5LTcwMDogbnRoKCRwYWxldHRlLWdyZXksIDgpO1xuJHBhbGV0dGUtZ3JleS04MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA5KTtcbiRwYWxldHRlLWdyZXktOTAwOiBudGgoJHBhbGV0dGUtZ3JleSwgMTApO1xuXG4kcGFsZXR0ZS1ibHVlLWdyZXk6XG5cIjIzNiwyMzksMjQxXCJcblwiMjA3LDIxNiwyMjBcIlxuXCIxNzYsMTkwLDE5N1wiXG5cIjE0NCwxNjQsMTc0XCJcblwiMTIwLDE0NCwxNTZcIlxuXCI5NiwxMjUsMTM5XCJcblwiODQsMTEwLDEyMlwiXG5cIjY5LDkwLDEwMFwiXG5cIjU1LDcxLDc5XCJcblwiMzgsNTAsNTZcIjtcblxuJHBhbGV0dGUtYmx1ZS1ncmV5LTUwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCAxKTtcbiRwYWxldHRlLWJsdWUtZ3JleS0xMDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDIpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTIwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMyk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktMzAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA0KTtcbiRwYWxldHRlLWJsdWUtZ3JleS00MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDUpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTUwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNik7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNjAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA3KTtcbiRwYWxldHRlLWJsdWUtZ3JleS03MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDgpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTgwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgOSk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktOTAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCAxMCk7XG5cbiRjb2xvci1ibGFjazogXCIwLDAsMFwiO1xuJGNvbG9yLXdoaXRlOiBcIjI1NSwyNTUsMjU1XCI7XG5cblxuLyogY29sb3JzLnNjc3MgKi9cbiRzdHlsZWd1aWRlLWdlbmVyYXRlLXRlbXBsYXRlOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gVGhlIHR3byBwb3NzaWJsZSBjb2xvcnMgZm9yIG92ZXJsYXllZCB0ZXh0LlxuJGNvbG9yLWRhcmstY29udHJhc3Q6ICRjb2xvci13aGl0ZSAhZGVmYXVsdDtcbiRjb2xvci1saWdodC1jb250cmFzdDogJGNvbG9yLWJsYWNrICFkZWZhdWx0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogVHlwb2dyYXBoeSAqL1xuXG5AbWl4aW4gdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpZiAkdXNlUHJlZmVycmVkIHtcbiAgICBmb250LWZhbWlseTogJHByZWZlcnJlZF9mb250O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWRpc3BsYXktNCgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTMoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTIoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWRpc3BsYXktMSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8taGVhZGxpbmUoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLXRpdGxlKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1zdWJoZWFkKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1zdWJoZWFkLTIoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJvZHktMigkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgQGlmICR1c2VQcmVmZXJyZWQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH0gQGVsc2Uge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tYm9keS0xKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWNhcHRpb24oJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiBmYWxzZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMDtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tYmxvY2txdW90ZSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG5cbiAgJjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMC41ZW07XG4gICAgY29udGVudDogJ+KAnCc7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAn4oCdJztcbiAgICBtYXJnaW4tbGVmdDogLTAuMDVlbTtcbiAgfVxuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1tZW51KCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMDtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tYnV0dG9uKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogMDtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8taWNvbigpIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogU2hhZG93cyAqL1xuXG4vLyBGb2N1cyBzaGFkb3cgbWl4aW4uXG5AbWl4aW4gZm9jdXMtc2hhZG93KCkge1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsLjE4KSwwIDhweCAxNnB4IHJnYmEoMCwwLDAsLjM2KTtcbn1cblxuQG1peGluIHNoYWRvdy0yZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5KTtcbn1cbkBtaXhpbiBzaGFkb3ctM2RwKCkge1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDFweCA4cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTRkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS11bWJyYS1vcGFjaXR5KTtcbn1cbkBtaXhpbiBzaGFkb3ctNmRwKCkge1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS11bWJyYS1vcGFjaXR5KTtcbn1cbkBtaXhpbiBzaGFkb3ctOGRwKCkge1xuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5cbkBtaXhpbiBzaGFkb3ctMTZkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS11bWJyYS1vcGFjaXR5KTtcbn1cblxuQG1peGluIHNoYWRvdy0yNGRwKCkge1xuICBib3gtc2hhZG93OiAwICA5cHggNDZweCAgOHB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDI0cHggMzhweCAgM3B4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5cbi8qIEFuaW1hdGlvbnMgKi9cblxuQG1peGluIG1hdGVyaWFsLWFuaW1hdGlvbi1mYXN0LW91dC1zbG93LWluKCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtZmFzdC1vdXQtc2xvdy1pbjtcbn1cblxuQG1peGluIG1hdGVyaWFsLWFuaW1hdGlvbi1saW5lYXItb3V0LXNsb3ctaW4oJGR1cmF0aW9uOjAuMnMpIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGFuaW1hdGlvbi1jdXJ2ZS1saW5lYXItb3V0LXNsb3ctaW47XG59XG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tZmFzdC1vdXQtbGluZWFyLWluKCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtZmFzdC1vdXQtbGluZWFyLWluO1xufVxuXG5AbWl4aW4gbWF0ZXJpYWwtYW5pbWF0aW9uLWRlZmF1bHQoJGR1cmF0aW9uOjAuMnMpIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGFuaW1hdGlvbi1jdXJ2ZS1kZWZhdWx0O1xufVxuXG4vKiBEaWFsb2cgKi9cblxuQG1peGluIGRpYWxvZy13aWR0aCgkdW5pdHM6NSkge1xuICBAaWYodHlwZV9vZigkdW5pdHMpICE9ICdudW1iZXInKSB7XG4gICAgQGVycm9yIFwiVGhlIHVuaXQgZ2l2ZW4gdG8gZGlhbG9nLXdpZHRoIHNob3VsZCBiZSBhIG51bWJlci5cIjtcbiAgfVxuICAvLyA1NmRwIGlzIHRoZSBiYXNlIHVuaXQgd2lkdGggZm9yIERpYWxvZ3MuXG4gIC8vIFdpdGggNSB1bml0cyBiZWluZyB0aGUgbnVtYmVyIG9mIHVuaXRzIGZvciBhIG1vYmlsZSBkZXZpY2UuXG4gIC8vIGh0dHBzOi8vZ29vLmdsL3NLMk81b1xuICB3aWR0aDogJHVuaXRzICogNTZweDtcbn1cbiIsIkBpbXBvcnQgXCJ+bWF0ZXJpYWwtZGVzaWduLWxpdGUvc3JjL2NvbG9yLWRlZmluaXRpb25zXCI7XG5cbi8qID09PT09PT09PT0gIElNQUdFUyAgPT09PT09PT09PSAqL1xuJGltYWdlLXBhdGg6ICcvYXNzZXRzL2ltYWdlcyc7XG4kY2hlY2tib3gtaW1hZ2UtcGF0aDogJGltYWdlLXBhdGg7XG5cbi8qID09PT09PT09PT0gIENvbG9yICYgVGhlbWVzICA9PT09PT09PT09ICovXG5AaW1wb3J0IFwiLi9wYWxldHRlXCI7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheTtcbiRiYWNrZ3JvdW5kLWNvbG9yLWhlYWRlcjogIzIwMjAyMDtcblxuLyogPT09PT09PT09PSAgVHlwb2dyYXBoeSAgPT09PT09PT09PSAqL1xuJHRleHQtY29sb3ItcHJpbWFyeTogcmdiYSgkY29sb3Itd2hpdGUsIDAuODcpO1xuXG4vKiA9PT09PT09PT09ICBDb21wb25lbnRzICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFN0YW5kYXJkIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuLy8gRGVmYXVsdCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1zZWNvbmRhcnktY29sb3I6ICRjb2xvci13aGl0ZTtcbi8vIENvbG9yZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1hbHQ6ICRjb2xvci1zZWNvbmRhcnk7XG4vLyBSaXBwbGUgY29sb3IgZm9yIGNvbG9yZWQgcmFpc2VkIGJ1dHRvbnMuXG4vLyBEaXNhYmxlZCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1wcmltYXJ5LWNvbG9yLWRpc2FibGVkOiAjNmI2YjZiO1xuLy9iYWNrZ3JvdW5kLWNvbG9yOlxuJGJ1dHRvbi1zZWNvbmRhcnktY29sb3ItZGlzYWJsZWQ6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjMpO1xuLy9jb2xvcjpcbi8vIEZBQiBjb2xvcnMgYW5kIHNpemVzLlxuJGJ1dHRvbi1mYWItY29sb3ItYWx0OiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4kYnV0dG9uLWZhYi10ZXh0LWNvbG9yLWFsdDogJGNvbG9yLXdoaXRlO1xuJGJ1dHRvbi1mYWItaG92ZXItY29sb3ItYWx0OiAjZmY0YzRjO1xuJGJ1dHRvbi1mYWItYWN0aXZlLWNvbG9yLWFsdDogI2YyM2QzZDtcbi8vIEljb24gYnV0dG9uIGNvbG9ycyBhbmQgc2l6ZXMuXG5cbi8qID09PT09PT09PT0gIEljb24gVG9nZ2xlcyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBSYWRpbyBCdXR0b25zICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFJpcHBsZSBlZmZlY3QgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgTGF5b3V0ICA9PT09PT09PT09ICovXG5cbi8vIERyYXdlclxuJGxheW91dC1kcmF3ZXItd2lkdGg6IDIzNnB4O1xuJGxheW91dC1kcmF3ZXItYmctY29sb3I6ICMyMDIwMjA7XG4kbGF5b3V0LW5hdi1jb2xvcjogIzIwMjAyMDtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgkY29sb3ItYmxhY2ssIDAuMjUpO1xuJGxheW91dC1kcmF3ZXItbmF2aWdhdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4kbGF5b3V0LW5hdi1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMjUpO1xuJGxheW91dC1kcmF3ZXItbmF2aWdhdGlvbi1saW5rLWljb24tY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjU2KTtcbiRsYXlvdXQtZHJhd2VyLWhlYWRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGxheW91dC1kcmF3ZXItaGVhZGVyLWJnLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC44NSk7XG5cbi8vIFJpZ2h0IFNpZGViYXJcbiRyaWdodC1zaWRlYmFyLXdpZHRoOiAyMzBweDtcblxuLy8gSGVhZGVyXG4kbGF5b3V0LWhlYWRlci10ZXh0LWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiRsYXlvdXQtaGVhZGVyLWJnLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1oZWFkZXI7XG4kbGF5b3V0LWhlYWRlci1uYW1lLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcbiRsYXlvdXQtaGVhZGVyLWljb24taG92ZXItY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjMpO1xuXG4vLyBUYWJzXG5cbi8qID09PT09PT09PT0gIENvbnRlbnQgVGFicyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBDaGVja2JveGVzICA9PT09PT09PT09ICovXG4kY2hlY2tib3gtb2ZmLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4kY2hlY2tib3gtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG5cbi8qID09PT09PT09PT0gIFN3aXRjaGVzICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFNwaW5uZXIgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgVGV4dCBmaWVsZHMgID09PT09PT09PT0gKi9cbiR0b2RvLWlucHV0LXRleHQtbGFiZWwtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjIpO1xuXG4kaW5wdXQtdGV4dC1oaWdobGlnaHQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGlucHV0LXRleHQtYm90dG9tLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuJGlucHV0LXRleHQtZGlzYWJsZWQtdGV4dC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuXG4vL3BsYWNlaG9sZGVyIGNvbG9yXG4kdG9kby1pbnB1dC10ZXh0LWhpZ2hsaWdodC1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNyk7XG5cbi8vYm90dG9tIGxpbmUgY29sb3JcblxuLyogPT09PT09PT09PSAgQ2FyZCAgPT09PT09PT09PSAqL1xuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4kY2FyZC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRjYXJkLXN1cHBvcnRpbmctdGV4dC10ZXh0LWNvbG9yOiAkY29sb3Itd2hpdGU7XG4kY2FyZC1zdWJ0aXRsZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kY2FyZC1ib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjA1KTtcblxuJGNhcmQtdGl0bGUtYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstZ3JheTtcbiRjYXJkLWFjdGlvbnMtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuMDUpO1xuJGNhcmQtdGV4dC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtbGluay1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4kY2FyZC1ocmVmLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcblxuJGNhcmQtdGl0bGUtaW1nLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4kY2FyZC1kZWctY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjkpO1xuXG4vKiA9PT09PT09PT09ICBTbGlkZXJzID09PT09PT09PT0gKi9cblxuJHJhbmdlLWJnLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC40NSk7XG4kcmFuZ2UtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG5cbi8qID09PT09PT09PT0gUHJvZ3Jlc3MgPT09PT09PT09PSAqL1xuJHByb2dyZXNzLW1haW4tY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG4kcHJvZ3Jlc3Mtc2Vjb25kYXJ5LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC40KTtcblxuLyogPT09PT09PT09PSAgTGlzdCA9PT09PT09PT09ICovXG4kbGlzdC1tYWluLXRleHQtdGV4dC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGxpc3Qtc3VwcG9ydGluZy10ZXh0LXRleHQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjU0KTtcbiRsaXN0LWljb24tY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjgpO1xuJGxpc3QtaWNvbi1ob3Zlci1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG5cbiRsaXN0LWJvcmRlci1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuMSk7XG4kbGlzdC1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICRsaXN0LWJvcmRlci1jb2xvcjtcblxuLyogPT09PT09PT09PSAgSXRlbSA9PT09PT09PT09ICovXG5cbi8vIERlZmF1bHQgSXRlbSBDb2xvcnNcbiRkZWZhdWx0LWl0ZW0tZm9jdXMtYmctY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjE1KTtcbiRkZWZhdWx0LWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4xNSk7XG4kZGVmYXVsdC1pdGVtLWhvdmVyLWJnLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4yKTtcblxuLy8gRGlzYWJsZWQgQnV0dG9uIENvbG9yc1xuXG4vKiA9PT09PT09PT09ICBEcm9wZG93biBtZW51ID09PT09PT09PT0gKi9cbiRkZWZhdWx0LWRyb3Bkb3duLWJnLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcblxuJGRyb3Bkb3duLW1lbnUtd2lkdGg6IDMxMHB4O1xuJGRyb3Bkb3duLW1lbnUtaGVhZGVyLWZvbnQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjgpO1xuJHNldHRpbmdzX2Ryb3Bkb3duX3dpZHRoOiAxMzVweDtcbiRhY2NvdW50LWRyb3Bkb3duLWF2YXRhci1zaXplOiA0OHB4O1xuJG1lc3NhZ2VzLWRyb3Bkb3duLWxhYmVsLXRleHQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjUpO1xuXG4vKiA9PT09PT09PT09ICBUb29sdGlwcyAgPT09PT09PT09PSAqL1xuJHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcblxuLyogPT09PT09PT09PSAgRm9vdGVyICA9PT09PT09PT09ICovXG5cbi8qIFRFWFRGSUVMRCAqL1xuXG4vKiBTV0lUQ0ggKi9cbiRzd2l0Y2gtb2ZmLXRodW1iLWNvbG9yOiAkcGFsZXR0ZS1ncmV5LTUwMDtcblxuLyogU1BJTk5FUiAqL1xuXG4vLyBBbW91bnQgb2YgY2lyY2xlIHRoZSBhcmMgdGFrZXMgdXAuXG4vLyBUaW1lIGl0IHRha2VzIHRvIGV4cGFuZCBhbmQgY29udHJhY3QgYXJjLlxuLy8gSG93IG11Y2ggdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBhcmMgc2hvdWxkIHJvdGF0ZSBlYWNoIHRpbWUuXG5cbi8qIFJBRElPICovXG4kcmFkaW8tb2ZmLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRyYWRpby1jb2xvcjogcmdiYSgkY29sb3ItcHJpbWFyeSwgMC44KTtcblxuLyogTUVOVSAqL1xuXG4vKiBMSVNUICovXG4kbGlzdC1ib3JkZXI6IDA7XG4kbGlzdC1ib3R0b20tcGFkZGluZzogMTZweDtcbiRsaXN0LWF2YXRhci10ZXh0LWxlZnQtZGlzdGFuY2U6IDY0cHg7XG4kbGlzdC1pY29uLXRleHQtbGVmdC1kaXN0YW5jZTogNTZweDtcbiRsaXN0LWF2YXRhci1zaXplOiAzMnB4O1xuJGxpc3QtdHdvLWxpbmUtaGVpZ2h0OiA2NHB4O1xuXG4vKiBMQVlPVVQgKi9cbiRsYXlvdXQtZHJhd2VyLW5hcnJvdzogMjM2cHg7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtaW5kZW50OiA4cHg7XG4kbGF5b3V0LWhlYWRlci1kZXNrdG9wLWluZGVudDogMjBweDtcbiRsYXlvdXQtc2NyZWVuLXNpemUtdGhyZXNob2xkOiAxNDQwcHg7XG5cbi8qIElDT04gKi9cblxuLyogSUNPTiBUT0dHTEUgKi9cblxuLyogRk9PVEVSICovXG5cbi8qIG1lZ2EtZm9vdGVyICovXG5cbi8qIG1pbmktZm9vdGVyICovXG5cbi8qIENIRUNLQk9YICovXG4kY2hlY2tib3gtYnV0dG9uLXNpemU6IDE4cHg7XG4kY2hlY2tib3gtbGFiZWwtaGVpZ2h0OiAyNHB4O1xuJGNoZWNrYm94LXBhZGRpbmc6IDhweDtcblxuLyogQ0FSRCAqL1xuXG4vKiBDYXJkIGRpbWVuc2lvbnMgKi9cbiRjYXJkLWhlaWdodDogYXV0bztcbiRjYXJkLXdpZHRoOiBhdXRvO1xuJGNhcmQtdGl0bGUtZm9udC1zaXplOiAyNHB4O1xuJGNhcmQtdGl0bGUtdGV4dC1mb250LXdlaWdodDogNDAwO1xuJGNhcmQtdmVydGljYWwtcGFkZGluZzogMjBweDtcblxuLyogQ292ZXIgaW1hZ2UgKi9cblxuLyogQlVUVE9OICovXG4kYnV0dG9uLWZvbnQtd2VpZ3RoOiA0MDA7XG5cbi8qIEFOSU1BVElPTiAqL1xuXG4vKiBQUk9HUkVTUyAqL1xuXG4vKiBCQURHRSAqL1xuJGJhZGdlLWJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xuJGJhZGdlLWNvbG9yOiAkY29sb3Itd2hpdGU7XG5cbi8qIFNIQURPV1MgKi9cblxuLyogR1JJRCAqL1xuJGdyaWQtdGFibGV0LWNvbHVtbnM6IDEyO1xuJGdyaWQtcGhvbmUtY29sdW1uczogNDtcblxuJGdyaWQtZGVza3RvcC1ndXR0ZXI6IDMycHg7XG4kZ3JpZC1kZXNrdG9wLW1hcmdpbjogMTZweDtcblxuJGdyaWQtdGFibGV0LWJyZWFrcG9pbnQ6IDExNTJweDtcbiRncmlkLWRlc2t0b3AtYnJlYWtwb2ludDogMTkyMHB4O1xuJHBob25lLWJyZWFrcG9pbnQ6IDgwMHB4O1xuXG4vKiBEQVRBIFRBQkxFICovXG4kZGF0YS10YWJsZS1mb250LXNpemU6IDE2cHg7XG4kZGF0YS10YWJsZS1oZWFkZXItZm9udC1zaXplOiAxM3B4O1xuXG4kZGF0YS10YWJsZS1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGRhdGEtdGFibGUtaGVhZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4kZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4wNSk7XG4kZGF0YS10YWJsZS1ob3Zlci1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMik7XG4kZGF0YS10YWJsZS1zZWxlY3Rpb24tY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuXG4kZGF0YS10YWJsZS1jb2x1bW4tc3BhY2luZzogMTZweDtcblxuLyogVE9PTFRJUCAqL1xuJHRvb2x0aXAtZm9udC1zaXplOiAxMnB4O1xuJHRhYmxlLXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogNXB4O1xuJHRhYmxlLXRvb2x0aXAtaG9yaXpvbnRhbC1wYWRkaW5nOiA4cHg7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBXSURHRVRTICYgQ09NUE9ORU5UUyAqL1xuXG4vKiBUcmVuZGluZyAqL1xuJHRyZW5kaW5nLWFycm93LXNpemU6IDQ4cHg7XG4kdHJlbmRpbmctYXJyb3ctdXAtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJHRyZW5kaW5nLWFycm93LWRvd24tY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG5cbi8qIGxhYmVsICovXG4kbGFiZWwtaGVpZ2h0OiAxMnB4O1xuJGxhYmVsLXBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcblxuLyogY2hhcnRzICovXG4kcGllLWNoYXJ0LWhlaWdodDogMjI4cHg7XG5cbiRsaW5lLWNoYXJ0LWhlaWdodDogMjgwcHg7XG4kbGluZS1jaGFydC13aWR0aDogMTAwJTtcbiRsaW5lLWNoYXJ0LWF4aXMtbGFiZWwtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjUpO1xuJGxpbmUtY2hhcnQtZ3VpZGVsaW5lLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcbiRsaW5lLWNoYXJ0LWd1aWRlbGluZS13aWR0aDogMC41cHg7XG5cbiRsZWdlbmQtbWFyay1zaXplOiA4cHg7XG4kbGVnZW5kLXRleHQtaW5kZW50OiAkbGVnZW5kLW1hcmstc2l6ZSArIDE2O1xuXG4vKiBlbXBsb3llciBmb3JtICovXG4kZW1wbG95ZXItZm9ybS13aWR0aDogNjcwcHg7XG4kZW1wbG95ZXItZm9ybS1jb2xvci1icmlnaHRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiRlbXBsb3llci1mb3JtLWNvbG9yLWRhcmtlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuJGVtcGxveWVyLWZvcm0taG9yaXpvbnRhbC1wYWRkaW5nOiAxNXB4O1xuXG4kd2VhdGhlci1zaGFkb3ctY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjQpO1xuJHdlYXRoZXItc2hhZG93LTRweDogNHB4IDRweCA0cHggJHdlYXRoZXItc2hhZG93LWNvbG9yO1xuXG4vKiByb3cgKi9cbiRyb3ctY29sLXBhZGRpbmc6IDMwcHg7XG5cbi8qIHNjcm9sbCAqL1xuJHNjcm9sbGJhci10aHVtYjogJGNvbG9yLXNtb290aC1ncmF5O1xuJHNjcm9sbGJhci10cmFjazogJGNvbG9yLXNtb2tlO1xuIiwiJGNvbG9yLWRhcmstZ3JheTogIzMzMztcbiRjb2xvci1ncmF5OiAjNDQ0O1xuJGNvbG9yLXRhYmxlLWJvcmRlcjogIzYwNjA2MDtcbiRjb2xvci1zbW9vdGgtZ3JheTogIzk5OTtcbiRjb2xvci1zbW9rZTogIzY2NjtcbiRjb2xvci1yZWQ6ICNmNDQzMzY7XG4kY29sb3ItbGlnaHQtYmx1ZTogIzAzYTlmNDtcbiRjb2xvci1vcmFuZ2U6ICNmZmMxMDc7XG4kY29sb3ItYW1iZXI6ICNmZjk4MDA7XG4kY29sb3ItdGVhbDogIzAwYmNkNDtcbiRjb2xvci1wdXJwbGU6ICM3NzI2ZDM7XG4kY29sb3ItZ3JlZW46ICMwMGQ0NWE7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4kY29sb3ItYWx0bzogI2RkZDtcbiRjb2xvci1zaWx2ZXItY2hhbGljZTogI2FhYTtcbiRjb2xvci1jaGFtYnJheTogIzNiNTk5ODtcbiRjb2xvci1jZWx1cmVhbjogIzAwYWJmMTtcbiRjb2xvci1sb2NobWFyYTogIzAwODNiZTtcbiRjb2xvci1mcm9seTogI2YyNjc5ODtcbiRjb2xvci1kb2RnZXItYmx1ZTogIzQxNzZmYjtcbiRjb2xvci1kb3ZlLWdyYXk6ICM2NzY3Njc7XG4kY29sb3ItcHJpbWFyeTogcmdiKDAsIDE4OCwgMjEyKTtcbiRjb2xvci1zZWNvbmRhcnk6IHJnYigyNDQsIDY3LCA1NCk7XG4kY29sb3ItYmFieS1ibHVlOiByZ2IoMTE2LCAxOTksIDIwOSk7XG4kY29sb3ItY2VydWxlYW46IHJnYig4MCwgMTUwLCAyMTUpO1xuJGNvbG9yLW1pbnQ6IHJnYig5NiwgMTk2LCAxNTApO1xuJGNvbG9yLWdyZXktNTAwOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS01MDB9KVwiKTtcblxuLnRleHQtY29sb3ItLXNtb2tlIHtcbiAgY29sb3I6ICRjb2xvci1zbW9rZTtcbn1cblxuLmNvbG9yLS1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXkgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1kYXJrLWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGFyay1ncmF5O1xufVxuXG4uY29sb3ItLXNtb290aC1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNtb290aC1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNvbG9yLS1zbW9vdGgtZ3JheSB7XG4gIGNvbG9yOiAkY29sb3Itc21vb3RoLWdyYXkgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1yZWQge1xuICBjb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1vcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXRleHQtLW9yYW5nZSB7XG4gIGNvbG9yOiAkY29sb3Itb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tYW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYW1iZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXRleHQtLWFtYmVyIHtcbiAgY29sb3I6ICRjb2xvci1hbWJlciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1ncmVlbiB7XG4gIGNvbG9yOiAkY29sb3ItZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1saWdodC1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWJsdWUgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXRleHQtLWxpZ2h0LWJsdWUge1xuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsdWUgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1wdXJwbGUge1xuICBjb2xvcjogJGNvbG9yLXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItLXRlYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVhbCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tdGVhbCB7XG4gIGNvbG9yOiAkY29sb3ItdGVhbCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnfnRoZW1lL2hlbHBlcnMnO1xuXG46aG9zdCB7XG4gIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG5cbiAgLnRlYWwge1xuICAgIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci10ZWFsO1xuICAgIH1cbiAgfVxuXG4gIC5yZWQge1xuICAgIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1yZWQ7XG4gICAgfVxuICB9XG5cbiAgLmdyZWVuIHtcbiAgICAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JlZW47XG4gICAgfVxuICB9XG5cbiAgLmdyYXkge1xuICAgIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmF5O1xuICAgIH1cbiAgfVxuXG4gIC5vcmFuZ2Uge1xuICAgIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1vcmFuZ2U7XG4gICAgfVxuICB9XG5cbiAgLnB1cnBsZSB7XG4gICAgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXB1cnBsZTtcbiAgICB9XG4gIH1cblxuICAubGlnaHQtYmx1ZSB7XG4gICAgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWJsdWU7XG4gICAgfVxuICB9XG5cbiAgLmRhcmstZ3JheSB7XG4gICAgLm1kbC1jYXJkX190aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ3JheTtcbiAgICB9XG5cbiAgICAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGFyay1ncmF5O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/ui/colors/colors.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/colors/colors.component.ts ***!
  \*****************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ColorsComponent = /** @class */ (function (_super) {
    __extends(ColorsComponent, _super);
    function ColorsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiColors = true;
        return _this;
    }
    ColorsComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        uiColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ui-colors',] }]
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __importDefault(__webpack_require__(/*! raw-loader!./colors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/colors/colors.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./colors.component.scss */ "./src/app/pages/ui/colors/colors.component.scss")).default]
        })
    ], ColorsComponent);
    return ColorsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/colors/index.ts":
/*!******************************************!*\
  !*** ./src/app/pages/ui/colors/index.ts ***!
  \******************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.component */ "./src/app/pages/ui/colors/colors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return _colors_component__WEBPACK_IMPORTED_MODULE_0__["ColorsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/forms/forms.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/forms/forms.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host form .mdl-cell {\n  margin-left: 16px;\n}\n:host form .mdl-card__supporting-text {\n  padding-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxpQkFBQTtBQUROO0FBSUk7RUFDRSxvQkFBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdWkvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvcm0ge1xuICAgIC5tZGwtY2VsbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgICB9XG4gIH1cblxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/ui/forms/forms.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/forms/forms.component.ts ***!
  \***************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FormsComponent = /** @class */ (function (_super) {
    __extends(FormsComponent, _super);
    function FormsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.mdlCell = true;
        _this.mdlCell12ColDesktop = true;
        _this.mdlCell12ColTablet = true;
        _this.mdlCell4ColPhone = true;
        _this.mdlCellTop = true;
        _this.countries = ['Minsk', 'Berlin', 'Moscow', 'NYC'];
        _this.locationValue = 'Berlin';
        return _this;
    }
    FormsComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        mdlCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell',] }],
        mdlCell12ColDesktop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--12-col-desktop',] }],
        mdlCell12ColTablet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--12-col-tablet',] }],
        mdlCell4ColPhone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--4-col-phone',] }],
        mdlCellTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--top',] }]
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __importDefault(__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/forms/forms.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./forms.component.scss */ "./src/app/pages/ui/forms/forms.component.scss")).default]
        })
    ], FormsComponent);
    return FormsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/forms/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ui/forms/index.ts ***!
  \*****************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/ui/forms/forms.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return _forms_component__WEBPACK_IMPORTED_MODULE_0__["FormsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/icons/icons.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666;\n}\n.color--gray {\n  background-color: #444 !important;\n}\n.color--dark-gray {\n  background-color: #333;\n}\n.color--smooth-gray {\n  background-color: #999 !important;\n}\n.text-color--smooth-gray {\n  color: #999 !important;\n}\n.color--red {\n  background-color: #f44336 !important;\n}\n.color-text--red {\n  color: #f44336 !important;\n}\n.color--orange {\n  background-color: #ffc107 !important;\n}\n.color-text--orange {\n  color: #ffc107 !important;\n}\n.color--amber {\n  background-color: #ff9800 !important;\n}\n.color-text--amber {\n  color: #ff9800 !important;\n}\n.color--green {\n  background-color: #00d45a !important;\n}\n.color-text--green {\n  color: #00d45a !important;\n}\n.color--light-blue {\n  background-color: #03a9f4 !important;\n}\n.color-text--light-blue {\n  color: #03a9f4 !important;\n}\n.color--purple {\n  background-color: #7726d3 !important;\n}\n.color-text--purple {\n  color: #7726d3 !important;\n}\n.color--teal {\n  background-color: #00bcd4 !important;\n}\n.color-text--teal {\n  color: #00bcd4 !important;\n}\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n:host .ui-icons-title {\n  font-size: 20px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-top: 24px;\n  letter-spacing: 0.2px;\n}\n:host .ui-icons-title a {\n  font-size: 20px;\n  text-decoration: underline;\n  opacity: 0.8;\n}\n:host .itemcontainer {\n  display: inline-block;\n  width: 150px;\n  height: 100px;\n  text-align: center;\n  vertical-align: top;\n}\n:host .itemcontainer .caption {\n  margin-top: 10px;\n}\n:host hr {\n  margin: 0 -16px 1em;\n}\n:host .section-name {\n  margin: 25px 5px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24tbGl0ZS9zcmMvX2Z1bmN0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWxpdGUvc3JjL19jb2xvci1kZWZpbml0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9wYWxldHRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VpL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkE7O3VDQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFtQ0EsdUNBQUE7QUFFQTs7Ozs7Ozs7O0NBQUE7QUFhQSxtQ0FBQTtBQUVBOzs7OztFQUFBO0FDdkVBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBLDJDQUFBO0FBaWtCQSxnQkFBQTtBRmpsQkE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUNpRkEsbUNBQUE7QUFHQSwyQ0FBQTtBQThCQSx1Q0FBQTtBQWdCQSx1Q0FBQTtBQUVBLDZDQUFBO0FBa0NBLHlDQUFBO0FBUUEsMENBQUE7QUFNQSwwQ0FBQTtBQUlBLG1DQUFBO0FBcUJBLHlDQUFBO0FBT0EsdUNBQUE7QUFRQSxxQ0FBQTtBQVlBLG9DQUFBO0FBU0Esd0NBQUE7QUFVQSxpQ0FBQTtBQVNBLG1DQUFBO0FBT0EsbUNBQUE7QUFNQSxnQ0FBQTtBQU9BLGdDQUFBO0FBYUEseUNBQUE7QUFJQSxxQ0FBQTtBQUtBLG1DQUFBO0FBU0EsY0FBQTtBQVlBLFdBQUE7QUFZQSxZQUFBO0FBZ0JBLFVBQUE7QUFXQSxTQUFBO0FBS0EsU0FBQTtBQWVBLFdBQUE7QUE2QkEsZ0JBQUE7QUFNQSxXQUFBO0FBRUEsY0FBQTtBQU9BLGNBQUE7QUFNQSxhQUFBO0FBV0EsU0FBQTtBQUVBLG9CQUFBO0FBMEJBLGdCQUFBO0FBS0EsV0FBQTtBQUNBOzs7O0VBQUE7QUFtQkEsY0FBQTtBQVFBLGFBQUE7QUFHQSxVQUFBO0FBVUEsWUFBQTtBQU1BLFNBQUE7QUFxQkEsZUFBQTtBQTZCQSxXQUFBO0FBR0EsYUFBQTtBQU9BLFlBQUE7QUFJQSxTQUFBO0FFM2tCQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdCQSxlQUFBO0FBK01BLFlBQUE7QUE2Q0EsZUFBQTtBQXNCQSxXQUFBO0FEbFNBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBLDJDQUFBO0FBaWtCQSxnQkFBQTtBQWpsQkE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkEsMkNBQUE7QUFpa0JBLGdCQUFBO0FFL2tCQSxtQ0FBQTtBQUlBLDJDQUFBO0FDdUJBO0VBQ0UsV0ExQlk7QUM4TmQ7QURqTUE7RUFDRSxpQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHNCQXRDZ0I7QUMwT2xCO0FEak1BO0VBQ0UsaUNBQUE7QUNvTUY7QURqTUE7RUFDRSxzQkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QUY5UkEsdUNBQUE7QUFHQSx1Q0FBQTtBQUVBLDZDQUFBO0FBb0JBLHlDQUFBO0FBRUEsMENBQUE7QUFFQSwwQ0FBQTtBQUVBLG1DQUFBO0FBd0JBLHlDQUFBO0FBRUEsdUNBQUE7QUFJQSxxQ0FBQTtBQUVBLG9DQUFBO0FBRUEsd0NBQUE7QUFZQSxpQ0FBQTtBQWdCQSxtQ0FBQTtBQUtBLG1DQUFBO0FBSUEsZ0NBQUE7QUFTQSxnQ0FBQTtBQVNBLHlDQUFBO0FBU0EscUNBQUE7QUFHQSxtQ0FBQTtBQUVBLGNBQUE7QUFFQSxXQUFBO0FBR0EsWUFBQTtBQU1BLFVBQUE7QUFJQSxTQUFBO0FBRUEsU0FBQTtBQVFBLFdBQUE7QUFNQSxTQUFBO0FBRUEsZ0JBQUE7QUFFQSxXQUFBO0FBRUEsZ0JBQUE7QUFFQSxnQkFBQTtBQUVBLGFBQUE7QUFLQSxTQUFBO0FBRUEsb0JBQUE7QUFPQSxnQkFBQTtBQUVBLFdBQUE7QUFHQSxjQUFBO0FBRUEsYUFBQTtBQUVBLFVBQUE7QUFJQSxZQUFBO0FBRUEsU0FBQTtBQVdBLGVBQUE7QUFZQSxZQUFBO0FBT0EseUJBQUE7QUFFQSxhQUFBO0FBS0EsVUFBQTtBQUlBLFdBQUE7QUFZQSxrQkFBQTtBQVNBLFFBQUE7QUFHQSxXQUFBO0FFdFJFO0VBQ0UsZUFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTZWSjtBQTNWSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUE2Vk47QUF6VkU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTJWSjtBQXpWSTtFQUNFLGdCQUFBO0FBMlZOO0FBdlZFO0VBQ0UsbUJBQUE7QUF5Vko7QUF0VkU7RUFDRSxxQkFBQTtBQXdWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuQGZ1bmN0aW9uIHN0cmlwLXVuaXRzKCRudW1iZXIpIHtcbiAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICAgICRDT05URU5UU1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogU1RZTEUgR1VJREUgVkFSSUFCTEVTLS0tLS0tLS0tLS0tLS0tLS0tRGVjbGFyYXRpb25zIG9mIFNhc3MgdmFyaWFibGVzXG4gKiAtLS0tLVR5cG9ncmFwaHlcbiAqIC0tLS0tQ29sb3JzXG4gKiAtLS0tLVRleHRmaWVsZFxuICogLS0tLS1Td2l0Y2hcbiAqIC0tLS0tU3Bpbm5lclxuICogLS0tLS1SYWRpb1xuICogLS0tLS1NZW51XG4gKiAtLS0tLUxpc3RcbiAqIC0tLS0tTGF5b3V0XG4gKiAtLS0tLUljb24gdG9nZ2xlc1xuICogLS0tLS1Gb290ZXJcbiAqIC0tLS0tQ29sdW1uXG4gKiAtLS0tLUNoZWNrYm94XG4gKiAtLS0tLUNhcmRcbiAqIC0tLS0tQnV0dG9uXG4gKiAtLS0tLUFuaW1hdGlvblxuICogLS0tLS1Qcm9ncmVzc1xuICogLS0tLS1CYWRnZVxuICogLS0tLS1TaGFkb3dzXG4gKiAtLS0tLUdyaWRcbiAqIC0tLS0tRGF0YSB0YWJsZVxuICogLS0tLS1EaWFsb2dcbiAqIC0tLS0tU25hY2tiYXJcbiAqIC0tLS0tVG9vbHRpcFxuICogLS0tLS1DaGlwXG4gKlxuICogRXZlbiB0aG91Z2ggYWxsIHZhcmlhYmxlcyBoYXZlIHRoZSBgIWRlZmF1bHRgIGRpcmVjdGl2ZSwgbW9zdCBvZiB0aGVtXG4gKiBzaG91bGQgbm90IGJlIGNoYW5nZWQgYXMgdGhleSBhcmUgZGVwZW5kZW50IG9uZSBhbm90aGVyLiBUaGlzIGNhbiBjYXVzZVxuICogdmlzdWFsIGRpc3RvcnRpb25zIChsaWtlIGFsaWdubWVudCBpc3N1ZXMpIHRoYXQgYXJlIGhhcmQgdG8gdHJhY2sgZG93blxuICogYW5kIGZpeC5cbiAqL1xuXG5cbi8qID09PT09PT09PT0gIFRZUE9HUkFQSFkgID09PT09PT09PT0gKi9cblxuLyogV2UncmUgc3BsaXR0aW5nIGZvbnRzIGludG8gXCJwcmVmZXJyZWRcIiBhbmQgXCJwZXJmb3JtYW5jZVwiIGluIG9yZGVyIHRvIG9wdGltaXplXG4gICBwYWdlIGxvYWRpbmcuIEZvciBpbXBvcnRhbnQgdGV4dCwgc3VjaCBhcyB0aGUgYm9keSwgd2Ugd2FudCBpdCB0byBsb2FkXG4gICBpbW1lZGlhdGVseSBhbmQgbm90IHdhaXQgZm9yIHRoZSB3ZWIgZm9udCBsb2FkLCB3aGVyZWFzIGZvciBvdGhlciBzZWN0aW9ucyxcbiAgIHN1Y2ggYXMgaGVhZGVycyBhbmQgdGl0bGVzLCB3ZSdyZSBPSyB3aXRoIHRoaW5ncyB0YWtpbmcgYSBiaXQgbG9uZ2VyIHRvIGxvYWQuXG4gICBXZSBkbyBoYXZlIHNvbWUgb3B0aW9uYWwgY2xhc3NlcyBhbmQgcGFyYW1ldGVycyBpbiB0aGUgbWl4aW5zLCBpbiBjYXNlIHlvdVxuICAgZGVmaW5pdGVseSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UncmUgdXNpbmcgdGhlIHByZWZlcnJlZCBmb250IGFuZCBkb24ndCBtaW5kXG4gICB0aGUgcGVyZm9ybWFuY2UgaGl0LlxuICAgV2Ugc2hvdWxkIGJlIGFibGUgdG8gaW1wcm92ZSBvbiB0aGlzIG9uY2UgQ1NTIEZvbnQgTG9hZGluZyBMMyBiZWNvbWVzIG1vcmVcbiAgIHdpZGVseSBhdmFpbGFibGUuXG4qL1xuJHByZWZlcnJlZF9mb250OiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kcGVyZm9ybWFuY2VfZm9udDogJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENPTE9SUyAgPT09PT09PT09PSAqL1xuXG4vKipcbipcbiogTWF0ZXJpYWwgZGVzaWduIGNvbG9yIHBhbGV0dGVzLlxuKiBAc2VlIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS9jb2xvci5odG1sXG4qXG4qKi9cblxuQGltcG9ydCBcImNvbG9yLWRlZmluaXRpb25zXCI7XG5AaW1wb3J0IFwiZnVuY3Rpb25zXCI7XG5cbi8qID09PT09PT09PT0gIElNQUdFUyAgPT09PT09PT09PSAqL1xuJGltYWdlX3BhdGg6ICcvaW1hZ2VzJyAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgQ29sb3IgJiBUaGVtZXMgID09PT09PT09PT0gKi9cblxuLy8gRGVmaW5lIHdoZXRoZXIgaW5kaXZpZHVhbCBjb2xvciBwYWxldHRlIGl0ZW1zIHNob3VsZCBoYXZlIGNsYXNzZXMgY3JlYXRlZC5cbi8vIFNldHRpbmcgdGhpcyB0byB0cnVlIHdpbGwgcmVtb3ZlIGluZGl2aWR1YWwgY29sb3IgY2xhc3NlcyBmb3IgZWFjaCBjb2xvciBpbiB0aGUgcGFsZXR0ZXMuXG4vLyBUbyBpbXByb3ZlIG92ZXJhbGwgcGVyZm9ybWFuY2UgKGFzc3VtaW5nIHRoZXkgYXJlbid0IHVzZWQpIGJ5OlxuLy8gKiBTYXZpbmcgc2VydmVyIGJhbmR3aWR0aCBzZW5kaW5nIHRoZSBleHRyYSBjbGFzc2VzXG4vLyAqIFNhdmUgY2xpZW50IGNvbXB1dGF0aW9uIGFnYWluc3QgdGhlIGNsYXNzZXNcbi8vIGl0IGlzIFJFQ09NTUVOREVEIHlvdSBzZXQgdGhpcyB0byB0cnVlLlxuJHRyaW0tY29sb3ItY2xhc3NlczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFVzZSBjb2xvciBwcmltYXJpbHkgZm9yIGVtcGhhc2lzLiBDaG9vc2UgY29sb3JzIHRoYXQgZml0IHdpdGhcbi8vIHlvdXIgYnJhbmQgYW5kIHByb3ZpZGUgZ29vZCBjb250cmFzdCBiZXR3ZWVuIHZpc3VhbCBjb21wb25lbnRzLlxuJGNvbG9yLXByaW1hcnk6ICRwYWxldHRlLWluZGlnby01MDAgIWRlZmF1bHQ7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAkcGFsZXR0ZS1pbmRpZ28tNzAwICFkZWZhdWx0O1xuJGNvbG9yLWFjY2VudDogJHBhbGV0dGUtcGluay1BMjAwICFkZWZhdWx0O1xuXG4vLyBPdXIgcHJpbWFyeSBpcyBkYXJrLCBzbyB1c2UgJGNvbG9yLWRhcmstY29udHJhc3QgZm9yIG92ZXJsYWlkIHRleHQuXG4kY29sb3ItcHJpbWFyeS1jb250cmFzdDogJGNvbG9yLWRhcmstY29udHJhc3QgIWRlZmF1bHQ7XG4vLyBPdXIgYWNjZW50IGlzIGRhcmssIHNvIHVzZSAkY29sb3ItZGFyay1jb250cmFzdCBmb3Igb3ZlcmxhaWQgdGV4dC5cbiRjb2xvci1hY2NlbnQtY29udHJhc3Q6ICRjb2xvci1kYXJrLWNvbnRyYXN0ICFkZWZhdWx0O1xuXG4vLyBSZXBsYWNlIGFsbCBjb2xvcnMgd2l0aCBwbGFjZWhvbGRlcnMgaWYgd2UncmUgZ2VuZXJhdGluZyBhIHRlbXBsYXRlLlxuQGlmICRzdHlsZWd1aWRlLWdlbmVyYXRlLXRlbXBsYXRlID09IHRydWUge1xuICAkY29sb3ItcHJpbWFyeTogJyRjb2xvci1wcmltYXJ5JztcbiAgJGNvbG9yLXByaW1hcnktZGFyazogJyRjb2xvci1wcmltYXJ5LWRhcmsnO1xuICAkY29sb3ItYWNjZW50OiAnJGNvbG9yLWFjY2VudCc7XG4gICRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAnJGNvbG9yLXByaW1hcnktY29udHJhc3QnO1xuICAkY29sb3ItYWNjZW50LWNvbnRyYXN0OiAnJGNvbG9yLWFjY2VudC1jb250cmFzdCc7XG59XG5cbi8qID09PT09PT09PT0gIFR5cG9ncmFwaHkgID09PT09PT09PT0gKi9cblxuLy8gV2UgdXNlIHRoZSBmb2xsb3dpbmcgZGVmYXVsdCBjb2xvciBzdHlsZXM6IHRleHQtY29sb3ItcHJpbWFyeSBhbmRcbi8vIHRleHQtY29sb3Itc2Vjb25kYXJ5LiBGb3IgbGlnaHQgdGhlbWVzLCB1c2UgdGV4dC1jb2xvci1wcmltYXJ5LWludmVyc2Vcbi8vIGFuZCB0ZXh0LWNvbG9yLXNlY29uZGFyeS1pbnZlcnNlLlxuXG4kdGV4dC1jb2xvci1wcmltYXJ5OiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJHRleHQtbGluay1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcblxuLy8gRGVmaW5lIHdoZXRoZXIgdG8gdGFyZ2V0IGVsZW1lbnRzIGRpcmVjdGx5IGZvciB0eXBvZ3JhcGhpYyBlbmhhbmNlbWVudHMuXG4vLyBUdXJuaW5nIHRoaXMgb2ZmIG1lYW5zIHlvdSBuZWVkIHRvIHVzZSBtZGwtKiBjbGFzc2VzIG1vcmUgb2Z0ZW4uXG4vLyBPdGhlciBjb21wb25lbnRzIG1heSBhbHNvIGZhaWwgdG8gYWRoZXJlIHRvIE1EIHdpdGhvdXQgdGhlc2UgcnVsZXMuXG4vLyBJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB5b3UgbGVhdmUgdGhpcyBhcyB0cnVlLlxuXG4kdGFyZ2V0LWVsZW1lbnRzLWRpcmVjdGx5OiB0cnVlICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDb21wb25lbnRzICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFN0YW5kYXJkIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuLy8gRGVmYXVsdCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1wcmltYXJ5LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNTAwfSwgMC4yMClcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1ibGFja30pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1ob3Zlci1jb2xvcjogJGJ1dHRvbi1wcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xuJGJ1dHRvbi1hY3RpdmUtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JHBhbGV0dGUtZ3JleS01MDB9LCAwLjQwKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8vIENvbG9yZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1zZWNvbmRhcnktY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24taG92ZXItY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tYWN0aXZlLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWZvY3VzLWNvbG9yLWFsdDogJGJ1dHRvbi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuLy8gUmlwcGxlIGNvbG9yIGZvciBjb2xvcmVkIHJhaXNlZCBidXR0b25zLlxuJGJ1dHRvbi1yaXBwbGUtY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1kaXNhYmxlZDogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yLWRpc2FibGVkOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuXG4vLyBGQUIgY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24tZmFiLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLWhvdmVyLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLWFjdGl2ZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWZhYi10ZXh0LWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLXJpcHBsZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50LWNvbnRyYXN0fSlcIikgIWRlZmF1bHQ7XG5cbi8vIEljb24gYnV0dG9uIGNvbG9ycyBhbmQgc2l6ZXMuXG4kYnV0dG9uLWljb24tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTcwMH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1pY29uLWZvY3VzLWNvbG9yOiAkYnV0dG9uLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBJY29uIFRvZ2dsZXMgID09PT09PT09PT0gKi9cblxuJGljb24tdG9nZ2xlLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS03MDB9KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1mb2N1cy1jb2xvcjogJGJ1dHRvbi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1jaGVja2VkLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1jaGVja2VkLWZvY3VzLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kaWNvbi10b2dnbGUtZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFJhZGlvIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuJHJhZGlvLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRyYWRpby1vZmYtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kcmFkaW8tZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFJpcHBsZSBlZmZlY3QgID09PT09PT09PT0gKi9cblxuJHJpcHBsZS1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1saWdodC1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBMYXlvdXQgID09PT09PT09PT0gKi9cblxuJGxheW91dC1uYXYtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuXG4vLyBEcmF3ZXJcbiRsYXlvdXQtZHJhd2VyLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS01MH0pXCIpICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYm9yZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktODAwfSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItbmF2aWdhdGlvbi1saW5rLWFjdGl2ZS1iYWNrZ3JvdW5kOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItbGlnaHQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gSGVhZGVyXG4kbGF5b3V0LWhlYWRlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLW5hdi1ob3Zlci1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skcGFsZXR0ZS1ncmV5LTcwMH0sIDAuNilcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci10YWItdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0sIDAuNilcIikgIWRlZmF1bHQ7XG5cbi8vIFRhYnNcbiRsYXlvdXQtaGVhZGVyLXRhYi1oaWdobGlnaHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENvbnRlbnQgVGFicyAgPT09PT09PT09PSAqL1xuXG4kdGFiLWhpZ2hsaWdodC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kdGFiLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJHRhYi1ib3JkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDaGVja2JveGVzICA9PT09PT09PT09ICovXG5cbiRjaGVja2JveC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtb2ZmLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuNTQpXCIpICFkZWZhdWx0O1xuJGNoZWNrYm94LWRpc2FibGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuJGNoZWNrYm94LWZvY3VzLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtaW1hZ2UtcGF0aDogJGltYWdlX3BhdGg7XG5cbi8qID09PT09PT09PT0gIFN3aXRjaGVzICA9PT09PT09PT09ICovXG5cbiRzd2l0Y2gtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1mYWRlZC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeX0sIDAuMjYpXCIpICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi1jb2xvcjogJHN3aXRjaC1jb2xvciAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnl9LCAwLjUpXCIpICFkZWZhdWx0O1xuXG4kc3dpdGNoLW9mZi10aHVtYi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTB9KVwiKSAhZGVmYXVsdDtcbiRzd2l0Y2gtb2ZmLXRyYWNrLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1kaXNhYmxlZC10aHVtYi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG4kc3dpdGNoLWRpc2FibGVkLXRyYWNrLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBTcGlubmVyICA9PT09PT09PT09ICovXG5cbiRzcGlubmVyLWNvbG9yLTE6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ibHVlLTQwMH0pXCIpICFkZWZhdWx0O1xuJHNwaW5uZXItY29sb3ItMjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXJlZC01MDB9KVwiKSAhZGVmYXVsdDtcbiRzcGlubmVyLWNvbG9yLTM6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS15ZWxsb3ctNjAwfSlcIikgIWRlZmF1bHQ7XG4kc3Bpbm5lci1jb2xvci00OiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JlZW4tNTAwfSlcIikgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXNpbmdsZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFRleHQgZmllbGRzICA9PT09PT09PT09ICovXG5cbiRpbnB1dC10ZXh0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtbGFiZWwtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1ib3R0b20tYm9yZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuJGlucHV0LXRleHQtaGlnaGxpZ2h0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LWRpc2FibGVkLWNvbG9yOiAkaW5wdXQtdGV4dC1ib3R0b20tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZGlzYWJsZWQtdGV4dC1jb2xvcjogJGlucHV0LXRleHQtbGFiZWwtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1lcnJvci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXJlZC1BNzAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENhcmQgID09PT09PT09PT0gKi9cblxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci13aGl0ZX0pXCIpICFkZWZhdWx0O1xuJGNhcmQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1ibGFja30pXCIpICFkZWZhdWx0O1xuJGNhcmQtaW1hZ2UtcGxhY2Vob2xkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjEpICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFNsaWRlcnMgPT09PT09PT09PSAqL1xuXG4kcmFuZ2UtYmctY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHJhbmdlLWZhZGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtYmctZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gUHJvZ3Jlc3MgPT09PT09PT09PSAqL1xuJHByb2dyZXNzLW1haW4tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLXNlY29uZGFyeS1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0sIDAuNylcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZmFsbGJhY2stYnVmZmVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5LWNvbnRyYXN0fSwgMC45KVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1pbWFnZS1wYXRoOiAkaW1hZ2VfcGF0aDtcblxuLyogPT09PT09PT09PSAgTGlzdCA9PT09PT09PT09ICovXG5cbiRsaXN0LW1haW4tdGV4dC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJGxpc3Qtc3VwcG9ydGluZy10ZXh0LXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kbGlzdC1pY29uLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS02MDB9KVwiKSAhZGVmYXVsdDtcbiRsaXN0LWF2YXRhci1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIEl0ZW0gPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IEl0ZW0gQ29sb3JzXG4kZGVmYXVsdC1pdGVtLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC44NylcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLW91dGxpbmUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTQwMH0pXCIpICFkZWZhdWx0O1xuJGRlZmF1bHQtaXRlbS1ob3Zlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktMjAwfSlcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLWZvY3VzLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0yMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tZGl2aWRlci1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZWQgQnV0dG9uIENvbG9yc1xuJGRpc2FibGVkLWl0ZW0tdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIERyb3Bkb3duIG1lbnUgPT09PT09PT09PSAqL1xuXG4kZGVmYXVsdC1kcm9wZG93bi1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci13aGl0ZX0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBUb29sdGlwcyAgPT09PT09PT09PSAqL1xuXG4kdG9vbHRpcC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXdoaXRlfSlcIikgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNzAwfSwgMC45KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgRm9vdGVyICA9PT09PT09PT09ICovXG5cbiRmb290ZXItYmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTgwMH0pXCIpICFkZWZhdWx0O1xuJGZvb3Rlci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTAwfSlcIikgIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuJGZvb3Rlci1idXR0b24tZmlsbC1jb2xvcjogJGZvb3Rlci1jb2xvciAhZGVmYXVsdDtcbiRmb290ZXItdW5kZXJsaW5lLWNvbG9yOiAkZm9vdGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8qIFRFWFRGSUVMRCAqL1xuXG4kaW5wdXQtdGV4dC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC13aWR0aDogMTAwJSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXBhZGRpbmc6IDRweCAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXZlcnRpY2FsLXNwYWNpbmc6IDIwcHggIWRlZmF1bHQ7XG5cbiRpbnB1dC10ZXh0LWJ1dHRvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZmxvYXRpbmctbGFiZWwtZm9udHNpemU6IDEycHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1leHBhbmRhYmxlLWljb24tdG9wOiAxNnB4ICFkZWZhdWx0O1xuXG5cbi8qIFNXSVRDSCAqL1xuXG4kc3dpdGNoLWxhYmVsLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRzd2l0Y2gtbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJHN3aXRjaC10cmFjay1oZWlnaHQ6IDE0cHggIWRlZmF1bHQ7XG4kc3dpdGNoLXRyYWNrLWxlbmd0aDogMzZweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdGh1bWItc2l6ZTogMjBweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stdG9wOiAoJHN3aXRjaC1sYWJlbC1oZWlnaHQgLSAkc3dpdGNoLXRyYWNrLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi10b3A6ICgkc3dpdGNoLWxhYmVsLWhlaWdodCAtICRzd2l0Y2gtdGh1bWItc2l6ZSkgLyAyICFkZWZhdWx0O1xuJHN3aXRjaC1yaXBwbGUtc2l6ZTogJHN3aXRjaC1sYWJlbC1oZWlnaHQgKiAyICFkZWZhdWx0O1xuJHN3aXRjaC1oZWxwZXItc2l6ZTogOHB4ICFkZWZhdWx0O1xuXG4vKiBTUElOTkVSICovXG5cbiRzcGlubmVyLXNpemU6IDI4cHggIWRlZmF1bHQ7XG4kc3Bpbm5lci1zdHJva2Utd2lkdGg6IDNweCAhZGVmYXVsdDtcblxuLy8gQW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwLlxuJHNwaW5uZXItYXJjLXNpemU6IDI3MGRlZyAhZGVmYXVsdDtcbi8vIFRpbWUgaXQgdGFrZXMgdG8gZXhwYW5kIGFuZCBjb250cmFjdCBhcmMuXG4kc3Bpbm5lci1hcmMtdGltZTogMTMzM21zICFkZWZhdWx0O1xuLy8gSG93IG11Y2ggdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBhcmMgc2hvdWxkIHJvdGF0ZSBlYWNoIHRpbWUuXG4kc3Bpbm5lci1hcmMtc3RhcnQtcm90OiAyMTZkZWcgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLWR1cmF0aW9uOiAzNjAgKiAkc3Bpbm5lci1hcmMtdGltZSAvIChcbiAgICBzdHJpcC11bml0cygkc3Bpbm5lci1hcmMtc3RhcnQtcm90ICsgKDM2MGRlZyAtICRzcGlubmVyLWFyYy1zaXplKSkpO1xuXG5cbi8qIFJBRElPICovXG5cbiRyYWRpby1sYWJlbC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kcmFkaW8tbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJHJhZGlvLWJ1dHRvbi1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJHJhZGlvLWlubmVyLW1hcmdpbjogJHJhZGlvLWJ1dHRvbi1zaXplIC8gNDtcbiRyYWRpby1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4kcmFkaW8tdG9wLW9mZnNldDogKCRyYWRpby1sYWJlbC1oZWlnaHQgLSAkcmFkaW8tYnV0dG9uLXNpemUpIC8gMjtcbiRyYWRpby1yaXBwbGUtc2l6ZTogNDJweCAhZGVmYXVsdDtcblxuXG4vKiBNRU5VICovXG5cbiRtZW51LWV4cGFuZC1kdXJhdGlvbjogMC4zcyAhZGVmYXVsdDtcbiRtZW51LWZhZGUtZHVyYXRpb246IDAuMnMgIWRlZmF1bHQ7XG5cbi8qIExJU1QgKi9cblxuJGxpc3QtYm9yZGVyOiA4cHggIWRlZmF1bHQ7XG4kbGlzdC1taW4taGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJGxpc3QtbWluLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kbGlzdC1ib3R0b20tcGFkZGluZzogMjBweCAhZGVmYXVsdDtcbiRsaXN0LWF2YXRhci10ZXh0LWxlZnQtZGlzdGFuY2U6IDcycHggIWRlZmF1bHQ7XG4kbGlzdC1pY29uLXRleHQtbGVmdC1kaXN0YW5jZTogNzJweCAhZGVmYXVsdDtcblxuJGxpc3QtYXZhdGFyLXNpemU6IDQwcHggIWRlZmF1bHQ7XG4kbGlzdC1pY29uLXNpemU6IDI0cHggIWRlZmF1bHQ7XG5cbiRsaXN0LXR3by1saW5lLWhlaWdodDogNzJweCAhZGVmYXVsdDtcbiRsaXN0LXRocmVlLWxpbmUtaGVpZ2h0OiA4OHB4ICFkZWZhdWx0O1xuXG4vKiBMQVlPVVQgKi9cblxuJGxheW91dC1kcmF3ZXItbmFycm93OiAyNDBweCAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLXdpZGU6IDQ1NnB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItd2lkdGg6ICRsYXlvdXQtZHJhd2VyLW5hcnJvdyAhZGVmYXVsdDtcblxuJGxheW91dC1oZWFkZXItaWNvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGxheW91dC1zY3JlZW4tc2l6ZS10aHJlc2hvbGQ6IDEwMjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLWljb24tbWFyZ2luOiAyNHB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYnV0dG9uLW1vYmlsZS1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYnV0dG9uLWRlc2t0b3Atc2l6ZTogNDhweCAhZGVmYXVsdDtcblxuJGxheW91dC1oZWFkZXItbW9iaWxlLXJvdy1oZWlnaHQ6IDU2cHggIWRlZmF1bHQ7XG4kbGF5b3V0LW1vYmlsZS1oZWFkZXItaGVpZ2h0OiAkbGF5b3V0LWhlYWRlci1tb2JpbGUtcm93LWhlaWdodDtcbiRsYXlvdXQtaGVhZGVyLWRlc2t0b3Atcm93LWhlaWdodDogNjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtZGVza3RvcC1oZWFkZXItaGVpZ2h0OiAkbGF5b3V0LWhlYWRlci1kZXNrdG9wLXJvdy1oZWlnaHQ7XG5cbiRsYXlvdXQtaGVhZGVyLWRlc2t0b3AtYmFzZWxpbmU6IDgwcHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtYmFzZWxpbmU6IDcycHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtaW5kZW50OiAxNnB4ICFkZWZhdWx0O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1pbmRlbnQ6IDQwcHggIWRlZmF1bHQ7XG5cbiRsYXlvdXQtdGFiLWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWJhci1oZWlnaHQ6IDQ4cHggIWRlZmF1bHQ7XG4kbGF5b3V0LXRhYi1tb2JpbGUtcGFkZGluZzogMTJweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWRlc2t0b3AtcGFkZGluZzogMjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWhpZ2hsaWdodC10aGlja25lc3M6IDJweCAhZGVmYXVsdDtcblxuXG4vKiBJQ09OIFRPR0dMRSAqL1xuXG4kaWNvbi10b2dnbGUtc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kaWNvbi10b2dnbGUtcmlwcGxlLXNpemU6IDM2cHggIWRlZmF1bHQ7XG5cbi8qIEZPT1RFUiAqL1xuXG4vKm1lZ2EtZm9vdGVyKi9cbiRmb290ZXItbWluLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kZm9vdGVyLXBhZGRpbmctc2lkZXM6IDQwcHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGZvb3Rlci1oZWFkaW5nLWxpbmUtaGVpZ2h0OiAoMS43ICogJGZvb3Rlci1oZWFkaW5nLWZvbnQtc2l6ZSkgIWRlZmF1bHQ7XG4kZm9vdGVyLWJ0bi1zaXplOiAzNnB4ICAhZGVmYXVsdDtcblxuLyptaW5pLWZvb3RlciovXG4kcGFkZGluZzogMTZweCAhZGVmYXVsdDtcbiRmb290ZXItaGVhZGluZy1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctbGluZS1oZWlnaHQ6ICgxLjUgKiAkZm9vdGVyLWhlYWRpbmctZm9udC1zaXplKSAhZGVmYXVsdDtcbiRmb290ZXItYnRuLXNpemU6IDM2cHggIWRlZmF1bHQ7XG5cbi8qIENIRUNLQk9YICovXG5cbiRjaGVja2JveC1sYWJlbC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LWJ1dHRvbi1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LWlubmVyLW1hcmdpbjogMnB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbiRjaGVja2JveC10b3Atb2Zmc2V0OlxuKCRjaGVja2JveC1sYWJlbC1oZWlnaHQgLSAkY2hlY2tib3gtYnV0dG9uLXNpemUgLSAkY2hlY2tib3gtaW5uZXItbWFyZ2luKSAvIDI7XG4kY2hlY2tib3gtcmlwcGxlLXNpemU6ICRjaGVja2JveC1sYWJlbC1oZWlnaHQgKiAxLjU7XG5cbi8qIENBUkQgKi9cblxuLyogQ2FyZCBkaW1lbnNpb25zICovXG4kY2FyZC13aWR0aDogMzMwcHggIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6IDIwMHB4ICFkZWZhdWx0O1xuJGNhcmQtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGNhcmQtdmVydGljYWwtcGFkZGluZzogMTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtcGVyc3BlY3RpdmUtb3JpZ2luLXg6IDE2NXB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtcGVyc3BlY3RpdmUtb3JpZ2luLXk6IDU2cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXRpdGxlLXRyYW5zZm9ybS1vcmlnaW4teDogMTY1cHggIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS10cmFuc2Zvcm0tb3JpZ2luLXk6IDU2cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXRpdGxlLXRleHQtdHJhbnNmb3JtLW9yaWdpbi14OiAxNDlweCAhZGVmYXVsdDtcbiRjYXJkLXRpdGxlLXRleHQtdHJhbnNmb3JtLW9yaWdpbi15OiA0OHB4ICFkZWZhdWx0O1xuXG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGNhcmQtc3VwcG9ydGluZy10ZXh0LWxpbmUtaGVpZ2h0OiAxOHB4ICFkZWZhdWx0O1xuXG4kY2FyZC1hY3Rpb25zLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtdGV4dC1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGNhcmQtei1pbmRleDogMSAhZGVmYXVsdDtcblxuLyogQ292ZXIgaW1hZ2UgKi9cbiRjYXJkLWNvdmVyLWltYWdlLWhlaWdodDogMTg2cHggIWRlZmF1bHQ7XG4kY2FyZC1iYWNrZ3JvdW5kLWltYWdlLXVybDogJycgIWRlZmF1bHQ7XG5cblxuLyogQlVUVE9OICovXG4vKipcbiAqXG4gKiBEaW1lbnNpb25zXG4gKlxuICovXG4kYnV0dG9uLW1pbi13aWR0aDogNjRweCAhZGVmYXVsdDtcbiRidXR0b24taGVpZ2h0OiAzNnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1tYXJnaW46IDRweCAhZGVmYXVsdDtcbiRidXR0b24tYm9yZGVyLXJhZGl1czogMnB4ICFkZWZhdWx0O1xuXG4kYnV0dG9uLWZhYi1zaXplOiA1NnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItc2l6ZS1taW5pOiA0MHB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuXG4kYnV0dG9uLWljb24tc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRidXR0b24taWNvbi1zaXplLW1pbmk6IDI0cHggIWRlZmF1bHQ7XG5cblxuLyogQU5JTUFUSU9OICovXG4kYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW46IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kYW5pbWF0aW9uLWN1cnZlLWxpbmVhci1vdXQtc2xvdy1pbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LWxpbmVhci1pbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRhbmltYXRpb24tY3VydmUtZGVmYXVsdDogJGFuaW1hdGlvbi1jdXJ2ZS1mYXN0LW91dC1zbG93LWluICFkZWZhdWx0O1xuXG5cbi8qIFBST0dSRVNTICovXG4kYmFyLWhlaWdodDogNHB4ICFkZWZhdWx0O1xuXG4vKiBCQURHRSAqL1xuJGJhZGdlLWZvbnQtc2l6ZTogMTJweCAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvci1pbnZlcnNlOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuJGJhZGdlLWJhY2tncm91bmQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYmFkZ2UtYmFja2dyb3VuZC1pbnZlcnNlOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9LDAuMilcIikgIWRlZmF1bHQ7XG4kYmFkZ2Utc2l6ZSA6IDIycHggIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZzogMnB4ICFkZWZhdWx0O1xuJGJhZGdlLW92ZXJsYXA6IDEycHggIWRlZmF1bHQ7XG5cbi8qIFNIQURPV1MgKi9cblxuJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eTogMC4xMiAhZGVmYXVsdDtcblxuLyogR1JJRCAqL1xuXG4kZ3JpZC1kZXNrdG9wLWNvbHVtbnM6IDEyICFkZWZhdWx0O1xuJGdyaWQtZGVza3RvcC1ndXR0ZXI6IDE2cHggIWRlZmF1bHQ7XG4kZ3JpZC1kZXNrdG9wLW1hcmdpbjogMTZweCAhZGVmYXVsdDtcblxuJGdyaWQtZGVza3RvcC1icmVha3BvaW50OiA4NDBweCAhZGVmYXVsdDtcblxuJGdyaWQtdGFibGV0LWNvbHVtbnM6IDggIWRlZmF1bHQ7XG4kZ3JpZC10YWJsZXQtZ3V0dGVyOiAkZ3JpZC1kZXNrdG9wLWd1dHRlciAhZGVmYXVsdDtcbiRncmlkLXRhYmxldC1tYXJnaW46ICRncmlkLWRlc2t0b3AtbWFyZ2luICFkZWZhdWx0O1xuXG4kZ3JpZC10YWJsZXQtYnJlYWtwb2ludDogNDgwcHggIWRlZmF1bHQ7XG5cbiRncmlkLXBob25lLWNvbHVtbnM6IDQgIWRlZmF1bHQ7XG4kZ3JpZC1waG9uZS1ndXR0ZXI6ICRncmlkLWRlc2t0b3AtZ3V0dGVyICFkZWZhdWx0O1xuJGdyaWQtcGhvbmUtbWFyZ2luOiAkZ3JpZC1kZXNrdG9wLW1hcmdpbiAhZGVmYXVsdDtcblxuJGdyaWQtY2VsbC1kZWZhdWx0LWNvbHVtbnM6ICRncmlkLXBob25lLWNvbHVtbnMgIWRlZmF1bHQ7XG4kZ3JpZC1tYXgtY29sdW1uczogJGdyaWQtZGVza3RvcC1jb2x1bW5zICFkZWZhdWx0O1xuXG4vKiBEQVRBIFRBQkxFICovXG5cbiRkYXRhLXRhYmxlLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1mb250LXNpemU6IDEycHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItc29ydC1pY29uLXNpemU6IDE2cHggIWRlZmF1bHQ7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci1jb2xvcjogcmdiYSgjMDAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1zb3J0ZWQtY29sb3I6IHJnYmEoIzAwMCwgMC44NykgIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItc29ydGVkLWljb24taG92ZXItY29sb3I6IHJnYmEoIzAwMCwgMC4yNikgIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yOiByZ2JhKCMwMDAsIDAuMTIpICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1ob3Zlci1jb2xvcjogI2VlZWVlZSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLXNlbGVjdGlvbi1jb2xvcjogI2UwZTBlMCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtZGl2aWRlcnM6IDFweCBzb2xpZCAkZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1yb3ctaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtbGFzdC1yb3ctaGVpZ2h0OiA1NnB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtaGVhZGVyLWhlaWdodDogNTZweCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmc6IDM2cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jb2x1bW4tcGFkZGluZzogJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmcgLyAyO1xuXG4kZGF0YS10YWJsZS1jYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jYXJkLXRpdGxlLXRvcDogMjBweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWNhcmQtcGFkZGluZzogMjRweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWJ1dHRvbi1wYWRkaW5nLXJpZ2h0OiAxNnB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtY2VsbC10b3A6ICRkYXRhLXRhYmxlLWNhcmQtcGFkZGluZyAvIDI7XG5cbi8qIERJQUxPRyAqL1xuJGRpYWxvZy1jb250ZW50LWNvbG9yOiAkY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjtcblxuLyogU05BQ0tCQVIgKi9cblxuLy8gSGFyZCBjb2RlZCBzaW5jZSB0aGUgY29sb3IgaXMgbm90IHByZXNlbnQgaW4gYW55IHBhbGV0dGUuXG4kc25hY2tiYXItYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhZGVmYXVsdDtcbiRzbmFja2Jhci10YWJsZXQtYnJlYWtwb2ludDogJGdyaWQtdGFibGV0LWJyZWFrcG9pbnQ7XG4kc25hY2tiYXItYWN0aW9uLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuXG4vKiBUT09MVElQICovXG4kdG9vbHRpcC1mb250LXNpemU6IDEwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1mb250LXNpemUtbGFyZ2U6IDE0cHggIWRlZmF1bHQ7XG5cbi8qIENISVAgKi9cbiRjaGlwLWJnLWNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMikgIWRlZmF1bHQ7XG4kY2hpcC1iZy1hY3RpdmUtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KSAhZGVmYXVsdDtcbiRjaGlwLWhlaWdodDogMzJweCAhZGVmYXVsdDtcbiRjaGlwLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDsgXG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiA9PT09PT09PT09ICBDb2xvciBQYWxldHRlcyAgPT09PT09PT09PSAqL1xuXG4vLyBDb2xvciBvcmRlcjogNTAsIDEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDAsIEExMDAsIEEyMDAsXG4vLyBBNDAwLCBBNzAwLlxuXG4kcGFsZXR0ZS1yZWQ6XG5cIjI1NSwyMzUsMjM4XCJcblwiMjU1LDIwNSwyMTBcIlxuXCIyMzksMTU0LDE1NFwiXG5cIjIyOSwxMTUsMTE1XCJcblwiMjM5LDgzLDgwXCJcblwiMjQ0LDY3LDU0XCJcblwiMjI5LDU3LDUzXCJcblwiMjExLDQ3LDQ3XCJcblwiMTk4LDQwLDQwXCJcblwiMTgzLDI4LDI4XCJcblwiMjU1LDEzOCwxMjhcIlxuXCIyNTUsODIsODJcIlxuXCIyNTUsMjMsNjhcIlxuXCIyMTMsMCwwXCI7XG5cbiRwYWxldHRlLXJlZC01MDogbnRoKCRwYWxldHRlLXJlZCwgMSk7XG4kcGFsZXR0ZS1yZWQtMTAwOiBudGgoJHBhbGV0dGUtcmVkLCAyKTtcbiRwYWxldHRlLXJlZC0yMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDMpO1xuJHBhbGV0dGUtcmVkLTMwMDogbnRoKCRwYWxldHRlLXJlZCwgNCk7XG4kcGFsZXR0ZS1yZWQtNDAwOiBudGgoJHBhbGV0dGUtcmVkLCA1KTtcbiRwYWxldHRlLXJlZC01MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDYpO1xuJHBhbGV0dGUtcmVkLTYwMDogbnRoKCRwYWxldHRlLXJlZCwgNyk7XG4kcGFsZXR0ZS1yZWQtNzAwOiBudGgoJHBhbGV0dGUtcmVkLCA4KTtcbiRwYWxldHRlLXJlZC04MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDkpO1xuJHBhbGV0dGUtcmVkLTkwMDogbnRoKCRwYWxldHRlLXJlZCwgMTApO1xuJHBhbGV0dGUtcmVkLUExMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDExKTtcbiRwYWxldHRlLXJlZC1BMjAwOiBudGgoJHBhbGV0dGUtcmVkLCAxMik7XG4kcGFsZXR0ZS1yZWQtQTQwMDogbnRoKCRwYWxldHRlLXJlZCwgMTMpO1xuJHBhbGV0dGUtcmVkLUE3MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDE0KTtcblxuJHBhbGV0dGUtcGluazpcblwiMjUyLDIyOCwyMzZcIlxuXCIyNDgsMTg3LDIwOFwiXG5cIjI0NCwxNDMsMTc3XCJcblwiMjQwLDk4LDE0NlwiXG5cIjIzNiw2NCwxMjJcIlxuXCIyMzMsMzAsOTlcIlxuXCIyMTYsMjcsOTZcIlxuXCIxOTQsMjQsOTFcIlxuXCIxNzMsMjAsODdcIlxuXCIxMzYsMTQsNzlcIlxuXCIyNTUsMTI4LDE3MVwiXG5cIjI1NSw2NCwxMjlcIlxuXCIyNDUsMCw4N1wiXG5cIjE5NywxNyw5OFwiO1xuXG4kcGFsZXR0ZS1waW5rLTUwOiBudGgoJHBhbGV0dGUtcGluaywgMSk7XG4kcGFsZXR0ZS1waW5rLTEwMDogbnRoKCRwYWxldHRlLXBpbmssIDIpO1xuJHBhbGV0dGUtcGluay0yMDA6IG50aCgkcGFsZXR0ZS1waW5rLCAzKTtcbiRwYWxldHRlLXBpbmstMzAwOiBudGgoJHBhbGV0dGUtcGluaywgNCk7XG4kcGFsZXR0ZS1waW5rLTQwMDogbnRoKCRwYWxldHRlLXBpbmssIDUpO1xuJHBhbGV0dGUtcGluay01MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA2KTtcbiRwYWxldHRlLXBpbmstNjAwOiBudGgoJHBhbGV0dGUtcGluaywgNyk7XG4kcGFsZXR0ZS1waW5rLTcwMDogbnRoKCRwYWxldHRlLXBpbmssIDgpO1xuJHBhbGV0dGUtcGluay04MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA5KTtcbiRwYWxldHRlLXBpbmstOTAwOiBudGgoJHBhbGV0dGUtcGluaywgMTApO1xuJHBhbGV0dGUtcGluay1BMTAwOiBudGgoJHBhbGV0dGUtcGluaywgMTEpO1xuJHBhbGV0dGUtcGluay1BMjAwOiBudGgoJHBhbGV0dGUtcGluaywgMTIpO1xuJHBhbGV0dGUtcGluay1BNDAwOiBudGgoJHBhbGV0dGUtcGluaywgMTMpO1xuJHBhbGV0dGUtcGluay1BNzAwOiBudGgoJHBhbGV0dGUtcGluaywgMTQpO1xuXG4kcGFsZXR0ZS1wdXJwbGU6XG5cIjI0MywyMjksMjQ1XCJcblwiMjI1LDE5MCwyMzFcIlxuXCIyMDYsMTQ3LDIxNlwiXG5cIjE4NiwxMDQsMjAwXCJcblwiMTcxLDcxLDE4OFwiXG5cIjE1NiwzOSwxNzZcIlxuXCIxNDIsMzYsMTcwXCJcblwiMTIzLDMxLDE2MlwiXG5cIjEwNiwyNywxNTRcIlxuXCI3NCwyMCwxNDBcIlxuXCIyMzQsMTI4LDI1MlwiXG5cIjIyNCw2NCwyNTFcIlxuXCIyMTMsMCwyNDlcIlxuXCIxNzAsMCwyNTVcIjtcblxuJHBhbGV0dGUtcHVycGxlLTUwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxKTtcbiRwYWxldHRlLXB1cnBsZS0xMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDIpO1xuJHBhbGV0dGUtcHVycGxlLTIwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMyk7XG4kcGFsZXR0ZS1wdXJwbGUtMzAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA0KTtcbiRwYWxldHRlLXB1cnBsZS00MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDUpO1xuJHBhbGV0dGUtcHVycGxlLTUwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgNik7XG4kcGFsZXR0ZS1wdXJwbGUtNjAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA3KTtcbiRwYWxldHRlLXB1cnBsZS03MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDgpO1xuJHBhbGV0dGUtcHVycGxlLTgwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgOSk7XG4kcGFsZXR0ZS1wdXJwbGUtOTAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMCk7XG4kcGFsZXR0ZS1wdXJwbGUtQTEwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTEpO1xuJHBhbGV0dGUtcHVycGxlLUEyMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDEyKTtcbiRwYWxldHRlLXB1cnBsZS1BNDAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMyk7XG4kcGFsZXR0ZS1wdXJwbGUtQTcwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTQpO1xuXG4kcGFsZXR0ZS1kZWVwLXB1cnBsZTpcblwiMjM3LDIzMSwyNDZcIlxuXCIyMDksMTk2LDIzM1wiXG5cIjE3OSwxNTcsMjE5XCJcblwiMTQ5LDExNywyMDVcIlxuXCIxMjYsODcsMTk0XCJcblwiMTAzLDU4LDE4M1wiXG5cIjk0LDUzLDE3N1wiXG5cIjgxLDQ1LDE2OFwiXG5cIjY5LDM5LDE2MFwiXG5cIjQ5LDI3LDE0NlwiXG5cIjE3OSwxMzYsMjU1XCJcblwiMTI0LDc3LDI1NVwiXG5cIjEwMSwzMSwyNTVcIlxuXCI5OCwwLDIzNFwiO1xuXG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS01MDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTEwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAyKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTIwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAzKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTMwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA0KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTQwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA1KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTUwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA2KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTYwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA3KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTcwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA4KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTgwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA5KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTkwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMCk7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BMTAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDExKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLUEyMDA6IG50aCgkcGFsZXR0ZS1kZWVwLXB1cnBsZSwgMTIpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtQTQwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMyk7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BNzAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDE0KTtcblxuJHBhbGV0dGUtaW5kaWdvOlxuXCIyMzIsMjM0LDI0NlwiXG5cIjE5NywyMDIsMjMzXCJcblwiMTU5LDE2OCwyMThcIlxuXCIxMjEsMTM0LDIwM1wiXG5cIjkyLDEwNywxOTJcIlxuXCI2Myw4MSwxODFcIlxuXCI1Nyw3MywxNzFcIlxuXCI0OCw2MywxNTlcIlxuXCI0MCw1MywxNDdcIlxuXCIyNiwzNSwxMjZcIlxuXCIxNDAsMTU4LDI1NVwiXG5cIjgzLDEwOSwyNTRcIlxuXCI2MSw5MCwyNTRcIlxuXCI0OCw3OSwyNTRcIjtcblxuJHBhbGV0dGUtaW5kaWdvLTUwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxKTtcbiRwYWxldHRlLWluZGlnby0xMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDIpO1xuJHBhbGV0dGUtaW5kaWdvLTIwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMyk7XG4kcGFsZXR0ZS1pbmRpZ28tMzAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA0KTtcbiRwYWxldHRlLWluZGlnby00MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDUpO1xuJHBhbGV0dGUtaW5kaWdvLTUwMDogbnRoKCRwYWxldHRlLWluZGlnbywgNik7XG4kcGFsZXR0ZS1pbmRpZ28tNjAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA3KTtcbiRwYWxldHRlLWluZGlnby03MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDgpO1xuJHBhbGV0dGUtaW5kaWdvLTgwMDogbnRoKCRwYWxldHRlLWluZGlnbywgOSk7XG4kcGFsZXR0ZS1pbmRpZ28tOTAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMCk7XG4kcGFsZXR0ZS1pbmRpZ28tQTEwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTEpO1xuJHBhbGV0dGUtaW5kaWdvLUEyMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDEyKTtcbiRwYWxldHRlLWluZGlnby1BNDAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMyk7XG4kcGFsZXR0ZS1pbmRpZ28tQTcwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTQpO1xuXG4kcGFsZXR0ZS1ibHVlOlxuXCIyMjcsMjQyLDI1M1wiXG5cIjE4NywyMjIsMjUxXCJcblwiMTQ0LDIwMiwyNDlcIlxuXCIxMDAsMTgxLDI0NlwiXG5cIjY2LDE2NSwyNDVcIlxuXCIzMywxNTAsMjQzXCJcblwiMzAsMTM2LDIyOVwiXG5cIjI1LDExOCwyMTBcIlxuXCIyMSwxMDEsMTkyXCJcblwiMTMsNzEsMTYxXCJcblwiMTMwLDE3NywyNTVcIlxuXCI2OCwxMzgsMjU1XCJcblwiNDEsMTIxLDI1NVwiXG5cIjQxLDk4LDI1NVwiO1xuXG4kcGFsZXR0ZS1ibHVlLTUwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMSk7XG4kcGFsZXR0ZS1ibHVlLTEwMDogbnRoKCRwYWxldHRlLWJsdWUsIDIpO1xuJHBhbGV0dGUtYmx1ZS0yMDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAzKTtcbiRwYWxldHRlLWJsdWUtMzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNCk7XG4kcGFsZXR0ZS1ibHVlLTQwMDogbnRoKCRwYWxldHRlLWJsdWUsIDUpO1xuJHBhbGV0dGUtYmx1ZS01MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA2KTtcbiRwYWxldHRlLWJsdWUtNjAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNyk7XG4kcGFsZXR0ZS1ibHVlLTcwMDogbnRoKCRwYWxldHRlLWJsdWUsIDgpO1xuJHBhbGV0dGUtYmx1ZS04MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA5KTtcbiRwYWxldHRlLWJsdWUtOTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTApO1xuJHBhbGV0dGUtYmx1ZS1BMTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTEpO1xuJHBhbGV0dGUtYmx1ZS1BMjAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTIpO1xuJHBhbGV0dGUtYmx1ZS1BNDAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTMpO1xuJHBhbGV0dGUtYmx1ZS1BNzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTQpO1xuXG4kcGFsZXR0ZS1saWdodC1ibHVlOlxuXCIyMjUsMjQ1LDI1NFwiXG5cIjE3OSwyMjksMjUyXCJcblwiMTI5LDIxMiwyNTBcIlxuXCI3OSwxOTUsMjQ3XCJcblwiNDEsMTgyLDI0NlwiXG5cIjMsMTY5LDI0NFwiXG5cIjMsMTU1LDIyOVwiXG5cIjIsMTM2LDIwOVwiXG5cIjIsMTE5LDE4OVwiXG5cIjEsODcsMTU1XCJcblwiMTI4LDIxNiwyNTVcIlxuXCI2NCwxOTYsMjU1XCJcblwiMCwxNzYsMjU1XCJcblwiMCwxNDUsMjM0XCI7XG5cbiRwYWxldHRlLWxpZ2h0LWJsdWUtNTA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtMTAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgMik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTIwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDMpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS0zMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA0KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNDAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgNSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTUwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDYpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS02MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA3KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNzAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgOCk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTgwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDkpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS05MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMCk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUExMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUEyMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUE0MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMyk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUE3MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxNCk7XG5cbiRwYWxldHRlLWN5YW46XG5cIjIyNCwyNDcsMjUwXCJcblwiMTc4LDIzNSwyNDJcIlxuXCIxMjgsMjIyLDIzNFwiXG5cIjc3LDIwOCwyMjVcIlxuXCIzOCwxOTgsMjE4XCJcblwiMCwxODgsMjEyXCJcblwiMCwxNzIsMTkzXCJcblwiMCwxNTEsMTY3XCJcblwiMCwxMzEsMTQzXCJcblwiMCw5NiwxMDBcIlxuXCIxMzIsMjU1LDI1NVwiXG5cIjI0LDI1NSwyNTVcIlxuXCIwLDIyOSwyNTVcIlxuXCIwLDE4NCwyMTJcIjtcblxuJHBhbGV0dGUtY3lhbi01MDogbnRoKCRwYWxldHRlLWN5YW4sIDEpO1xuJHBhbGV0dGUtY3lhbi0xMDA6IG50aCgkcGFsZXR0ZS1jeWFuLCAyKTtcbiRwYWxldHRlLWN5YW4tMjAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMyk7XG4kcGFsZXR0ZS1jeWFuLTMwMDogbnRoKCRwYWxldHRlLWN5YW4sIDQpO1xuJHBhbGV0dGUtY3lhbi00MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA1KTtcbiRwYWxldHRlLWN5YW4tNTAwOiBudGgoJHBhbGV0dGUtY3lhbiwgNik7XG4kcGFsZXR0ZS1jeWFuLTYwMDogbnRoKCRwYWxldHRlLWN5YW4sIDcpO1xuJHBhbGV0dGUtY3lhbi03MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA4KTtcbiRwYWxldHRlLWN5YW4tODAwOiBudGgoJHBhbGV0dGUtY3lhbiwgOSk7XG4kcGFsZXR0ZS1jeWFuLTkwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEwKTtcbiRwYWxldHRlLWN5YW4tQTEwMDogbnRoKCRwYWxldHRlLWN5YW4sIDExKTtcbiRwYWxldHRlLWN5YW4tQTIwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEyKTtcbiRwYWxldHRlLWN5YW4tQTQwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEzKTtcbiRwYWxldHRlLWN5YW4tQTcwMDogbnRoKCRwYWxldHRlLWN5YW4sIDE0KTtcblxuJHBhbGV0dGUtdGVhbDpcblwiMjI0LDI0MiwyNDFcIlxuXCIxNzgsMjIzLDIxOVwiXG5cIjEyOCwyMDMsMTk2XCJcblwiNzcsMTgyLDE3MlwiXG5cIjM4LDE2NiwxNTRcIlxuXCIwLDE1MCwxMzZcIlxuXCIwLDEzNywxMjNcIlxuXCIwLDEyMSwxMDdcIlxuXCIwLDEwNSw5MlwiXG5cIjAsNzcsNjRcIlxuXCIxNjcsMjU1LDIzNVwiXG5cIjEwMCwyNTUsMjE4XCJcblwiMjksMjMzLDE4MlwiXG5cIjAsMTkxLDE2NVwiO1xuXG4kcGFsZXR0ZS10ZWFsLTUwOiBudGgoJHBhbGV0dGUtdGVhbCwgMSk7XG4kcGFsZXR0ZS10ZWFsLTEwMDogbnRoKCRwYWxldHRlLXRlYWwsIDIpO1xuJHBhbGV0dGUtdGVhbC0yMDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAzKTtcbiRwYWxldHRlLXRlYWwtMzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNCk7XG4kcGFsZXR0ZS10ZWFsLTQwMDogbnRoKCRwYWxldHRlLXRlYWwsIDUpO1xuJHBhbGV0dGUtdGVhbC01MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA2KTtcbiRwYWxldHRlLXRlYWwtNjAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNyk7XG4kcGFsZXR0ZS10ZWFsLTcwMDogbnRoKCRwYWxldHRlLXRlYWwsIDgpO1xuJHBhbGV0dGUtdGVhbC04MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA5KTtcbiRwYWxldHRlLXRlYWwtOTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTApO1xuJHBhbGV0dGUtdGVhbC1BMTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTEpO1xuJHBhbGV0dGUtdGVhbC1BMjAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTIpO1xuJHBhbGV0dGUtdGVhbC1BNDAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTMpO1xuJHBhbGV0dGUtdGVhbC1BNzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTQpO1xuXG4kcGFsZXR0ZS1ncmVlbjpcblwiMjMyLDI0NSwyMzNcIlxuXCIyMDAsMjMwLDIwMVwiXG5cIjE2NSwyMTQsMTY3XCJcblwiMTI5LDE5OSwxMzJcIlxuXCIxMDIsMTg3LDEwNlwiXG5cIjc2LDE3NSw4MFwiXG5cIjY3LDE2MCw3MVwiXG5cIjU2LDE0Miw2MFwiXG5cIjQ2LDEyNSw1MFwiXG5cIjI3LDk0LDMyXCJcblwiMTg1LDI0NiwyMDJcIlxuXCIxMDUsMjQwLDE3NFwiXG5cIjAsMjMwLDExOFwiXG5cIjAsMjAwLDgzXCI7XG5cbiRwYWxldHRlLWdyZWVuLTUwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEpO1xuJHBhbGV0dGUtZ3JlZW4tMTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDIpO1xuJHBhbGV0dGUtZ3JlZW4tMjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDMpO1xuJHBhbGV0dGUtZ3JlZW4tMzAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDQpO1xuJHBhbGV0dGUtZ3JlZW4tNDAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDUpO1xuJHBhbGV0dGUtZ3JlZW4tNTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDYpO1xuJHBhbGV0dGUtZ3JlZW4tNjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDcpO1xuJHBhbGV0dGUtZ3JlZW4tNzAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDgpO1xuJHBhbGV0dGUtZ3JlZW4tODAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDkpO1xuJHBhbGV0dGUtZ3JlZW4tOTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEwKTtcbiRwYWxldHRlLWdyZWVuLUExMDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTEpO1xuJHBhbGV0dGUtZ3JlZW4tQTIwMDogbnRoKCRwYWxldHRlLWdyZWVuLCAxMik7XG4kcGFsZXR0ZS1ncmVlbi1BNDAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEzKTtcbiRwYWxldHRlLWdyZWVuLUE3MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTQpO1xuXG4kcGFsZXR0ZS1saWdodC1ncmVlbjpcblwiMjQxLDI0OCwyMzNcIlxuXCIyMjAsMjM3LDIwMFwiXG5cIjE5NywyMjUsMTY1XCJcblwiMTc0LDIxMywxMjlcIlxuXCIxNTYsMjA0LDEwMVwiXG5cIjEzOSwxOTUsNzRcIlxuXCIxMjQsMTc5LDY2XCJcblwiMTA0LDE1OSw1NlwiXG5cIjg1LDEzOSw0N1wiXG5cIjUxLDEwNSwzMFwiXG5cIjIwNCwyNTUsMTQ0XCJcblwiMTc4LDI1NSw4OVwiXG5cIjExOCwyNTUsM1wiXG5cIjEwMCwyMjEsMjNcIjtcblxuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tNTA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0xMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMik7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0yMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0zMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi00MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi01MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNik7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi02MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi03MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgOCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi04MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgOSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi05MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTApO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTEwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxMSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi1BMjAwOiBudGgoJHBhbGV0dGUtbGlnaHQtZ3JlZW4sIDEyKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLUE0MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTMpO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTcwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxNCk7XG5cbiRwYWxldHRlLWxpbWU6XG5cIjI0OSwyNTEsMjMxXCJcblwiMjQwLDI0NCwxOTVcIlxuXCIyMzAsMjM4LDE1NlwiXG5cIjIyMCwyMzEsMTE3XCJcblwiMjEyLDIyNSw4N1wiXG5cIjIwNSwyMjAsNTdcIlxuXCIxOTIsMjAyLDUxXCJcblwiMTc1LDE4MCw0M1wiXG5cIjE1OCwxNTcsMzZcIlxuXCIxMzAsMTE5LDIzXCJcblwiMjQ0LDI1NSwxMjlcIlxuXCIyMzgsMjU1LDY1XCJcblwiMTk4LDI1NSwwXCJcblwiMTc0LDIzNCwwXCI7XG5cbiRwYWxldHRlLWxpbWUtNTA6IG50aCgkcGFsZXR0ZS1saW1lLCAxKTtcbiRwYWxldHRlLWxpbWUtMTAwOiBudGgoJHBhbGV0dGUtbGltZSwgMik7XG4kcGFsZXR0ZS1saW1lLTIwMDogbnRoKCRwYWxldHRlLWxpbWUsIDMpO1xuJHBhbGV0dGUtbGltZS0zMDA6IG50aCgkcGFsZXR0ZS1saW1lLCA0KTtcbiRwYWxldHRlLWxpbWUtNDAwOiBudGgoJHBhbGV0dGUtbGltZSwgNSk7XG4kcGFsZXR0ZS1saW1lLTUwMDogbnRoKCRwYWxldHRlLWxpbWUsIDYpO1xuJHBhbGV0dGUtbGltZS02MDA6IG50aCgkcGFsZXR0ZS1saW1lLCA3KTtcbiRwYWxldHRlLWxpbWUtNzAwOiBudGgoJHBhbGV0dGUtbGltZSwgOCk7XG4kcGFsZXR0ZS1saW1lLTgwMDogbnRoKCRwYWxldHRlLWxpbWUsIDkpO1xuJHBhbGV0dGUtbGltZS05MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMCk7XG4kcGFsZXR0ZS1saW1lLUExMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMSk7XG4kcGFsZXR0ZS1saW1lLUEyMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMik7XG4kcGFsZXR0ZS1saW1lLUE0MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMyk7XG4kcGFsZXR0ZS1saW1lLUE3MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxNCk7XG5cbiRwYWxldHRlLXllbGxvdzpcblwiMjU1LDI1MywyMzFcIlxuXCIyNTUsMjQ5LDE5NlwiXG5cIjI1NSwyNDUsMTU3XCJcblwiMjU1LDI0MSwxMThcIlxuXCIyNTUsMjM4LDg4XCJcblwiMjU1LDIzNSw1OVwiXG5cIjI1MywyMTYsNTNcIlxuXCIyNTEsMTkyLDQ1XCJcblwiMjQ5LDE2OCwzN1wiXG5cIjI0NSwxMjcsMjNcIlxuXCIyNTUsMjU1LDE0MVwiXG5cIjI1NSwyNTUsMFwiXG5cIjI1NSwyMzQsMFwiXG5cIjI1NSwyMTQsMFwiO1xuXG4kcGFsZXR0ZS15ZWxsb3ctNTA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEpO1xuJHBhbGV0dGUteWVsbG93LTEwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMik7XG4kcGFsZXR0ZS15ZWxsb3ctMjAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAzKTtcbiRwYWxldHRlLXllbGxvdy0zMDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDQpO1xuJHBhbGV0dGUteWVsbG93LTQwMDogbnRoKCRwYWxldHRlLXllbGxvdywgNSk7XG4kcGFsZXR0ZS15ZWxsb3ctNTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA2KTtcbiRwYWxldHRlLXllbGxvdy02MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDcpO1xuJHBhbGV0dGUteWVsbG93LTcwMDogbnRoKCRwYWxldHRlLXllbGxvdywgOCk7XG4kcGFsZXR0ZS15ZWxsb3ctODAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA5KTtcbiRwYWxldHRlLXllbGxvdy05MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEwKTtcbiRwYWxldHRlLXllbGxvdy1BMTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxMSk7XG4kcGFsZXR0ZS15ZWxsb3ctQTIwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMTIpO1xuJHBhbGV0dGUteWVsbG93LUE0MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEzKTtcbiRwYWxldHRlLXllbGxvdy1BNzAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxNCk7XG5cbiRwYWxldHRlLWFtYmVyOlxuXCIyNTUsMjQ4LDIyNVwiXG5cIjI1NSwyMzYsMTc5XCJcblwiMjU1LDIyNCwxMzBcIlxuXCIyNTUsMjEzLDc5XCJcblwiMjU1LDIwMiw0MFwiXG5cIjI1NSwxOTMsN1wiXG5cIjI1NSwxNzksMFwiXG5cIjI1NSwxNjAsMFwiXG5cIjI1NSwxNDMsMFwiXG5cIjI1NSwxMTEsMFwiXG5cIjI1NSwyMjksMTI3XCJcblwiMjU1LDIxNSw2NFwiXG5cIjI1NSwxOTYsMFwiXG5cIjI1NSwxNzEsMFwiO1xuXG4kcGFsZXR0ZS1hbWJlci01MDogbnRoKCRwYWxldHRlLWFtYmVyLCAxKTtcbiRwYWxldHRlLWFtYmVyLTEwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAyKTtcbiRwYWxldHRlLWFtYmVyLTIwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAzKTtcbiRwYWxldHRlLWFtYmVyLTMwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA0KTtcbiRwYWxldHRlLWFtYmVyLTQwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA1KTtcbiRwYWxldHRlLWFtYmVyLTUwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA2KTtcbiRwYWxldHRlLWFtYmVyLTYwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA3KTtcbiRwYWxldHRlLWFtYmVyLTcwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA4KTtcbiRwYWxldHRlLWFtYmVyLTgwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA5KTtcbiRwYWxldHRlLWFtYmVyLTkwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMCk7XG4kcGFsZXR0ZS1hbWJlci1BMTAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDExKTtcbiRwYWxldHRlLWFtYmVyLUEyMDA6IG50aCgkcGFsZXR0ZS1hbWJlciwgMTIpO1xuJHBhbGV0dGUtYW1iZXItQTQwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMyk7XG4kcGFsZXR0ZS1hbWJlci1BNzAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDE0KTtcblxuJHBhbGV0dGUtb3JhbmdlOlxuXCIyNTUsMjQzLDIyNFwiXG5cIjI1NSwyMjQsMTc4XCJcblwiMjU1LDIwNCwxMjhcIlxuXCIyNTUsMTgzLDc3XCJcblwiMjU1LDE2NywzOFwiXG5cIjI1NSwxNTIsMFwiXG5cIjI1MSwxNDAsMFwiXG5cIjI0NSwxMjQsMFwiXG5cIjIzOSwxMDgsMFwiXG5cIjIzMCw4MSwwXCJcblwiMjU1LDIwOSwxMjhcIlxuXCIyNTUsMTcxLDY0XCJcblwiMjU1LDE0NSwwXCJcblwiMjU1LDEwOSwwXCI7XG5cbiRwYWxldHRlLW9yYW5nZS01MDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMSk7XG4kcGFsZXR0ZS1vcmFuZ2UtMTAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAyKTtcbiRwYWxldHRlLW9yYW5nZS0yMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDMpO1xuJHBhbGV0dGUtb3JhbmdlLTMwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNCk7XG4kcGFsZXR0ZS1vcmFuZ2UtNDAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA1KTtcbiRwYWxldHRlLW9yYW5nZS01MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDYpO1xuJHBhbGV0dGUtb3JhbmdlLTYwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNyk7XG4kcGFsZXR0ZS1vcmFuZ2UtNzAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA4KTtcbiRwYWxldHRlLW9yYW5nZS04MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDkpO1xuJHBhbGV0dGUtb3JhbmdlLTkwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTApO1xuJHBhbGV0dGUtb3JhbmdlLUExMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDExKTtcbiRwYWxldHRlLW9yYW5nZS1BMjAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAxMik7XG4kcGFsZXR0ZS1vcmFuZ2UtQTQwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTMpO1xuJHBhbGV0dGUtb3JhbmdlLUE3MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDE0KTtcblxuJHBhbGV0dGUtZGVlcC1vcmFuZ2U6XG5cIjI1MSwyMzMsMjMxXCJcblwiMjU1LDIwNCwxODhcIlxuXCIyNTUsMTcxLDE0NVwiXG5cIjI1NSwxMzgsMTAxXCJcblwiMjU1LDExMiw2N1wiXG5cIjI1NSw4NywzNFwiXG5cIjI0NCw4MSwzMFwiXG5cIjIzMCw3NCwyNVwiXG5cIjIxNiw2NywyMVwiXG5cIjE5MSw1NCwxMlwiXG5cIjI1NSwxNTgsMTI4XCJcblwiMjU1LDExMCw2NFwiXG5cIjI1NSw2MSwwXCJcblwiMjIxLDQ0LDBcIjtcblxuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtNTA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0xMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMik7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0yMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0zMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS00MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS01MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNik7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS02MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS03MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgOCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS04MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgOSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS05MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTApO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTEwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxMSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS1BMjAwOiBudGgoJHBhbGV0dGUtZGVlcC1vcmFuZ2UsIDEyKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLUE0MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTMpO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTcwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxNCk7XG5cblxuLy8gQ29sb3Igb3JkZXI6IDUwLCAxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwLlxuXG4kcGFsZXR0ZS1icm93bjpcblwiMjM5LDIzNSwyMzNcIlxuXCIyMTUsMjA0LDIwMFwiXG5cIjE4OCwxNzAsMTY0XCJcblwiMTYxLDEzNiwxMjdcIlxuXCIxNDEsMTEwLDk5XCJcblwiMTIxLDg1LDcyXCJcblwiMTA5LDc2LDY1XCJcblwiOTMsNjQsNTVcIlxuXCI3OCw1Miw0NlwiXG5cIjYyLDM5LDM1XCI7XG5cbiRwYWxldHRlLWJyb3duLTUwOiBudGgoJHBhbGV0dGUtYnJvd24sIDEpO1xuJHBhbGV0dGUtYnJvd24tMTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDIpO1xuJHBhbGV0dGUtYnJvd24tMjAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDMpO1xuJHBhbGV0dGUtYnJvd24tMzAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDQpO1xuJHBhbGV0dGUtYnJvd24tNDAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDUpO1xuJHBhbGV0dGUtYnJvd24tNTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDYpO1xuJHBhbGV0dGUtYnJvd24tNjAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDcpO1xuJHBhbGV0dGUtYnJvd24tNzAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDgpO1xuJHBhbGV0dGUtYnJvd24tODAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDkpO1xuJHBhbGV0dGUtYnJvd24tOTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDEwKTtcblxuJHBhbGV0dGUtZ3JleTpcblwiMjUwLDI1MCwyNTBcIlxuXCIyNDUsMjQ1LDI0NVwiXG5cIjIzOCwyMzgsMjM4XCJcblwiMjI0LDIyNCwyMjRcIlxuXCIxODksMTg5LDE4OVwiXG5cIjE1OCwxNTgsMTU4XCJcblwiMTE3LDExNywxMTdcIlxuXCI5Nyw5Nyw5N1wiXG5cIjY2LDY2LDY2XCJcblwiMzMsMzMsMzNcIjtcblxuJHBhbGV0dGUtZ3JleS01MDogbnRoKCRwYWxldHRlLWdyZXksIDEpO1xuJHBhbGV0dGUtZ3JleS0xMDA6IG50aCgkcGFsZXR0ZS1ncmV5LCAyKTtcbiRwYWxldHRlLWdyZXktMjAwOiBudGgoJHBhbGV0dGUtZ3JleSwgMyk7XG4kcGFsZXR0ZS1ncmV5LTMwMDogbnRoKCRwYWxldHRlLWdyZXksIDQpO1xuJHBhbGV0dGUtZ3JleS00MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA1KTtcbiRwYWxldHRlLWdyZXktNTAwOiBudGgoJHBhbGV0dGUtZ3JleSwgNik7XG4kcGFsZXR0ZS1ncmV5LTYwMDogbnRoKCRwYWxldHRlLWdyZXksIDcpO1xuJHBhbGV0dGUtZ3JleS03MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA4KTtcbiRwYWxldHRlLWdyZXktODAwOiBudGgoJHBhbGV0dGUtZ3JleSwgOSk7XG4kcGFsZXR0ZS1ncmV5LTkwMDogbnRoKCRwYWxldHRlLWdyZXksIDEwKTtcblxuJHBhbGV0dGUtYmx1ZS1ncmV5OlxuXCIyMzYsMjM5LDI0MVwiXG5cIjIwNywyMTYsMjIwXCJcblwiMTc2LDE5MCwxOTdcIlxuXCIxNDQsMTY0LDE3NFwiXG5cIjEyMCwxNDQsMTU2XCJcblwiOTYsMTI1LDEzOVwiXG5cIjg0LDExMCwxMjJcIlxuXCI2OSw5MCwxMDBcIlxuXCI1NSw3MSw3OVwiXG5cIjM4LDUwLDU2XCI7XG5cbiRwYWxldHRlLWJsdWUtZ3JleS01MDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMSk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktMTAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCAyKTtcbiRwYWxldHRlLWJsdWUtZ3JleS0yMDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDMpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTMwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNCk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNDAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA1KTtcbiRwYWxldHRlLWJsdWUtZ3JleS01MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDYpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTYwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNyk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNzAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA4KTtcbiRwYWxldHRlLWJsdWUtZ3JleS04MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDkpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTkwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMTApO1xuXG4kY29sb3ItYmxhY2s6IFwiMCwwLDBcIjtcbiRjb2xvci13aGl0ZTogXCIyNTUsMjU1LDI1NVwiO1xuXG5cbi8qIGNvbG9ycy5zY3NzICovXG4kc3R5bGVndWlkZS1nZW5lcmF0ZS10ZW1wbGF0ZTogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFRoZSB0d28gcG9zc2libGUgY29sb3JzIGZvciBvdmVybGF5ZWQgdGV4dC5cbiRjb2xvci1kYXJrLWNvbnRyYXN0OiAkY29sb3Itd2hpdGUgIWRlZmF1bHQ7XG4kY29sb3ItbGlnaHQtY29udHJhc3Q6ICRjb2xvci1ibGFjayAhZGVmYXVsdDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIFR5cG9ncmFwaHkgKi9cblxuQG1peGluIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaWYgJHVzZVByZWZlcnJlZCB7XG4gICAgZm9udC1mYW1pbHk6ICRwcmVmZXJyZWRfZm9udDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTQoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tZGlzcGxheS0zKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tZGlzcGxheS0yKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTEoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWhlYWRsaW5lKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby10aXRsZSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tc3ViaGVhZCgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tc3ViaGVhZC0yKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1ib2R5LTIoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiBmYWxzZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIEBpZiAkdXNlUHJlZmVycmVkIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IEBlbHNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJvZHktMSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1jYXB0aW9uKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJsb2NrcXVvdGUoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTAuNWVtO1xuICAgIGNvbnRlbnQ6ICfigJwnO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJ+KAnSc7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjA1ZW07XG4gIH1cblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tbWVudSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJ1dHRvbigkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWljb24oKSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIFNoYWRvd3MgKi9cblxuLy8gRm9jdXMgc2hhZG93IG1peGluLlxuQG1peGluIGZvY3VzLXNoYWRvdygpIHtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsMCwwLC4xOCksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4zNik7XG59XG5cbkBtaXhpbiBzaGFkb3ctMmRwKCkge1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTNkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS11bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpO1xufVxuQG1peGluIHNoYWRvdy00ZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTZkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LThkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpO1xufVxuXG5AbWl4aW4gc2hhZG93LTE2ZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwICA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwICA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5cbkBtaXhpbiBzaGFkb3ctMjRkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAgOXB4IDQ2cHggIDhweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAyNHB4IDM4cHggIDNweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tZmFzdC1vdXQtc2xvdy1pbigkZHVyYXRpb246MC4ycykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW47XG59XG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tbGluZWFyLW91dC1zbG93LWluKCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtbGluZWFyLW91dC1zbG93LWluO1xufVxuXG5AbWl4aW4gbWF0ZXJpYWwtYW5pbWF0aW9uLWZhc3Qtb3V0LWxpbmVhci1pbigkZHVyYXRpb246MC4ycykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LWxpbmVhci1pbjtcbn1cblxuQG1peGluIG1hdGVyaWFsLWFuaW1hdGlvbi1kZWZhdWx0KCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtZGVmYXVsdDtcbn1cblxuLyogRGlhbG9nICovXG5cbkBtaXhpbiBkaWFsb2ctd2lkdGgoJHVuaXRzOjUpIHtcbiAgQGlmKHR5cGVfb2YoJHVuaXRzKSAhPSAnbnVtYmVyJykge1xuICAgIEBlcnJvciBcIlRoZSB1bml0IGdpdmVuIHRvIGRpYWxvZy13aWR0aCBzaG91bGQgYmUgYSBudW1iZXIuXCI7XG4gIH1cbiAgLy8gNTZkcCBpcyB0aGUgYmFzZSB1bml0IHdpZHRoIGZvciBEaWFsb2dzLlxuICAvLyBXaXRoIDUgdW5pdHMgYmVpbmcgdGhlIG51bWJlciBvZiB1bml0cyBmb3IgYSBtb2JpbGUgZGV2aWNlLlxuICAvLyBodHRwczovL2dvby5nbC9zSzJPNW9cbiAgd2lkdGg6ICR1bml0cyAqIDU2cHg7XG59XG4iLCJAaW1wb3J0IFwifm1hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9jb2xvci1kZWZpbml0aW9uc1wiO1xuXG4vKiA9PT09PT09PT09ICBJTUFHRVMgID09PT09PT09PT0gKi9cbiRpbWFnZS1wYXRoOiAnL2Fzc2V0cy9pbWFnZXMnO1xuJGNoZWNrYm94LWltYWdlLXBhdGg6ICRpbWFnZS1wYXRoO1xuXG4vKiA9PT09PT09PT09ICBDb2xvciAmIFRoZW1lcyAgPT09PT09PT09PSAqL1xuQGltcG9ydCBcIi4vcGFsZXR0ZVwiO1xuXG4kYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XG4kYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICMyMDIwMjA7XG5cbi8qID09PT09PT09PT0gIFR5cG9ncmFwaHkgID09PT09PT09PT0gKi9cbiR0ZXh0LWNvbG9yLXByaW1hcnk6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjg3KTtcblxuLyogPT09PT09PT09PSAgQ29tcG9uZW50cyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBTdGFuZGFyZCBCdXR0b25zICA9PT09PT09PT09ICovXG5cbi8vIERlZmF1bHQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yOiAkY29sb3Itd2hpdGU7XG4vLyBDb2xvcmVkIGJ1dHRvbiBjb2xvcnMuXG4kYnV0dG9uLXByaW1hcnktY29sb3ItYWx0OiAkY29sb3Itc2Vjb25kYXJ5O1xuLy8gUmlwcGxlIGNvbG9yIGZvciBjb2xvcmVkIHJhaXNlZCBidXR0b25zLlxuLy8gRGlzYWJsZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1kaXNhYmxlZDogIzZiNmI2Yjtcbi8vYmFja2dyb3VuZC1jb2xvcjpcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yLWRpc2FibGVkOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4zKTtcbi8vY29sb3I6XG4vLyBGQUIgY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24tZmFiLWNvbG9yLWFsdDogJGNvbG9yLXNlY29uZGFyeTtcblxuJGJ1dHRvbi1mYWItdGV4dC1jb2xvci1hbHQ6ICRjb2xvci13aGl0ZTtcbiRidXR0b24tZmFiLWhvdmVyLWNvbG9yLWFsdDogI2ZmNGM0YztcbiRidXR0b24tZmFiLWFjdGl2ZS1jb2xvci1hbHQ6ICNmMjNkM2Q7XG4vLyBJY29uIGJ1dHRvbiBjb2xvcnMgYW5kIHNpemVzLlxuXG4vKiA9PT09PT09PT09ICBJY29uIFRvZ2dsZXMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgUmFkaW8gQnV0dG9ucyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBSaXBwbGUgZWZmZWN0ICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIExheW91dCAgPT09PT09PT09PSAqL1xuXG4vLyBEcmF3ZXJcbiRsYXlvdXQtZHJhd2VyLXdpZHRoOiAyMzZweDtcbiRsYXlvdXQtZHJhd2VyLWJnLWNvbG9yOiAjMjAyMDIwO1xuJGxheW91dC1uYXYtY29sb3I6ICMyMDIwMjA7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWxpbmstYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjI1KTtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGxheW91dC1uYXYtY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjI1KTtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1pY29uLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41Nik7XG4kbGF5b3V0LWRyYXdlci1oZWFkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcbiRsYXlvdXQtZHJhd2VyLWhlYWRlci1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuODUpO1xuXG4vLyBSaWdodCBTaWRlYmFyXG4kcmlnaHQtc2lkZWJhci13aWR0aDogMjMwcHg7XG5cbi8vIEhlYWRlclxuJGxheW91dC1oZWFkZXItdGV4dC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4kbGF5b3V0LWhlYWRlci1iZy1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xuJGxheW91dC1oZWFkZXItbmFtZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kbGF5b3V0LWhlYWRlci1pY29uLWhvdmVyLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4zKTtcblxuLy8gVGFic1xuXG4vKiA9PT09PT09PT09ICBDb250ZW50IFRhYnMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgQ2hlY2tib3hlcyAgPT09PT09PT09PSAqL1xuJGNoZWNrYm94LW9mZi1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNoZWNrYm94LWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiA9PT09PT09PT09ICBTd2l0Y2hlcyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBTcGlubmVyICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFRleHQgZmllbGRzICA9PT09PT09PT09ICovXG4kdG9kby1pbnB1dC10ZXh0LWxhYmVsLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4yKTtcblxuJGlucHV0LXRleHQtaGlnaGxpZ2h0LWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiRpbnB1dC10ZXh0LWJvdHRvbS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiRpbnB1dC10ZXh0LWRpc2FibGVkLXRleHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblxuLy9wbGFjZWhvbGRlciBjb2xvclxuJHRvZG8taW5wdXQtdGV4dC1oaWdobGlnaHQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjcpO1xuXG4vL2JvdHRvbSBsaW5lIGNvbG9yXG5cbi8qID09PT09PT09PT0gIENhcmQgID09PT09PT09PT0gKi9cbiRjYXJkLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuJGNhcmQtdGV4dC1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuOCk7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtc3VidGl0bGUtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjUpO1xuJGNhcmQtYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4wNSk7XG5cbiRjYXJkLXRpdGxlLWJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLWdyYXk7XG4kY2FyZC1hY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjA1KTtcbiRjYXJkLXRleHQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRjYXJkLWxpbmstY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGNhcmQtaHJlZi1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG5cbiRjYXJkLXRpdGxlLWltZy1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtZGVnLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC45KTtcblxuLyogPT09PT09PT09PSAgU2xpZGVycyA9PT09PT09PT09ICovXG5cbiRyYW5nZS1iZy1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNDUpO1xuJHJhbmdlLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiA9PT09PT09PT09IFByb2dyZXNzID09PT09PT09PT0gKi9cbiRwcm9ncmVzcy1tYWluLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuJHByb2dyZXNzLXNlY29uZGFyeS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNCk7XG5cbi8qID09PT09PT09PT0gIExpc3QgPT09PT09PT09PSAqL1xuJGxpc3QtbWFpbi10ZXh0LXRleHQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRsaXN0LXN1cHBvcnRpbmctdGV4dC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41NCk7XG4kbGlzdC1pY29uLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRsaXN0LWljb24taG92ZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuXG4kbGlzdC1ib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjEpO1xuJGxpc3QtaXRlbS1ib3JkZXI6IDFweCBzb2xpZCAkbGlzdC1ib3JkZXItY29sb3I7XG5cbi8qID09PT09PT09PT0gIEl0ZW0gPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IEl0ZW0gQ29sb3JzXG4kZGVmYXVsdC1pdGVtLWZvY3VzLWJnLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4xNSk7XG4kZGVmYXVsdC1pdGVtLWFjdGl2ZS1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMTUpO1xuJGRlZmF1bHQtaXRlbS1ob3Zlci1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMik7XG5cbi8vIERpc2FibGVkIEJ1dHRvbiBDb2xvcnNcblxuLyogPT09PT09PT09PSAgRHJvcGRvd24gbWVudSA9PT09PT09PT09ICovXG4kZGVmYXVsdC1kcm9wZG93bi1iZy1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG5cbiRkcm9wZG93bi1tZW51LXdpZHRoOiAzMTBweDtcbiRkcm9wZG93bi1tZW51LWhlYWRlci1mb250LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRzZXR0aW5nc19kcm9wZG93bl93aWR0aDogMTM1cHg7XG4kYWNjb3VudC1kcm9wZG93bi1hdmF0YXItc2l6ZTogNDhweDtcbiRtZXNzYWdlcy1kcm9wZG93bi1sYWJlbC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcblxuLyogPT09PT09PT09PSAgVG9vbHRpcHMgID09PT09PT09PT0gKi9cbiR0b29sdGlwLWJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG5cbi8qID09PT09PT09PT0gIEZvb3RlciAgPT09PT09PT09PSAqL1xuXG4vKiBURVhURklFTEQgKi9cblxuLyogU1dJVENIICovXG4kc3dpdGNoLW9mZi10aHVtYi1jb2xvcjogJHBhbGV0dGUtZ3JleS01MDA7XG5cbi8qIFNQSU5ORVIgKi9cblxuLy8gQW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwLlxuLy8gVGltZSBpdCB0YWtlcyB0byBleHBhbmQgYW5kIGNvbnRyYWN0IGFyYy5cbi8vIEhvdyBtdWNoIHRoZSBzdGFydCBsb2NhdGlvbiBvZiB0aGUgYXJjIHNob3VsZCByb3RhdGUgZWFjaCB0aW1lLlxuXG4vKiBSQURJTyAqL1xuJHJhZGlvLW9mZi1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuOCk7XG4kcmFkaW8tY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuOCk7XG5cbi8qIE1FTlUgKi9cblxuLyogTElTVCAqL1xuJGxpc3QtYm9yZGVyOiAwO1xuJGxpc3QtYm90dG9tLXBhZGRpbmc6IDE2cHg7XG4kbGlzdC1hdmF0YXItdGV4dC1sZWZ0LWRpc3RhbmNlOiA2NHB4O1xuJGxpc3QtaWNvbi10ZXh0LWxlZnQtZGlzdGFuY2U6IDU2cHg7XG4kbGlzdC1hdmF0YXItc2l6ZTogMzJweDtcbiRsaXN0LXR3by1saW5lLWhlaWdodDogNjRweDtcblxuLyogTEFZT1VUICovXG4kbGF5b3V0LWRyYXdlci1uYXJyb3c6IDIzNnB4O1xuJGxheW91dC1oZWFkZXItbW9iaWxlLWluZGVudDogOHB4O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1pbmRlbnQ6IDIwcHg7XG4kbGF5b3V0LXNjcmVlbi1zaXplLXRocmVzaG9sZDogMTQ0MHB4O1xuXG4vKiBJQ09OICovXG5cbi8qIElDT04gVE9HR0xFICovXG5cbi8qIEZPT1RFUiAqL1xuXG4vKiBtZWdhLWZvb3RlciAqL1xuXG4vKiBtaW5pLWZvb3RlciAqL1xuXG4vKiBDSEVDS0JPWCAqL1xuJGNoZWNrYm94LWJ1dHRvbi1zaXplOiAxOHB4O1xuJGNoZWNrYm94LWxhYmVsLWhlaWdodDogMjRweDtcbiRjaGVja2JveC1wYWRkaW5nOiA4cHg7XG5cbi8qIENBUkQgKi9cblxuLyogQ2FyZCBkaW1lbnNpb25zICovXG4kY2FyZC1oZWlnaHQ6IGF1dG87XG4kY2FyZC13aWR0aDogYXV0bztcbiRjYXJkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcbiRjYXJkLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IDQwMDtcbiRjYXJkLXZlcnRpY2FsLXBhZGRpbmc6IDIwcHg7XG5cbi8qIENvdmVyIGltYWdlICovXG5cbi8qIEJVVFRPTiAqL1xuJGJ1dHRvbi1mb250LXdlaWd0aDogNDAwO1xuXG4vKiBBTklNQVRJT04gKi9cblxuLyogUFJPR1JFU1MgKi9cblxuLyogQkFER0UgKi9cbiRiYWRnZS1iYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcbiRiYWRnZS1jb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4vKiBTSEFET1dTICovXG5cbi8qIEdSSUQgKi9cbiRncmlkLXRhYmxldC1jb2x1bW5zOiAxMjtcbiRncmlkLXBob25lLWNvbHVtbnM6IDQ7XG5cbiRncmlkLWRlc2t0b3AtZ3V0dGVyOiAzMnB4O1xuJGdyaWQtZGVza3RvcC1tYXJnaW46IDE2cHg7XG5cbiRncmlkLXRhYmxldC1icmVha3BvaW50OiAxMTUycHg7XG4kZ3JpZC1kZXNrdG9wLWJyZWFrcG9pbnQ6IDE5MjBweDtcbiRwaG9uZS1icmVha3BvaW50OiA4MDBweDtcblxuLyogREFUQSBUQUJMRSAqL1xuJGRhdGEtdGFibGUtZm9udC1zaXplOiAxNnB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogMTNweDtcblxuJGRhdGEtdGFibGUtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRkYXRhLXRhYmxlLWhlYWRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGRhdGEtdGFibGUtZGl2aWRlci1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuMDUpO1xuJGRhdGEtdGFibGUtaG92ZXItY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjIpO1xuJGRhdGEtdGFibGUtc2VsZWN0aW9uLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcblxuJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmc6IDE2cHg7XG5cbi8qIFRPT0xUSVAgKi9cbiR0b29sdGlwLWZvbnQtc2l6ZTogMTJweDtcbiR0YWJsZS10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6IDVweDtcbiR0YWJsZS10b29sdGlwLWhvcml6b250YWwtcGFkZGluZzogOHB4O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogV0lER0VUUyAmIENPTVBPTkVOVFMgKi9cblxuLyogVHJlbmRpbmcgKi9cbiR0cmVuZGluZy1hcnJvdy1zaXplOiA0OHB4O1xuJHRyZW5kaW5nLWFycm93LXVwLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiR0cmVuZGluZy1hcnJvdy1kb3duLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiBsYWJlbCAqL1xuJGxhYmVsLWhlaWdodDogMTJweDtcbiRsYWJlbC1wYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XG5cbi8qIGNoYXJ0cyAqL1xuJHBpZS1jaGFydC1oZWlnaHQ6IDIyOHB4O1xuXG4kbGluZS1jaGFydC1oZWlnaHQ6IDI4MHB4O1xuJGxpbmUtY2hhcnQtd2lkdGg6IDEwMCU7XG4kbGluZS1jaGFydC1heGlzLWxhYmVsLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcbiRsaW5lLWNoYXJ0LWd1aWRlbGluZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kbGluZS1jaGFydC1ndWlkZWxpbmUtd2lkdGg6IDAuNXB4O1xuXG4kbGVnZW5kLW1hcmstc2l6ZTogOHB4O1xuJGxlZ2VuZC10ZXh0LWluZGVudDogJGxlZ2VuZC1tYXJrLXNpemUgKyAxNjtcblxuLyogZW1wbG95ZXIgZm9ybSAqL1xuJGVtcGxveWVyLWZvcm0td2lkdGg6IDY3MHB4O1xuJGVtcGxveWVyLWZvcm0tY29sb3ItYnJpZ2h0ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4kZW1wbG95ZXItZm9ybS1jb2xvci1kYXJrZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiRlbXBsb3llci1mb3JtLWhvcml6b250YWwtcGFkZGluZzogMTVweDtcblxuJHdlYXRoZXItc2hhZG93LWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC40KTtcbiR3ZWF0aGVyLXNoYWRvdy00cHg6IDRweCA0cHggNHB4ICR3ZWF0aGVyLXNoYWRvdy1jb2xvcjtcblxuLyogcm93ICovXG4kcm93LWNvbC1wYWRkaW5nOiAzMHB4O1xuXG4vKiBzY3JvbGwgKi9cbiRzY3JvbGxiYXItdGh1bWI6ICRjb2xvci1zbW9vdGgtZ3JheTtcbiRzY3JvbGxiYXItdHJhY2s6ICRjb2xvci1zbW9rZTtcbiIsIiRjb2xvci1kYXJrLWdyYXk6ICMzMzM7XG4kY29sb3ItZ3JheTogIzQ0NDtcbiRjb2xvci10YWJsZS1ib3JkZXI6ICM2MDYwNjA7XG4kY29sb3Itc21vb3RoLWdyYXk6ICM5OTk7XG4kY29sb3Itc21va2U6ICM2NjY7XG4kY29sb3ItcmVkOiAjZjQ0MzM2O1xuJGNvbG9yLWxpZ2h0LWJsdWU6ICMwM2E5ZjQ7XG4kY29sb3Itb3JhbmdlOiAjZmZjMTA3O1xuJGNvbG9yLWFtYmVyOiAjZmY5ODAwO1xuJGNvbG9yLXRlYWw6ICMwMGJjZDQ7XG4kY29sb3ItcHVycGxlOiAjNzcyNmQzO1xuJGNvbG9yLWdyZWVuOiAjMDBkNDVhO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWFsdG86ICNkZGQ7XG4kY29sb3Itc2lsdmVyLWNoYWxpY2U6ICNhYWE7XG4kY29sb3ItY2hhbWJyYXk6ICMzYjU5OTg7XG4kY29sb3ItY2VsdXJlYW46ICMwMGFiZjE7XG4kY29sb3ItbG9jaG1hcmE6ICMwMDgzYmU7XG4kY29sb3ItZnJvbHk6ICNmMjY3OTg7XG4kY29sb3ItZG9kZ2VyLWJsdWU6ICM0MTc2ZmI7XG4kY29sb3ItZG92ZS1ncmF5OiAjNjc2NzY3O1xuJGNvbG9yLXByaW1hcnk6IHJnYigwLCAxODgsIDIxMik7XG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjQ0LCA2NywgNTQpO1xuJGNvbG9yLWJhYnktYmx1ZTogcmdiKDExNiwgMTk5LCAyMDkpO1xuJGNvbG9yLWNlcnVsZWFuOiByZ2IoODAsIDE1MCwgMjE1KTtcbiRjb2xvci1taW50OiByZ2IoOTYsIDE5NiwgMTUwKTtcbiRjb2xvci1ncmV5LTUwMDogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTAwfSlcIik7XG5cbi50ZXh0LWNvbG9yLS1zbW9rZSB7XG4gIGNvbG9yOiAkY29sb3Itc21va2U7XG59XG5cbi5jb2xvci0tZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tZGFyay1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstZ3JheTtcbn1cblxuLmNvbG9yLS1zbW9vdGgtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zbW9vdGgtZ3JheSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb2xvci0tc21vb3RoLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLXNtb290aC1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1vcmFuZ2Uge1xuICBjb2xvcjogJGNvbG9yLW9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItLWFtYmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFtYmVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1hbWJlciB7XG4gIGNvbG9yOiAkY29sb3ItYW1iZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbiAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tZ3JlZW4ge1xuICBjb2xvcjogJGNvbG9yLWdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tbGlnaHQtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1saWdodC1ibHVlIHtcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tcHVycGxlIHtcbiAgY29sb3I6ICRjb2xvci1wdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS10ZWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlYWwgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXRleHQtLXRlYWwge1xuICBjb2xvcjogJGNvbG9yLXRlYWwgIWltcG9ydGFudDtcbn1cbiIsIkBpbXBvcnQgJ350aGVtZS9oZWxwZXJzJztcblxuOmhvc3Qge1xuICAudWktaWNvbnMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuXG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gIH1cblxuICAuaXRlbWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG4gICAgLmNhcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cblxuICBociB7XG4gICAgbWFyZ2luOiAwIC0xNnB4IDFlbTtcbiAgfVxuXG4gIC5zZWN0aW9uLW5hbWUge1xuICAgIG1hcmdpbjogMjVweCA1cHggMzBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/ui/icons/icons.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.ts ***!
  \***************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var IconsComponent = /** @class */ (function (_super) {
    __extends(IconsComponent, _super);
    function IconsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiIcons = true;
        _this.data = [
            {
                name: 'action',
                icons: [
                    '3d_rotation',
                    'accessibility',
                    'accessibility_new',
                    'accessible',
                    'accessible_forward',
                    'account_balance',
                    'account_balance_wallet',
                    'account_box',
                    'account_circle',
                    'add_shopping_cart',
                    'alarm',
                    'alarm_add',
                    'alarm_off',
                    'alarm_on',
                    // 'all_inbox',
                    'all_out',
                    'android',
                    'announcement',
                    'arrow_right_alt',
                    'aspect_ratio',
                    'assessment',
                    'assignment',
                    'assignment_ind',
                    'assignment_late',
                    'assignment_return',
                    'assignment_returned',
                    'assignment_turned_in',
                    'autorenew',
                    'backup',
                    'book',
                    'bookmark',
                    'bookmark_border',
                    // 'bookmarks',
                    'bug_report',
                    'build',
                    'cached',
                    'calendar_today',
                    'calendar_view_day',
                    'camera_enhance',
                    'card_giftcard',
                    'card_membership',
                    'card_travel',
                    'change_history',
                    'check_circle',
                    'check_circle_outline',
                    'chrome_reader_mode',
                    'class',
                    'code',
                    'commute',
                    'compare_arrows',
                    'contact_support',
                    'copyright',
                    'credit_card',
                    'dashboard',
                    'date_range',
                    'delete',
                    'delete_forever',
                    'delete_outline',
                    'description',
                    'dns',
                    'done',
                    'done_all',
                    'done_outline',
                    'donut_large',
                    'donut_small',
                    'drag_indicator',
                    'eject',
                    'euro_symbol',
                    'event',
                    'event_seat',
                    'exit_to_app',
                    'explore',
                    // 'explore_off',
                    'extension',
                    'face',
                    'favorite',
                    'favorite_border',
                    'feedback',
                    'find_in_page',
                    'find_replace',
                    'fingerprint',
                    'flight_land',
                    'flight_takeoff',
                    'flip_to_back',
                    'flip_to_front',
                    'g_translate',
                    'gavel',
                    'get_app',
                    'gif',
                    'grade',
                    'group_work',
                    'help',
                    'help_outline',
                    'highlight_off',
                    'history',
                    'home',
                    'horizontal_split',
                    'hourglass_empty',
                    'hourglass_full',
                    'http',
                    'https',
                    'important_devices',
                    'info',
                    'input',
                    'invert_colors',
                    'label',
                    'label_important',
                    // 'label_off',
                    'language',
                    'launch',
                    'line_style',
                    'line_weight',
                    'list',
                    'lock',
                    'lock_open',
                    'loyalty',
                    'markunread_mailbox',
                    'maximize',
                    'minimize',
                    'motorcycle',
                    'note_add',
                    'offline_bolt',
                    'offline_pin',
                    'opacity',
                    'open_in_browser',
                    'open_in_new',
                    'open_with',
                    'pageview',
                    'pan_tool',
                    'payment',
                    'perm_camera_mic',
                    'perm_contact_calendar',
                    'perm_data_setting',
                    'perm_device_information',
                    'perm_identity',
                    'perm_media',
                    'perm_phone_msg',
                    'perm_scan_wifi',
                    'pets',
                    'picture_in_picture',
                    'picture_in_picture_alt',
                    'play_for_work',
                    'polymer',
                    'power_settings_new',
                    'pregnant_woman',
                    'print',
                    'query_builder',
                    'question_answer',
                    'receipt',
                    'record_voice_over',
                    'redeem',
                    'remove_shopping_cart',
                    'reorder',
                    'report_problem',
                    'restore',
                    'restore_from_trash',
                    'restore_page',
                    'room',
                    'rounded_corner',
                    'rowing',
                    'schedule',
                    'search',
                    'settings',
                    'settings_applications',
                    'settings_backup_restore',
                    'settings_bluetooth',
                    'settings_brightness',
                    'settings_cell',
                    'settings_ethernet',
                    'settings_input_antenna',
                    'settings_input_component',
                    'settings_input_composite',
                    'settings_input_hdmi',
                    'settings_input_svideo',
                    'settings_overscan',
                    'settings_phone',
                    'settings_power',
                    'settings_remote',
                    'settings_voice',
                    'shop',
                    'shop_two',
                    'shopping_basket',
                    'shopping_cart',
                    'speaker_notes',
                    'speaker_notes_off',
                    'spellcheck',
                    // 'star_rate',
                    'stars',
                    'store',
                    'subject',
                    'supervised_user_circle',
                    'supervisor_account',
                    'swap_horiz',
                    'swap_horizontal_circle',
                    'swap_vert',
                    'swap_vertical_circle',
                    'tab',
                    'tab_unselected',
                    'text_rotate_up',
                    'text_rotate_vertical',
                    'text_rotation_down',
                    'text_rotation_none',
                    'theaters',
                    'thumb_down',
                    'thumb_up',
                    'thumbs_up_down',
                    'timeline',
                    'toc',
                    'today',
                    'toll',
                    'touch_app',
                    'track_changes',
                    'translate',
                    'trending_down',
                    'trending_flat',
                    'trending_up',
                    'turned_in',
                    'turned_in_not',
                    'update',
                    'verified_user',
                    'vertical_split',
                    'view_agenda',
                    'view_array',
                    'view_carousel',
                    'view_column',
                    'view_day',
                    'view_headline',
                    'view_list',
                    'view_module',
                    'view_quilt',
                    'view_stream',
                    'view_week',
                    'visibility',
                    'visibility_off',
                    'voice_over_off',
                    'watch_later',
                    'work',
                    'work_off',
                    'work_outline',
                    'youtube_searched_for',
                    'zoom_in',
                    'zoom_out',
                ],
            },
            {
                name: 'alert',
                icons: [
                    'add_alert',
                    'error',
                    'error_outline',
                    'notification_important',
                    'warning',
                ],
            },
            {
                name: 'av',
                icons: [
                    '4k',
                    'add_to_queue',
                    'airplay',
                    'album',
                    'art_track',
                    'av_timer',
                    'branding_watermark',
                    'call_to_action',
                    'closed_caption',
                    'control_camera',
                    'equalizer',
                    'explicit',
                    'fast_forward',
                    'fast_rewind',
                    'featured_play_list',
                    'featured_video',
                    'fiber_dvr',
                    'fiber_manual_record',
                    'fiber_new',
                    'fiber_pin',
                    'fiber_smart_record',
                    'forward_10',
                    'forward_30',
                    'forward_5',
                    'games',
                    'hd',
                    'hearing',
                    'high_quality',
                    'library_add',
                    'library_books',
                    'library_music',
                    'loop',
                    'mic',
                    'mic_none',
                    'mic_off',
                    'missed_video_call',
                    'movie',
                    'music_video',
                    'new_releases',
                    'not_interested',
                    'note',
                    'pause',
                    'pause_circle_filled',
                    'pause_circle_outline',
                    'play_arrow',
                    'play_circle_filled',
                    // 'play_circle_filled_white',
                    'play_circle_outline',
                    'playlist_add',
                    'playlist_add_check',
                    'playlist_play',
                    'queue',
                    'queue_music',
                    'queue_play_next',
                    'radio',
                    'recent_actors',
                    'remove_from_queue',
                    'repeat',
                    'repeat_one',
                    'replay',
                    'replay_10',
                    'replay_30',
                    'replay_5',
                    'shuffle',
                    'skip_next',
                    'skip_previous',
                    'slow_motion_video',
                    'snooze',
                    'sort_by_alpha',
                    'stop',
                    'subscriptions',
                    'subtitles',
                    'surround_sound',
                    'video_call',
                    'video_label',
                    'video_library',
                    'videocam',
                    'videocam_off',
                    'volume_down',
                    'volume_mute',
                    'volume_off',
                    'volume_up',
                    'web',
                    'web_asset',
                ],
            },
            {
                name: 'communication',
                icons: [
                    'alternate_email',
                    'business',
                    'call',
                    'call_end',
                    'call_made',
                    'call_merge',
                    'call_missed',
                    'call_missed_outgoing',
                    'call_received',
                    'call_split',
                    'cancel_presentation',
                    'cell_wifi',
                    'chat',
                    'chat_bubble',
                    'chat_bubble_outline',
                    'clear_all',
                    'comment',
                    'contact_mail',
                    'contact_phone',
                    'contacts',
                    // 'desktop_access_disabled',
                    'dialer_sip',
                    'dialpad',
                    'domain_disabled',
                    // 'duo',
                    'email',
                    'forum',
                    'import_contacts',
                    'import_export',
                    'invert_colors_off',
                    'list_alt',
                    'live_help',
                    'location_off',
                    'location_on',
                    'mail_outline',
                    'message',
                    'mobile_screen_share',
                    'no_sim',
                    'pause_presentation',
                    // 'person_add_disabled',
                    'phone',
                    'phonelink_erase',
                    'phonelink_lock',
                    'phonelink_ring',
                    'phonelink_setup',
                    'portable_wifi_off',
                    'present_to_all',
                    // 'print_disabled',
                    'ring_volume',
                    'rss_feed',
                    'screen_share',
                    'sentiment_satisfied_alt',
                    'speaker_phone',
                    'stay_current_landscape',
                    'stay_current_portrait',
                    'stay_primary_landscape',
                    'stay_primary_portrait',
                    'stop_screen_share',
                    'swap_calls',
                    'textsms',
                    'unsubscribe',
                    'voicemail',
                    'vpn_key',
                ],
            },
            {
                name: 'content',
                icons: [
                    'add',
                    'add_box',
                    'add_circle',
                    'add_circle_outline',
                    'archive',
                    'backspace',
                    'ballot',
                    'block',
                    'clear',
                    'create',
                    'delete_sweep',
                    'drafts',
                    'file_copy',
                    'filter_list',
                    'flag',
                    'font_download',
                    'forward',
                    'gesture',
                    'how_to_reg',
                    'how_to_vote',
                    'inbox',
                    'link',
                    'link_off',
                    'low_priority',
                    'mail',
                    'markunread',
                    'move_to_inbox',
                    'next_week',
                    'outlined_flag',
                    'redo',
                    'remove',
                    'remove_circle',
                    'remove_circle_outline',
                    'reply',
                    'reply_all',
                    'report',
                    'report_off',
                    'save',
                    'save_alt',
                    'select_all',
                    'send',
                    'sort',
                    'text_format',
                    'unarchive',
                    'undo',
                    'waves',
                    'weekend',
                    'where_to_vote',
                ],
            },
            {
                name: 'device',
                icons: [
                    'access_alarm',
                    'access_alarms',
                    'access_time',
                    'add_alarm',
                    'add_to_home_screen',
                    'airplanemode_active',
                    'airplanemode_inactive',
                    // 'battery_20',
                    // 'battery_30',
                    // 'battery_50',
                    // 'battery_60',
                    // 'battery_80',
                    // 'battery_90',
                    'battery_alert',
                    // 'battery_charging_20',
                    // 'battery_charging_30',
                    // 'battery_charging_50',
                    // 'battery_charging_60',
                    // 'battery_charging_80',
                    // 'battery_charging_90',
                    'battery_charging_full',
                    'battery_full',
                    'battery_std',
                    'battery_unknown',
                    'bluetooth',
                    'bluetooth_connected',
                    'bluetooth_disabled',
                    'bluetooth_searching',
                    'brightness_auto',
                    'brightness_high',
                    'brightness_low',
                    'brightness_medium',
                    'data_usage',
                    'developer_mode',
                    'devices',
                    'dvr',
                    'gps_fixed',
                    'gps_not_fixed',
                    'gps_off',
                    'graphic_eq',
                    'location_disabled',
                    'location_searching',
                    'mobile_friendly',
                    'mobile_off',
                    'network_cell',
                    'network_wifi',
                    'nfc',
                    'screen_lock_landscape',
                    'screen_lock_portrait',
                    'screen_lock_rotation',
                    'screen_rotation',
                    'sd_storage',
                    'settings_system_daydream',
                    // 'signal_cellular_0_bar',
                    // 'signal_cellular_1_bar',
                    // 'signal_cellular_2_bar',
                    // 'signal_cellular_3_bar',
                    'signal_cellular_4_bar',
                    'signal_cellular_alt',
                    // 'signal_cellular_connected_no_internet_0_bar',
                    // 'signal_cellular_connected_no_internet_1_bar',
                    // 'signal_cellular_connected_no_internet_2_bar',
                    // 'signal_cellular_connected_no_internet_3_bar',
                    'signal_cellular_connected_no_internet_4_bar',
                    'signal_cellular_no_sim',
                    'signal_cellular_null',
                    'signal_cellular_off',
                    // 'signal_wifi_0_bar',
                    // 'signal_wifi_1_bar',
                    // 'signal_wifi_1_bar_lock',
                    // 'signal_wifi_2_bar',
                    // 'signal_wifi_2_bar_lock',
                    // 'signal_wifi_3_bar',
                    // 'signal_wifi_3_bar_lock',
                    // 'signal_wifi_4_bar',
                    // 'signal_wifi_4_bar_lock',
                    'signal_wifi_off',
                    'storage',
                    'usb',
                    'wallpaper',
                    'widgets',
                    'wifi_lock',
                    'wifi_tethering',
                ],
            },
            {
                name: 'editor',
                icons: [
                    'add_comment',
                    'attach_file',
                    'attach_money',
                    'bar_chart',
                    'border_all',
                    'border_bottom',
                    'border_clear',
                    'border_color',
                    'border_horizontal',
                    'border_inner',
                    'border_left',
                    'border_outer',
                    'border_right',
                    'border_style',
                    'border_top',
                    'border_vertical',
                    'bubble_chart',
                    'drag_handle',
                    'format_align_center',
                    'format_align_justify',
                    'format_align_left',
                    'format_align_right',
                    'format_bold',
                    'format_clear',
                    'format_color_fill',
                    'format_color_reset',
                    'format_color_text',
                    'format_indent_decrease',
                    'format_indent_increase',
                    'format_italic',
                    'format_line_spacing',
                    'format_list_bulleted',
                    'format_list_numbered',
                    'format_list_numbered_rtl',
                    'format_paint',
                    'format_quote',
                    'format_shapes',
                    'format_size',
                    'format_strikethrough',
                    'format_textdirection_l_to_r',
                    'format_textdirection_r_to_l',
                    'format_underlined',
                    'functions',
                    'highlight',
                    'insert_chart',
                    'insert_chart_outlined',
                    'insert_comment',
                    'insert_drive_file',
                    'insert_emoticon',
                    'insert_invitation',
                    'insert_link',
                    'insert_photo',
                    'linear_scale',
                    'merge_type',
                    'mode_comment',
                    'monetization_on',
                    'money_off',
                    'multiline_chart',
                    'notes',
                    'pie_chart',
                    'publish',
                    'scatter_plot',
                    'score',
                    'short_text',
                    'show_chart',
                    'space_bar',
                    'strikethrough_s',
                    'table_chart',
                    'text_fields',
                    'title',
                    'vertical_align_bottom',
                    'vertical_align_center',
                    'vertical_align_top',
                    'wrap_text',
                ],
            },
            {
                name: 'file',
                icons: [
                    'attachment',
                    'cloud',
                    'cloud_circle',
                    'cloud_done',
                    'cloud_download',
                    'cloud_off',
                    'cloud_queue',
                    'cloud_upload',
                    'create_new_folder',
                    'folder',
                    'folder_open',
                    'folder_shared',
                ],
            },
            {
                name: 'hardware',
                icons: [
                    'cast',
                    'cast_connected',
                    // 'cast_for_education',
                    'computer',
                    'desktop_mac',
                    'desktop_windows',
                    'developer_board',
                    'device_hub',
                    'device_unknown',
                    'devices_other',
                    'dock',
                    'gamepad',
                    'headset',
                    'headset_mic',
                    'keyboard',
                    'keyboard_arrow_down',
                    'keyboard_arrow_left',
                    'keyboard_arrow_right',
                    'keyboard_arrow_up',
                    'keyboard_backspace',
                    'keyboard_capslock',
                    'keyboard_hide',
                    'keyboard_return',
                    'keyboard_tab',
                    'keyboard_voice',
                    'laptop',
                    'laptop_chromebook',
                    'laptop_mac',
                    'laptop_windows',
                    'memory',
                    'mouse',
                    'phone_android',
                    'phone_iphone',
                    'phonelink',
                    'phonelink_off',
                    'power_input',
                    'router',
                    'scanner',
                    'security',
                    'sim_card',
                    'smartphone',
                    'speaker',
                    'speaker_group',
                    'tablet',
                    'tablet_android',
                    'tablet_mac',
                    'toys',
                    'tv',
                    'videogame_asset',
                    'watch',
                ],
            },
            {
                name: 'image',
                icons: [
                    'add_a_photo',
                    'add_photo_alternate',
                    'add_to_photos',
                    'adjust',
                    'assistant',
                    'assistant_photo',
                    'audiotrack',
                    'blur_circular',
                    'blur_linear',
                    'blur_off',
                    'blur_on',
                    'brightness_1',
                    'brightness_2',
                    'brightness_3',
                    'brightness_4',
                    'brightness_5',
                    'brightness_6',
                    'brightness_7',
                    'broken_image',
                    'brush',
                    'burst_mode',
                    'camera',
                    'camera_alt',
                    'camera_front',
                    'camera_rear',
                    'camera_roll',
                    'center_focus_strong',
                    'center_focus_weak',
                    'collections',
                    'collections_bookmark',
                    'color_lens',
                    'colorize',
                    'compare',
                    'control_point',
                    'control_point_duplicate',
                    'crop',
                    'crop_16_9',
                    'crop_3_2',
                    'crop_5_4',
                    'crop_7_5',
                    'crop_din',
                    'crop_free',
                    'crop_landscape',
                    'crop_original',
                    'crop_portrait',
                    'crop_rotate',
                    'crop_square',
                    'dehaze',
                    'details',
                    'edit',
                    'exposure',
                    'exposure_neg_1',
                    'exposure_neg_2',
                    'exposure_plus_1',
                    'exposure_plus_2',
                    'exposure_zero',
                    'filter',
                    'filter_1',
                    'filter_2',
                    'filter_3',
                    'filter_4',
                    'filter_5',
                    'filter_6',
                    'filter_7',
                    'filter_8',
                    'filter_9',
                    'filter_9_plus',
                    'filter_b_and_w',
                    'filter_center_focus',
                    'filter_drama',
                    'filter_frames',
                    'filter_hdr',
                    'filter_none',
                    'filter_tilt_shift',
                    'filter_vintage',
                    'flare',
                    'flash_auto',
                    'flash_off',
                    'flash_on',
                    'flip',
                    'gradient',
                    'grain',
                    'grid_off',
                    'grid_on',
                    'hdr_off',
                    'hdr_on',
                    'hdr_strong',
                    'hdr_weak',
                    'healing',
                    'image',
                    'image_aspect_ratio',
                    'image_search',
                    'iso',
                    'landscape',
                    'leak_add',
                    'leak_remove',
                    'lens',
                    'linked_camera',
                    'looks',
                    'looks_3',
                    'looks_4',
                    'looks_5',
                    'looks_6',
                    'looks_one',
                    'looks_two',
                    'loupe',
                    'monochrome_photos',
                    'movie_creation',
                    'movie_filter',
                    'music_note',
                    'music_off',
                    'nature',
                    'nature_people',
                    'navigate_before',
                    'navigate_next',
                    'palette',
                    'panorama',
                    'panorama_fish_eye',
                    'panorama_horizontal',
                    'panorama_vertical',
                    'panorama_wide_angle',
                    'photo',
                    'photo_album',
                    'photo_camera',
                    'photo_filter',
                    'photo_library',
                    'photo_size_select_actual',
                    'photo_size_select_large',
                    'photo_size_select_small',
                    'picture_as_pdf',
                    'portrait',
                    'remove_red_eye',
                    'rotate_90_degrees_ccw',
                    'rotate_left',
                    'rotate_right',
                    'shutter_speed',
                    'slideshow',
                    'straighten',
                    'style',
                    'switch_camera',
                    'switch_video',
                    'tag_faces',
                    'texture',
                    'timelapse',
                    'timer',
                    'timer_10',
                    'timer_3',
                    'timer_off',
                    'tonality',
                    'transform',
                    'tune',
                    'view_comfy',
                    'view_compact',
                    'vignette',
                    'wb_auto',
                    'wb_cloudy',
                    'wb_incandescent',
                    'wb_iridescent',
                    'wb_sunny',
                ],
            },
            {
                name: 'maps',
                icons: [
                    '360',
                    'add_location',
                    'atm',
                    'beenhere',
                    'category',
                    'compass_calibration',
                    'departure_board',
                    'directions',
                    'directions_bike',
                    'directions_boat',
                    'directions_bus',
                    'directions_car',
                    'directions_railway',
                    'directions_run',
                    'directions_subway',
                    'directions_transit',
                    'directions_walk',
                    'edit_attributes',
                    'edit_location',
                    'ev_station',
                    'fastfood',
                    'flight',
                    'hotel',
                    'layers',
                    'layers_clear',
                    'local_activity',
                    'local_airport',
                    'local_atm',
                    'local_bar',
                    'local_cafe',
                    'local_car_wash',
                    'local_convenience_store',
                    'local_dining',
                    'local_drink',
                    'local_florist',
                    'local_gas_station',
                    'local_grocery_store',
                    'local_hospital',
                    'local_hotel',
                    'local_laundry_service',
                    'local_library',
                    'local_mall',
                    'local_movies',
                    'local_offer',
                    'local_parking',
                    'local_pharmacy',
                    'local_phone',
                    'local_pizza',
                    'local_play',
                    'local_post_office',
                    'local_printshop',
                    'local_see',
                    'local_shipping',
                    'local_taxi',
                    'map',
                    'money',
                    'my_location',
                    'navigation',
                    'near_me',
                    'not_listed_location',
                    'person_pin',
                    'person_pin_circle',
                    'pin_drop',
                    'place',
                    'rate_review',
                    'restaurant',
                    'restaurant_menu',
                    'satellite',
                    'store_mall_directory',
                    'streetview',
                    'subway',
                    'terrain',
                    'traffic',
                    'train',
                    'tram',
                    'transfer_within_a_station',
                    'transit_enterexit',
                    'trip_origin',
                    'zoom_out_map',
                ],
            },
            {
                name: 'navigation',
                icons: [
                    'apps',
                    'arrow_back',
                    'arrow_back_ios',
                    'arrow_downward',
                    'arrow_drop_down',
                    'arrow_drop_down_circle',
                    'arrow_drop_up',
                    'arrow_forward',
                    'arrow_forward_ios',
                    'arrow_left',
                    'arrow_right',
                    'arrow_upward',
                    'cancel',
                    'check',
                    'chevron_left',
                    'chevron_right',
                    'close',
                    'expand_less',
                    'expand_more',
                    'first_page',
                    'fullscreen',
                    'fullscreen_exit',
                    'last_page',
                    'menu',
                    'more_horiz',
                    'more_vert',
                    'refresh',
                    'subdirectory_arrow_left',
                    'subdirectory_arrow_right',
                    'unfold_less',
                    'unfold_more',
                ],
            },
            {
                name: 'notification',
                icons: [
                    'adb',
                    'airline_seat_flat',
                    'airline_seat_flat_angled',
                    'airline_seat_individual_suite',
                    'airline_seat_legroom_extra',
                    'airline_seat_legroom_normal',
                    'airline_seat_legroom_reduced',
                    'airline_seat_recline_extra',
                    'airline_seat_recline_normal',
                    'bluetooth_audio',
                    'confirmation_number',
                    'disc_full',
                    'drive_eta',
                    'enhanced_encryption',
                    'event_available',
                    'event_busy',
                    'event_note',
                    'folder_special',
                    'live_tv',
                    'mms',
                    'more',
                    'network_check',
                    'network_locked',
                    'no_encryption',
                    'ondemand_video',
                    'personal_video',
                    'phone_bluetooth_speaker',
                    'phone_callback',
                    'phone_forwarded',
                    'phone_in_talk',
                    'phone_locked',
                    'phone_missed',
                    'phone_paused',
                    'power',
                    'power_off',
                    'priority_high',
                    'sd_card',
                    'sms',
                    'sms_failed',
                    'sync',
                    'sync_disabled',
                    'sync_problem',
                    'system_update',
                    'tap_and_play',
                    'time_to_leave',
                    'tv_off',
                    'vibration',
                    'voice_chat',
                    'vpn_lock',
                    'wc',
                    'wifi',
                    'wifi_off',
                ],
            },
            {
                name: 'places',
                icons: [
                    'ac_unit',
                    'airport_shuttle',
                    'all_inclusive',
                    'beach_access',
                    'business_center',
                    'casino',
                    'child_care',
                    'child_friendly',
                    'fitness_center',
                    'free_breakfast',
                    'golf_course',
                    'hot_tub',
                    'kitchen',
                    'meeting_room',
                    'no_meeting_room',
                    'pool',
                    'room_service',
                    'rv_hookup',
                    'smoke_free',
                    'smoking_rooms',
                    'spa',
                ],
            },
            {
                name: 'social',
                icons: [
                    'cake',
                    'domain',
                    'group',
                    'group_add',
                    'location_city',
                    'mood',
                    'mood_bad',
                    'notifications',
                    'notifications_active',
                    'notifications_none',
                    'notifications_off',
                    'notifications_paused',
                    'pages',
                    'party_mode',
                    'people',
                    'people_outline',
                    'person',
                    'person_add',
                    'person_outline',
                    'plus_one',
                    'poll',
                    'public',
                    'school',
                    'sentiment_dissatisfied',
                    'sentiment_satisfied',
                    'sentiment_very_dissatisfied',
                    'sentiment_very_satisfied',
                    'share',
                    'thumb_down_alt',
                    'thumb_up_alt',
                    'whatshot',
                ],
            },
            {
                name: 'toggle',
                icons: [
                    'check_box',
                    'check_box_outline_blank',
                    'indeterminate_check_box',
                    'radio_button_checked',
                    'radio_button_unchecked',
                    'star',
                    'star_border',
                    'star_half',
                ],
            },
        ];
        return _this;
    }
    IconsComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        uiIcons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ui-icons',] }]
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/icons/icons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./icons.component.scss */ "./src/app/pages/ui/icons/icons.component.scss")).default]
        })
    ], IconsComponent);
    return IconsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/icons/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ui/icons/index.ts ***!
  \*****************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.component */ "./src/app/pages/ui/icons/icons.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return _icons_component__WEBPACK_IMPORTED_MODULE_0__["IconsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/filters/filters.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/filters/filters.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-filters material-angular-select .mdl-menu__container .mdl-menu .mdl-menu__item,\napp-filters material-angular-select .mdl-textfield__input {\n  font-size: 13px;\n}\napp-filters material-angular-select.mdl-textfield {\n  width: 100%;\n  max-width: 240px;\n}\napp-filters material-angular-select .mdl-textfield__input {\n  line-height: 20px;\n  text-transform: capitalize;\n}\napp-filters material-angular-select .mdl-menu__item {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvcmlnaHQtc2lkZWJhci9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7O0VBRUUsZUFBQTtBQUROO0FBSUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQUhOO0FBTUk7RUFDRSwwQkFBQTtBQUpOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdWkvcmlnaHQtc2lkZWJhci9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZmlsdGVycyB7XG4gIG1hdGVyaWFsLWFuZ3VsYXItc2VsZWN0IHtcbiAgICAubWRsLW1lbnVfX2NvbnRhaW5lciAubWRsLW1lbnUgLm1kbC1tZW51X19pdGVtLFxuICAgIC5tZGwtdGV4dGZpZWxkX19pbnB1dCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgJi5tZGwtdGV4dGZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICB9XG5cbiAgICAubWRsLXRleHRmaWVsZF9faW5wdXQge1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICAubWRsLW1lbnVfX2l0ZW0ge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/filters/filters.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/filters/filters.component.ts ***!
  \*********************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.currencies = ['BYN', 'EUR', 'USD', 'RUR', 'PLN'];
        this.currentCurrency = 'BYN';
        this.languages = ['Belarusian', 'English', 'USD', 'German', 'Polish'];
        this.currentLanguage = 'Belarusian';
    }
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filters',
            template: __importDefault(__webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/right-sidebar/filters/filters.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./filters.component.scss */ "./src/app/pages/ui/right-sidebar/filters/filters.component.scss")).default]
        })
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/index.ts ***!
  \*************************************************/
/*! exports provided: RightSidebarComponent, RightSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-sidebar.component */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return _right_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["RightSidebarComponent"]; });

/* harmony import */ var _right_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-sidebar.module */ "./src/app/pages/ui/right-sidebar/right-sidebar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarModule", function() { return _right_sidebar_module__WEBPACK_IMPORTED_MODULE_1__["RightSidebarModule"]; });





/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("base-right-sidebar .mdl-card__title-text {\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvcmlnaHQtc2lkZWJhci9yaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJhc2UtcmlnaHQtc2lkZWJhciB7XG4gIC5tZGwtY2FyZF9fdGl0bGUtdGV4dCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RightSidebarComponent = /** @class */ (function (_super) {
    __extends(RightSidebarComponent, _super);
    function RightSidebarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __importDefault(__webpack_require__(/*! raw-loader!./right-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/right-sidebar/right-sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./right-sidebar.component.scss */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.scss")).default]
        })
    ], RightSidebarComponent);
    return RightSidebarComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.module.ts ***!
  \****************************************************************/
/*! exports provided: RightSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarModule", function() { return RightSidebarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/__ivy_ngcc__/fesm2015/material-angular-select.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/pages/ui/right-sidebar/filters/filters.component.ts");
/* harmony import */ var _right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-sidebar.component */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RightSidebarModule = /** @class */ (function () {
    function RightSidebarModule() {
    }
    RightSidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                material_angular_select__WEBPACK_IMPORTED_MODULE_3__["MaterialAngularSelectModule"],
            ],
            declarations: [
                _right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["RightSidebarComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__["FiltersComponent"],
            ],
        })
    ], RightSidebarModule);
    return RightSidebarModule;
}());



/***/ }),

/***/ "./src/app/pages/ui/tables/index.ts":
/*!******************************************!*\
  !*** ./src/app/pages/ui/tables/index.ts ***!
  \******************************************/
/*! exports provided: TablesComponent, TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component */ "./src/app/pages/ui/tables/tables.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return _tables_component__WEBPACK_IMPORTED_MODULE_0__["TablesComponent"]; });

/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.service */ "./src/app/pages/ui/tables/tables.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return _tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]; });





/***/ }),

/***/ "./src/app/pages/ui/tables/tables.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .mdl-card,\n:host .mdl-card__supporting-text {\n  overflow-x: auto;\n}\n:host table {\n  width: 100%;\n}\n:host table td {\n  font-size: 1rem;\n}\n:host .no-padding {\n  padding: 0;\n  width: 100%;\n}\n:host .label__availability {\n  margin-right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFHSTtFQUNFLGVBQUE7QUFETjtBQUtFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5tZGwtY2FyZCxcbiAgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0ZCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgLm5vLXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubGFiZWxfX2F2YWlsYWJpbGl0eSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/ui/tables/tables.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.component.ts ***!
  \*****************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.service */ "./src/app/pages/ui/tables/tables.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TablesComponent = /** @class */ (function (_super) {
    __extends(TablesComponent, _super);
    function TablesComponent(tablesService) {
        var _this = _super.call(this) || this;
        _this.tablesService = tablesService;
        _this.Array = Array;
        _this.mdlGrid = true;
        _this.mdlCell = true;
        _this.mdlCell12ColDesktop = true;
        _this.mdlCell12ColTablet = true;
        _this.mdlCell4ColPhone = true;
        _this.mdlCellTop = true;
        _this.uiTables = true;
        _this.sortOrder = {
            asc: 1,
            desc: -1,
        };
        _this.headers = _this.tablesService.getHeaders();
        _this.simpleTable = _this.tablesService.getSimpleTable();
        _this.borderedTable = _this.tablesService.getBorderedTable();
        _this.strippedTable = _this.tablesService.getStrippedTable();
        _this.borderlessTable = _this.tablesService.getBorderlessTable();
        _this.advancedHeaders = _this.tablesService.getAdvancedHeaders();
        _this.genreColors = {
            'Children\'s book': 'orange',
            'Gothic fiction': 'purple',
            'Horror fiction': 'dark-gray',
            'Fiction': 'green',
            'Novel': 'teal',
            'Fantasy': 'red',
            'Adventure': 'light-blue',
        };
        _this.currentPage = 1;
        _this.countPerPage = 4;
        _this.numPage = _this.tablesService.getAdvancedTableNumOfPage(_this.countPerPage);
        _this.advancedTable = _this.tablesService.getAdvancedTablePage(1, _this.countPerPage);
        return _this;
    }
    TablesComponent.prototype.changePage = function (page, force) {
        if (force === void 0) { force = false; }
        if (page !== this.currentPage || force) {
            this.currentPage = page;
            this.advancedTable = this.tablesService.getAdvancedTablePage(page, this.countPerPage);
        }
    };
    /* available sort value:
      -1 - desc; 	0 - no sorting; 1 - asc; null - disabled */
    TablesComponent.prototype.changeSorting = function (header, index) {
        var current = header.sort;
        if (current !== null) {
            this.advancedHeaders.forEach(function (cell) {
                cell.sort = (cell.sort !== null) ? 0 : null;
            });
            header.sort = (current === 1) ? -1 : 1;
            this.tablesService.changeAdvanceSorting(header.sort, index);
            this.changePage(1, true);
        }
    };
    TablesComponent.ctorParameters = function () { return [
        { type: _tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"] }
    ]; };
    TablesComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        mdlCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell',] }],
        mdlCell12ColDesktop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--12-col-desktop',] }],
        mdlCell12ColTablet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--12-col-tablet',] }],
        mdlCell4ColPhone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--4-col-phone',] }],
        mdlCellTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-cell--top',] }],
        uiTables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ui-tables',] }]
    };
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/tables/tables.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tables.component.scss */ "./src/app/pages/ui/tables/tables.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"]])
    ], TablesComponent);
    return TablesComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/tables/tables.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.service.ts ***!
  \***************************************************/
/*! exports provided: TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return TablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablesService = /** @class */ (function () {
    function TablesService() {
        this.advanceTableData = [
            [
                '5',
                'Life of Pi',
                'Yann Martel',
                [
                    'Fiction',
                ],
                '2016',
                '2001',
                'English',
                'English',
                4,
            ],
            [
                '6',
                'The secret Garden',
                'Frances Hodgson Burnett',
                [
                    'Children\'s book',
                ],
                '2017',
                '1911',
                'English',
                'English',
                1,
            ],
            [
                '7',
                'Rebecca',
                'Daphne du Maurier',
                [
                    'Gothic fiction',
                ],
                '2016',
                '1938',
                'English',
                'English',
                2,
            ],
            [
                '8',
                'Dracula',
                'Bram Stoker',
                [
                    'Gothic fiction',
                    'Horror fiction',
                ],
                '2015',
                '1897',
                'English',
                'English',
                0,
            ],
            [
                '9',
                'The Little Prince',
                'Antoine de Saint-Exupery',
                [
                    'Fiction',
                ],
                '2015',
                '1943',
                'English',
                'French',
                1,
            ],
            [
                '10',
                'Les Miserables',
                'Victor Hugo',
                [
                    'Novel',
                    'Fiction',
                ],
                '2014',
                '1862',
                'English',
                'French',
                3,
            ],
            [
                '11',
                'Alice in Wonderland',
                'Lewis Carroll',
                [
                    'Children\'s book',
                    'Fantasy',
                ],
                '2018',
                '1865',
                'English',
                'English',
                4,
            ],
            [
                '12',
                'Anne of Green Gables',
                'L.M. Montgomery',
                [
                    'Novel',
                ],
                '2019',
                '1908',
                'English',
                'English',
                3,
            ],
            [
                '13',
                'The Hitchhiker\'s Guide to th...',
                'Douglas Adams',
                [
                    'Adventure',
                    'Fiction',
                ],
                '2017',
                '1979',
                'English',
                'English',
                3,
            ],
            [
                '14',
                'Madame Bovary',
                'Gustave Flaubert',
                [
                    'Novel',
                ],
                '2018',
                '1856',
                'English',
                'French',
                2,
            ],
            [
                '15',
                'David Copperfield',
                'Charles Dickens',
                [
                    'Novel',
                ],
                '2019',
                '1850',
                'English',
                'English',
                4,
            ],
            [
                '16',
                'War and Peace',
                'Leo Tolstoy',
                [
                    'Fiction',
                ],
                '2015',
                '1869',
                'English',
                'Russian',
                3,
            ],
            [
                '17',
                'Gone with the Wind',
                'Margaret Mitchell',
                [
                    'Fiction',
                ],
                '2014',
                '1936',
                'English',
                'Russian',
                2,
            ],
            [
                '18',
                'The Count of Monte Cristo',
                'Alexandre Dumas',
                [
                    'Novel',
                    'Adventure',
                ],
                '2019',
                '1845',
                'English',
                'English',
                0,
            ],
            [
                '19',
                'Lolita',
                'Vladimir Nabokov',
                [
                    'Novel',
                ],
                '2018',
                '1955',
                'English',
                'Russian',
                3,
            ],
            [
                '20',
                'The Hobbit',
                'J.R.R. Tolkien',
                [
                    'Fantasy',
                ],
                '2017',
                '1937',
                'English',
                'English',
                1,
            ],
        ];
    }
    TablesService.prototype.getHeaders = function () {
        return [
            '#',
            'Book title',
            'Author',
            'First published',
            'Status',
        ];
    };
    TablesService.prototype.getSimpleTable = function () {
        return [
            [
                '1',
                'To Kill a Mockingbird',
                'Harper Lee',
                '1960',
                'read',
            ],
            [
                '2',
                'Pride and Prejudice',
                'Jane Austen',
                '1813',
                'unread',
            ],
            [
                '3',
                'The Great Gatsby',
                'F. Scott Fitzgerald',
                '1925',
                'read',
            ],
            [
                '4',
                'Crime and Punishment',
                'Fyodor Dostoyevsky',
                '1866',
                'read',
            ],
        ];
    };
    TablesService.prototype.getBorderedTable = function () {
        return [
            [
                '23',
                'Gone with the Wind',
                'Margaret Mitchell',
                '1936',
                'unread',
            ],
            [
                '24',
                'The Count of Monte Cristo',
                'Alexandre Dumas',
                '1845',
                'unread',
            ],
            [
                '25',
                'Lolita',
                'Vladimir Nabokov',
                '1955',
                'read',
            ],
            [
                '26',
                'The Hobbit',
                'J.R.R. Tolkien',
                '1937',
                'unread',
            ],
        ];
    };
    TablesService.prototype.getStrippedTable = function () {
        return [
            [
                '54',
                'The Hitchhiker\'s Guide to th...',
                'Douglas Adams',
                '1979',
                'unavailable',
            ],
            [
                '55',
                'Madame Bovary',
                'Gustave Flaubert',
                '1856',
                'available',
            ],
            [
                '56',
                'David Copperfield',
                'Charles Dickens',
                '1850',
                'available',
            ],
            [
                '57',
                'War and Peace',
                'Leo Tolstoy',
                '1869',
                'available',
            ],
        ];
    };
    TablesService.prototype.getBorderlessTable = function () {
        return [
            [
                '31',
                'The Little Prince',
                'Antoine de Saint-Exupery',
                '1943',
                'available',
            ],
            [
                '32',
                'Les Miserables',
                'Victor Hugo',
                '1862',
                'unavailable',
            ],
            [
                '33',
                'Alice in Wonderland',
                'Lewis Carroll',
                '1865',
                'available',
            ],
            [
                '34',
                'Anne of Green Gables',
                'L.M. Montgomery',
                '1908',
                'available',
            ],
        ];
    };
    TablesService.prototype.getAdvancedHeaders = function () {
        return [
            {
                name: '#',
                sort: null,
            },
            {
                name: 'Book title',
                sort: 0,
            },
            {
                name: 'Author',
                sort: 0,
            },
            {
                name: 'Genre',
                sort: null,
            },
            {
                name: 'Year',
                sort: null,
            },
            {
                name: 'Originally published',
                sort: 0,
            },
            {
                name: 'Language',
                sort: null,
            },
            {
                name: 'Original Language',
                sort: 0,
            }, {
                name: 'Availability',
                sort: 0,
            },
        ];
    };
    TablesService.prototype.getAdvancedTableNumOfPage = function (countPerPage) {
        return Math.ceil(this.advanceTableData.length / countPerPage);
    };
    TablesService.prototype.getAdvancedTablePage = function (page, countPerPage) {
        return this.advanceTableData.slice((page - 1) * countPerPage, page * countPerPage);
    };
    TablesService.prototype.changeAdvanceSorting = function (order, index) {
        this.advanceTableData = this.sorting(this.advanceTableData, order, index);
    };
    TablesService.prototype.sorting = function (array, order, value) {
        var compareFunction = function (a, b) {
            if (a[value] > b[value]) {
                return 1 * order;
            }
            if (a[value] < b[value]) {
                return -1 * order;
            }
            return 0;
        };
        return array.sort(compareFunction);
    };
    TablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TablesService);
    return TablesService;
}());



/***/ }),

/***/ "./src/app/pages/ui/typography/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/ui/typography/index.ts ***!
  \**********************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography.component */ "./src/app/pages/ui/typography/typography.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return _typography_component__WEBPACK_IMPORTED_MODULE_0__["TypographyComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/typography/typography.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666;\n}\n.color--gray {\n  background-color: #444 !important;\n}\n.color--dark-gray {\n  background-color: #333;\n}\n.color--smooth-gray {\n  background-color: #999 !important;\n}\n.text-color--smooth-gray {\n  color: #999 !important;\n}\n.color--red {\n  background-color: #f44336 !important;\n}\n.color-text--red {\n  color: #f44336 !important;\n}\n.color--orange {\n  background-color: #ffc107 !important;\n}\n.color-text--orange {\n  color: #ffc107 !important;\n}\n.color--amber {\n  background-color: #ff9800 !important;\n}\n.color-text--amber {\n  color: #ff9800 !important;\n}\n.color--green {\n  background-color: #00d45a !important;\n}\n.color-text--green {\n  color: #00d45a !important;\n}\n.color--light-blue {\n  background-color: #03a9f4 !important;\n}\n.color-text--light-blue {\n  color: #03a9f4 !important;\n}\n.color--purple {\n  background-color: #7726d3 !important;\n}\n.color-text--purple {\n  color: #7726d3 !important;\n}\n.color--teal {\n  background-color: #00bcd4 !important;\n}\n.color-text--teal {\n  color: #00bcd4 !important;\n}\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n:host {\n  font-family: \"Roboto\", sans-serif;\n}\n:host p {\n  font-weight: 300;\n}\n:host ul,\n:host ol,\n:host dd {\n  font-weight: 300;\n}\n:host ul,\n:host ol {\n  padding-left: 16px;\n  margin: 0;\n}\n:host .mdl-card {\n  height: auto;\n  width: 100%;\n}\n:host .mdl-card:not(:last-child) {\n  margin-bottom: 20px;\n}\n:host .mdl-card:first-child p {\n  font-size: 30px;\n  line-height: 1.5;\n}\n:host .mdl-card:first-child p:nth-of-type(1) {\n  font-weight: 200;\n  margin-top: 20px;\n}\n:host .mdl-card:first-child p:nth-of-type(2) {\n  font-weight: 300;\n}\n:host .mdl-card:first-child p:nth-of-type(3) {\n  font-weight: 400;\n}\n:host .mdl-card:first-child p:nth-of-type(4) {\n  font-weight: 500;\n}\n:host .mdl-card:first-child p:nth-of-type(5) {\n  font-weight: 600;\n}\n:host .mdl-card .mdl-card__supporting-text div:nth-child(2) {\n  text-align: center;\n}\n:host .mdl-card .mdl-card__supporting-text div:nth-child(3) {\n  text-align: right;\n}\n:host .mdl-grid + .mdl-grid .mdl-cell:nth-child(3) .mdl-card__supporting-text > ul {\n  list-style: none;\n  padding-left: 0;\n}\n:host .mdl-grid + .mdl-grid .mdl-cell:nth-child(4) .mdl-card__supporting-text > ol li {\n  float: left;\n  margin-right: 25px;\n}\n:host .text-color--gray + h5 {\n  margin-top: 14px;\n}\n:host dd {\n  margin-left: 0;\n}\n:host dd + dt {\n  margin-top: 10px;\n}\n:host h1 {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24tbGl0ZS9zcmMvX2Z1bmN0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fdmFyaWFibGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWxpdGUvc3JjL19jb2xvci1kZWZpbml0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9fbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvc2Nzcy9wYWxldHRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VpL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBOzt1Q0FBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBbUNBLHVDQUFBO0FBRUE7Ozs7Ozs7OztDQUFBO0FBYUEsbUNBQUE7QUFFQTs7Ozs7RUFBQTtBQ3ZFQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdCQSwyQ0FBQTtBQWlrQkEsZ0JBQUE7QUZqbEJBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FDaUZBLG1DQUFBO0FBR0EsMkNBQUE7QUE4QkEsdUNBQUE7QUFnQkEsdUNBQUE7QUFFQSw2Q0FBQTtBQWtDQSx5Q0FBQTtBQVFBLDBDQUFBO0FBTUEsMENBQUE7QUFJQSxtQ0FBQTtBQXFCQSx5Q0FBQTtBQU9BLHVDQUFBO0FBUUEscUNBQUE7QUFZQSxvQ0FBQTtBQVNBLHdDQUFBO0FBVUEsaUNBQUE7QUFTQSxtQ0FBQTtBQU9BLG1DQUFBO0FBTUEsZ0NBQUE7QUFPQSxnQ0FBQTtBQWFBLHlDQUFBO0FBSUEscUNBQUE7QUFLQSxtQ0FBQTtBQVNBLGNBQUE7QUFZQSxXQUFBO0FBWUEsWUFBQTtBQWdCQSxVQUFBO0FBV0EsU0FBQTtBQUtBLFNBQUE7QUFlQSxXQUFBO0FBNkJBLGdCQUFBO0FBTUEsV0FBQTtBQUVBLGNBQUE7QUFPQSxjQUFBO0FBTUEsYUFBQTtBQVdBLFNBQUE7QUFFQSxvQkFBQTtBQTBCQSxnQkFBQTtBQUtBLFdBQUE7QUFDQTs7OztFQUFBO0FBbUJBLGNBQUE7QUFRQSxhQUFBO0FBR0EsVUFBQTtBQVVBLFlBQUE7QUFNQSxTQUFBO0FBcUJBLGVBQUE7QUE2QkEsV0FBQTtBQUdBLGFBQUE7QUFPQSxZQUFBO0FBSUEsU0FBQTtBRTNrQkE7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFnQkEsZUFBQTtBQStNQSxZQUFBO0FBNkNBLGVBQUE7QUFzQkEsV0FBQTtBRGxTQTs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQWdCQSwyQ0FBQTtBQWlrQkEsZ0JBQUE7QUFqbEJBOzs7Ozs7Ozs7Ozs7OztFQUFBO0FBZ0JBLDJDQUFBO0FBaWtCQSxnQkFBQTtBRS9rQkEsbUNBQUE7QUFJQSwyQ0FBQTtBQ3VCQTtFQUNFLFdBMUJZO0FDOE5kO0FEak1BO0VBQ0UsaUNBQUE7QUNvTUY7QURqTUE7RUFDRSxzQkF0Q2dCO0FDME9sQjtBRGpNQTtFQUNFLGlDQUFBO0FDb01GO0FEak1BO0VBQ0Usc0JBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FEak1BO0VBQ0Usb0NBQUE7QUNvTUY7QURqTUE7RUFDRSx5QkFBQTtBQ29NRjtBRGpNQTtFQUNFLG9DQUFBO0FDb01GO0FEak1BO0VBQ0UseUJBQUE7QUNvTUY7QURqTUE7RUFDRSxvQ0FBQTtBQ29NRjtBRGpNQTtFQUNFLHlCQUFBO0FDb01GO0FGOVJBLHVDQUFBO0FBR0EsdUNBQUE7QUFFQSw2Q0FBQTtBQW9CQSx5Q0FBQTtBQUVBLDBDQUFBO0FBRUEsMENBQUE7QUFFQSxtQ0FBQTtBQXdCQSx5Q0FBQTtBQUVBLHVDQUFBO0FBSUEscUNBQUE7QUFFQSxvQ0FBQTtBQUVBLHdDQUFBO0FBWUEsaUNBQUE7QUFnQkEsbUNBQUE7QUFLQSxtQ0FBQTtBQUlBLGdDQUFBO0FBU0EsZ0NBQUE7QUFTQSx5Q0FBQTtBQVNBLHFDQUFBO0FBR0EsbUNBQUE7QUFFQSxjQUFBO0FBRUEsV0FBQTtBQUdBLFlBQUE7QUFNQSxVQUFBO0FBSUEsU0FBQTtBQUVBLFNBQUE7QUFRQSxXQUFBO0FBTUEsU0FBQTtBQUVBLGdCQUFBO0FBRUEsV0FBQTtBQUVBLGdCQUFBO0FBRUEsZ0JBQUE7QUFFQSxhQUFBO0FBS0EsU0FBQTtBQUVBLG9CQUFBO0FBT0EsZ0JBQUE7QUFFQSxXQUFBO0FBR0EsY0FBQTtBQUVBLGFBQUE7QUFFQSxVQUFBO0FBSUEsWUFBQTtBQUVBLFNBQUE7QUFXQSxlQUFBO0FBWUEsWUFBQTtBQU9BLHlCQUFBO0FBRUEsYUFBQTtBQUtBLFVBQUE7QUFJQSxXQUFBO0FBWUEsa0JBQUE7QUFTQSxRQUFBO0FBR0EsV0FBQTtBRXZSQTtFQUNFLGlDQUFBO0FBOFZGO0FBNVZFO0VBQ0UsZ0JBQUE7QUE4Vko7QUEzVkU7OztFQUdFLGdCQUFBO0FBNlZKO0FBMVZFOztFQUVFLGtCQUFBO0VBQ0EsU0FBQTtBQTRWSjtBQXpWRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBMlZKO0FBelZJO0VBQ0UsbUJGNktrQjtBRThLeEI7QUF4Vkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUEwVk47QUF4Vk07RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBMFZSO0FBdlZNO0VBQ0UsZ0JBQUE7QUF5VlI7QUF0Vk07RUFDRSxnQkFBQTtBQXdWUjtBQXJWTTtFQUNFLGdCQUFBO0FBdVZSO0FBcFZNO0VBQ0UsZ0JBQUE7QUFzVlI7QUFqVk07RUFDRSxrQkFBQTtBQW1WUjtBQWhWTTtFQUNFLGlCQUFBO0FBa1ZSO0FBM1VNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBNlVSO0FBeFVNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBMFVSO0FBclVFO0VBQ0UsZ0JBQUE7QUF1VUo7QUFwVUU7RUFDRSxjQUFBO0FBc1VKO0FBcFVJO0VBQ0UsZ0JBQUE7QUFzVU47QUFsVUU7RUFDRSxhQUFBO0FBb1VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuQGZ1bmN0aW9uIHN0cmlwLXVuaXRzKCRudW1iZXIpIHtcbiAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuICAgICRDT05URU5UU1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogU1RZTEUgR1VJREUgVkFSSUFCTEVTLS0tLS0tLS0tLS0tLS0tLS0tRGVjbGFyYXRpb25zIG9mIFNhc3MgdmFyaWFibGVzXG4gKiAtLS0tLVR5cG9ncmFwaHlcbiAqIC0tLS0tQ29sb3JzXG4gKiAtLS0tLVRleHRmaWVsZFxuICogLS0tLS1Td2l0Y2hcbiAqIC0tLS0tU3Bpbm5lclxuICogLS0tLS1SYWRpb1xuICogLS0tLS1NZW51XG4gKiAtLS0tLUxpc3RcbiAqIC0tLS0tTGF5b3V0XG4gKiAtLS0tLUljb24gdG9nZ2xlc1xuICogLS0tLS1Gb290ZXJcbiAqIC0tLS0tQ29sdW1uXG4gKiAtLS0tLUNoZWNrYm94XG4gKiAtLS0tLUNhcmRcbiAqIC0tLS0tQnV0dG9uXG4gKiAtLS0tLUFuaW1hdGlvblxuICogLS0tLS1Qcm9ncmVzc1xuICogLS0tLS1CYWRnZVxuICogLS0tLS1TaGFkb3dzXG4gKiAtLS0tLUdyaWRcbiAqIC0tLS0tRGF0YSB0YWJsZVxuICogLS0tLS1EaWFsb2dcbiAqIC0tLS0tU25hY2tiYXJcbiAqIC0tLS0tVG9vbHRpcFxuICogLS0tLS1DaGlwXG4gKlxuICogRXZlbiB0aG91Z2ggYWxsIHZhcmlhYmxlcyBoYXZlIHRoZSBgIWRlZmF1bHRgIGRpcmVjdGl2ZSwgbW9zdCBvZiB0aGVtXG4gKiBzaG91bGQgbm90IGJlIGNoYW5nZWQgYXMgdGhleSBhcmUgZGVwZW5kZW50IG9uZSBhbm90aGVyLiBUaGlzIGNhbiBjYXVzZVxuICogdmlzdWFsIGRpc3RvcnRpb25zIChsaWtlIGFsaWdubWVudCBpc3N1ZXMpIHRoYXQgYXJlIGhhcmQgdG8gdHJhY2sgZG93blxuICogYW5kIGZpeC5cbiAqL1xuXG5cbi8qID09PT09PT09PT0gIFRZUE9HUkFQSFkgID09PT09PT09PT0gKi9cblxuLyogV2UncmUgc3BsaXR0aW5nIGZvbnRzIGludG8gXCJwcmVmZXJyZWRcIiBhbmQgXCJwZXJmb3JtYW5jZVwiIGluIG9yZGVyIHRvIG9wdGltaXplXG4gICBwYWdlIGxvYWRpbmcuIEZvciBpbXBvcnRhbnQgdGV4dCwgc3VjaCBhcyB0aGUgYm9keSwgd2Ugd2FudCBpdCB0byBsb2FkXG4gICBpbW1lZGlhdGVseSBhbmQgbm90IHdhaXQgZm9yIHRoZSB3ZWIgZm9udCBsb2FkLCB3aGVyZWFzIGZvciBvdGhlciBzZWN0aW9ucyxcbiAgIHN1Y2ggYXMgaGVhZGVycyBhbmQgdGl0bGVzLCB3ZSdyZSBPSyB3aXRoIHRoaW5ncyB0YWtpbmcgYSBiaXQgbG9uZ2VyIHRvIGxvYWQuXG4gICBXZSBkbyBoYXZlIHNvbWUgb3B0aW9uYWwgY2xhc3NlcyBhbmQgcGFyYW1ldGVycyBpbiB0aGUgbWl4aW5zLCBpbiBjYXNlIHlvdVxuICAgZGVmaW5pdGVseSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UncmUgdXNpbmcgdGhlIHByZWZlcnJlZCBmb250IGFuZCBkb24ndCBtaW5kXG4gICB0aGUgcGVyZm9ybWFuY2UgaGl0LlxuICAgV2Ugc2hvdWxkIGJlIGFibGUgdG8gaW1wcm92ZSBvbiB0aGlzIG9uY2UgQ1NTIEZvbnQgTG9hZGluZyBMMyBiZWNvbWVzIG1vcmVcbiAgIHdpZGVseSBhdmFpbGFibGUuXG4qL1xuJHByZWZlcnJlZF9mb250OiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kcGVyZm9ybWFuY2VfZm9udDogJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENPTE9SUyAgPT09PT09PT09PSAqL1xuXG4vKipcbipcbiogTWF0ZXJpYWwgZGVzaWduIGNvbG9yIHBhbGV0dGVzLlxuKiBAc2VlIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS9jb2xvci5odG1sXG4qXG4qKi9cblxuQGltcG9ydCBcImNvbG9yLWRlZmluaXRpb25zXCI7XG5AaW1wb3J0IFwiZnVuY3Rpb25zXCI7XG5cbi8qID09PT09PT09PT0gIElNQUdFUyAgPT09PT09PT09PSAqL1xuJGltYWdlX3BhdGg6ICcvaW1hZ2VzJyAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgQ29sb3IgJiBUaGVtZXMgID09PT09PT09PT0gKi9cblxuLy8gRGVmaW5lIHdoZXRoZXIgaW5kaXZpZHVhbCBjb2xvciBwYWxldHRlIGl0ZW1zIHNob3VsZCBoYXZlIGNsYXNzZXMgY3JlYXRlZC5cbi8vIFNldHRpbmcgdGhpcyB0byB0cnVlIHdpbGwgcmVtb3ZlIGluZGl2aWR1YWwgY29sb3IgY2xhc3NlcyBmb3IgZWFjaCBjb2xvciBpbiB0aGUgcGFsZXR0ZXMuXG4vLyBUbyBpbXByb3ZlIG92ZXJhbGwgcGVyZm9ybWFuY2UgKGFzc3VtaW5nIHRoZXkgYXJlbid0IHVzZWQpIGJ5OlxuLy8gKiBTYXZpbmcgc2VydmVyIGJhbmR3aWR0aCBzZW5kaW5nIHRoZSBleHRyYSBjbGFzc2VzXG4vLyAqIFNhdmUgY2xpZW50IGNvbXB1dGF0aW9uIGFnYWluc3QgdGhlIGNsYXNzZXNcbi8vIGl0IGlzIFJFQ09NTUVOREVEIHlvdSBzZXQgdGhpcyB0byB0cnVlLlxuJHRyaW0tY29sb3ItY2xhc3NlczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFVzZSBjb2xvciBwcmltYXJpbHkgZm9yIGVtcGhhc2lzLiBDaG9vc2UgY29sb3JzIHRoYXQgZml0IHdpdGhcbi8vIHlvdXIgYnJhbmQgYW5kIHByb3ZpZGUgZ29vZCBjb250cmFzdCBiZXR3ZWVuIHZpc3VhbCBjb21wb25lbnRzLlxuJGNvbG9yLXByaW1hcnk6ICRwYWxldHRlLWluZGlnby01MDAgIWRlZmF1bHQ7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiAkcGFsZXR0ZS1pbmRpZ28tNzAwICFkZWZhdWx0O1xuJGNvbG9yLWFjY2VudDogJHBhbGV0dGUtcGluay1BMjAwICFkZWZhdWx0O1xuXG4vLyBPdXIgcHJpbWFyeSBpcyBkYXJrLCBzbyB1c2UgJGNvbG9yLWRhcmstY29udHJhc3QgZm9yIG92ZXJsYWlkIHRleHQuXG4kY29sb3ItcHJpbWFyeS1jb250cmFzdDogJGNvbG9yLWRhcmstY29udHJhc3QgIWRlZmF1bHQ7XG4vLyBPdXIgYWNjZW50IGlzIGRhcmssIHNvIHVzZSAkY29sb3ItZGFyay1jb250cmFzdCBmb3Igb3ZlcmxhaWQgdGV4dC5cbiRjb2xvci1hY2NlbnQtY29udHJhc3Q6ICRjb2xvci1kYXJrLWNvbnRyYXN0ICFkZWZhdWx0O1xuXG4vLyBSZXBsYWNlIGFsbCBjb2xvcnMgd2l0aCBwbGFjZWhvbGRlcnMgaWYgd2UncmUgZ2VuZXJhdGluZyBhIHRlbXBsYXRlLlxuQGlmICRzdHlsZWd1aWRlLWdlbmVyYXRlLXRlbXBsYXRlID09IHRydWUge1xuICAkY29sb3ItcHJpbWFyeTogJyRjb2xvci1wcmltYXJ5JztcbiAgJGNvbG9yLXByaW1hcnktZGFyazogJyRjb2xvci1wcmltYXJ5LWRhcmsnO1xuICAkY29sb3ItYWNjZW50OiAnJGNvbG9yLWFjY2VudCc7XG4gICRjb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAnJGNvbG9yLXByaW1hcnktY29udHJhc3QnO1xuICAkY29sb3ItYWNjZW50LWNvbnRyYXN0OiAnJGNvbG9yLWFjY2VudC1jb250cmFzdCc7XG59XG5cbi8qID09PT09PT09PT0gIFR5cG9ncmFwaHkgID09PT09PT09PT0gKi9cblxuLy8gV2UgdXNlIHRoZSBmb2xsb3dpbmcgZGVmYXVsdCBjb2xvciBzdHlsZXM6IHRleHQtY29sb3ItcHJpbWFyeSBhbmRcbi8vIHRleHQtY29sb3Itc2Vjb25kYXJ5LiBGb3IgbGlnaHQgdGhlbWVzLCB1c2UgdGV4dC1jb2xvci1wcmltYXJ5LWludmVyc2Vcbi8vIGFuZCB0ZXh0LWNvbG9yLXNlY29uZGFyeS1pbnZlcnNlLlxuXG4kdGV4dC1jb2xvci1wcmltYXJ5OiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJHRleHQtbGluay1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcblxuLy8gRGVmaW5lIHdoZXRoZXIgdG8gdGFyZ2V0IGVsZW1lbnRzIGRpcmVjdGx5IGZvciB0eXBvZ3JhcGhpYyBlbmhhbmNlbWVudHMuXG4vLyBUdXJuaW5nIHRoaXMgb2ZmIG1lYW5zIHlvdSBuZWVkIHRvIHVzZSBtZGwtKiBjbGFzc2VzIG1vcmUgb2Z0ZW4uXG4vLyBPdGhlciBjb21wb25lbnRzIG1heSBhbHNvIGZhaWwgdG8gYWRoZXJlIHRvIE1EIHdpdGhvdXQgdGhlc2UgcnVsZXMuXG4vLyBJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB5b3UgbGVhdmUgdGhpcyBhcyB0cnVlLlxuXG4kdGFyZ2V0LWVsZW1lbnRzLWRpcmVjdGx5OiB0cnVlICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDb21wb25lbnRzICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFN0YW5kYXJkIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuLy8gRGVmYXVsdCBidXR0b24gY29sb3JzLlxuJGJ1dHRvbi1wcmltYXJ5LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNTAwfSwgMC4yMClcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1ibGFja30pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1ob3Zlci1jb2xvcjogJGJ1dHRvbi1wcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xuJGJ1dHRvbi1hY3RpdmUtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JHBhbGV0dGUtZ3JleS01MDB9LCAwLjQwKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8vIENvbG9yZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1zZWNvbmRhcnktY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24taG92ZXItY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tYWN0aXZlLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWZvY3VzLWNvbG9yLWFsdDogJGJ1dHRvbi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuLy8gUmlwcGxlIGNvbG9yIGZvciBjb2xvcmVkIHJhaXNlZCBidXR0b25zLlxuJGJ1dHRvbi1yaXBwbGUtY29sb3ItYWx0OiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1kaXNhYmxlZDogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yLWRpc2FibGVkOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuXG4vLyBGQUIgY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24tZmFiLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLWhvdmVyLWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnR9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLWFjdGl2ZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYnV0dG9uLWZhYi10ZXh0LWNvbG9yLWFsdDogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRidXR0b24tZmFiLXJpcHBsZS1jb2xvci1hbHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50LWNvbnRyYXN0fSlcIikgIWRlZmF1bHQ7XG5cbi8vIEljb24gYnV0dG9uIGNvbG9ycyBhbmQgc2l6ZXMuXG4kYnV0dG9uLWljb24tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTcwMH0pXCIpICFkZWZhdWx0O1xuJGJ1dHRvbi1pY29uLWZvY3VzLWNvbG9yOiAkYnV0dG9uLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBJY29uIFRvZ2dsZXMgID09PT09PT09PT0gKi9cblxuJGljb24tdG9nZ2xlLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS03MDB9KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1mb2N1cy1jb2xvcjogJGJ1dHRvbi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1jaGVja2VkLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1jaGVja2VkLWZvY3VzLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kaWNvbi10b2dnbGUtZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFJhZGlvIEJ1dHRvbnMgID09PT09PT09PT0gKi9cblxuJHJhZGlvLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRyYWRpby1vZmYtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kcmFkaW8tZGlzYWJsZWQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFJpcHBsZSBlZmZlY3QgID09PT09PT09PT0gKi9cblxuJHJpcHBsZS1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1saWdodC1jb250cmFzdH0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBMYXlvdXQgID09PT09PT09PT0gKi9cblxuJGxheW91dC1uYXYtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuXG4vLyBEcmF3ZXJcbiRsYXlvdXQtZHJhd2VyLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS01MH0pXCIpICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYm9yZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktODAwfSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItbmF2aWdhdGlvbi1saW5rLWFjdGl2ZS1iYWNrZ3JvdW5kOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItbGlnaHQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcblxuLy8gSGVhZGVyXG4kbGF5b3V0LWhlYWRlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnktY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLW5hdi1ob3Zlci1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skcGFsZXR0ZS1ncmV5LTcwMH0sIDAuNilcIikgIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci10YWItdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0sIDAuNilcIikgIWRlZmF1bHQ7XG5cbi8vIFRhYnNcbiRsYXlvdXQtaGVhZGVyLXRhYi1oaWdobGlnaHQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENvbnRlbnQgVGFicyAgPT09PT09PT09PSAqL1xuXG4kdGFiLWhpZ2hsaWdodC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kdGFiLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJHRhYi1ib3JkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBDaGVja2JveGVzICA9PT09PT09PT09ICovXG5cbiRjaGVja2JveC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtb2ZmLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuNTQpXCIpICFkZWZhdWx0O1xuJGNoZWNrYm94LWRpc2FibGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuJGNoZWNrYm94LWZvY3VzLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kY2hlY2tib3gtaW1hZ2UtcGF0aDogJGltYWdlX3BhdGg7XG5cbi8qID09PT09PT09PT0gIFN3aXRjaGVzICA9PT09PT09PT09ICovXG5cbiRzd2l0Y2gtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1mYWRlZC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeX0sIDAuMjYpXCIpICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi1jb2xvcjogJHN3aXRjaC1jb2xvciAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLXByaW1hcnl9LCAwLjUpXCIpICFkZWZhdWx0O1xuXG4kc3dpdGNoLW9mZi10aHVtYi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTB9KVwiKSAhZGVmYXVsdDtcbiRzd2l0Y2gtb2ZmLXRyYWNrLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMjYpXCIpICFkZWZhdWx0O1xuJHN3aXRjaC1kaXNhYmxlZC10aHVtYi1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG4kc3dpdGNoLWRpc2FibGVkLXRyYWNrLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBTcGlubmVyICA9PT09PT09PT09ICovXG5cbiRzcGlubmVyLWNvbG9yLTE6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ibHVlLTQwMH0pXCIpICFkZWZhdWx0O1xuJHNwaW5uZXItY29sb3ItMjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXJlZC01MDB9KVwiKSAhZGVmYXVsdDtcbiRzcGlubmVyLWNvbG9yLTM6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS15ZWxsb3ctNjAwfSlcIikgIWRlZmF1bHQ7XG4kc3Bpbm5lci1jb2xvci00OiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JlZW4tNTAwfSlcIikgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXNpbmdsZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1wcmltYXJ5fSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFRleHQgZmllbGRzICA9PT09PT09PT09ICovXG5cbiRpbnB1dC10ZXh0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtbGFiZWwtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1ib3R0b20tYm9yZGVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuMTIpXCIpICFkZWZhdWx0O1xuJGlucHV0LXRleHQtaGlnaGxpZ2h0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXByaW1hcnl9KVwiKSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LWRpc2FibGVkLWNvbG9yOiAkaW5wdXQtdGV4dC1ib3R0b20tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZGlzYWJsZWQtdGV4dC1jb2xvcjogJGlucHV0LXRleHQtbGFiZWwtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1lcnJvci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLXJlZC1BNzAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIENhcmQgID09PT09PT09PT0gKi9cblxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci13aGl0ZX0pXCIpICFkZWZhdWx0O1xuJGNhcmQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1ibGFja30pXCIpICFkZWZhdWx0O1xuJGNhcmQtaW1hZ2UtcGxhY2Vob2xkZXItY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjU0KVwiKSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjEpICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIFNsaWRlcnMgPT09PT09PT09PSAqL1xuXG4kcmFuZ2UtYmctY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHJhbmdlLWZhZGVkLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5fSwgMC4yNilcIikgIWRlZmF1bHQ7XG4kcmFuZ2UtYmctZm9jdXMtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC4xMilcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gUHJvZ3Jlc3MgPT09PT09PT09PSAqL1xuJHByb2dyZXNzLW1haW4tY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItcHJpbWFyeX0pXCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLXNlY29uZGFyeS1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItcHJpbWFyeS1jb250cmFzdH0sIDAuNylcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZmFsbGJhY2stYnVmZmVyLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1wcmltYXJ5LWNvbnRyYXN0fSwgMC45KVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1pbWFnZS1wYXRoOiAkaW1hZ2VfcGF0aDtcblxuLyogPT09PT09PT09PSAgTGlzdCA9PT09PT09PT09ICovXG5cbiRsaXN0LW1haW4tdGV4dC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1ibGFja30sIDAuODcpXCIpICFkZWZhdWx0O1xuJGxpc3Qtc3VwcG9ydGluZy10ZXh0LXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC41NClcIikgIWRlZmF1bHQ7XG4kbGlzdC1pY29uLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS02MDB9KVwiKSAhZGVmYXVsdDtcbiRsaXN0LWF2YXRhci1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIEl0ZW0gPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IEl0ZW0gQ29sb3JzXG4kZGVmYXVsdC1pdGVtLXRleHQtY29sb3I6IHVucXVvdGUoXCJyZ2JhKCN7JGNvbG9yLWJsYWNrfSwgMC44NylcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLW91dGxpbmUtY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTQwMH0pXCIpICFkZWZhdWx0O1xuJGRlZmF1bHQtaXRlbS1ob3Zlci1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktMjAwfSlcIikgIWRlZmF1bHQ7XG4kZGVmYXVsdC1pdGVtLWZvY3VzLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0yMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JHBhbGV0dGUtZ3JleS0zMDB9KVwiKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWl0ZW0tZGl2aWRlci1jb2xvcjogdW5xdW90ZShcInJnYmEoI3skY29sb3ItYmxhY2t9LCAwLjEyKVwiKSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZWQgQnV0dG9uIENvbG9yc1xuJGRpc2FibGVkLWl0ZW0tdGV4dC1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNDAwfSlcIikgIWRlZmF1bHQ7XG5cbi8qID09PT09PT09PT0gIERyb3Bkb3duIG1lbnUgPT09PT09PT09PSAqL1xuXG4kZGVmYXVsdC1kcm9wZG93bi1iZy1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci13aGl0ZX0pXCIpICFkZWZhdWx0O1xuXG4vKiA9PT09PT09PT09ICBUb29sdGlwcyAgPT09PT09PT09PSAqL1xuXG4kdG9vbHRpcC10ZXh0LWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLXdoaXRlfSlcIikgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiB1bnF1b3RlKFwicmdiYSgjeyRwYWxldHRlLWdyZXktNzAwfSwgMC45KVwiKSAhZGVmYXVsdDtcblxuLyogPT09PT09PT09PSAgRm9vdGVyICA9PT09PT09PT09ICovXG5cbiRmb290ZXItYmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTgwMH0pXCIpICFkZWZhdWx0O1xuJGZvb3Rlci1jb2xvcjogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTAwfSlcIikgIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6IHVucXVvdGUoXCJyZ2IoI3skcGFsZXR0ZS1ncmV5LTMwMH0pXCIpICFkZWZhdWx0O1xuJGZvb3Rlci1idXR0b24tZmlsbC1jb2xvcjogJGZvb3Rlci1jb2xvciAhZGVmYXVsdDtcbiRmb290ZXItdW5kZXJsaW5lLWNvbG9yOiAkZm9vdGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8qIFRFWFRGSUVMRCAqL1xuXG4kaW5wdXQtdGV4dC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC13aWR0aDogMTAwJSAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXBhZGRpbmc6IDRweCAhZGVmYXVsdDtcbiRpbnB1dC10ZXh0LXZlcnRpY2FsLXNwYWNpbmc6IDIwcHggIWRlZmF1bHQ7XG5cbiRpbnB1dC10ZXh0LWJ1dHRvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGlucHV0LXRleHQtZmxvYXRpbmctbGFiZWwtZm9udHNpemU6IDEycHggIWRlZmF1bHQ7XG4kaW5wdXQtdGV4dC1leHBhbmRhYmxlLWljb24tdG9wOiAxNnB4ICFkZWZhdWx0O1xuXG5cbi8qIFNXSVRDSCAqL1xuXG4kc3dpdGNoLWxhYmVsLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRzd2l0Y2gtbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJHN3aXRjaC10cmFjay1oZWlnaHQ6IDE0cHggIWRlZmF1bHQ7XG4kc3dpdGNoLXRyYWNrLWxlbmd0aDogMzZweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdGh1bWItc2l6ZTogMjBweCAhZGVmYXVsdDtcbiRzd2l0Y2gtdHJhY2stdG9wOiAoJHN3aXRjaC1sYWJlbC1oZWlnaHQgLSAkc3dpdGNoLXRyYWNrLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuJHN3aXRjaC10aHVtYi10b3A6ICgkc3dpdGNoLWxhYmVsLWhlaWdodCAtICRzd2l0Y2gtdGh1bWItc2l6ZSkgLyAyICFkZWZhdWx0O1xuJHN3aXRjaC1yaXBwbGUtc2l6ZTogJHN3aXRjaC1sYWJlbC1oZWlnaHQgKiAyICFkZWZhdWx0O1xuJHN3aXRjaC1oZWxwZXItc2l6ZTogOHB4ICFkZWZhdWx0O1xuXG4vKiBTUElOTkVSICovXG5cbiRzcGlubmVyLXNpemU6IDI4cHggIWRlZmF1bHQ7XG4kc3Bpbm5lci1zdHJva2Utd2lkdGg6IDNweCAhZGVmYXVsdDtcblxuLy8gQW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwLlxuJHNwaW5uZXItYXJjLXNpemU6IDI3MGRlZyAhZGVmYXVsdDtcbi8vIFRpbWUgaXQgdGFrZXMgdG8gZXhwYW5kIGFuZCBjb250cmFjdCBhcmMuXG4kc3Bpbm5lci1hcmMtdGltZTogMTMzM21zICFkZWZhdWx0O1xuLy8gSG93IG11Y2ggdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBhcmMgc2hvdWxkIHJvdGF0ZSBlYWNoIHRpbWUuXG4kc3Bpbm5lci1hcmMtc3RhcnQtcm90OiAyMTZkZWcgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLWR1cmF0aW9uOiAzNjAgKiAkc3Bpbm5lci1hcmMtdGltZSAvIChcbiAgICBzdHJpcC11bml0cygkc3Bpbm5lci1hcmMtc3RhcnQtcm90ICsgKDM2MGRlZyAtICRzcGlubmVyLWFyYy1zaXplKSkpO1xuXG5cbi8qIFJBRElPICovXG5cbiRyYWRpby1sYWJlbC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kcmFkaW8tbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJHJhZGlvLWJ1dHRvbi1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJHJhZGlvLWlubmVyLW1hcmdpbjogJHJhZGlvLWJ1dHRvbi1zaXplIC8gNDtcbiRyYWRpby1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4kcmFkaW8tdG9wLW9mZnNldDogKCRyYWRpby1sYWJlbC1oZWlnaHQgLSAkcmFkaW8tYnV0dG9uLXNpemUpIC8gMjtcbiRyYWRpby1yaXBwbGUtc2l6ZTogNDJweCAhZGVmYXVsdDtcblxuXG4vKiBNRU5VICovXG5cbiRtZW51LWV4cGFuZC1kdXJhdGlvbjogMC4zcyAhZGVmYXVsdDtcbiRtZW51LWZhZGUtZHVyYXRpb246IDAuMnMgIWRlZmF1bHQ7XG5cbi8qIExJU1QgKi9cblxuJGxpc3QtYm9yZGVyOiA4cHggIWRlZmF1bHQ7XG4kbGlzdC1taW4taGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJGxpc3QtbWluLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kbGlzdC1ib3R0b20tcGFkZGluZzogMjBweCAhZGVmYXVsdDtcbiRsaXN0LWF2YXRhci10ZXh0LWxlZnQtZGlzdGFuY2U6IDcycHggIWRlZmF1bHQ7XG4kbGlzdC1pY29uLXRleHQtbGVmdC1kaXN0YW5jZTogNzJweCAhZGVmYXVsdDtcblxuJGxpc3QtYXZhdGFyLXNpemU6IDQwcHggIWRlZmF1bHQ7XG4kbGlzdC1pY29uLXNpemU6IDI0cHggIWRlZmF1bHQ7XG5cbiRsaXN0LXR3by1saW5lLWhlaWdodDogNzJweCAhZGVmYXVsdDtcbiRsaXN0LXRocmVlLWxpbmUtaGVpZ2h0OiA4OHB4ICFkZWZhdWx0O1xuXG4vKiBMQVlPVVQgKi9cblxuJGxheW91dC1kcmF3ZXItbmFycm93OiAyNDBweCAhZGVmYXVsdDtcbiRsYXlvdXQtZHJhd2VyLXdpZGU6IDQ1NnB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItd2lkdGg6ICRsYXlvdXQtZHJhd2VyLW5hcnJvdyAhZGVmYXVsdDtcblxuJGxheW91dC1oZWFkZXItaWNvbi1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGxheW91dC1zY3JlZW4tc2l6ZS10aHJlc2hvbGQ6IDEwMjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtaGVhZGVyLWljb24tbWFyZ2luOiAyNHB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYnV0dG9uLW1vYmlsZS1zaXplOiAzMnB4ICFkZWZhdWx0O1xuJGxheW91dC1kcmF3ZXItYnV0dG9uLWRlc2t0b3Atc2l6ZTogNDhweCAhZGVmYXVsdDtcblxuJGxheW91dC1oZWFkZXItbW9iaWxlLXJvdy1oZWlnaHQ6IDU2cHggIWRlZmF1bHQ7XG4kbGF5b3V0LW1vYmlsZS1oZWFkZXItaGVpZ2h0OiAkbGF5b3V0LWhlYWRlci1tb2JpbGUtcm93LWhlaWdodDtcbiRsYXlvdXQtaGVhZGVyLWRlc2t0b3Atcm93LWhlaWdodDogNjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtZGVza3RvcC1oZWFkZXItaGVpZ2h0OiAkbGF5b3V0LWhlYWRlci1kZXNrdG9wLXJvdy1oZWlnaHQ7XG5cbiRsYXlvdXQtaGVhZGVyLWRlc2t0b3AtYmFzZWxpbmU6IDgwcHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtYmFzZWxpbmU6IDcycHggIWRlZmF1bHQ7XG4kbGF5b3V0LWhlYWRlci1tb2JpbGUtaW5kZW50OiAxNnB4ICFkZWZhdWx0O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1pbmRlbnQ6IDQwcHggIWRlZmF1bHQ7XG5cbiRsYXlvdXQtdGFiLWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWJhci1oZWlnaHQ6IDQ4cHggIWRlZmF1bHQ7XG4kbGF5b3V0LXRhYi1tb2JpbGUtcGFkZGluZzogMTJweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWRlc2t0b3AtcGFkZGluZzogMjRweCAhZGVmYXVsdDtcbiRsYXlvdXQtdGFiLWhpZ2hsaWdodC10aGlja25lc3M6IDJweCAhZGVmYXVsdDtcblxuXG4vKiBJQ09OIFRPR0dMRSAqL1xuXG4kaWNvbi10b2dnbGUtc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRpY29uLXRvZ2dsZS1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kaWNvbi10b2dnbGUtcmlwcGxlLXNpemU6IDM2cHggIWRlZmF1bHQ7XG5cbi8qIEZPT1RFUiAqL1xuXG4vKm1lZ2EtZm9vdGVyKi9cbiRmb290ZXItbWluLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kZm9vdGVyLXBhZGRpbmctc2lkZXM6IDQwcHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGZvb3Rlci1oZWFkaW5nLWxpbmUtaGVpZ2h0OiAoMS43ICogJGZvb3Rlci1oZWFkaW5nLWZvbnQtc2l6ZSkgIWRlZmF1bHQ7XG4kZm9vdGVyLWJ0bi1zaXplOiAzNnB4ICAhZGVmYXVsdDtcblxuLyptaW5pLWZvb3RlciovXG4kcGFkZGluZzogMTZweCAhZGVmYXVsdDtcbiRmb290ZXItaGVhZGluZy1mb250LXNpemU6IDI0cHggIWRlZmF1bHQ7XG4kZm9vdGVyLWhlYWRpbmctbGluZS1oZWlnaHQ6ICgxLjUgKiAkZm9vdGVyLWhlYWRpbmctZm9udC1zaXplKSAhZGVmYXVsdDtcbiRmb290ZXItYnRuLXNpemU6IDM2cHggIWRlZmF1bHQ7XG5cbi8qIENIRUNLQk9YICovXG5cbiRjaGVja2JveC1sYWJlbC1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG4kY2hlY2tib3gtbGFiZWwtaGVpZ2h0OiAyNHB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LWJ1dHRvbi1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LWlubmVyLW1hcmdpbjogMnB4ICFkZWZhdWx0O1xuJGNoZWNrYm94LXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbiRjaGVja2JveC10b3Atb2Zmc2V0OlxuKCRjaGVja2JveC1sYWJlbC1oZWlnaHQgLSAkY2hlY2tib3gtYnV0dG9uLXNpemUgLSAkY2hlY2tib3gtaW5uZXItbWFyZ2luKSAvIDI7XG4kY2hlY2tib3gtcmlwcGxlLXNpemU6ICRjaGVja2JveC1sYWJlbC1oZWlnaHQgKiAxLjU7XG5cbi8qIENBUkQgKi9cblxuLyogQ2FyZCBkaW1lbnNpb25zICovXG4kY2FyZC13aWR0aDogMzMwcHggIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6IDIwMHB4ICFkZWZhdWx0O1xuJGNhcmQtZm9udC1zaXplOiAxNnB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGNhcmQtdmVydGljYWwtcGFkZGluZzogMTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtcGVyc3BlY3RpdmUtb3JpZ2luLXg6IDE2NXB4ICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtcGVyc3BlY3RpdmUtb3JpZ2luLXk6IDU2cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXRpdGxlLXRyYW5zZm9ybS1vcmlnaW4teDogMTY1cHggIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS10cmFuc2Zvcm0tb3JpZ2luLXk6IDU2cHggIWRlZmF1bHQ7XG5cbiRjYXJkLXRpdGxlLXRleHQtdHJhbnNmb3JtLW9yaWdpbi14OiAxNDlweCAhZGVmYXVsdDtcbiRjYXJkLXRpdGxlLXRleHQtdHJhbnNmb3JtLW9yaWdpbi15OiA0OHB4ICFkZWZhdWx0O1xuXG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGNhcmQtc3VwcG9ydGluZy10ZXh0LWxpbmUtaGVpZ2h0OiAxOHB4ICFkZWZhdWx0O1xuXG4kY2FyZC1hY3Rpb25zLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcblxuJGNhcmQtdGl0bGUtdGV4dC1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGNhcmQtei1pbmRleDogMSAhZGVmYXVsdDtcblxuLyogQ292ZXIgaW1hZ2UgKi9cbiRjYXJkLWNvdmVyLWltYWdlLWhlaWdodDogMTg2cHggIWRlZmF1bHQ7XG4kY2FyZC1iYWNrZ3JvdW5kLWltYWdlLXVybDogJycgIWRlZmF1bHQ7XG5cblxuLyogQlVUVE9OICovXG4vKipcbiAqXG4gKiBEaW1lbnNpb25zXG4gKlxuICovXG4kYnV0dG9uLW1pbi13aWR0aDogNjRweCAhZGVmYXVsdDtcbiRidXR0b24taGVpZ2h0OiAzNnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1wYWRkaW5nOiAxNnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1tYXJnaW46IDRweCAhZGVmYXVsdDtcbiRidXR0b24tYm9yZGVyLXJhZGl1czogMnB4ICFkZWZhdWx0O1xuXG4kYnV0dG9uLWZhYi1zaXplOiA1NnB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItc2l6ZS1taW5pOiA0MHB4ICFkZWZhdWx0O1xuJGJ1dHRvbi1mYWItZm9udC1zaXplOiAyNHB4ICFkZWZhdWx0O1xuXG4kYnV0dG9uLWljb24tc2l6ZTogMzJweCAhZGVmYXVsdDtcbiRidXR0b24taWNvbi1zaXplLW1pbmk6IDI0cHggIWRlZmF1bHQ7XG5cblxuLyogQU5JTUFUSU9OICovXG4kYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW46IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kYW5pbWF0aW9uLWN1cnZlLWxpbmVhci1vdXQtc2xvdy1pbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LWxpbmVhci1pbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRhbmltYXRpb24tY3VydmUtZGVmYXVsdDogJGFuaW1hdGlvbi1jdXJ2ZS1mYXN0LW91dC1zbG93LWluICFkZWZhdWx0O1xuXG5cbi8qIFBST0dSRVNTICovXG4kYmFyLWhlaWdodDogNHB4ICFkZWZhdWx0O1xuXG4vKiBCQURHRSAqL1xuJGJhZGdlLWZvbnQtc2l6ZTogMTJweCAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvcjogdW5xdW90ZShcInJnYigjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9KVwiKSAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvci1pbnZlcnNlOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuJGJhZGdlLWJhY2tncm91bmQ6IHVucXVvdGUoXCJyZ2IoI3skY29sb3ItYWNjZW50fSlcIikgIWRlZmF1bHQ7XG4kYmFkZ2UtYmFja2dyb3VuZC1pbnZlcnNlOiB1bnF1b3RlKFwicmdiYSgjeyRjb2xvci1hY2NlbnQtY29udHJhc3R9LDAuMilcIikgIWRlZmF1bHQ7XG4kYmFkZ2Utc2l6ZSA6IDIycHggIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZzogMnB4ICFkZWZhdWx0O1xuJGJhZGdlLW92ZXJsYXA6IDEycHggIWRlZmF1bHQ7XG5cbi8qIFNIQURPV1MgKi9cblxuJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eTogMC4xMiAhZGVmYXVsdDtcblxuLyogR1JJRCAqL1xuXG4kZ3JpZC1kZXNrdG9wLWNvbHVtbnM6IDEyICFkZWZhdWx0O1xuJGdyaWQtZGVza3RvcC1ndXR0ZXI6IDE2cHggIWRlZmF1bHQ7XG4kZ3JpZC1kZXNrdG9wLW1hcmdpbjogMTZweCAhZGVmYXVsdDtcblxuJGdyaWQtZGVza3RvcC1icmVha3BvaW50OiA4NDBweCAhZGVmYXVsdDtcblxuJGdyaWQtdGFibGV0LWNvbHVtbnM6IDggIWRlZmF1bHQ7XG4kZ3JpZC10YWJsZXQtZ3V0dGVyOiAkZ3JpZC1kZXNrdG9wLWd1dHRlciAhZGVmYXVsdDtcbiRncmlkLXRhYmxldC1tYXJnaW46ICRncmlkLWRlc2t0b3AtbWFyZ2luICFkZWZhdWx0O1xuXG4kZ3JpZC10YWJsZXQtYnJlYWtwb2ludDogNDgwcHggIWRlZmF1bHQ7XG5cbiRncmlkLXBob25lLWNvbHVtbnM6IDQgIWRlZmF1bHQ7XG4kZ3JpZC1waG9uZS1ndXR0ZXI6ICRncmlkLWRlc2t0b3AtZ3V0dGVyICFkZWZhdWx0O1xuJGdyaWQtcGhvbmUtbWFyZ2luOiAkZ3JpZC1kZXNrdG9wLW1hcmdpbiAhZGVmYXVsdDtcblxuJGdyaWQtY2VsbC1kZWZhdWx0LWNvbHVtbnM6ICRncmlkLXBob25lLWNvbHVtbnMgIWRlZmF1bHQ7XG4kZ3JpZC1tYXgtY29sdW1uczogJGdyaWQtZGVza3RvcC1jb2x1bW5zICFkZWZhdWx0O1xuXG4vKiBEQVRBIFRBQkxFICovXG5cbiRkYXRhLXRhYmxlLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1mb250LXNpemU6IDEycHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItc29ydC1pY29uLXNpemU6IDE2cHggIWRlZmF1bHQ7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci1jb2xvcjogcmdiYSgjMDAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWhlYWRlci1zb3J0ZWQtY29sb3I6IHJnYmEoIzAwMCwgMC44NykgIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1oZWFkZXItc29ydGVkLWljb24taG92ZXItY29sb3I6IHJnYmEoIzAwMCwgMC4yNikgIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yOiByZ2JhKCMwMDAsIDAuMTIpICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1ob3Zlci1jb2xvcjogI2VlZWVlZSAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLXNlbGVjdGlvbi1jb2xvcjogI2UwZTBlMCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtZGl2aWRlcnM6IDFweCBzb2xpZCAkZGF0YS10YWJsZS1kaXZpZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kZGF0YS10YWJsZS1yb3ctaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtbGFzdC1yb3ctaGVpZ2h0OiA1NnB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtaGVhZGVyLWhlaWdodDogNTZweCAhZGVmYXVsdDtcblxuJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmc6IDM2cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jb2x1bW4tcGFkZGluZzogJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmcgLyAyO1xuXG4kZGF0YS10YWJsZS1jYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHggIWRlZmF1bHQ7XG4kZGF0YS10YWJsZS1jYXJkLXRpdGxlLXRvcDogMjBweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWNhcmQtcGFkZGluZzogMjRweCAhZGVmYXVsdDtcbiRkYXRhLXRhYmxlLWJ1dHRvbi1wYWRkaW5nLXJpZ2h0OiAxNnB4ICFkZWZhdWx0O1xuJGRhdGEtdGFibGUtY2VsbC10b3A6ICRkYXRhLXRhYmxlLWNhcmQtcGFkZGluZyAvIDI7XG5cbi8qIERJQUxPRyAqL1xuJGRpYWxvZy1jb250ZW50LWNvbG9yOiAkY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjtcblxuLyogU05BQ0tCQVIgKi9cblxuLy8gSGFyZCBjb2RlZCBzaW5jZSB0aGUgY29sb3IgaXMgbm90IHByZXNlbnQgaW4gYW55IHBhbGV0dGUuXG4kc25hY2tiYXItYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhZGVmYXVsdDtcbiRzbmFja2Jhci10YWJsZXQtYnJlYWtwb2ludDogJGdyaWQtdGFibGV0LWJyZWFrcG9pbnQ7XG4kc25hY2tiYXItYWN0aW9uLWNvbG9yOiB1bnF1b3RlKFwicmdiKCN7JGNvbG9yLWFjY2VudH0pXCIpICFkZWZhdWx0O1xuXG4vKiBUT09MVElQICovXG4kdG9vbHRpcC1mb250LXNpemU6IDEwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1mb250LXNpemUtbGFyZ2U6IDE0cHggIWRlZmF1bHQ7XG5cbi8qIENISVAgKi9cbiRjaGlwLWJnLWNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyMikgIWRlZmF1bHQ7XG4kY2hpcC1iZy1hY3RpdmUtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KSAhZGVmYXVsdDtcbiRjaGlwLWhlaWdodDogMzJweCAhZGVmYXVsdDtcbiRjaGlwLWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDsgXG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiA9PT09PT09PT09ICBDb2xvciBQYWxldHRlcyAgPT09PT09PT09PSAqL1xuXG4vLyBDb2xvciBvcmRlcjogNTAsIDEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDAsIEExMDAsIEEyMDAsXG4vLyBBNDAwLCBBNzAwLlxuXG4kcGFsZXR0ZS1yZWQ6XG5cIjI1NSwyMzUsMjM4XCJcblwiMjU1LDIwNSwyMTBcIlxuXCIyMzksMTU0LDE1NFwiXG5cIjIyOSwxMTUsMTE1XCJcblwiMjM5LDgzLDgwXCJcblwiMjQ0LDY3LDU0XCJcblwiMjI5LDU3LDUzXCJcblwiMjExLDQ3LDQ3XCJcblwiMTk4LDQwLDQwXCJcblwiMTgzLDI4LDI4XCJcblwiMjU1LDEzOCwxMjhcIlxuXCIyNTUsODIsODJcIlxuXCIyNTUsMjMsNjhcIlxuXCIyMTMsMCwwXCI7XG5cbiRwYWxldHRlLXJlZC01MDogbnRoKCRwYWxldHRlLXJlZCwgMSk7XG4kcGFsZXR0ZS1yZWQtMTAwOiBudGgoJHBhbGV0dGUtcmVkLCAyKTtcbiRwYWxldHRlLXJlZC0yMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDMpO1xuJHBhbGV0dGUtcmVkLTMwMDogbnRoKCRwYWxldHRlLXJlZCwgNCk7XG4kcGFsZXR0ZS1yZWQtNDAwOiBudGgoJHBhbGV0dGUtcmVkLCA1KTtcbiRwYWxldHRlLXJlZC01MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDYpO1xuJHBhbGV0dGUtcmVkLTYwMDogbnRoKCRwYWxldHRlLXJlZCwgNyk7XG4kcGFsZXR0ZS1yZWQtNzAwOiBudGgoJHBhbGV0dGUtcmVkLCA4KTtcbiRwYWxldHRlLXJlZC04MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDkpO1xuJHBhbGV0dGUtcmVkLTkwMDogbnRoKCRwYWxldHRlLXJlZCwgMTApO1xuJHBhbGV0dGUtcmVkLUExMDA6IG50aCgkcGFsZXR0ZS1yZWQsIDExKTtcbiRwYWxldHRlLXJlZC1BMjAwOiBudGgoJHBhbGV0dGUtcmVkLCAxMik7XG4kcGFsZXR0ZS1yZWQtQTQwMDogbnRoKCRwYWxldHRlLXJlZCwgMTMpO1xuJHBhbGV0dGUtcmVkLUE3MDA6IG50aCgkcGFsZXR0ZS1yZWQsIDE0KTtcblxuJHBhbGV0dGUtcGluazpcblwiMjUyLDIyOCwyMzZcIlxuXCIyNDgsMTg3LDIwOFwiXG5cIjI0NCwxNDMsMTc3XCJcblwiMjQwLDk4LDE0NlwiXG5cIjIzNiw2NCwxMjJcIlxuXCIyMzMsMzAsOTlcIlxuXCIyMTYsMjcsOTZcIlxuXCIxOTQsMjQsOTFcIlxuXCIxNzMsMjAsODdcIlxuXCIxMzYsMTQsNzlcIlxuXCIyNTUsMTI4LDE3MVwiXG5cIjI1NSw2NCwxMjlcIlxuXCIyNDUsMCw4N1wiXG5cIjE5NywxNyw5OFwiO1xuXG4kcGFsZXR0ZS1waW5rLTUwOiBudGgoJHBhbGV0dGUtcGluaywgMSk7XG4kcGFsZXR0ZS1waW5rLTEwMDogbnRoKCRwYWxldHRlLXBpbmssIDIpO1xuJHBhbGV0dGUtcGluay0yMDA6IG50aCgkcGFsZXR0ZS1waW5rLCAzKTtcbiRwYWxldHRlLXBpbmstMzAwOiBudGgoJHBhbGV0dGUtcGluaywgNCk7XG4kcGFsZXR0ZS1waW5rLTQwMDogbnRoKCRwYWxldHRlLXBpbmssIDUpO1xuJHBhbGV0dGUtcGluay01MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA2KTtcbiRwYWxldHRlLXBpbmstNjAwOiBudGgoJHBhbGV0dGUtcGluaywgNyk7XG4kcGFsZXR0ZS1waW5rLTcwMDogbnRoKCRwYWxldHRlLXBpbmssIDgpO1xuJHBhbGV0dGUtcGluay04MDA6IG50aCgkcGFsZXR0ZS1waW5rLCA5KTtcbiRwYWxldHRlLXBpbmstOTAwOiBudGgoJHBhbGV0dGUtcGluaywgMTApO1xuJHBhbGV0dGUtcGluay1BMTAwOiBudGgoJHBhbGV0dGUtcGluaywgMTEpO1xuJHBhbGV0dGUtcGluay1BMjAwOiBudGgoJHBhbGV0dGUtcGluaywgMTIpO1xuJHBhbGV0dGUtcGluay1BNDAwOiBudGgoJHBhbGV0dGUtcGluaywgMTMpO1xuJHBhbGV0dGUtcGluay1BNzAwOiBudGgoJHBhbGV0dGUtcGluaywgMTQpO1xuXG4kcGFsZXR0ZS1wdXJwbGU6XG5cIjI0MywyMjksMjQ1XCJcblwiMjI1LDE5MCwyMzFcIlxuXCIyMDYsMTQ3LDIxNlwiXG5cIjE4NiwxMDQsMjAwXCJcblwiMTcxLDcxLDE4OFwiXG5cIjE1NiwzOSwxNzZcIlxuXCIxNDIsMzYsMTcwXCJcblwiMTIzLDMxLDE2MlwiXG5cIjEwNiwyNywxNTRcIlxuXCI3NCwyMCwxNDBcIlxuXCIyMzQsMTI4LDI1MlwiXG5cIjIyNCw2NCwyNTFcIlxuXCIyMTMsMCwyNDlcIlxuXCIxNzAsMCwyNTVcIjtcblxuJHBhbGV0dGUtcHVycGxlLTUwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxKTtcbiRwYWxldHRlLXB1cnBsZS0xMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDIpO1xuJHBhbGV0dGUtcHVycGxlLTIwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMyk7XG4kcGFsZXR0ZS1wdXJwbGUtMzAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA0KTtcbiRwYWxldHRlLXB1cnBsZS00MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDUpO1xuJHBhbGV0dGUtcHVycGxlLTUwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgNik7XG4kcGFsZXR0ZS1wdXJwbGUtNjAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCA3KTtcbiRwYWxldHRlLXB1cnBsZS03MDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDgpO1xuJHBhbGV0dGUtcHVycGxlLTgwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgOSk7XG4kcGFsZXR0ZS1wdXJwbGUtOTAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMCk7XG4kcGFsZXR0ZS1wdXJwbGUtQTEwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTEpO1xuJHBhbGV0dGUtcHVycGxlLUEyMDA6IG50aCgkcGFsZXR0ZS1wdXJwbGUsIDEyKTtcbiRwYWxldHRlLXB1cnBsZS1BNDAwOiBudGgoJHBhbGV0dGUtcHVycGxlLCAxMyk7XG4kcGFsZXR0ZS1wdXJwbGUtQTcwMDogbnRoKCRwYWxldHRlLXB1cnBsZSwgMTQpO1xuXG4kcGFsZXR0ZS1kZWVwLXB1cnBsZTpcblwiMjM3LDIzMSwyNDZcIlxuXCIyMDksMTk2LDIzM1wiXG5cIjE3OSwxNTcsMjE5XCJcblwiMTQ5LDExNywyMDVcIlxuXCIxMjYsODcsMTk0XCJcblwiMTAzLDU4LDE4M1wiXG5cIjk0LDUzLDE3N1wiXG5cIjgxLDQ1LDE2OFwiXG5cIjY5LDM5LDE2MFwiXG5cIjQ5LDI3LDE0NlwiXG5cIjE3OSwxMzYsMjU1XCJcblwiMTI0LDc3LDI1NVwiXG5cIjEwMSwzMSwyNTVcIlxuXCI5OCwwLDIzNFwiO1xuXG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS01MDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTEwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAyKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTIwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAzKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTMwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA0KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTQwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA1KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTUwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA2KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTYwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA3KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTcwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA4KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTgwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCA5KTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLTkwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMCk7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BMTAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDExKTtcbiRwYWxldHRlLWRlZXAtcHVycGxlLUEyMDA6IG50aCgkcGFsZXR0ZS1kZWVwLXB1cnBsZSwgMTIpO1xuJHBhbGV0dGUtZGVlcC1wdXJwbGUtQTQwMDogbnRoKCRwYWxldHRlLWRlZXAtcHVycGxlLCAxMyk7XG4kcGFsZXR0ZS1kZWVwLXB1cnBsZS1BNzAwOiBudGgoJHBhbGV0dGUtZGVlcC1wdXJwbGUsIDE0KTtcblxuJHBhbGV0dGUtaW5kaWdvOlxuXCIyMzIsMjM0LDI0NlwiXG5cIjE5NywyMDIsMjMzXCJcblwiMTU5LDE2OCwyMThcIlxuXCIxMjEsMTM0LDIwM1wiXG5cIjkyLDEwNywxOTJcIlxuXCI2Myw4MSwxODFcIlxuXCI1Nyw3MywxNzFcIlxuXCI0OCw2MywxNTlcIlxuXCI0MCw1MywxNDdcIlxuXCIyNiwzNSwxMjZcIlxuXCIxNDAsMTU4LDI1NVwiXG5cIjgzLDEwOSwyNTRcIlxuXCI2MSw5MCwyNTRcIlxuXCI0OCw3OSwyNTRcIjtcblxuJHBhbGV0dGUtaW5kaWdvLTUwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxKTtcbiRwYWxldHRlLWluZGlnby0xMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDIpO1xuJHBhbGV0dGUtaW5kaWdvLTIwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMyk7XG4kcGFsZXR0ZS1pbmRpZ28tMzAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA0KTtcbiRwYWxldHRlLWluZGlnby00MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDUpO1xuJHBhbGV0dGUtaW5kaWdvLTUwMDogbnRoKCRwYWxldHRlLWluZGlnbywgNik7XG4kcGFsZXR0ZS1pbmRpZ28tNjAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCA3KTtcbiRwYWxldHRlLWluZGlnby03MDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDgpO1xuJHBhbGV0dGUtaW5kaWdvLTgwMDogbnRoKCRwYWxldHRlLWluZGlnbywgOSk7XG4kcGFsZXR0ZS1pbmRpZ28tOTAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMCk7XG4kcGFsZXR0ZS1pbmRpZ28tQTEwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTEpO1xuJHBhbGV0dGUtaW5kaWdvLUEyMDA6IG50aCgkcGFsZXR0ZS1pbmRpZ28sIDEyKTtcbiRwYWxldHRlLWluZGlnby1BNDAwOiBudGgoJHBhbGV0dGUtaW5kaWdvLCAxMyk7XG4kcGFsZXR0ZS1pbmRpZ28tQTcwMDogbnRoKCRwYWxldHRlLWluZGlnbywgMTQpO1xuXG4kcGFsZXR0ZS1ibHVlOlxuXCIyMjcsMjQyLDI1M1wiXG5cIjE4NywyMjIsMjUxXCJcblwiMTQ0LDIwMiwyNDlcIlxuXCIxMDAsMTgxLDI0NlwiXG5cIjY2LDE2NSwyNDVcIlxuXCIzMywxNTAsMjQzXCJcblwiMzAsMTM2LDIyOVwiXG5cIjI1LDExOCwyMTBcIlxuXCIyMSwxMDEsMTkyXCJcblwiMTMsNzEsMTYxXCJcblwiMTMwLDE3NywyNTVcIlxuXCI2OCwxMzgsMjU1XCJcblwiNDEsMTIxLDI1NVwiXG5cIjQxLDk4LDI1NVwiO1xuXG4kcGFsZXR0ZS1ibHVlLTUwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMSk7XG4kcGFsZXR0ZS1ibHVlLTEwMDogbnRoKCRwYWxldHRlLWJsdWUsIDIpO1xuJHBhbGV0dGUtYmx1ZS0yMDA6IG50aCgkcGFsZXR0ZS1ibHVlLCAzKTtcbiRwYWxldHRlLWJsdWUtMzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNCk7XG4kcGFsZXR0ZS1ibHVlLTQwMDogbnRoKCRwYWxldHRlLWJsdWUsIDUpO1xuJHBhbGV0dGUtYmx1ZS01MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA2KTtcbiRwYWxldHRlLWJsdWUtNjAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgNyk7XG4kcGFsZXR0ZS1ibHVlLTcwMDogbnRoKCRwYWxldHRlLWJsdWUsIDgpO1xuJHBhbGV0dGUtYmx1ZS04MDA6IG50aCgkcGFsZXR0ZS1ibHVlLCA5KTtcbiRwYWxldHRlLWJsdWUtOTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTApO1xuJHBhbGV0dGUtYmx1ZS1BMTAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTEpO1xuJHBhbGV0dGUtYmx1ZS1BMjAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTIpO1xuJHBhbGV0dGUtYmx1ZS1BNDAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTMpO1xuJHBhbGV0dGUtYmx1ZS1BNzAwOiBudGgoJHBhbGV0dGUtYmx1ZSwgMTQpO1xuXG4kcGFsZXR0ZS1saWdodC1ibHVlOlxuXCIyMjUsMjQ1LDI1NFwiXG5cIjE3OSwyMjksMjUyXCJcblwiMTI5LDIxMiwyNTBcIlxuXCI3OSwxOTUsMjQ3XCJcblwiNDEsMTgyLDI0NlwiXG5cIjMsMTY5LDI0NFwiXG5cIjMsMTU1LDIyOVwiXG5cIjIsMTM2LDIwOVwiXG5cIjIsMTE5LDE4OVwiXG5cIjEsODcsMTU1XCJcblwiMTI4LDIxNiwyNTVcIlxuXCI2NCwxOTYsMjU1XCJcblwiMCwxNzYsMjU1XCJcblwiMCwxNDUsMjM0XCI7XG5cbiRwYWxldHRlLWxpZ2h0LWJsdWUtNTA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxKTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtMTAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgMik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTIwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDMpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS0zMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA0KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNDAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgNSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTUwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDYpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS02MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCA3KTtcbiRwYWxldHRlLWxpZ2h0LWJsdWUtNzAwOiBudGgoJHBhbGV0dGUtbGlnaHQtYmx1ZSwgOCk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLTgwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWJsdWUsIDkpO1xuJHBhbGV0dGUtbGlnaHQtYmx1ZS05MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMCk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUExMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMSk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUEyMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMik7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUE0MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxMyk7XG4kcGFsZXR0ZS1saWdodC1ibHVlLUE3MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ibHVlLCAxNCk7XG5cbiRwYWxldHRlLWN5YW46XG5cIjIyNCwyNDcsMjUwXCJcblwiMTc4LDIzNSwyNDJcIlxuXCIxMjgsMjIyLDIzNFwiXG5cIjc3LDIwOCwyMjVcIlxuXCIzOCwxOTgsMjE4XCJcblwiMCwxODgsMjEyXCJcblwiMCwxNzIsMTkzXCJcblwiMCwxNTEsMTY3XCJcblwiMCwxMzEsMTQzXCJcblwiMCw5NiwxMDBcIlxuXCIxMzIsMjU1LDI1NVwiXG5cIjI0LDI1NSwyNTVcIlxuXCIwLDIyOSwyNTVcIlxuXCIwLDE4NCwyMTJcIjtcblxuJHBhbGV0dGUtY3lhbi01MDogbnRoKCRwYWxldHRlLWN5YW4sIDEpO1xuJHBhbGV0dGUtY3lhbi0xMDA6IG50aCgkcGFsZXR0ZS1jeWFuLCAyKTtcbiRwYWxldHRlLWN5YW4tMjAwOiBudGgoJHBhbGV0dGUtY3lhbiwgMyk7XG4kcGFsZXR0ZS1jeWFuLTMwMDogbnRoKCRwYWxldHRlLWN5YW4sIDQpO1xuJHBhbGV0dGUtY3lhbi00MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA1KTtcbiRwYWxldHRlLWN5YW4tNTAwOiBudGgoJHBhbGV0dGUtY3lhbiwgNik7XG4kcGFsZXR0ZS1jeWFuLTYwMDogbnRoKCRwYWxldHRlLWN5YW4sIDcpO1xuJHBhbGV0dGUtY3lhbi03MDA6IG50aCgkcGFsZXR0ZS1jeWFuLCA4KTtcbiRwYWxldHRlLWN5YW4tODAwOiBudGgoJHBhbGV0dGUtY3lhbiwgOSk7XG4kcGFsZXR0ZS1jeWFuLTkwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEwKTtcbiRwYWxldHRlLWN5YW4tQTEwMDogbnRoKCRwYWxldHRlLWN5YW4sIDExKTtcbiRwYWxldHRlLWN5YW4tQTIwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEyKTtcbiRwYWxldHRlLWN5YW4tQTQwMDogbnRoKCRwYWxldHRlLWN5YW4sIDEzKTtcbiRwYWxldHRlLWN5YW4tQTcwMDogbnRoKCRwYWxldHRlLWN5YW4sIDE0KTtcblxuJHBhbGV0dGUtdGVhbDpcblwiMjI0LDI0MiwyNDFcIlxuXCIxNzgsMjIzLDIxOVwiXG5cIjEyOCwyMDMsMTk2XCJcblwiNzcsMTgyLDE3MlwiXG5cIjM4LDE2NiwxNTRcIlxuXCIwLDE1MCwxMzZcIlxuXCIwLDEzNywxMjNcIlxuXCIwLDEyMSwxMDdcIlxuXCIwLDEwNSw5MlwiXG5cIjAsNzcsNjRcIlxuXCIxNjcsMjU1LDIzNVwiXG5cIjEwMCwyNTUsMjE4XCJcblwiMjksMjMzLDE4MlwiXG5cIjAsMTkxLDE2NVwiO1xuXG4kcGFsZXR0ZS10ZWFsLTUwOiBudGgoJHBhbGV0dGUtdGVhbCwgMSk7XG4kcGFsZXR0ZS10ZWFsLTEwMDogbnRoKCRwYWxldHRlLXRlYWwsIDIpO1xuJHBhbGV0dGUtdGVhbC0yMDA6IG50aCgkcGFsZXR0ZS10ZWFsLCAzKTtcbiRwYWxldHRlLXRlYWwtMzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNCk7XG4kcGFsZXR0ZS10ZWFsLTQwMDogbnRoKCRwYWxldHRlLXRlYWwsIDUpO1xuJHBhbGV0dGUtdGVhbC01MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA2KTtcbiRwYWxldHRlLXRlYWwtNjAwOiBudGgoJHBhbGV0dGUtdGVhbCwgNyk7XG4kcGFsZXR0ZS10ZWFsLTcwMDogbnRoKCRwYWxldHRlLXRlYWwsIDgpO1xuJHBhbGV0dGUtdGVhbC04MDA6IG50aCgkcGFsZXR0ZS10ZWFsLCA5KTtcbiRwYWxldHRlLXRlYWwtOTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTApO1xuJHBhbGV0dGUtdGVhbC1BMTAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTEpO1xuJHBhbGV0dGUtdGVhbC1BMjAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTIpO1xuJHBhbGV0dGUtdGVhbC1BNDAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTMpO1xuJHBhbGV0dGUtdGVhbC1BNzAwOiBudGgoJHBhbGV0dGUtdGVhbCwgMTQpO1xuXG4kcGFsZXR0ZS1ncmVlbjpcblwiMjMyLDI0NSwyMzNcIlxuXCIyMDAsMjMwLDIwMVwiXG5cIjE2NSwyMTQsMTY3XCJcblwiMTI5LDE5OSwxMzJcIlxuXCIxMDIsMTg3LDEwNlwiXG5cIjc2LDE3NSw4MFwiXG5cIjY3LDE2MCw3MVwiXG5cIjU2LDE0Miw2MFwiXG5cIjQ2LDEyNSw1MFwiXG5cIjI3LDk0LDMyXCJcblwiMTg1LDI0NiwyMDJcIlxuXCIxMDUsMjQwLDE3NFwiXG5cIjAsMjMwLDExOFwiXG5cIjAsMjAwLDgzXCI7XG5cbiRwYWxldHRlLWdyZWVuLTUwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEpO1xuJHBhbGV0dGUtZ3JlZW4tMTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDIpO1xuJHBhbGV0dGUtZ3JlZW4tMjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDMpO1xuJHBhbGV0dGUtZ3JlZW4tMzAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDQpO1xuJHBhbGV0dGUtZ3JlZW4tNDAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDUpO1xuJHBhbGV0dGUtZ3JlZW4tNTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDYpO1xuJHBhbGV0dGUtZ3JlZW4tNjAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDcpO1xuJHBhbGV0dGUtZ3JlZW4tNzAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDgpO1xuJHBhbGV0dGUtZ3JlZW4tODAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDkpO1xuJHBhbGV0dGUtZ3JlZW4tOTAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEwKTtcbiRwYWxldHRlLWdyZWVuLUExMDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTEpO1xuJHBhbGV0dGUtZ3JlZW4tQTIwMDogbnRoKCRwYWxldHRlLWdyZWVuLCAxMik7XG4kcGFsZXR0ZS1ncmVlbi1BNDAwOiBudGgoJHBhbGV0dGUtZ3JlZW4sIDEzKTtcbiRwYWxldHRlLWdyZWVuLUE3MDA6IG50aCgkcGFsZXR0ZS1ncmVlbiwgMTQpO1xuXG4kcGFsZXR0ZS1saWdodC1ncmVlbjpcblwiMjQxLDI0OCwyMzNcIlxuXCIyMjAsMjM3LDIwMFwiXG5cIjE5NywyMjUsMTY1XCJcblwiMTc0LDIxMywxMjlcIlxuXCIxNTYsMjA0LDEwMVwiXG5cIjEzOSwxOTUsNzRcIlxuXCIxMjQsMTc5LDY2XCJcblwiMTA0LDE1OSw1NlwiXG5cIjg1LDEzOSw0N1wiXG5cIjUxLDEwNSwzMFwiXG5cIjIwNCwyNTUsMTQ0XCJcblwiMTc4LDI1NSw4OVwiXG5cIjExOCwyNTUsM1wiXG5cIjEwMCwyMjEsMjNcIjtcblxuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tNTA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0xMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMik7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0yMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi0zMDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi00MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi01MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNik7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi02MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgNyk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi03MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgOCk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi04MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgOSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi05MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTApO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTEwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxMSk7XG4kcGFsZXR0ZS1saWdodC1ncmVlbi1BMjAwOiBudGgoJHBhbGV0dGUtbGlnaHQtZ3JlZW4sIDEyKTtcbiRwYWxldHRlLWxpZ2h0LWdyZWVuLUE0MDA6IG50aCgkcGFsZXR0ZS1saWdodC1ncmVlbiwgMTMpO1xuJHBhbGV0dGUtbGlnaHQtZ3JlZW4tQTcwMDogbnRoKCRwYWxldHRlLWxpZ2h0LWdyZWVuLCAxNCk7XG5cbiRwYWxldHRlLWxpbWU6XG5cIjI0OSwyNTEsMjMxXCJcblwiMjQwLDI0NCwxOTVcIlxuXCIyMzAsMjM4LDE1NlwiXG5cIjIyMCwyMzEsMTE3XCJcblwiMjEyLDIyNSw4N1wiXG5cIjIwNSwyMjAsNTdcIlxuXCIxOTIsMjAyLDUxXCJcblwiMTc1LDE4MCw0M1wiXG5cIjE1OCwxNTcsMzZcIlxuXCIxMzAsMTE5LDIzXCJcblwiMjQ0LDI1NSwxMjlcIlxuXCIyMzgsMjU1LDY1XCJcblwiMTk4LDI1NSwwXCJcblwiMTc0LDIzNCwwXCI7XG5cbiRwYWxldHRlLWxpbWUtNTA6IG50aCgkcGFsZXR0ZS1saW1lLCAxKTtcbiRwYWxldHRlLWxpbWUtMTAwOiBudGgoJHBhbGV0dGUtbGltZSwgMik7XG4kcGFsZXR0ZS1saW1lLTIwMDogbnRoKCRwYWxldHRlLWxpbWUsIDMpO1xuJHBhbGV0dGUtbGltZS0zMDA6IG50aCgkcGFsZXR0ZS1saW1lLCA0KTtcbiRwYWxldHRlLWxpbWUtNDAwOiBudGgoJHBhbGV0dGUtbGltZSwgNSk7XG4kcGFsZXR0ZS1saW1lLTUwMDogbnRoKCRwYWxldHRlLWxpbWUsIDYpO1xuJHBhbGV0dGUtbGltZS02MDA6IG50aCgkcGFsZXR0ZS1saW1lLCA3KTtcbiRwYWxldHRlLWxpbWUtNzAwOiBudGgoJHBhbGV0dGUtbGltZSwgOCk7XG4kcGFsZXR0ZS1saW1lLTgwMDogbnRoKCRwYWxldHRlLWxpbWUsIDkpO1xuJHBhbGV0dGUtbGltZS05MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMCk7XG4kcGFsZXR0ZS1saW1lLUExMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMSk7XG4kcGFsZXR0ZS1saW1lLUEyMDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMik7XG4kcGFsZXR0ZS1saW1lLUE0MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxMyk7XG4kcGFsZXR0ZS1saW1lLUE3MDA6IG50aCgkcGFsZXR0ZS1saW1lLCAxNCk7XG5cbiRwYWxldHRlLXllbGxvdzpcblwiMjU1LDI1MywyMzFcIlxuXCIyNTUsMjQ5LDE5NlwiXG5cIjI1NSwyNDUsMTU3XCJcblwiMjU1LDI0MSwxMThcIlxuXCIyNTUsMjM4LDg4XCJcblwiMjU1LDIzNSw1OVwiXG5cIjI1MywyMTYsNTNcIlxuXCIyNTEsMTkyLDQ1XCJcblwiMjQ5LDE2OCwzN1wiXG5cIjI0NSwxMjcsMjNcIlxuXCIyNTUsMjU1LDE0MVwiXG5cIjI1NSwyNTUsMFwiXG5cIjI1NSwyMzQsMFwiXG5cIjI1NSwyMTQsMFwiO1xuXG4kcGFsZXR0ZS15ZWxsb3ctNTA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEpO1xuJHBhbGV0dGUteWVsbG93LTEwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMik7XG4kcGFsZXR0ZS15ZWxsb3ctMjAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAzKTtcbiRwYWxldHRlLXllbGxvdy0zMDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDQpO1xuJHBhbGV0dGUteWVsbG93LTQwMDogbnRoKCRwYWxldHRlLXllbGxvdywgNSk7XG4kcGFsZXR0ZS15ZWxsb3ctNTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA2KTtcbiRwYWxldHRlLXllbGxvdy02MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDcpO1xuJHBhbGV0dGUteWVsbG93LTcwMDogbnRoKCRwYWxldHRlLXllbGxvdywgOCk7XG4kcGFsZXR0ZS15ZWxsb3ctODAwOiBudGgoJHBhbGV0dGUteWVsbG93LCA5KTtcbiRwYWxldHRlLXllbGxvdy05MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEwKTtcbiRwYWxldHRlLXllbGxvdy1BMTAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxMSk7XG4kcGFsZXR0ZS15ZWxsb3ctQTIwMDogbnRoKCRwYWxldHRlLXllbGxvdywgMTIpO1xuJHBhbGV0dGUteWVsbG93LUE0MDA6IG50aCgkcGFsZXR0ZS15ZWxsb3csIDEzKTtcbiRwYWxldHRlLXllbGxvdy1BNzAwOiBudGgoJHBhbGV0dGUteWVsbG93LCAxNCk7XG5cbiRwYWxldHRlLWFtYmVyOlxuXCIyNTUsMjQ4LDIyNVwiXG5cIjI1NSwyMzYsMTc5XCJcblwiMjU1LDIyNCwxMzBcIlxuXCIyNTUsMjEzLDc5XCJcblwiMjU1LDIwMiw0MFwiXG5cIjI1NSwxOTMsN1wiXG5cIjI1NSwxNzksMFwiXG5cIjI1NSwxNjAsMFwiXG5cIjI1NSwxNDMsMFwiXG5cIjI1NSwxMTEsMFwiXG5cIjI1NSwyMjksMTI3XCJcblwiMjU1LDIxNSw2NFwiXG5cIjI1NSwxOTYsMFwiXG5cIjI1NSwxNzEsMFwiO1xuXG4kcGFsZXR0ZS1hbWJlci01MDogbnRoKCRwYWxldHRlLWFtYmVyLCAxKTtcbiRwYWxldHRlLWFtYmVyLTEwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAyKTtcbiRwYWxldHRlLWFtYmVyLTIwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAzKTtcbiRwYWxldHRlLWFtYmVyLTMwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA0KTtcbiRwYWxldHRlLWFtYmVyLTQwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA1KTtcbiRwYWxldHRlLWFtYmVyLTUwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA2KTtcbiRwYWxldHRlLWFtYmVyLTYwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA3KTtcbiRwYWxldHRlLWFtYmVyLTcwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA4KTtcbiRwYWxldHRlLWFtYmVyLTgwMDogbnRoKCRwYWxldHRlLWFtYmVyLCA5KTtcbiRwYWxldHRlLWFtYmVyLTkwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMCk7XG4kcGFsZXR0ZS1hbWJlci1BMTAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDExKTtcbiRwYWxldHRlLWFtYmVyLUEyMDA6IG50aCgkcGFsZXR0ZS1hbWJlciwgMTIpO1xuJHBhbGV0dGUtYW1iZXItQTQwMDogbnRoKCRwYWxldHRlLWFtYmVyLCAxMyk7XG4kcGFsZXR0ZS1hbWJlci1BNzAwOiBudGgoJHBhbGV0dGUtYW1iZXIsIDE0KTtcblxuJHBhbGV0dGUtb3JhbmdlOlxuXCIyNTUsMjQzLDIyNFwiXG5cIjI1NSwyMjQsMTc4XCJcblwiMjU1LDIwNCwxMjhcIlxuXCIyNTUsMTgzLDc3XCJcblwiMjU1LDE2NywzOFwiXG5cIjI1NSwxNTIsMFwiXG5cIjI1MSwxNDAsMFwiXG5cIjI0NSwxMjQsMFwiXG5cIjIzOSwxMDgsMFwiXG5cIjIzMCw4MSwwXCJcblwiMjU1LDIwOSwxMjhcIlxuXCIyNTUsMTcxLDY0XCJcblwiMjU1LDE0NSwwXCJcblwiMjU1LDEwOSwwXCI7XG5cbiRwYWxldHRlLW9yYW5nZS01MDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMSk7XG4kcGFsZXR0ZS1vcmFuZ2UtMTAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAyKTtcbiRwYWxldHRlLW9yYW5nZS0yMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDMpO1xuJHBhbGV0dGUtb3JhbmdlLTMwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNCk7XG4kcGFsZXR0ZS1vcmFuZ2UtNDAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA1KTtcbiRwYWxldHRlLW9yYW5nZS01MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDYpO1xuJHBhbGV0dGUtb3JhbmdlLTYwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgNyk7XG4kcGFsZXR0ZS1vcmFuZ2UtNzAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCA4KTtcbiRwYWxldHRlLW9yYW5nZS04MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDkpO1xuJHBhbGV0dGUtb3JhbmdlLTkwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTApO1xuJHBhbGV0dGUtb3JhbmdlLUExMDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDExKTtcbiRwYWxldHRlLW9yYW5nZS1BMjAwOiBudGgoJHBhbGV0dGUtb3JhbmdlLCAxMik7XG4kcGFsZXR0ZS1vcmFuZ2UtQTQwMDogbnRoKCRwYWxldHRlLW9yYW5nZSwgMTMpO1xuJHBhbGV0dGUtb3JhbmdlLUE3MDA6IG50aCgkcGFsZXR0ZS1vcmFuZ2UsIDE0KTtcblxuJHBhbGV0dGUtZGVlcC1vcmFuZ2U6XG5cIjI1MSwyMzMsMjMxXCJcblwiMjU1LDIwNCwxODhcIlxuXCIyNTUsMTcxLDE0NVwiXG5cIjI1NSwxMzgsMTAxXCJcblwiMjU1LDExMiw2N1wiXG5cIjI1NSw4NywzNFwiXG5cIjI0NCw4MSwzMFwiXG5cIjIzMCw3NCwyNVwiXG5cIjIxNiw2NywyMVwiXG5cIjE5MSw1NCwxMlwiXG5cIjI1NSwxNTgsMTI4XCJcblwiMjU1LDExMCw2NFwiXG5cIjI1NSw2MSwwXCJcblwiMjIxLDQ0LDBcIjtcblxuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtNTA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0xMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMik7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0yMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS0zMDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS00MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS01MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNik7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS02MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgNyk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS03MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgOCk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS04MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgOSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS05MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTApO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTEwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxMSk7XG4kcGFsZXR0ZS1kZWVwLW9yYW5nZS1BMjAwOiBudGgoJHBhbGV0dGUtZGVlcC1vcmFuZ2UsIDEyKTtcbiRwYWxldHRlLWRlZXAtb3JhbmdlLUE0MDA6IG50aCgkcGFsZXR0ZS1kZWVwLW9yYW5nZSwgMTMpO1xuJHBhbGV0dGUtZGVlcC1vcmFuZ2UtQTcwMDogbnRoKCRwYWxldHRlLWRlZXAtb3JhbmdlLCAxNCk7XG5cblxuLy8gQ29sb3Igb3JkZXI6IDUwLCAxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwLlxuXG4kcGFsZXR0ZS1icm93bjpcblwiMjM5LDIzNSwyMzNcIlxuXCIyMTUsMjA0LDIwMFwiXG5cIjE4OCwxNzAsMTY0XCJcblwiMTYxLDEzNiwxMjdcIlxuXCIxNDEsMTEwLDk5XCJcblwiMTIxLDg1LDcyXCJcblwiMTA5LDc2LDY1XCJcblwiOTMsNjQsNTVcIlxuXCI3OCw1Miw0NlwiXG5cIjYyLDM5LDM1XCI7XG5cbiRwYWxldHRlLWJyb3duLTUwOiBudGgoJHBhbGV0dGUtYnJvd24sIDEpO1xuJHBhbGV0dGUtYnJvd24tMTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDIpO1xuJHBhbGV0dGUtYnJvd24tMjAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDMpO1xuJHBhbGV0dGUtYnJvd24tMzAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDQpO1xuJHBhbGV0dGUtYnJvd24tNDAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDUpO1xuJHBhbGV0dGUtYnJvd24tNTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDYpO1xuJHBhbGV0dGUtYnJvd24tNjAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDcpO1xuJHBhbGV0dGUtYnJvd24tNzAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDgpO1xuJHBhbGV0dGUtYnJvd24tODAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDkpO1xuJHBhbGV0dGUtYnJvd24tOTAwOiBudGgoJHBhbGV0dGUtYnJvd24sIDEwKTtcblxuJHBhbGV0dGUtZ3JleTpcblwiMjUwLDI1MCwyNTBcIlxuXCIyNDUsMjQ1LDI0NVwiXG5cIjIzOCwyMzgsMjM4XCJcblwiMjI0LDIyNCwyMjRcIlxuXCIxODksMTg5LDE4OVwiXG5cIjE1OCwxNTgsMTU4XCJcblwiMTE3LDExNywxMTdcIlxuXCI5Nyw5Nyw5N1wiXG5cIjY2LDY2LDY2XCJcblwiMzMsMzMsMzNcIjtcblxuJHBhbGV0dGUtZ3JleS01MDogbnRoKCRwYWxldHRlLWdyZXksIDEpO1xuJHBhbGV0dGUtZ3JleS0xMDA6IG50aCgkcGFsZXR0ZS1ncmV5LCAyKTtcbiRwYWxldHRlLWdyZXktMjAwOiBudGgoJHBhbGV0dGUtZ3JleSwgMyk7XG4kcGFsZXR0ZS1ncmV5LTMwMDogbnRoKCRwYWxldHRlLWdyZXksIDQpO1xuJHBhbGV0dGUtZ3JleS00MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA1KTtcbiRwYWxldHRlLWdyZXktNTAwOiBudGgoJHBhbGV0dGUtZ3JleSwgNik7XG4kcGFsZXR0ZS1ncmV5LTYwMDogbnRoKCRwYWxldHRlLWdyZXksIDcpO1xuJHBhbGV0dGUtZ3JleS03MDA6IG50aCgkcGFsZXR0ZS1ncmV5LCA4KTtcbiRwYWxldHRlLWdyZXktODAwOiBudGgoJHBhbGV0dGUtZ3JleSwgOSk7XG4kcGFsZXR0ZS1ncmV5LTkwMDogbnRoKCRwYWxldHRlLWdyZXksIDEwKTtcblxuJHBhbGV0dGUtYmx1ZS1ncmV5OlxuXCIyMzYsMjM5LDI0MVwiXG5cIjIwNywyMTYsMjIwXCJcblwiMTc2LDE5MCwxOTdcIlxuXCIxNDQsMTY0LDE3NFwiXG5cIjEyMCwxNDQsMTU2XCJcblwiOTYsMTI1LDEzOVwiXG5cIjg0LDExMCwxMjJcIlxuXCI2OSw5MCwxMDBcIlxuXCI1NSw3MSw3OVwiXG5cIjM4LDUwLDU2XCI7XG5cbiRwYWxldHRlLWJsdWUtZ3JleS01MDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMSk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktMTAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCAyKTtcbiRwYWxldHRlLWJsdWUtZ3JleS0yMDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDMpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTMwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNCk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNDAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA1KTtcbiRwYWxldHRlLWJsdWUtZ3JleS01MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDYpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTYwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgNyk7XG4kcGFsZXR0ZS1ibHVlLWdyZXktNzAwOiBudGgoJHBhbGV0dGUtYmx1ZS1ncmV5LCA4KTtcbiRwYWxldHRlLWJsdWUtZ3JleS04MDA6IG50aCgkcGFsZXR0ZS1ibHVlLWdyZXksIDkpO1xuJHBhbGV0dGUtYmx1ZS1ncmV5LTkwMDogbnRoKCRwYWxldHRlLWJsdWUtZ3JleSwgMTApO1xuXG4kY29sb3ItYmxhY2s6IFwiMCwwLDBcIjtcbiRjb2xvci13aGl0ZTogXCIyNTUsMjU1LDI1NVwiO1xuXG5cbi8qIGNvbG9ycy5zY3NzICovXG4kc3R5bGVndWlkZS1nZW5lcmF0ZS10ZW1wbGF0ZTogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFRoZSB0d28gcG9zc2libGUgY29sb3JzIGZvciBvdmVybGF5ZWQgdGV4dC5cbiRjb2xvci1kYXJrLWNvbnRyYXN0OiAkY29sb3Itd2hpdGUgIWRlZmF1bHQ7XG4kY29sb3ItbGlnaHQtY29udHJhc3Q6ICRjb2xvci1ibGFjayAhZGVmYXVsdDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIFR5cG9ncmFwaHkgKi9cblxuQG1peGluIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaWYgJHVzZVByZWZlcnJlZCB7XG4gICAgZm9udC1mYW1pbHk6ICRwcmVmZXJyZWRfZm9udDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTQoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tZGlzcGxheS0zKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tZGlzcGxheS0yKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC41NDtcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1kaXNwbGF5LTEoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWhlYWRsaW5lKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby10aXRsZSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tc3ViaGVhZCgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuODc7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tc3ViaGVhZC0yKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogdHJ1ZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1ib2R5LTIoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiBmYWxzZSkge1xuICBAaW5jbHVkZSB0eXBvLXByZWZlcnJlZC1mb250KCR1c2VQcmVmZXJyZWQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIEBpZiAkdXNlUHJlZmVycmVkIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IEBlbHNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJvZHktMSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IGZhbHNlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuXG4gIEBpZiAkY29sb3JDb250cmFzdCB7XG4gICAgb3BhY2l0eTogMC44NztcbiAgfVxufVxuXG5AbWl4aW4gdHlwby1jYXB0aW9uKCRjb2xvckNvbnRyYXN0OiBmYWxzZSwgJHVzZVByZWZlcnJlZDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjU0O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJsb2NrcXVvdGUoJGNvbG9yQ29udHJhc3Q6IGZhbHNlLCAkdXNlUHJlZmVycmVkOiB0cnVlKSB7XG4gIEBpbmNsdWRlIHR5cG8tcHJlZmVycmVkLWZvbnQoJHVzZVByZWZlcnJlZCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTAuNWVtO1xuICAgIGNvbnRlbnQ6ICfigJwnO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJ+KAnSc7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjA1ZW07XG4gIH1cblxuICBAaWYgJGNvbG9yQ29udHJhc3Qge1xuICAgIG9wYWNpdHk6IDAuNTQ7XG4gIH1cbn1cblxuQG1peGluIHR5cG8tbWVudSgkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWJ1dHRvbigkY29sb3JDb250cmFzdDogZmFsc2UsICR1c2VQcmVmZXJyZWQ6IHRydWUpIHtcbiAgQGluY2x1ZGUgdHlwby1wcmVmZXJyZWQtZm9udCgkdXNlUHJlZmVycmVkKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG5cbiAgQGlmICRjb2xvckNvbnRyYXN0IHtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICB9XG59XG5cbkBtaXhpbiB0eXBvLWljb24oKSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIFNoYWRvd3MgKi9cblxuLy8gRm9jdXMgc2hhZG93IG1peGluLlxuQG1peGluIGZvY3VzLXNoYWRvdygpIHtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsMCwwLC4xOCksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4zNik7XG59XG5cbkBtaXhpbiBzaGFkb3ctMmRwKCkge1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTNkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS11bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpO1xufVxuQG1peGluIHNoYWRvdy00ZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LTZkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktcGVudW1icmEtb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsICRzaGFkb3ctYW1iaWVudC1zaGFkb3ctb3BhY2l0eSksXG4gICAgICAgICAgICAgIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5AbWl4aW4gc2hhZG93LThkcCgpIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWtleS1wZW51bWJyYS1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpO1xufVxuXG5AbWl4aW4gc2hhZG93LTE2ZHAoKSB7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwICA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAkc2hhZG93LWFtYmllbnQtc2hhZG93LW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwICA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1rZXktdW1icmEtb3BhY2l0eSk7XG59XG5cbkBtaXhpbiBzaGFkb3ctMjRkcCgpIHtcbiAgYm94LXNoYWRvdzogMCAgOXB4IDQ2cHggIDhweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAgICAgICAgICAgICAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgJHNoYWRvdy1hbWJpZW50LXNoYWRvdy1vcGFjaXR5KSxcbiAgICAgICAgICAgICAgMCAyNHB4IDM4cHggIDNweCByZ2JhKDAsIDAsIDAsICRzaGFkb3cta2V5LXVtYnJhLW9wYWNpdHkpO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tZmFzdC1vdXQtc2xvdy1pbigkZHVyYXRpb246MC4ycykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LXNsb3ctaW47XG59XG5cbkBtaXhpbiBtYXRlcmlhbC1hbmltYXRpb24tbGluZWFyLW91dC1zbG93LWluKCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtbGluZWFyLW91dC1zbG93LWluO1xufVxuXG5AbWl4aW4gbWF0ZXJpYWwtYW5pbWF0aW9uLWZhc3Qtb3V0LWxpbmVhci1pbigkZHVyYXRpb246MC4ycykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkYW5pbWF0aW9uLWN1cnZlLWZhc3Qtb3V0LWxpbmVhci1pbjtcbn1cblxuQG1peGluIG1hdGVyaWFsLWFuaW1hdGlvbi1kZWZhdWx0KCRkdXJhdGlvbjowLjJzKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRhbmltYXRpb24tY3VydmUtZGVmYXVsdDtcbn1cblxuLyogRGlhbG9nICovXG5cbkBtaXhpbiBkaWFsb2ctd2lkdGgoJHVuaXRzOjUpIHtcbiAgQGlmKHR5cGVfb2YoJHVuaXRzKSAhPSAnbnVtYmVyJykge1xuICAgIEBlcnJvciBcIlRoZSB1bml0IGdpdmVuIHRvIGRpYWxvZy13aWR0aCBzaG91bGQgYmUgYSBudW1iZXIuXCI7XG4gIH1cbiAgLy8gNTZkcCBpcyB0aGUgYmFzZSB1bml0IHdpZHRoIGZvciBEaWFsb2dzLlxuICAvLyBXaXRoIDUgdW5pdHMgYmVpbmcgdGhlIG51bWJlciBvZiB1bml0cyBmb3IgYSBtb2JpbGUgZGV2aWNlLlxuICAvLyBodHRwczovL2dvby5nbC9zSzJPNW9cbiAgd2lkdGg6ICR1bml0cyAqIDU2cHg7XG59XG4iLCJAaW1wb3J0IFwifm1hdGVyaWFsLWRlc2lnbi1saXRlL3NyYy9jb2xvci1kZWZpbml0aW9uc1wiO1xuXG4vKiA9PT09PT09PT09ICBJTUFHRVMgID09PT09PT09PT0gKi9cbiRpbWFnZS1wYXRoOiAnL2Fzc2V0cy9pbWFnZXMnO1xuJGNoZWNrYm94LWltYWdlLXBhdGg6ICRpbWFnZS1wYXRoO1xuXG4vKiA9PT09PT09PT09ICBDb2xvciAmIFRoZW1lcyAgPT09PT09PT09PSAqL1xuQGltcG9ydCBcIi4vcGFsZXR0ZVwiO1xuXG4kYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXk7XG4kYmFja2dyb3VuZC1jb2xvci1oZWFkZXI6ICMyMDIwMjA7XG5cbi8qID09PT09PT09PT0gIFR5cG9ncmFwaHkgID09PT09PT09PT0gKi9cbiR0ZXh0LWNvbG9yLXByaW1hcnk6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjg3KTtcblxuLyogPT09PT09PT09PSAgQ29tcG9uZW50cyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBTdGFuZGFyZCBCdXR0b25zICA9PT09PT09PT09ICovXG5cbi8vIERlZmF1bHQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yOiAkY29sb3Itd2hpdGU7XG4vLyBDb2xvcmVkIGJ1dHRvbiBjb2xvcnMuXG4kYnV0dG9uLXByaW1hcnktY29sb3ItYWx0OiAkY29sb3Itc2Vjb25kYXJ5O1xuLy8gUmlwcGxlIGNvbG9yIGZvciBjb2xvcmVkIHJhaXNlZCBidXR0b25zLlxuLy8gRGlzYWJsZWQgYnV0dG9uIGNvbG9ycy5cbiRidXR0b24tcHJpbWFyeS1jb2xvci1kaXNhYmxlZDogIzZiNmI2Yjtcbi8vYmFja2dyb3VuZC1jb2xvcjpcbiRidXR0b24tc2Vjb25kYXJ5LWNvbG9yLWRpc2FibGVkOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4zKTtcbi8vY29sb3I6XG4vLyBGQUIgY29sb3JzIGFuZCBzaXplcy5cbiRidXR0b24tZmFiLWNvbG9yLWFsdDogJGNvbG9yLXNlY29uZGFyeTtcblxuJGJ1dHRvbi1mYWItdGV4dC1jb2xvci1hbHQ6ICRjb2xvci13aGl0ZTtcbiRidXR0b24tZmFiLWhvdmVyLWNvbG9yLWFsdDogI2ZmNGM0YztcbiRidXR0b24tZmFiLWFjdGl2ZS1jb2xvci1hbHQ6ICNmMjNkM2Q7XG4vLyBJY29uIGJ1dHRvbiBjb2xvcnMgYW5kIHNpemVzLlxuXG4vKiA9PT09PT09PT09ICBJY29uIFRvZ2dsZXMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgUmFkaW8gQnV0dG9ucyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBSaXBwbGUgZWZmZWN0ICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIExheW91dCAgPT09PT09PT09PSAqL1xuXG4vLyBEcmF3ZXJcbiRsYXlvdXQtZHJhd2VyLXdpZHRoOiAyMzZweDtcbiRsYXlvdXQtZHJhd2VyLWJnLWNvbG9yOiAjMjAyMDIwO1xuJGxheW91dC1uYXYtY29sb3I6ICMyMDIwMjA7XG4kbGF5b3V0LWRyYXdlci1uYXZpZ2F0aW9uLWxpbmstYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjI1KTtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGxheW91dC1uYXYtY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjI1KTtcbiRsYXlvdXQtZHJhd2VyLW5hdmlnYXRpb24tbGluay1pY29uLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41Nik7XG4kbGF5b3V0LWRyYXdlci1oZWFkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcbiRsYXlvdXQtZHJhd2VyLWhlYWRlci1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuODUpO1xuXG4vLyBSaWdodCBTaWRlYmFyXG4kcmlnaHQtc2lkZWJhci13aWR0aDogMjMwcHg7XG5cbi8vIEhlYWRlclxuJGxheW91dC1oZWFkZXItdGV4dC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4kbGF5b3V0LWhlYWRlci1iZy1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItaGVhZGVyO1xuJGxheW91dC1oZWFkZXItbmFtZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kbGF5b3V0LWhlYWRlci1pY29uLWhvdmVyLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4zKTtcblxuLy8gVGFic1xuXG4vKiA9PT09PT09PT09ICBDb250ZW50IFRhYnMgID09PT09PT09PT0gKi9cblxuLyogPT09PT09PT09PSAgQ2hlY2tib3hlcyAgPT09PT09PT09PSAqL1xuJGNoZWNrYm94LW9mZi1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNoZWNrYm94LWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiA9PT09PT09PT09ICBTd2l0Y2hlcyAgPT09PT09PT09PSAqL1xuXG4vKiA9PT09PT09PT09ICBTcGlubmVyICA9PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT0gIFRleHQgZmllbGRzICA9PT09PT09PT09ICovXG4kdG9kby1pbnB1dC10ZXh0LWxhYmVsLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4yKTtcblxuJGlucHV0LXRleHQtaGlnaGxpZ2h0LWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiRpbnB1dC10ZXh0LWJvdHRvbS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiRpbnB1dC10ZXh0LWRpc2FibGVkLXRleHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblxuLy9wbGFjZWhvbGRlciBjb2xvclxuJHRvZG8taW5wdXQtdGV4dC1oaWdobGlnaHQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjcpO1xuXG4vL2JvdHRvbSBsaW5lIGNvbG9yXG5cbi8qID09PT09PT09PT0gIENhcmQgID09PT09PT09PT0gKi9cbiRjYXJkLWJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuJGNhcmQtdGV4dC1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuOCk7XG4kY2FyZC1zdXBwb3J0aW5nLXRleHQtdGV4dC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtc3VidGl0bGUtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjUpO1xuJGNhcmQtYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC4wNSk7XG5cbiRjYXJkLXRpdGxlLWJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kYXJrLWdyYXk7XG4kY2FyZC1hY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjA1KTtcbiRjYXJkLXRleHQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRjYXJkLWxpbmstY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuJGNhcmQtaHJlZi1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG5cbiRjYXJkLXRpdGxlLWltZy1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGNhcmQtZGVnLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC45KTtcblxuLyogPT09PT09PT09PSAgU2xpZGVycyA9PT09PT09PT09ICovXG5cbiRyYW5nZS1iZy1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNDUpO1xuJHJhbmdlLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiA9PT09PT09PT09IFByb2dyZXNzID09PT09PT09PT0gKi9cbiRwcm9ncmVzcy1tYWluLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuJHByb2dyZXNzLXNlY29uZGFyeS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNCk7XG5cbi8qID09PT09PT09PT0gIExpc3QgPT09PT09PT09PSAqL1xuJGxpc3QtbWFpbi10ZXh0LXRleHQtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRsaXN0LXN1cHBvcnRpbmctdGV4dC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41NCk7XG4kbGlzdC1pY29uLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRsaXN0LWljb24taG92ZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuXG4kbGlzdC1ib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjEpO1xuJGxpc3QtaXRlbS1ib3JkZXI6IDFweCBzb2xpZCAkbGlzdC1ib3JkZXItY29sb3I7XG5cbi8qID09PT09PT09PT0gIEl0ZW0gPT09PT09PT09PSAqL1xuXG4vLyBEZWZhdWx0IEl0ZW0gQ29sb3JzXG4kZGVmYXVsdC1pdGVtLWZvY3VzLWJnLWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC4xNSk7XG4kZGVmYXVsdC1pdGVtLWFjdGl2ZS1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMTUpO1xuJGRlZmF1bHQtaXRlbS1ob3Zlci1iZy1jb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMik7XG5cbi8vIERpc2FibGVkIEJ1dHRvbiBDb2xvcnNcblxuLyogPT09PT09PT09PSAgRHJvcGRvd24gbWVudSA9PT09PT09PT09ICovXG4kZGVmYXVsdC1kcm9wZG93bi1iZy1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG5cbiRkcm9wZG93bi1tZW51LXdpZHRoOiAzMTBweDtcbiRkcm9wZG93bi1tZW51LWhlYWRlci1mb250LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC44KTtcbiRzZXR0aW5nc19kcm9wZG93bl93aWR0aDogMTM1cHg7XG4kYWNjb3VudC1kcm9wZG93bi1hdmF0YXItc2l6ZTogNDhweDtcbiRtZXNzYWdlcy1kcm9wZG93bi1sYWJlbC10ZXh0LWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcblxuLyogPT09PT09PT09PSAgVG9vbHRpcHMgID09PT09PT09PT0gKi9cbiR0b29sdGlwLWJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG5cbi8qID09PT09PT09PT0gIEZvb3RlciAgPT09PT09PT09PSAqL1xuXG4vKiBURVhURklFTEQgKi9cblxuLyogU1dJVENIICovXG4kc3dpdGNoLW9mZi10aHVtYi1jb2xvcjogJHBhbGV0dGUtZ3JleS01MDA7XG5cbi8qIFNQSU5ORVIgKi9cblxuLy8gQW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwLlxuLy8gVGltZSBpdCB0YWtlcyB0byBleHBhbmQgYW5kIGNvbnRyYWN0IGFyYy5cbi8vIEhvdyBtdWNoIHRoZSBzdGFydCBsb2NhdGlvbiBvZiB0aGUgYXJjIHNob3VsZCByb3RhdGUgZWFjaCB0aW1lLlxuXG4vKiBSQURJTyAqL1xuJHJhZGlvLW9mZi1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuOCk7XG4kcmFkaW8tY29sb3I6IHJnYmEoJGNvbG9yLXByaW1hcnksIDAuOCk7XG5cbi8qIE1FTlUgKi9cblxuLyogTElTVCAqL1xuJGxpc3QtYm9yZGVyOiAwO1xuJGxpc3QtYm90dG9tLXBhZGRpbmc6IDE2cHg7XG4kbGlzdC1hdmF0YXItdGV4dC1sZWZ0LWRpc3RhbmNlOiA2NHB4O1xuJGxpc3QtaWNvbi10ZXh0LWxlZnQtZGlzdGFuY2U6IDU2cHg7XG4kbGlzdC1hdmF0YXItc2l6ZTogMzJweDtcbiRsaXN0LXR3by1saW5lLWhlaWdodDogNjRweDtcblxuLyogTEFZT1VUICovXG4kbGF5b3V0LWRyYXdlci1uYXJyb3c6IDIzNnB4O1xuJGxheW91dC1oZWFkZXItbW9iaWxlLWluZGVudDogOHB4O1xuJGxheW91dC1oZWFkZXItZGVza3RvcC1pbmRlbnQ6IDIwcHg7XG4kbGF5b3V0LXNjcmVlbi1zaXplLXRocmVzaG9sZDogMTQ0MHB4O1xuXG4vKiBJQ09OICovXG5cbi8qIElDT04gVE9HR0xFICovXG5cbi8qIEZPT1RFUiAqL1xuXG4vKiBtZWdhLWZvb3RlciAqL1xuXG4vKiBtaW5pLWZvb3RlciAqL1xuXG4vKiBDSEVDS0JPWCAqL1xuJGNoZWNrYm94LWJ1dHRvbi1zaXplOiAxOHB4O1xuJGNoZWNrYm94LWxhYmVsLWhlaWdodDogMjRweDtcbiRjaGVja2JveC1wYWRkaW5nOiA4cHg7XG5cbi8qIENBUkQgKi9cblxuLyogQ2FyZCBkaW1lbnNpb25zICovXG4kY2FyZC1oZWlnaHQ6IGF1dG87XG4kY2FyZC13aWR0aDogYXV0bztcbiRjYXJkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcbiRjYXJkLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IDQwMDtcbiRjYXJkLXZlcnRpY2FsLXBhZGRpbmc6IDIwcHg7XG5cbi8qIENvdmVyIGltYWdlICovXG5cbi8qIEJVVFRPTiAqL1xuJGJ1dHRvbi1mb250LXdlaWd0aDogNDAwO1xuXG4vKiBBTklNQVRJT04gKi9cblxuLyogUFJPR1JFU1MgKi9cblxuLyogQkFER0UgKi9cbiRiYWRnZS1iYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcbiRiYWRnZS1jb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4vKiBTSEFET1dTICovXG5cbi8qIEdSSUQgKi9cbiRncmlkLXRhYmxldC1jb2x1bW5zOiAxMjtcbiRncmlkLXBob25lLWNvbHVtbnM6IDQ7XG5cbiRncmlkLWRlc2t0b3AtZ3V0dGVyOiAzMnB4O1xuJGdyaWQtZGVza3RvcC1tYXJnaW46IDE2cHg7XG5cbiRncmlkLXRhYmxldC1icmVha3BvaW50OiAxMTUycHg7XG4kZ3JpZC1kZXNrdG9wLWJyZWFrcG9pbnQ6IDE5MjBweDtcbiRwaG9uZS1icmVha3BvaW50OiA4MDBweDtcblxuLyogREFUQSBUQUJMRSAqL1xuJGRhdGEtdGFibGUtZm9udC1zaXplOiAxNnB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogMTNweDtcblxuJGRhdGEtdGFibGUtY29sb3I6ICRjb2xvci13aGl0ZTtcbiRkYXRhLXRhYmxlLWhlYWRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xuJGRhdGEtdGFibGUtZGl2aWRlci1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuMDUpO1xuJGRhdGEtdGFibGUtaG92ZXItY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjIpO1xuJGRhdGEtdGFibGUtc2VsZWN0aW9uLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcblxuJGRhdGEtdGFibGUtY29sdW1uLXNwYWNpbmc6IDE2cHg7XG5cbi8qIFRPT0xUSVAgKi9cbiR0b29sdGlwLWZvbnQtc2l6ZTogMTJweDtcbiR0YWJsZS10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6IDVweDtcbiR0YWJsZS10b29sdGlwLWhvcml6b250YWwtcGFkZGluZzogOHB4O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogV0lER0VUUyAmIENPTVBPTkVOVFMgKi9cblxuLyogVHJlbmRpbmcgKi9cbiR0cmVuZGluZy1hcnJvdy1zaXplOiA0OHB4O1xuJHRyZW5kaW5nLWFycm93LXVwLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiR0cmVuZGluZy1hcnJvdy1kb3duLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuXG4vKiBsYWJlbCAqL1xuJGxhYmVsLWhlaWdodDogMTJweDtcbiRsYWJlbC1wYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XG5cbi8qIGNoYXJ0cyAqL1xuJHBpZS1jaGFydC1oZWlnaHQ6IDIyOHB4O1xuXG4kbGluZS1jaGFydC1oZWlnaHQ6IDI4MHB4O1xuJGxpbmUtY2hhcnQtd2lkdGg6IDEwMCU7XG4kbGluZS1jaGFydC1heGlzLWxhYmVsLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgMC41KTtcbiRsaW5lLWNoYXJ0LWd1aWRlbGluZS1jb2xvcjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNSk7XG4kbGluZS1jaGFydC1ndWlkZWxpbmUtd2lkdGg6IDAuNXB4O1xuXG4kbGVnZW5kLW1hcmstc2l6ZTogOHB4O1xuJGxlZ2VuZC10ZXh0LWluZGVudDogJGxlZ2VuZC1tYXJrLXNpemUgKyAxNjtcblxuLyogZW1wbG95ZXIgZm9ybSAqL1xuJGVtcGxveWVyLWZvcm0td2lkdGg6IDY3MHB4O1xuJGVtcGxveWVyLWZvcm0tY29sb3ItYnJpZ2h0ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4kZW1wbG95ZXItZm9ybS1jb2xvci1kYXJrZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiRlbXBsb3llci1mb3JtLWhvcml6b250YWwtcGFkZGluZzogMTVweDtcblxuJHdlYXRoZXItc2hhZG93LWNvbG9yOiByZ2JhKCRjb2xvci1ibGFjaywgMC40KTtcbiR3ZWF0aGVyLXNoYWRvdy00cHg6IDRweCA0cHggNHB4ICR3ZWF0aGVyLXNoYWRvdy1jb2xvcjtcblxuLyogcm93ICovXG4kcm93LWNvbC1wYWRkaW5nOiAzMHB4O1xuXG4vKiBzY3JvbGwgKi9cbiRzY3JvbGxiYXItdGh1bWI6ICRjb2xvci1zbW9vdGgtZ3JheTtcbiRzY3JvbGxiYXItdHJhY2s6ICRjb2xvci1zbW9rZTtcbiIsIiRjb2xvci1kYXJrLWdyYXk6ICMzMzM7XG4kY29sb3ItZ3JheTogIzQ0NDtcbiRjb2xvci10YWJsZS1ib3JkZXI6ICM2MDYwNjA7XG4kY29sb3Itc21vb3RoLWdyYXk6ICM5OTk7XG4kY29sb3Itc21va2U6ICM2NjY7XG4kY29sb3ItcmVkOiAjZjQ0MzM2O1xuJGNvbG9yLWxpZ2h0LWJsdWU6ICMwM2E5ZjQ7XG4kY29sb3Itb3JhbmdlOiAjZmZjMTA3O1xuJGNvbG9yLWFtYmVyOiAjZmY5ODAwO1xuJGNvbG9yLXRlYWw6ICMwMGJjZDQ7XG4kY29sb3ItcHVycGxlOiAjNzcyNmQzO1xuJGNvbG9yLWdyZWVuOiAjMDBkNDVhO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuJGNvbG9yLWFsdG86ICNkZGQ7XG4kY29sb3Itc2lsdmVyLWNoYWxpY2U6ICNhYWE7XG4kY29sb3ItY2hhbWJyYXk6ICMzYjU5OTg7XG4kY29sb3ItY2VsdXJlYW46ICMwMGFiZjE7XG4kY29sb3ItbG9jaG1hcmE6ICMwMDgzYmU7XG4kY29sb3ItZnJvbHk6ICNmMjY3OTg7XG4kY29sb3ItZG9kZ2VyLWJsdWU6ICM0MTc2ZmI7XG4kY29sb3ItZG92ZS1ncmF5OiAjNjc2NzY3O1xuJGNvbG9yLXByaW1hcnk6IHJnYigwLCAxODgsIDIxMik7XG4kY29sb3Itc2Vjb25kYXJ5OiByZ2IoMjQ0LCA2NywgNTQpO1xuJGNvbG9yLWJhYnktYmx1ZTogcmdiKDExNiwgMTk5LCAyMDkpO1xuJGNvbG9yLWNlcnVsZWFuOiByZ2IoODAsIDE1MCwgMjE1KTtcbiRjb2xvci1taW50OiByZ2IoOTYsIDE5NiwgMTUwKTtcbiRjb2xvci1ncmV5LTUwMDogdW5xdW90ZShcInJnYigjeyRwYWxldHRlLWdyZXktNTAwfSlcIik7XG5cbi50ZXh0LWNvbG9yLS1zbW9rZSB7XG4gIGNvbG9yOiAkY29sb3Itc21va2U7XG59XG5cbi5jb2xvci0tZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tZGFyay1ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstZ3JheTtcbn1cblxuLmNvbG9yLS1zbW9vdGgtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zbW9vdGgtZ3JheSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb2xvci0tc21vb3RoLWdyYXkge1xuICBjb2xvcjogJGNvbG9yLXNtb290aC1ncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tcmVkIHtcbiAgY29sb3I6ICRjb2xvci1yZWQgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1vcmFuZ2Uge1xuICBjb2xvcjogJGNvbG9yLW9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItLWFtYmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFtYmVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1hbWJlciB7XG4gIGNvbG9yOiAkY29sb3ItYW1iZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbiAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tZ3JlZW4ge1xuICBjb2xvcjogJGNvbG9yLWdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tbGlnaHQtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci10ZXh0LS1saWdodC1ibHVlIHtcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci0tcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItdGV4dC0tcHVycGxlIHtcbiAgY29sb3I6ICRjb2xvci1wdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLS10ZWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlYWwgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXRleHQtLXRlYWwge1xuICBjb2xvcjogJGNvbG9yLXRlYWwgIWltcG9ydGFudDtcbn1cbiIsIkBpbXBvcnQgJ350aGVtZS9oZWxwZXJzJztcblxuOmhvc3Qge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblxuICBwIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbiAgdWwsXG4gIG9sLFxuICBkZCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tZGwtY2FyZCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICRjYXJkLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cblxuICAgICAgJjpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAmOm50aC1vZi10eXBlKDUpIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBkaXYge1xuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1kbC1ncmlkICsgLm1kbC1ncmlkIC5tZGwtY2VsbCB7XG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgPiB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCA+IG9sIGxpIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dC1jb2xvci0tZ3JheSArIGg1IHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICB9XG5cbiAgZGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgJiArIGR0IHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgaDEge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/ui/typography/typography.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.ts ***!
  \*************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TypographyComponent = /** @class */ (function (_super) {
    __extends(TypographyComponent, _super);
    function TypographyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiTypography = true;
        _this.mdlGridNoSpacing = true;
        return _this;
    }
    TypographyComponent.propDecorators = {
        mdlGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid',] }],
        uiTypography: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ui-typography',] }],
        mdlGridNoSpacing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.mdl-grid--no-spacing',] }]
    };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __importDefault(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/typography/typography.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./typography.component.scss */ "./src/app/pages/ui/typography/typography.component.scss")).default]
        })
    ], TypographyComponent);
    return TypographyComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/ui-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ui/ui-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UIRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRoutingModule", function() { return UIRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var app_layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layouts/common-layout */ "./src/app/layouts/common-layout/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/app/pages/ui/buttons/index.ts");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards */ "./src/app/pages/ui/cards/index.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors */ "./src/app/pages/ui/colors/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms */ "./src/app/pages/ui/forms/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/app/pages/ui/icons/index.ts");
/* harmony import */ var _right_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-sidebar */ "./src/app/pages/ui/right-sidebar/index.ts");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables */ "./src/app/pages/ui/tables/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typography */ "./src/app/pages/ui/typography/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UIRoutingModule = /** @class */ (function () {
    function UIRoutingModule() {
    }
    UIRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: app_layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"],
                        children: [
                            { path: 'buttons', component: _buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"], pathMatch: 'full' },
                            { path: 'cards', component: _cards__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"], pathMatch: 'full' },
                            { path: 'colors', component: _colors__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"], pathMatch: 'full' },
                            { path: 'forms', component: _forms__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], pathMatch: 'full' },
                            { path: 'icons', component: _icons__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"], pathMatch: 'full' },
                            { path: 'typography', component: _typography__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"], pathMatch: 'full' },
                            { path: 'tables', component: _tables__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"], pathMatch: 'full' },
                            { path: 'right-sidebar', component: _right_sidebar__WEBPACK_IMPORTED_MODULE_9__["RightSidebarComponent"], pathMatch: 'full' },
                        ],
                    },
                ]),
                app_layouts__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UIRoutingModule);
    return UIRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ui/ui.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/ui/ui.module.ts ***!
  \***************************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/__ivy_ngcc__/fesm2015/material-angular-select.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/app/pages/ui/buttons/index.ts");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards */ "./src/app/pages/ui/cards/index.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors */ "./src/app/pages/ui/colors/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms */ "./src/app/pages/ui/forms/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/app/pages/ui/icons/index.ts");
/* harmony import */ var _right_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-sidebar */ "./src/app/pages/ui/right-sidebar/index.ts");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables */ "./src/app/pages/ui/tables/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typography */ "./src/app/pages/ui/typography/index.ts");
/* harmony import */ var _ui_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-routing.module */ "./src/app/pages/ui/ui-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ui_routing_module__WEBPACK_IMPORTED_MODULE_12__["UIRoutingModule"],
                theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                material_angular_select__WEBPACK_IMPORTED_MODULE_2__["MaterialAngularSelectModule"],
                _right_sidebar__WEBPACK_IMPORTED_MODULE_9__["RightSidebarModule"],
            ],
            declarations: [
                _buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
                _cards__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                _colors__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"],
                _forms__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
                _icons__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"],
                _typography__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"],
                _tables__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"],
            ],
            providers: [
                _tables__WEBPACK_IMPORTED_MODULE_10__["TablesService"],
            ],
        })
    ], UIModule);
    return UIModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ui-ui-module.js.map