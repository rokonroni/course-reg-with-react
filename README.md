# Course Registration With React

This marks my inaugural foray into React web application development, where I have meticulously crafted a Single Page Application (SPA) dedicated to course registration. The centerpiece of this SPA is an ingeniously devised cart section, meticulously engineered to display both the course names and their corresponding total prices.

## Course Key features

Now I am describing about 3 key features of this web application.

- **Course Listing:** Allow users to view a list of available courses. Each course should display its title, description, price, credit, and a "Select" button. Users can add them to their cart. Which is shown on the right side of the web application. They can see all course names for which they are selected. But they can't select a course more than once.

- **Total Price Calculation:** Calculate and display the total price of the courses in the cart. Ensure that the total price updates dynamically as users add courses. This feature will help users keep track of their expenses.

- **Credit Limit and Toast Notification:** The web application has a credit limit is 20. when any user adds more than 20 credit courses dynamically show a toast notification that your course credit is limited.

## State uses in this application

### Selected Cards
`const [selectedCards, setSelectedCards] = useState([]);`
- **Description**: Represents the list of courses selected by the user from application.
- **Usage**: Add courses from this list as the user interacts with the application.

### Remaining Credit
`const [remainingCredit, setRemainingCredit] = useState(20);`
- **Description**: Represents a user's remaining free credit.
- **Usage**: Decrement this state each time a course is added to the cart.

### Total Credit
`const [totalCredit, setTotalCredit] = useState(0);`
- **Description**: This can be used to keep track of the total credit used by the user as they add courses to the cart.
- **Usage**: Show the total add credit course in the cart.

### Total Price
`const [totalPrice, setTotalPrice] = useState(0);`
- **Description**: Represents the total price of the courses in the cart.
- **Usage**: Update this state whenever a course is added or removed from the cart.

### Cards
`const [cards, setCards] = useState([]);`

`useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);`
- **Description**: Holds the data fetched from the `data.json` file.
- **Usage**: Populates the course listing in this application.
