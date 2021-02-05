class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event){
      this.setState({ 
        input: event.target.value,
        // messages: this.state.messages 
      });
    }
  
    submitMessage(){
      this.setState({
        input: '',
        messages : [...this.state.messages, this.state.input]
      });
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
            <input value={this.state.input} onChange={this.handleChange.bind(this)} />
            <button onClick={this.submitMessage.bind(this)}>Add message</button>
            <ul>
               {
                 this.state.messages.map((msg, i)=>{
                  return <li key={i}>{msg}</li>
                  })}
            </ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };