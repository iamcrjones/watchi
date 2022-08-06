## When you miss your favourite show and everyone spoilers it!
![Trello-1](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Sad-Pika.gif)

## Live Site 

https://watchi-au.netlify.app/ 

https://watchi-animev2.herokuapp.com/ 

This app is designed for the Hardcore Anime lovers, the ones who have 'seen it all' and are 'not so patiently' waiting for the next eps to come out. This platform helps with tracking when their favourite shows are being released so they never miss an ep and have upcoming shows scheduled on their 'my weekly watchlist' 

This will allow users to look through multiple platforms of shows and filter through each to see what they would like to watch depending on the platform they have a a subscription to. 

This centralises this decision, so people do not have to search through each platform individually for what to watch. 

## Functionality / features
This application pulls data on shows from an API which details all the shows and their upcoming release days and lets the user add these to their watchlist, which will then present a calendar for the user to schedule to watch this episode. 

If a show is finished, it will drop off their calendar but still be available to search and see the rating & reviews of the show.  

Users will be able to have a single sign up option through Google. - Sprinkle!

## Target audience - Anyone who loves Anime

After going to both team members groups of friends and asking what they would like to see in the world and also based on Matilda and Cameron common interests, the concept of Watchi was invented and as one of the many target audiences this has been based on our needs of this app. 



![Target-aud](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Matilda.png)
![Target-aud](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Cam.png)
![Target-aud](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Akihiro.png)


## Tech stack
#### Back End:
<div>
    <ul>
        <li> Ruby On Rails </li>
        <li> Knock for Authentication </li>
        <li> Heroku for deployment </li>
        <li> AWS for active storage of images </li>
        <li> RSPEC for testing </li>
        <li> Git / GitHub for version control</li>
    </ul>
</div>

#### Front End:
<div>
    <ul>
        <li> React </li>
        <li> HTML5 </li>
        <li> CSS </li>
        <li> Netlify for deployment </li>
        <li> Jest for testing </li>
        <li> Git / GitHub for version control</li>
        <li> Styled Components </li>
        <li> Material UI </li>
    </ul>
</div>

## ERD
![ERD](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/ERD-1.jpg)

## Dataflow Diagram

## Application Architecture Diagram

![AAD](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/ApplicationArchitecture.jpeg)

## User Stories

### This initially only had the user role and action/goal - however the decision was made to add in acceptance crieteria to clearly define this. 

Change to inital User flows
- The decision was also made to remove Single sign-on with Google due to privacy issues. 
- Removed the username in navbar as user has ability to access their account to review.

|User Role     | Action/Goal                                                  |Value                                 | Acceptance criteria|
|------------|----------------------------------------------------------------|--------------------------------------|--------------------|
| As a Guest | I want to access and navigate the website                      |so I can understand the purpose of the website                                                                  |1.See non-logged in user functionality e.g sign-up / Log-in See
| As a Guest | I want to see all shows                                        |so that I can know what are the most popular anime's currently airing                                           |1.Navigate to the show pages on main page and view top 10 current shows
| As a Guest | I want to filter shows by platform                             |so if I only have access to a certain subscription, I am only seeing that subscription shows                    |1. Ability to click on a subscription service and see rerendered shows
| As a Guest | I want to sign-up with google or my personal details           |so I can access the add to watchlist feature and so I can have the option to save time and not have to remember login details | 1. Ability to click sign-up button 2. Be directed to sign-up page option <!-- 3. Process account sign-up through google account 4. Be logged in with google account -->
| As a Guest | I want to see show reviews and comments                        |so I can see what other people think of a show and decide if I should watch it                                  | 1. Ability to click on a show and be taken to that shows dedicated page with reviews.
| As a Guest | I want to see add to watch list button to be redirected to sign-up page | so that I understand how the platform works and the features available to me if I sign-up             | 1. Ability to click on button and see a popup or redirect to sign-up page. 
| As a Guest | I want to access an about page                                 | so I understand how the platform work and the features available to me | 1. Ability to click on about page and be re-directed to page. 
| As a User  | I want to do everything a guest can do                         | so I have standard functionality | 1. Same as Guest
| As a User  | I want to add a review to a show with option comment section   | so I can be involved in the Anime community and let other know my opinion on a show without feeling like I am forced to write a full comment | 1. Ability to navigate to shows individual page and click on add review button 2. Ability to see my review after posting
| As a User  | I want to add & remove shows to my watchlist for upcoming and currently airing shows | so I can login each day and see what is available to watch |1. Show appears in my watchlist after selecting it
| As a User  | I want to set a username                                       | so my personal information is protected | 1. See my username displayed in the navbar and when I post a review
| As a User  | I want to logout                                               | so my account information is protected | 1. Ability to click a logout button and be redirected to main page
| As a User  | I want to delete my account                                    | so I have a choice in weather the application keeps my data or if I want to use the platform | 1.Ability to access account details and select delete account 2. Notice after to inform me that my account has been deleted
| As a Admin | I want to do everything a User can do                          | so I can use the site as a user as well as an Admin | Same as User
| As a Admin | I want to delete reviews                                       | so I can regulate the site and ensure there are no in-appropriate comments to maintain community guidelines | 1. Be notified a review has been deleted 2. No longer see this review in the shows review page
| As a Admin | I want to Add users and Remove Users and Edit users            | so I can troubleshoot and support new users with their accounts or remove users who go against community guidelines | 1. See all user data and have options to create, edit and delete. 
| As a Admin | I want to Add shows to API via form                            | so I can maintain the database and keep the platform up to date with ongoing shows | 1. See new show added to shows list and be able to search for show after adding it

