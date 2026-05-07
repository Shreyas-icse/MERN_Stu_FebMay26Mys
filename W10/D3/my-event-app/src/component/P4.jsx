//Synthetic events vs Native DOM events
//Synthetic event:
//A wrapper created by React around the browser's native event
//Gives a consistent API across browsers
//Works similarly to native DOM events
//Still allows access to the original browser events via event.nativeEvent

//Why does react use it?
//To make Event handling behave consistently
//To simplyfy cross-browser differences
//To integrate smoothly with React's event system

//How SyntheticEvents works:
//Component renders: A button appears on screen
//handleClick is defined but it is not executed
//User clicks the button :
 //Browser creates a native click event
 //Reacts wraps that native event in a synthaticEvent
 //React passes the synthatic event to handleClick
 
 //Event refers to the SynthaticEvent
 //event.target gives us the HTML elements

