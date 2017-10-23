# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- mongodb


## Database format / Premade entires

### tweets
```JSON
[
  {
    "_id" : ObjectId("59ea8cc5921da60a43e00319"),
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227,
    "likes" : []
  },
  {
    "_id" : ObjectId("59ea98b27ae17a10c20c09f0"),
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088,
    "likes" : [
      "@SirIsaac",
      "@johann49"
    ]
  },
  {
    "_id": ObjectId("59ebc8cea3e2920d0a55ac86"),
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368,
    "likes" : [
      "@rd"
    ]
  }
]
```

## Usage

Visit the home page at http://localhost:8080/
!["landing page"](https://github.com/Travis-ko/tweeter/blob/master/docs/tweeter-1.png?raw=true)

Enter a message by clicking the tweet form or by clicking the compose button in the navbar.
!["click the compose button"](https://github.com/Travis-ko/tweeter/blob/master/docs/tweeter-2.png?raw=true)

Hit Tweet to generate your tweet with a randomized handle, username and image.
!["Hit tweet"](https://github.com/Travis-ko/tweeter/blob/master/docs/tweeter-3.png?raw=true)

tweets are displayed in reverse-chronological order, scroll down to see past tweets that have made in the past!
!["look at all your past tweeter fun"](https://github.com/Travis-ko/tweeter/blob/master/docs/tweeter-4.png?raw=true)
