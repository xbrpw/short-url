import React, { useRef, useEffect, useState, memo } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = ['#2ecc71', '#3498db', '#e67e22', '#e67e22', '#e74c3c'];
const TOP_OFFSET = window.innerHeight;
const LEFT_OFFSET = 150;

const randomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const randomColor = () => COLORS[randomNumber(0, COLORS.length)];

const Particle = ({ children, size }) => {
  const ref = useRef();
  const child = React.Children.only(children);
  const top = randomNumber(-200, -size[1]);

  useEffect(() => {
    ref.current.style.setProperty('--x', `${randomNumber(-LEFT_OFFSET, LEFT_OFFSET)}px`);
    ref.current.style.setProperty('--y', `${window.innerHeight - top + randomNumber(0, 300)}px`);
    ref.current.style.setProperty('--rotate', `${randomNumber(200, 3000)}deg`);
  }, []);

  return React.cloneElement(child, { ref, style: {
      '--color': randomColor(),
      '--size': `${randomNumber(...size)}px`,
      '--rotate': '0deg',
      '--x': '0px',
      '--y': '0px',
      top: top,
      left: randomNumber(0, window.innerWidth) } });

};

const CircularParticle = () => /*#__PURE__*/
React.createElement(Particle, { size: [5, 10] }, /*#__PURE__*/
React.createElement("div", { className: "particle circular" }));



const RectangularParticle = () => /*#__PURE__*/
React.createElement(Particle, { size: [5, 10] }, /*#__PURE__*/
React.createElement("div", { className: "particle rectangular" }));



const SquiggleParticle = () => /*#__PURE__*/
React.createElement(Particle, { size: [15, 45] }, /*#__PURE__*/
React.createElement("svg", { className: "particle squiggle",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 200" }, /*#__PURE__*/
React.createElement("path", { d: "M15 0 Q 30 25 15 50 Q 0 75 15 100 Q 30 125 15 150 Q 0 175 15 200" })));




const Particles = memo(({ count: n }) => {

  const particles = [];
  const types = [SquiggleParticle, RectangularParticle, CircularParticle];

  while (n--) {
    const Particle = types[randomNumber(0, 3)];
    particles.push( /*#__PURE__*/
    React.createElement(Particle, { key: n }));

  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "particles" },
    particles));


});

let id = 1;
const App = () => {
  const [particles, setParticles] = useState([]);
  const { innerWidth } = window;

  const handleOnClick = () => {
    const _id = id;
    id++;

    setParticles(particles => [...particles, _id]);
    setTimeout(() => {
      // Cleanup
      setParticles(particles => particles.filter(id => id !== _id));
    }, 5000);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "app" },
    particles.map((id) => /*#__PURE__*/
    React.createElement(Particles, { key: id, count: Math.floor(innerWidth / 10) })), /*#__PURE__*/

    React.createElement("div", { className: "button", onClick: handleOnClick }, /*#__PURE__*/
    React.createElement("div", { className: "popper" }), "CLICK ME!")));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.body);