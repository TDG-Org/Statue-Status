# Statue Status Application (Notes)

## Client

### Statue

- Statues will be it's own model but can link up to an account (each account can have one statue)
  - Button on profile "Create your status" if they are logged in
- Statue Status accounts will have follower and following displays, but on Statue page, it will display Total followers throughout all platforms link to this app.
- Social links to user's profile next to statue with other info (Maybe user profile picture if statue is linked to a account)

---

### Pages

_(And Aside layout)_

- Home #1

  - Shows off the charts
  - Date and time on the top

- Profile #2

  - User's can change pfp, bio, and link up social links.
  - Statue will be displayed to the right (if they create one)
  - Stats will display for that user (followers on statue status, etc.)

- Discover #3

  - search specific users
  - view friends (more options)

- Settings #4

  - User's can change their theme (light, dark)
  -

- About #5

  - General info of app for intro
  - Usage and how to use
  - Explain Statues

<br>
  (Loggout Button at the bottom)

---

## Server

### Models

- User

  - username
  - email
  - password
  - followers & following count
  - preferences (light & dark theme)
  - Satue (if they create one)

- Statues

  - image
  - Display Name
  - social Links
  - Following Count (links to all Person's medias)
  - prefered design
  - Link to an account (optional)
