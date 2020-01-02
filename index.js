'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuoteBox = function (_React$Component) {
  _inherits(QuoteBox, _React$Component);

  function QuoteBox(props) {
    _classCallCheck(this, QuoteBox);

    var _this = _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).call(this, props));

    _this.handleClick = function () {
      var randomNumber = Math.floor(Math.random() * _this.state.allQuotes.length);
      var randomQuote = _this.state.allQuotes[randomNumber];
      _this.setState({ presentQuote: randomQuote });
    };

    _this.state = {
      allQuotes: [],
      presentQuote: {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
      }
    };
    return _this;
  }

  _createClass(QuoteBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc").then(function (response) {
        return response.json();
      }).then(function (response) {
        var quotes = response.quotes;

        _this2.setState({ allQuotes: quotes });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" + this.state.presentQuote.quote + "." + this.state.presentQuote.author;
      return React.createElement(
        "div",
        { id: "quote-box" },
        React.createElement(
          "span",
          { id: "text", style: { fontSize: "1.5em" } },
          this.state.presentQuote.quote
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "span",
          { id: "Author", style: { fontStyle: "italic" } },
          "- ",
          this.state.presentQuote.author
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "a",
          { id: "tweet-quote", href: href, target: "_blank" },
          React.createElement("i", { style: { fontSize: "1.5em" }, className: "fa fa-twitter" })
        ),
        React.createElement(
          "button",
          {
            style: { fontSize: "1.5em" },
            id: "new-quote",
            onClick: this.handleClick
          },
          "New Quote"
        )
      );
    }
  }]);

  return QuoteBox;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {};
    return _this3;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(QuoteBox, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));