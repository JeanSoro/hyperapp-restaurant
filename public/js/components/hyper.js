webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _HeroPic = __webpack_require__(7);

var _HeroPic2 = _interopRequireDefault(_HeroPic);

var _OurStory = __webpack_require__(9);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _Menu = __webpack_require__(8);

var _Menu2 = _interopRequireDefault(_Menu);

var _RandomQuote = __webpack_require__(10);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(11);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Contact = __webpack_require__(4);

var _Contact2 = _interopRequireDefault(_Contact);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_HeroPic2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Menu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Contact2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contact;

var _hyperapp = __webpack_require__(0);

function Contact(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "contact-us", className: "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Always Here To Help"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "box" },
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "city" },
              "Montreal, Ca"
            ),
            (0, _hyperapp.h)(
              "h6",
              { className: "address" },
              "7400 Sherbrooke Ouest",
              (0, _hyperapp.h)("br", null),
              "Montreal, CA H4B 1R8"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                {
                  href: "mailto:info@primesteak.com" },
                "info@primesteak.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Call directly:"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "directory" },
              "514-566-7788"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday:",
              (0, _hyperapp.h)("br", null),
              "Bookings from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily:",
              (0, _hyperapp.h)("br", null),
              "Bookings from 6pm - 10:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "nav",
        { className: "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews & Media"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { className: "social-media-logos" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://facebook.com", target: "_blank" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://twitter.com", target: "_blank" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://instagram.com", target: "_blank" },
            (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://google.com", target: "_blank" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-g" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "copyright" },
        "\xA9 2018 Copyright Jean Soro"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platters"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImage;

var _hyperapp = __webpack_require__(0);

function TopImage(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "top-img" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "Prime Beef",
          (0, _hyperapp.h)("br", null),
          "Restaurant"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { className: "container" },
          (0, _hyperapp.h)(
            "div",
            { className: "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(718) - 219 - 8652"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri: "
            ),
            " 11am - 9pm ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Sat - Sun: "
            ),
            " 11:30am - 12pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _hyperapp = __webpack_require__(0);

function Menu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "special-menu", className: "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { className: "box" },
            (0, _hyperapp.h)(
              "div",
              { className: "box-image" },
              (0, _hyperapp.h)(
                "div",
                { className: "price-circle" },
                "$50"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              "Super BBQ Grill No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              "Fried eggs, Steak, Bacon, Baked potato or French fries, Side of Vegetables"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { className: "box" },
            (0, _hyperapp.h)(
              "div",
              { className: "box-image" },
              (0, _hyperapp.h)(
                "div",
                { className: "price-circle" },
                "$50"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              "Super BBQ Grill No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              "Fried eggs, Steak, Bacon, Baked potato or French fries, Side of Vegetables"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { className: "box" },
            (0, _hyperapp.h)(
              "div",
              { className: "box-image" },
              (0, _hyperapp.h)(
                "div",
                { className: "price-circle" },
                "$50"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              "Super BBQ Grill No Smoke"
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              "Fried eggs, Steak, Bacon, Baked potato or French fries, Side of Vegetables"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { className: "link", href: "#" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "our-story" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { className: "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Hashtag church-key enamel pin farm-to-table mumblecore. Fixie tilde pug, meditation prism hammock polaroid church-key brooklyn salvia tofu chambray occupy marfa direct trade. Quinoa four loko brunch meggings keytar, blog poke roof party hammock williamsburg. Bitters biodiesel 8-bit cloud bread vaporware banh mi gochujang cliche roof party lo-fi fingerstache tousled coloring book whatever."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            "Michael Ballack - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Master Chef/Owner"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", className: "reservation-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)("div", { className: "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'quote-section', style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .2)0, #000 100%), url("../img/random-quote.jpeg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"good painting is like good cooking, it can be tasted, but not explained"'
      ),
      (0, _hyperapp.h)(
        'span',
        { className: 'author' },
        ' -Lou Ferrigno -'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "reviews" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { className: "chef-img" },
            (0, _hyperapp.h)("img", { src: "../img/chef-img.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-4" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "title" },
            "REVIEWS"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "What they say about us"
          ),
          (0, _hyperapp.h)(
            "h4",
            null,
            "\"best restaurant in ottawa!\""
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Hashtag church-key enamel pin farm-to-table mumblecore. Fixie tilde pug, meditation prism hammock polaroid church-key brooklyn salvia tofu chambray occupy marfa direct trade."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Fredo Andanoni"
            ),
            " - ",
            (0, _hyperapp.h)(
              "em",
              null,
              "Winner of Iron Chefs"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "arrows" },
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" }),
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right ready" })
          )
        )
      )
    )
  );
}

// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
  // mixins: [devtools()]
});
// import devtools from 'hyperapp-redux-devtools'

/***/ })
],[12]);