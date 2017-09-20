import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import prontoxubfront from './images/prontoxubfront.png';

class Blog extends React.Component{
  render(){
    return (
      <div id="blogPost">
        <h2><span id="blogtitle">Denim Denim Denim</span> <span id="date">03.24.16</span></h2>
        <div id="mainImage">
          <img src={prontoxubfront} alt="prontoxubfront" height="500px"/>
        </div>
        <div class="blogContent">
          <p>
            Selvedge denim has been a hobby of mine for quite a few years now. "Selvedge" refers to denim that is tightly woven on a 
            shuttle loom and when the fabric comes out of the loom it comes finished with a “self-edge”. The denim’s texture will feel 
            very rigid and thick upon touch. On the initial wear, it will feel uncomfortable and almost cardboard like but will mold to the 
            wearer’s physique on subsequent wears. Why then buy a pair of denim that will be uncomfortable and may bleed indigo onto 
            your shoes? It’s because of the denim’s unique ability to fade over consistent wears which will make it look faded and 
            distressed. When you go to a clothing store and look at pre-distressed denim, you are looking at denim that has been distressed for 
            you by the manufacturer. The whiskers you see around the crotch and thigh area, the fading of the indigo, and the honeycombs 
            on the back of the leg have been produced by the manufacturer. Which to me, takes the fun out of distressing a pair of denim 
            yourself. After time, the denim will mold to you and will be a unique pair of art you can show off and wear.
          </p>
          <p>
            Here are a few tips for when you’re buying your first pair of selvedge denim:
            <ul>
              <li>Patience is the name of the game. The awesome fades and rips you see in denim, such as mine pictured below, require time. 
              The two pairs of denim you see below took me about a year to get to that level of fading.
              </li>
              <li>They will be uncomfortable in the waist and crotch area on the first few wears. Continue to wear them as this is normal 
              behavior for selvedge denim. I find squatting in them helps to loosen them up.
              </li>
              <li>The indigo dye will bleed. The indigo will bleed onto your shoe, rub off on a wall you’re leaning up against, or the
               leather in your car. You can use a Magic Eraser Pad to clean the indigo rub off.  
              </li>
              <li>Don’t wash them for at least six months. I know it sounds dirty but the more you wash them the quicker the indigo dye
               will leave the fabric. I recommend washing them every six months in a tub filled with cold water and Woolite dark detergent
               </li>
            </ul>
            So go and wear the hell out of that new pair of selvedge denim you got and show me the results!
          </p>
          <hr />
          <h2><span id="blogtitle">Fitness First</span> <span id="date">01.16.16</span></h2>
          <p>
            For me, working out is an activity I have always enjoyed. My friends know this as well and they often turn to me for workout
            and dieting advice. So I figured I’d put this post together to talk through how to stay fit and eat right. Staying fit is a 
            function of time and energy. You need to carve out X amount of days each week to workout and have the energy and will power to 
            push yourself to finish each workout to the best of your ability. Whatever medium you chose to workout is up to you but the 
            important part is to continue to apply progressive overload. Progressive overload is to the ability to push yourself further 
            than you pushed yourself the last workout. It can be applied by increasing the weight you did last week on bench press or 
            running on a higher incline than last time. If you don’t apply this principle you will plateau, workouts will be less fun, 
            and you won’t make gains as fast as you would have wanted.
          </p>
          <p>
            Stick to a workout plan and record your progress via an app, such as <a href="http://www.myfitnesspal.com/mobile/iphone">MyFitnessPal</a>. 
            I recommend <a href="http://startingstrength.com/">Starting Strength</a> or <a href="https://stronglifts.com/5x5/">Strong Lifts 5x5</a> for beginners. These programs focus on compound lifts and teach you the basics on how to
            get started lifting weights. The app will also help you track your progress and provide a nice graph of the progress you have 
            made over time. The best part about being a beginner, is that you will see gains quickly and your strength will increase quickly as well. Focus on pushing yourself harder 
            than you did in the previous workout and applying progressive overload to each workout. This way you will be challenging your 
            body each workout and will not plateau. Lastly, find a workout partner or go to a gym in which you have friends at. Seeing 
            others working out and making gains will encourage you to do the same.
          </p>
          <p>
            Working out is the easy part of your fitness journey; the difficult part is keeping your diet in check. Go to this 
            <a href="https://www.bodybuilding.com/fun/macronutrients_calculator.htm"> site</a> and calculate your daily macronutrients.
              This is a breakdown of how many grams of fat, carbs, and protein you should intake each day. 
            MyFitnessPal has a built-in feature to allow you to track your macros, so every time you have a meal, enter what you ate in the 
            app and it will let you know how many grams of fat, carbs, or protein are in the food. It is imperative that you watch your 
            macros as this will allow you to get a lot leaner than eyeballing your diet. And if you’re really up for it, buy a food scale,
            this way you can track how many grams of food you are eating each day for a more accurate breakdown of your macros. Lastly, 
            plan a cheat meal every month. This is a meal that doesn’t need to fit your diet. This is much needed and will help keep you 
            sane along your fitness journey. Don’t wait for the new year to say, “New Year, New Me”; start today and go get those gains. 
          </p>
          <br/>
          DISCLAIMER: Consult your physician before you start a workout plan or make changes to your diet.
        </div>
        <hr />
        <h2><span id="blogtitle">How to SouthBy</span> <span id="date">12.24.16</span></h2>
        <p>
          Another year, another South by Southwest. Here are my tips for newcomers who want to experience SxSw and stay afloat with all the madness that overtakes Austin in mid-March.
        </p>
        <h3>The Power of the Badge</h3>
        <p>
          Festival attendees with a <a href="https://www.sxsw.com/attend/">badge</a> or <a href="https://wristbands.sxsw.com/music/">wristband</a> will receive preference over those without one. Popular events at peak times will have long lines for general admission. If you don’t want to wait in long lines, often spanning over an hour, buy a badge or get a wristband for the music week. If you’re attending as a ‘free attendee’ sign up for all the free events before hand or bring cash, a $20 bill goes a long way.
        </p>
        <h3>It’s a Marathon, Not a Sprint</h3>
        <p>
          South By is overwhelming. The lines are long, and FOMO kicks in fast so be sure to pace yourself, or you’ll be sluggish by week two. I was living in downtown Austin during South By ’16 and I felt overwhelmed by all the activities happening. The city is definitely alive and bustling. I paced myself by taking mid-day naps, definitely a major key.   
        </p>
        <h3>Safety First</h3> 
        <p>
          If you have seasonal allergies, I highly suggest you bring a nasal allergy spray with you. Austin is known to experience high levels of cedar pollen which can lead to seasonal allergies, locally known as cedar fever. Bring your favorite allergy medicine if you’re prone to seasonal allergies.
        </p>
        <h3>Lodging and Transportation</h3>
        <p>
          Lodging can be a pain during South By. Business owners in Austin have been hip to the rush of festival attendees and their purchasing power for a quite a while. <br /><br /> Here’s a breakdown of where to stay and how far you will be from the action: 
        </p>
        <table id="housing">
          <tr>
            <td>&#8226; Downtown Austin ($350+ a night)</td>
            <td>| In the thick of the action</td>     
          </tr>
          <tr>
            <td>&#8226; East Austin ($250+ a night)</td>
            <td>| In the thick of the action</td>     
          </tr>
          <tr>
            <td>&#8226; South of Congress ($225+ a night)</td>
            <td>| 5 min drive to downtown</td>      
          </tr>
          <tr>
            <td>&#8226; Zilker Area ($200+ a night)</td>
            <td>| 10 min drive to downtown</td>     
          </tr>
          <tr>
            <td>&#8226; UT Campus Area ($175+ a night)</td>
            <td>| 8 min drive to downtown</td>      
          </tr>
          <tr>
            <td>&#8226; Meet people and crash with them (free)</td>
            <td>| Varies</td>     
          </tr>
        </table>
        <p>
          With the <a href="https://goo.gl/2mF3KZ">exit</a> of Uber and Lyft last year, getting around can be difficult if you rely solely on those apps. Fortunately, there are alternatives. I used to Fasten or Fare when I was living in downtown Austin last year and it worked out pretty well for me. Give those apps a shot or check out this <a href="goo.gl/CZJDP9">link</a> for a complete set of ride-sharing apps in Austin.
        </p>  
        <h3>Nom Nom</h3>
        <p>
          The best food trucks in the country are in Austin during this time. From shawarma wraps to chicken and waffles, there is something for everyone’s taste buds. You’ll see them grouped together on <a href="https://www.google.com/maps/place/97+Red+River+St,+Austin,+TX+78701/@30.261407,-97.7405363,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x8644b5abd2d6eecb:0x681ac69d804a2038!2sRainey+St,+Austin,+TX+78701!3b1!8m2!3d30.2579117!4d-97.7390973!3m4!1s0x8644b5a906aef661:0xf3f5bbaae0356b17!8m2!3d30.261407!4d-97.738646">Rainey Street</a>, <a href="https://www.google.com/maps/place/Shawarma+Point/@30.2674524,-97.7370659,17z/data=!4m5!3m4!1s0x8644b5a6640c8437:0xd72095b4eef70b68!8m2!3d30.2671639!4d-97.7371464">Red River</a>, <a href="https://www.google.com/maps/place/Congress+Ave,+Austin,+TX/@30.2673382,-97.7437114,18z/data=!4m5!3m4!1s0x8644b50a07004f99:0x99a88bdeb437d925!8m2!3d30.2718005!4d-97.7414332">Colorado and 5th</a>, or <a href="https://www.google.com/maps/place/Spartan+Pizza/@30.2644638,-97.7321201,18z/data=!4m13!1m7!3m6!1s0x8644b50a07004f99:0x99a88bdeb437d925!2sCongress+Ave,+Austin,+TX!3b1!8m2!3d30.2718005!4d-97.7414332!3m4!1s0x0:0xe1ba9cf9373d7311!8m2!3d30.2648972!4d-97.7322862">East 6th</a>.
        </p>
        <h3>Master the Art of Finesse</h3>
        <p>
          Brush up on those <a href="https://www.amazon.com/How-Win-Friends-Influence-People/dp/1439167346/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=">How to Win Friends and Influence People</a> skills because you’re definitely going to need them! Downtown Austin transforms into a cool mesh network of interesting archetypes. You will meet all sorts of creative people, from local artists to celebrities. Strike up a conversation and build your social capital. When I went in 2014, I had a conversation with a woman who was taking a smoke break outside the Palladia House and managed to get myself into seeing Tove Lo. Creating a South By network is important, it will ease you in getting into events and keeping you in the loop.
        </p>
        <h3>Day Time Activities</h3>
        <p>
          During the technology and film portion of South By, there are many fun things to do during the day. Paramount and Slate theaters will have the red carpet rolled out for screenings and usually, the stars of the films are also there. Check out Fast Company Grill, they have guest panels consisting of actors, directors, comedians, etc. Not only is there free food, but you’ll have a chance to interact with the panel speakers. Include the Google Fiber House on your list as well, I went there and played an arcade claw machine filled up with Google products and managed to win a free Google Nexus phone. Besides those two places, be sure to walk around Congress Ave., Rainey Street, and the Second Street District during the day. There are many cool things to see, like giant art installations, such as the life-size Star Wars’ TIE fighter they had last year. Unlike the music portion, lines are not long and you’ll have a better chance to score free swag during the technology and film portion too.<br /><br/>When the music portion of South By kicks in, it’s a different game; that feeling of FOMO I was describing you about earlier hits hard during this time. There will be multiple artists that you want to see all playing at the same time. The lines will be outrageously long and the ‘surprise’ concerts, which location gets tweeted out a few hours prior to general admission, will also have long lines. My advice, go early in the morning if you want to be at the popular houses, such as Spotify House, and be prepared to spend the majority of your day there. If you can go without seeing the mainstream artists, I would recommend checking out the less popular acts. 6th Street, Red River, and East 6th are where the majority of the popular venues are.
        </p>
        <h3>Night Time Activities</h3>  
        <p>
          If you’re already in a popular house, such as the Spotify House, YouTube House, or Pandora House I would suggest you stay there. You’ve done the hard job in getting in and now enjoy the fruits of your patience. If you’re not in one of the popular houses, seek out less popular venues. For example, last year my friends and I saw Aluna Goerge at the Hype Hotel with ease. And if you still have energy, there are plenty of after hour events to go to as well.</p>
        <h3>Who to Follow, Which Apps to Use, and RSVP'ing</h3>
        <p>Follow these Twitter accounts and enable push notifications for them:</p>
        <ul className="socialMedia">
          <li><a href="https://twitter.com/sxswpartylist?lang=en">SxSwPartyList</a></li>
          <li><a href="https://twitter.com/thefader?lang=en">TheFader</a></li>
          <li><a href="https://twitter.com/CameronAtSx?lang=en">CameronAtSx</a></li>
          <li><a href="https://twitter.com/thefreenoms">FreeNoms</a></li>
        </ul>
        <p>Which Apps to Use</p>
        <ul className="socialMedia">
          <li><a href="https://www.sxsw.com/mobile/">Official SxSw App</a></li>
          <li>Twitter</li>
        </ul>
        <p>
        RSVP'ing <br></br><br></br> There is a site called, ‘<a href="http://rsvpster.com/">RSPVster</a>’ which is a service you can pay for which automatically RSVPs you to all the unofficial events. I used this last time and it worked out pretty good for me. Use a secondary email address as they will flood your inbox with emails. And if you are going with a group of friends, have one friend sign up and share out the RSVP links between your friends.
           
        </p>
      </div>
    )
  }
}

export default Blog;