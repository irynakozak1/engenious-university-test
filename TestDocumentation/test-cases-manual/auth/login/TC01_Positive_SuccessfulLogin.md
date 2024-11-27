### Test Case ID: TC01
#### Title: Verify successful login with valid email and password
#### Priority: P0
#### Preconditions:
The user is already registered with the following credentials:  
Login data: email:"irakozak96@gmail.com", password: "Password123";
Full name: "Iryna Kozak".
#### Steps:
1. Navigate to https://university.engenious.io/ <br>
   1.1 __ER:__ User is redirected to the university's homepage  
   <img alt="img.png" src="screenshots/img.png" width="600"/> <br><br><br>
2. Click "Sign In" button in the header  
   <img alt="img_1.png" src="screenshots/img_1.png" width="600"/><br>
   2.1 __ER:__ User is redirected to "/registration" page  
   <img alt="img_2.png" src="screenshots/img_2.png" width="600"/> <br><br><br>
3. Click "Login" button  
   <img alt="img_3.png" src="screenshots/img_3.png" width="600"/><br>
   3.1 __ER:__ User is redirected to "/login" page  
   <img alt="img_4.png" src="screenshots/img_4.png" width="600"/> <br><br><br>
4. Enter "irakozak96@gmail.com" in the Email field <br>
   <img alt="img_5.png" src="screenshots/img_5.png" width="600"/> <br>
   4.1 __ER:__ Email field is filled with "irakozak96@gmail.com" value <br><br><br>
5. Enter "Password123" in the Password field <br>
   <img alt="img_6.png" src="screenshots/img_6.png" width="600"/> <br>
   5.1 __ER:__ Password field is filled with "Password123" value and the entered characters are displayed as hidden (represented by dots) <br><br><br>
6. Click "Login" button  
   <img alt="img_7.png" src="screenshots/img_7.png" width="600"/> <br>
   6.1 __ER:__ User is redirected to welcome page <br>
   <img alt="img_8.png" src="screenshots/img_8.png" width="600"/> <br><br><br>
7. Click on Menu Toggle in the header <br>
   <img alt="img_9.png" src="screenshots/img_9.png" width="600"/> <br>
   7.1 __ER:__ Navigation Bar is opened with user card displayed, which contains full name "Iryna Kozak" <br>
   <img alt="img_10.png" src="screenshots/img_10.png" width="600"/> <br><br><br>
#### Comments:
Please note that during test execution, the Webinar modal window might appear at any step (as per screenshot below), specifically 10 seconds after the page is opened. If the modal appears, close it by clicking on the close icon (X) before continuing with the next steps in the test.<br>
<img alt="img.png" src="screenshots/img_11.png" width="600"/>