# library_app

### TODO
- Create functioning read/unread button that can be toggled directly on card
- Color edge of card to indicate book is read
- Style the whole page

### Purpose
This is a small library app to demonstrate the use of object constructors and how user input can be taken from forms to create a user-generated content on a website.
### Challenges Faced
##### Query Selector
- I assumed that by getting the element by ID, that it also took the value; it does not.
- I then would put the whole field inside of my object, so when it was updated the objects in the array would appear as duplicates
- I fixed this by using `.value` in my query selectors, passing it into the object constructor, then manipulating the object from there
- I had this partially solved as in my `updateGrid` function, I used `.value` when attempting to display the values but did not consider how this would affect the array

##### Removing Books
- Keeping of track of books in the array and relating them to the corresponding card was difficult
- I opted to to remove the object from the array while also using the `remove` function on the parent `div` of the card to remove all of it

