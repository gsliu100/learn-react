###在React.createClass(options)中render返回的是什么
React中处处都是组件，准确的说是UI组件。在我们的前端View中，数据的变化（在React中也就是组件state的变化）会导致组件的重新渲染。该方法返回的是组件在没有填充数据时的轮廓，可以理解为对组件外观的一个描述。


###React.createElement()返回的是什么
JSX在React中只是一个语法糖，其内部都是通过该方法来创建React元素的。该方法的第一个参数接受一个HTML Tag或者React Component，返回一个具有确定状态的React Element（可以将其理解为将组件填充状态后一段确定的HTML片段），最后通过ReactDOM.render()方法插入到DOM中。


###ReactDOM.render()返回的是什么
该方法的第一个参数是一个确定的ReactElement或者一个React Component，如果是React Component，内部还是会将其通过React.createElement()封装成一个确定的状态的React Element.该方法返回一个React Component实例，可以通过改变该实例的状态让组件重新渲染。


###stateful Component 与 stateless Component
React.createElement()返回一个确定元素，他是不具有状态的。ReactDOM.render()返回一个React Component实例，可以通过该实例提供的借口改变组件的state，让其重新渲染。


