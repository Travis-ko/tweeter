/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {

    $('#compose-button').click(function(){
      $('.new-tweet').slideToggle("slow", function(){
        $('#text-box').focus();
      });
    });


    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function renderTweets(tweetData) {
        tweetData.forEach(function(data) {
            $('.tweets').append(createTweetElement(data));
        })
    };


    function createTweetElement(tweetData) {

        return `
        <article>
          <header>
          <img class="avatar" src="${tweetData.user.avatars.small}" width="40" height="40">
           <span>${tweetData.user.name}</span>
            <h5>${tweetData.user.handle}</h5>
          </header>
          <div>${escape(tweetData.content.text)}</div>
          <footer>
            <span class="time">${tweetData.created_at}</span>
          <span class="hover-icons">
          <i class="fa fa-flag"></i>
          <i class="fa fa-retweet"></i>
          <i class="fa fa-heart"></i>
          </span>
          </footer>
        </article>
        `;

    }

  //   function communicateXhr(method, url, data) {
  //     return $.ajax({method: method+",", url: url+",", data: data+","});
  //   }

  //   function loadTweets(){
  //   communicateXhr("'GET'", "'tweets'")
  //     .done(renderTweets(tweets));
  // }
  // loadTweets();



    function loadTweets() {
        $.ajax({
            method: 'GET',
            url: "/tweets"
        }).done(function(tweets) {
            renderTweets(tweets);
        });
    }
    loadTweets();

    $('.tweet-form').on('submit', function(event) {
        event.preventDefault();
        var form = $('.tweet-form');
        var input = $(this).serialize();
        var inputLength = $('#text-box').val();
        if(inputLength.length > 140){
         $("<span class='tweet error'> Too many characters</span>").appendTo(".counter");
         $('.counter').html('Too many characters');
        }
        else if(inputLength.length === 0 || inputLength.trim() === ''){
          console.log(inputLength[0].content);
        $('.counter').html('140');
         $("<span class='tweet error'> field cannot be empty </span>").appendTo(".counter");
         form[0].reset();
        }



        else{
        $.ajax({
            method: 'POST',
            url: '/tweets',
            data: input
        }).done(function(tweet) {
          console.log('res from server', tweet, inputLength);
            var newTweet = createTweetElement(tweet);
            form[0].reset();
            $('.tweets').prepend(newTweet);
            $('.counter').html('140');
        });
      }
    });
});