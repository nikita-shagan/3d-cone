# Cone in a 3D view
Link: https://cone.shagan.ru/

### The application provides the following functionality:

1. This is a single page application (SPA), both with front-end and back-end.
2. The user enters parameters (cone height, radius and number of segments on a circle)
via client.
3. The client transfers the data to the server.
4. The server computes triangulation of the cone (i.e. a set of triangles to be used for
display) and passes it back to the client.
5. The client displays computed triangulation in a 3D view using WebGL.

### Technologies:

*   For back-end used Node.js and Express.js
*   For front-end used React.js and Three.js


### Local setup:
##### In the backend directory run:
```
npm install
npm run dev
```
App will be listening on port 3001

##### In the frontend directory run:
```
npm install
npm start
```
You can now view frontend in the browser.
