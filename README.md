#  typeahead-component

## Get started: 
git clone [repo url]

npm i

npm run dev


## API:
Instad of mocking country data, i used free API "https://restcountries.com/" that provide data for all world countries.


## Components:
In component section you will see two folders.

#### countries
That folder contain TypeAhead Component  
that i build with MUI and React Query native method for caching (staleTime). 
I belive that for that types of functionalities in most cacses we should
use libraries like those that i mentioned above.

#### customCountries
I created this component with custom list and caching functionality.

## Writen questions:
### 1. If you had control of the web-server, what are some ways you might implement a caching solution?
I heard about redis but realy had no chance to work with server side technologies.
### 2. How might you implement offline caching for your typeahead component?
There is a couple of posible implementations that i can think of.
- Local storage / Session storage
- If we talking about world countries, like in this task, where number and info are constant, i would probably fetch and catch all data on init.
- External libraries

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
Lately, I dont trust in latest technologies. There a lot rapid changes in front-end but working with buisnissies tought me to use established and tested tools.

Something that im exited about is Vite. It's significantly faster and more stable than Create React App.

Also there is React Query and React Router v6.
