# Petful Server
A collaboration between Andrea Bender and Sean Cooper
Live app: https://github.com/thinkful-ei-heron/Petful-Client-Sean-Andrea.git
Server GitHub: https://github.com/thinkful-ei-heron/Petful-Server-Sean-Andrea.git

## API
Endpoints

GET /cats/allCats will display all cats that are able to be adopted. It will return an image, image description, name, sex, age, breed, and story.

DELETE /cats/allCats When a cat is adopted, it will dequeue that cat and it can no longer be adopted.

GET /dogs/allDogs will display all dogs that are able to be adopted. It will return an image, image description, name, sex, age, breed, and story.

DELETE /dogs/allDogs When a dog is adopted, it will dequeue that dog and it can no longer be adopted.


## Summary
Petful-server allows users to store and retrieve pets that could be adopted.


## Technologies

- Node
- Express
- Mocha
- Chai