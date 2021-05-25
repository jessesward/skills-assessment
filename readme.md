## Skills Assessment

Fork the repo and create the HTML, CSS, and JavaScript for the widget as described in the [Contact List image](https://github.com/14four/skills-assessment/blob/master/contactListUpdated.jpg). It should take you about 3 hours, but you should try and complete it without taking an entire day. You will be asked to explain any places where your solution does not match the spec. Please target modern browsers, do not use images, and bonus points for graceful degradation and legacy support solutions. We wish to assess your CSS skills, so don't use a CSS Framework like Bootstrap or Foundation, they have their place, but this is not it. JQuery is not needed to complete this exercise, we would like to assess your Javascript skills without the use of this library.

Please code the page according to industry best practices and organize the assets as you would if delivering it to a client to integrate (not necessarily to deploy).

Bonuses: Keep it simple, don't overuse JavaScript. Prioritize modern browsers - graceful degredation is our friend.

### Resources

- [Contact List JPEG](https://github.com/14four/skills-assessment/blob/master/contactListUpdated.jpg)
- [Contact List PSD](https://github.com/14four/skills-assessment/blob/master/contactListUpdated.psd?raw=true) (right click and save)

![Screen](https://github.com/14four/skills-assessment/raw/master/contactListUpdated.jpg)

## My Solution

I assumed that the contact information would be fed from some API or database, and populated with javascript. This removes the dependency on a particular templating engine. Downside is if JS isn't enabled on a browser, you're not going to see anything.

I built the widget using modern JS with modules, but with a compiler (I used Snowpack), it works back to IE10. Normally I would have used CSS3 variables as well, but those aren't supported in IE11 so I just hard-coded the colors/sizes.

Demo can be viewed [here](https://trusting-swanson-12953f.netlify.app/)