## Wireframes

### Short video capture of flows (User/Guest view adjusts if logged in)
[![Image showing video to watch ](docs/Youtube-link.png)](https://youtu.be/6ByDqdx9syU)


### Initial Low-Res [Full-exported-artboards](https://github.com/matildamort/T3A2---Part-A/tree/main/docs/Low-res-wireframes)
![WF-Low](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Low-res-wireframes/low-res-all.png)

#### After initial meeting with the client and gathering initial feedback they have requested
- The addition of the ability for a guest to view what a weekly watchlist would look like so they have an understanding of how the platform works.
- Client requested new fonts that better represent their brand and target audience - multiple samples of new brand and logo was provided before deciding on a final. 
- The decision to use a single simple colour pallette was decided to ensure that the site was not overwhelming as there would be multiple colours already displayed with the different platform buttons and the shows icons/titlepages. 
- The addition of easier to navigate buttons and the ability to easily remove a show from the users watchlist and easily add a review to be added to all shows on both the homepage and the individuals full watchlist. 
- The overall design elements needed review  - the request to adjust all buttons to be rounded and make it clearer any calls to action. 
- Client wanted a clearer idea of the final product - so additional design elements were added including imagery & shading. 
- Ability for admin to delete reviews not included in initial diagrams - this feature is important to monitor reviews



### High-res [Full-exported-artboards](https://github.com/matildamort/T3A2---Part-A/tree/main/docs/High-res-wireframes)
![WF-High](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Grouped-wireframes.png)

After second round of reviews it was highlighted that some functionality based off the user stories were not outlined in the Wireframes
- Client requested the ability for user to see their account details and delete their account to allow user autonomy. Additional wireframe for account was created and ability to see this in the 
- Ability for Admin to delete accounts to ensure support of users and also remove any malicious accounts.
- Create clear segregation between each section and adjust general spacing. e.g ensure that the view show section is separated from the initial 



### High-res (additional missed wireframes)
![WF-High-Missed](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Grouped-wireframes-missed.png)

## Project Management

### https://trello.com/b/z3ikJbQD/full-stack-app

#### To start our project we first set up standard rubric requirements in Trello and started basic admin work e.g Github Repo before we brainstormed on some key concepts or interests of both people to determine a product. 

![Trello-1](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Trello-boards/Trello-1.png)

#### After this we spent half a day whiteboarding wireframes and concepts for a minimum viable product and started basic wireframes. Wireframes were done together so everyone understood the final product and agreed on outcomes. 

![Trello-2](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Trello-boards/Trello-2.png)

### After the initial concept was ready to go, we split up the additional tasks based on strengths and interests of each person. 

![Trello-3](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Trello-boards/Trello-3.png)

### Regular communication was a key feature and ensuring we each knew what the other was working on. We have daily standups and regular check-ins. The inital plan was to work on both the BE and FE together; with one person overly responsible for BE as a smaller task and existing knowledge, this allows for both team members to work sooner on the FE together and split up tasks.

![Trello-4](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Trello-boards/Trello-4.png)


### To ensure clear priorities, a color coding system was discussed and implemented.
![Trello-5](https://github.com/matildamort/T3A2---Part-A/blob/main/docs/Trello-boards/Trello-5.png)



## Building the Application

After coming up with the initial concept of the application, we shared the idea to our friends to see what they thought of it. Since the target audience of our application is for people who like to watch anime, and also have a busy schedule, or often forget when their favourite anime is being aired, this idea filled a niche that can help make people's lives easier.

We spent roughly 2 weeks planning out how the application will look and function, including designing the database and figuring out the way data flows through the application. Once this initial planning was done, Cameron setup the initial GitHub repo for the frontend which is built with react, and Matilda setup the initial GitHub repo for the backend which is constructed using Ruby on Rails.

We used agile project management methodologies to track our sprints, and also adjusted the scope as necessary in order to meet the requirements of the MVP for this assessment. We utilized Trello to create lists of different tasks that needed to be done. These tasks were then assigned to the person responsible for that part of the app, and had checklists of requirements, and deadlines that said tasks needed to be completed by in order for the sprints to be completed on time. Anything that felt like it was outside of the scope of completing within the timeframe of the assessment was then moved into a non-mvp category that will eventually get built in the future when both of us are able to work on the project more after the assessment period.

### Challenges

We encountered numerous challenges during the process of building this assessment, one of the biggest being getting the integration of the frontend to work seamlessly with the backend as we would get one part of the integration working, and then another part would break. Fortunately, we were able to overcome this challenge and it also provided a good learning experience that both of us will take with us in the future.

Some of the other challenges that we were faced with included:

<li> CRUD operations to operate from the frontend correctly</li>
<li> Get and Post requests from the frontend to return correct data without errors from the backend</li>
<li> Getting the watchlists to work properly</li>

### Scope

During the development process, we needed to adjust the scope of the project as some parts of the initial concept such as google account integration seemed a bit too ambitious to get completed within the time frame, so things like that were moved to the list of features that could be implemented after the assessment period.

### Testing

[Testing files](https://docs.google.com/spreadsheets/d/1Ua9nDSVtvbguL8yDjVT1BNYwWY65deT5Zk5IL9F_8JU/edit?usp=sharing )

For testing our application, we setup different environments, for deployment, production, and testing. We made sure that the features implemented work as expected across all three environments. We also did extensive manual testing on the application in order to help iron out errors in the functionality of the application that would go unnoticed whilst writing the code.

We also utilized testing libraries such as RSpec for the backend to ensure that models and controllers were functioning successfully, as well as using the react-testing-framework library for basic rendering and styling tests for the front end to ensure components were rendered correctly.

We also got friends to use the live website to gather feedback about how the app feels to use on the live deployed version which was very helpful for changing things around to increase the user experience such as adding the ability to add shows to your watchlist from the homepage.

### Libraries Used

##### React

Even though that entire frontend is built with React as if it were a framework, it is still a library by nature. Using React to build the frontend made things so much simpler being able to user powerful tools such as hooks to manage the state of several components. React also made the application easy to structure and render with it's component-based rendering design and DOM manipulation.

##### Material UI

We used Material UI throughout this application in order to flesh out professional looking components with advanced functionality and is also easily customizable. We incorporate Material UI into our styled components global styles file to ensure everything was in one place, and worked flawlessly.

Some of the components used form MaterialUI included the drawer used for the navbar when the application was being rendered with the width of a mobile device. We also used it to easily create components such as the card that are used to display the shows on both the homepage, and watchlist page.

##### Axios

Axios was used in this application to handle all of the HTTP requests between the frontend and the backend. Using axios made things much simpler instead of having to manually write out each request to the backend for every function. Instead, we were able to store all of the request methods into functions that could be imported into any component within the app for ease of use.

##### Knock

We used Knock on the backend to handle user authentication through the use of JSON Web Tokens that are created and passed to the frontend to enable the app to successfully make HTTP requests.

##### Styled Components

Styled components was used for the styling of the application. We chose to use the global styles method to have all styling in one place that is easily rendered across the entire application. The main reason for choosing styled components was how easily Material UI integrates with it.

### What went well

While we definitely faced some challenges during this project, we also learnt an incredible amount. It was really a rewarding achievement being able to work as a solid team throughout the entire project both planning and development stages. We kept communications open constantly throughout the entire project to ensure that we were working as efficient as we possibly could. We helped each other both with building different parts of the application, but also keeping each other sane when we got stuck on things and needed a break, or if things felt overwhelming.

### What we learnt

Firstly, we learnt that we work really well as a team, and plan to hopefully work on more projects together in the future after Coder Academy. We also learnt that collaborating with other people on projects is an amazing way to help each other improve in areas that we weren't confident in. We are both proud of the product, and we have been able to gain a good idea of how to improve the application further in the future and make it more solid.