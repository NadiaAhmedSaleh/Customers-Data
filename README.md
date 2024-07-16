# Customers-Data
-the goal is to create an application that retrieves the customer and transaction data from a local json file and displays it in a user-friendly format.

-step 1:
according to requirements I have used local server to host json data which needed
firstly : setup json server
secondly : add the json-server to the package.json
thirdly: creating json data file to the project which is db.json which is located in assets folder and add all the data in the requirment to it
finally : executing direct command json-server --watch src\assets\db.json

-step 2:
after creating the needed component and service and interface I have displayed the users information in a table displayed on home component with a button to direct to the bar chart of the daily change in amount .

-step 3:
I have added a button infront of every user to direct to another component which displays a chart that displays the total transaction amount per day for the chosen customer 
in this step I have installed and used Charts.js 

-step 4:
as needed in the requirments I have created a filter input using search pipe which filters the table according to the id or amount the user have entered.


installed packages:
bootstrap
charts.js
json server





