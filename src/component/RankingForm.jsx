import React from 'react'

class RankingForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        enteredText: '',
        isRankingSubmitted: false,
        submittedRanking: null
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          enteredText: event.target.value
      });
    }
  
    handleSubmit(event) {
      const { parsedRanking, error } = this.validate(this.state.enteredText);

      if (!error) {
          // This is where I'd initiate an AJAX POST request to submit the parsed user ranking to the server.
          this.setState({ isRankingSubmitted: true, submittedRanking: parsedRanking });
      } else {
          alert(`There was an error: ${error}`);
      }
      event.preventDefault();
    }

    validate(enteredText) {
        const ranking = enteredText.trim().split(',');
        const parsedRanking = ranking.map(element => parseInt(element));
        const ARTICLES = [1, 2, 3, 4, 5] // Assumption - we retrieved this value earlier from the server. Could be bound in from ArticleDataLoader.
        let error;

        if (parsedRanking.length !== ARTICLES.length || parsedRanking.some(isNaN)) {
            error = `Please ensure you've ranked all articles in the expected format, e.g. 5, 4, 2, 3, 1`;
        } else if (!ARTICLES.every(element => parsedRanking.includes(element))) {
            error = `Please ensure that each article is ranked only once.`;
        }
        return { parsedRanking, error };
    }
  
    render() {
      return this.state.isRankingSubmitted ? `Thanks for submitting your ranking of: ${this.state.submittedRanking}` : (
        <div className="rankingform">
            <b>You have read all of today's articles</b>
            <form onSubmit={this.handleSubmit}>
            <label>
                Rank articles below from favourite to least favourite, e.g. 5, 4, 2, 3, 1 <br></br>
                <input type="text" title="Enter comma-separated integer values" value={this.state.enteredText} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit Ranking" />
            </form>
        </div>
      );
    }
  }

export default RankingForm;
