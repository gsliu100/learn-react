// jsx style component
var CommentBox = React.createClass({
  render:function() {
    return (
      <div className="commentBox">
        Hello, world! my name is {this.props.name}.
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox name="liuguangsheng"></CommentBox>,
  document.getElementById('myContainer')
);