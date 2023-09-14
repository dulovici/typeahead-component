# typeahead-component

## **Get started:<br>**
git clone [repo url]<br>
npm i<br>
npm run dev<br>


## **#Disclamer:<br>**

### API:
Instad of mocking country data, i used free API "https://restcountries.com/" that provide data for all world countries.


### Components:
In component section you will see two folders.<br>

#### countries
That folder contain TypeAhead Component <br>
that i build with MUI and React Query native method for caching (staleTime).<br>
I belive that for that types of functionalities in most cacses we should
use libraries like those that i mentioned above.

#### customCountries
I created this component with custom list and caching functionality.

<br>

## **#Writen questions:<br>**
### 1. If you had control of the web-server, what are some ways you might implement a caching solution?
I haven't had the opportunity to work with caching at a deeper level.<br>
Now, I've encountered this issue for the first time in this task. It's an interesting topic, and I'd would like to discuss it in person if we have an oportunity.
### 2. How might you implement offline caching for your typeahead component?
I couldn't provide a concise answer to this question without information about the type and amount of data that needs to be processed. <br>
If we talking about world countries, like in this task, where number and info are constant, i would probably fetch and catch all data on init.
### 3. When using traditional session cookies, what are the primary security concerns and mitigation techniques you might use?
It is possible to perform session ID hijacking and gain access to the server using it.
### 4. What are some advantages and disadvantages to using JWT for authorization and authentication in a web application?
I've never worked closely with JWT tokens before to provide a confident answer. 
### 5. What are all the ways you can think of to write BAD React code?
1. Bad naming
2. Huge components (not following single responsibility principle)
3. Misusing of useState and useContext
4. Not using "key" prop properly
5. Complex conditions
6. Hardcoded data
7. Not understanding JS properly :)

### 6. What new Web or React APIs are you most excited about?
To be honest, I don't have complete trust in the latest technologies right from the start, <br>
due to the rapid changes in the front-end world. I prefer to use established and tested tools. <br>
If I really need to mention something relatively new, it would be Vite. It's significantly faster and more stable than Create React App. <br>
Also there is React Query and React Router v6.






