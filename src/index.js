'use strict';


class QuoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allQuotes: [],
      presentQuote: {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
      }
    }
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc")
    .then(response => response.json())
    .then(response => {
      const {quotes} = response
      this.setState({ allQuotes: quotes })
    })

  }
  
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.allQuotes.length)
    const randomQuote = this.state.allQuotes[randomNumber]
    this.setState({ presentQuote: randomQuote })
  }
  
  

  render() {
    let href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text${this.state.presentQuote.quote}.${this.state.presentQuote.author}`
    return (
      <div id="quote-box">
        <span id="text" style={{fontSize: "1.5em"}}>
          {this.state.presentQuote.quote}
        </span>
        <br />
        <br />
        <span id="Author" style={{fontStyle: "italic"}}>
          - {this.state.presentQuote.author}
        </span>
        <br />
        <br />
        <a id="tweet-quote" href={href} target="_blank">
          <i style={{fontSize: "1.5em"}} className="fa fa-twitter"></i>
        </a>
        <button 
          style={{fontSize: "1.5em"}}
          id="new-quote" 
          onClick={this.handleClick}
        >
          New Quote
        </button>
      </div>
    )
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    

    return (
      <React.Fragment>
        <QuoteBox />
      </React.Fragment>
    );
  }
}

ReactDOM.render( <App />, document.querySelector("#root"))