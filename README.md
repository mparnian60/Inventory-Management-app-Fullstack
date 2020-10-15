# PROJECT #4 Inventory-Management-app-fullstack (Ruby on Rails + Auth)

## PROJECT OVERVIEW
The Overview of this project is to create a simple inventory management app which enable user to create, edit and delete a product 
as well as being able to see the SOH for each product. 

* **Scope -** AIM: The aim of the project is to build a simple app to show product list and SOH for each product.
* **Features -** : Depends on the type of user, user have a different accessibility. Admin is able to create, edit and delete a product
while a normal user is just able to see the product details.
* **Implementation Period-**: 1 Weeks
## TECHNOLOGIES & RESOURCES USED
* React
* Ruby on Rails
* PostgreSQL
* JWT (JSON Web Token)
* Material-UI
## CORE REQUIREMENTS
The Core requirements set out for this project where the following:
* **Models.** A minimum of 3 models with appropriate associations.
* **Views.** Use partial views to avoid DRY practices.
* **Handles invalid data.** Appropriate form handlers to validate data or notify users of invalid data.
* **User Login.** Basic User Authentication.
## OVERALL LAYOUT
### Signup/ Login Page
Admin is able to create a new user.
### Home page
Project name
### New product (logged in Admin)
This page is being used to create a new product
### Product Details (logged in Admin)
This page shows the list and details of all created product. Admin is able to edit product details and delete the one is not required nay more.
### Product Details (logged in User)
This page shows the list and details of all created product. User is just able to see the details.
## CHALLENGE ADD-ONS (Achieved)
* Having two type of user with different accessibility
## FURTHER IMPROVEMENTS
* Add inventory page to the app in frontend Which enable admin to choose a product and update SOH by adding product transaction e.g. any purchase order quantity will be added to SOH and any sales order will be deducted from SOH.
* Add required logic in the backend for inventory page, therefore updated SOH can be saved in the database.
