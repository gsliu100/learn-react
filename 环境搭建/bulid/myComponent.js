// jsx style component
var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      "Hello, world! my name is ",
      this.props.name,
      "."
    );
  }
});


ReactDOM.render(React.createElement(CommentBox, { name: "liuguangsheng" }), document.getElementById('myContainer'));
