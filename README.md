#Bend Reference App

 * Installing MongoDB Enterprise v3.2.1 on Macbook Pro
 * Node v5.5.0 installed
 * Installing Express v4.13.4 (latest stable using npm install express)
 * Need package.json (use npm init)

NOTE: Node supports hundreds of web requests simultaneously because it's written in C and uses non-blocking socket connections. Review the details on Spring-Boot. Do compare the scaling aspect and performance comparisons.

Google Chrome's V8 Javascript engine now converts javascript to native machine code BEFORE execution. Ryan Dahl was testing C code and non-blocking sockets to take some strain from serving huge numbers of web requests. He wrapped the V8 engine with his tested C code and Node.js was born. We can now develop and manage HTTP requests using javascript. And, we can do this without the hosting and administration of a static web server such as Apache or IIS.

My first concern is security. And, I've read that the discussions to look for revolve around the function eval().

Ryan Dahl did go on to improve the Node core. It's not just a javascript parser/compiler but a platform capable of running system and network javascript applications. These applications are simple to code, highly efficient, and easily scalable.

NOTE: Research the differences between Apache (blocking web server) and NGINX (non-blocking event loop). Lookup design pattern called "closure" implemented by javascript.

INSIGHT: Using connect from Sencha Labs I see "mounting" the middleware with the path in the app.use() method is leading to REST API development that's very simple and powerful. An example of the method is like ... app.use('/hello', helloWorld). I like the use of callback functions. Very slick!
