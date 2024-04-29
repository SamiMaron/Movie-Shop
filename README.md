This project aims to build a modern e-commerce website allowing customers to browse movies, add them to a cart, and complete a purchase. It's developed using the Spring framework for the backend and React for the frontend. The website leverages the TMDB API to browse products.


Frontend
Search Page: Allows users to search for movies/shows using a keyword or by discovering movies with genre and release year as attributes.
Search History: Records every search to the TMDB API and allows users to re-perform previous searches in a single click.
Shopping Cart: Users can add movies to a cart and view its contents, including the total cost.
Checkout Page: Users can complete their purchase by providing essential details.


Backend
REST API: Developed using Spring, facilitates frontend and backend communication.
Shopping Cart Management: Stored in user sessions using Spring session beans.
Database Connectivity: Connects to a SQL Server database to store completed orders.


nitializing the Backend
Open the project in IntelliJ. If prompted, select "Load Maven Project". You can later reload Maven using the "M" icon or by right-clicking on pom.xml and selecting "Maven -> Reload project".
In case of discrepancies in the code, navigate to File -> Project Structure -> Project Settings -> Project -> SDK and select your Java SDK.
Edit the configuration "ex4" at the top right. Ensure the "Main class" is set to "hac.DemoApplication".
Run the SQL server as instructed in the project guidelines and create a database named "ex4".
Execute the project. There shouldn't be any errors in the IntelliJ console.
Initializing the React Frontend (movie-app)
Navigate to the movie-app directory in your terminal.
Run npm install followed by npm start. The client should be accessible at http://localhost:3000.
