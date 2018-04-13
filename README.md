# tChat

tChat is a dating app that allows users from nontraditional gender identities
to feel free to be themselves and explore relationships with others in a fun
and healthy setting. The core functionality for this (auth, profiles/profile editing,
browsing users in your area, and messaging) were built over the span of 10 days and
were heavily inspired by design from okCupid.

Live link to the app can be found here --> [tChat](http://www.tchat.lgbt)

## How to use

If you are looking to participate as a member of the community you would

1. go to the live link and press on the join today button.

![Welcome_screen](http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523652971/Screen_Shot_2018-04-13_at_1.55.46_PM.png)

2. Fill out a very brief set of details for us to get your personal account set up.
3. If you want, take a brief detour to the edit profile page to update your account info for your fans
4. Now that you've got a pretty account all set up it's time to get chatting! Head over to the browse users page
5. On the browse users page you can click on any user to see what they've got going on. All users will be in the city you have listed on your profile.
6. Now that you're here you should see a message button on the right. Click that and a modal will pop up. Type out a fun first message.
7. You will now be taken to the messages page. Now you can just wait until they get back. You're officially tChatting.

## What it does

As of now tChat does all the basics you expect from a dating app. You can make and edit an account
that includes information such as pronouns, screen_name, and profile picture

## How it was built

- Ruby On Rails
- PostgreSQL
- React
- Redux
- Cloudinary
- Heroku
- ActiveRecord
- Front End/Back End Auth

## Design documents

+ [MVP List](mvp-List)
+ [Schema](schema)
+ [Routes](routes)
+ [Sample State](sample-state)
+ [Component Hierarchy](component-hierarchy)

## Where it will go from here

There are many next steps for this app to go through. Here are a few.

#### Core Features

1. Allow users to block other users.
2. Users will have an internal score and ranking based around some basic data (ratio of messages sent to received, block rate compared to others, )
3. Users will have an add user feature if their score is good enough that allows them to add new users through a temporary one sign up code they can send to a friend. Sign up will now mandates one of these codes to get on.
4.


#### General

1. Refactoring of the html and css. Come up with a new color scheme and layout that isn't modeled so closely off of another site.
2. Enhance the messaging experience by adding notifications, having timestamps within the messagethread show page, being more clear about read and unread message threads, etc.
3. Set up messaging to use WebSockets so that the experience is much more real time.
4. Implement more robust error handling and notification throughout the applicaiton.
5. General speed improvements throughout the project.
