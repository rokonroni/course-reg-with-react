# Course Registrartion With React

This is my first react web application assignment. In this application i design a course registration application which course add in cart section with course name and the total price.

## Course Key features

Now i am describe about 3 key feature in this web application.

**1. Course Listing:** Allow users to view a list of available courses. Each course should display its title, description, price, credit and an "Select" button. Users can add them to their cart. Which is show in the right side of the web application. They can see all course name which they are selected. But they cann't select a course more then once.

**2. Total Price Calculation:** Calculate and display the total price of the courses in the cart. Ensure that the total price updates dynamically as users add courses. This feature will help users keep track of their expenses.

**3. Credit Limit and Toast Notification:** The web application have a credit limit is 20. when any user add more then 20 credit course dynamically show a toast notification is your course credit is limited.

## State uses in this application

### Selected Cards

- **Description**: Represents the list of courses selected by the user.
- **Usage**: Add or remove courses from this list as the user interacts with the application.

### Remaining Credit

- **Description**: Represents the remaining free credit that a user has.
- **Usage**: Decrement this state each time a course is added to the cart.

### Total Credit

- **Description**: Can be used to keep track of the total credit used by the user as they add courses to the cart.
- **Usage**: Show the total add credit course in cart.

### Total Price

- **Description**: Represents the total price of the courses in the cart.
- **Usage**: Update this state whenever a course is added or removed from the cart.

### Cards

- **Description**: Holds the data fetched from the `data.json` file.
- **Usage**: Populates the course listing in your application.
