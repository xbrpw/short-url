# Swipe, and delete action for mobile devices

A Pen created on CodePen.io. Original URL: [https://codepen.io/takaneichinose/pen/yLVJEWm](https://codepen.io/takaneichinose/pen/yLVJEWm).

# #CodepenChallenge Disappear: Swipe, and delete action for mobile devices

This is for the second week of [Codepen challenge Action!: Disappear](https://codepen.io/challenges/2021/february/)

## Description

Example interactive design for data list.

The design is based on the latest trend 'glassmorphism' design.

This design and action is more optimized for mobile devices. Although, the interactivity will also respond to mouse click event.

When you swipe a data to left or right, you would be able to see the delete button. When you click on it, the data will be disappear from the list (or deleted).

I tried to make the disappearance having a 'dispersed' effect, by adding ```opacity: 0;``` and ```filter: blur(5rem)``` to the CSS.

I also added some micro interactions on the other elements, although they're not working.

The 'menu' button will be a 'x' mark, and menu list will appear when clicked.

The search icon will extend, and then the handle of magnifier will be a 'x' mark. Clicking the 'x' mark will clear the data.

The tabs menu will change its active state when clicked.

---

I used [React JS](https://reactjs.org/) to create all these interactions, so Javascript must be active to see the actual design.

This is my first time to use [React hooks](https://reactjs.org/docs/hooks-intro.html), so there is a chance that I misuse its usage. Though I read the [Rules](https://reactjs.org/docs/hooks-rules.html) before proceeding.

The only function of the hook I used is the [useState](https://reactjs.org/docs/hooks-state.html) hook.

```Javascript
const [test, setTest] = useState("");

setTest("test");
```

---

I used [Font Awesome](https://fontawesome.com/) for the icons at the bottom menu, and the delete button.

---

## Resources

Javascript library: [ReactJS](https://reactjs.org/)

Fonts: Open Sans (Look at 'Assets/Fonts')

Icons: [Font Awesome](https://fontawesome.com/)