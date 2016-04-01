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

// string style component
var sComponent = React.createElement(
  "h3",
  { className: "commentBox" },
  "Hello react sComponent "
);
// 上边两种创建组件的方式在react内部都是通过createElement方法穿件的
var sb = React.createElement('h3', { className: 'commentBox', name: 'sb' }, 'Hello react sb');

var myCommnentBox = ReactDOM.render(React.createElement(CommentBox, { name: "liuguangsheng" }), document.getElementById('myContainer'));

ReactDOM.render(sComponent, document.getElementById('myContainer1'));

ReactDOM.render(sb, document.getElementById('myContainer2'));

console.log(myCommnentBox.setProps({ name: 'setliu' }));