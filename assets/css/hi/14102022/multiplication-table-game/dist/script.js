function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import React, { useState, useEffect, useRef, memo } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getMissing = (size, difficulty) => {
  const missing = new Map();
  while (missing.size < size * size * difficulty - 1) {
    missing.set(`${random(1, size + 1)}.${random(1, size + 1)}`, null);
  }
  return missing;
};

const Cell = memo(({ r, c, focused, children }) => /*#__PURE__*/
React.createElement("div", { className: 'cell' + (r === 0 || c === 0 ? ' header' : '') + (focused.r === r && focused.c > c || focused.c === c && focused.r > r ? ' highlight' : '') },
children));



const EmptyCell = memo(({ r, c, missing, onChange, onFocus }) => {
  const value = missing.get(`${r}.${c}`);
  return /*#__PURE__*/(
    React.createElement("input", {
      type: "number",
      className: value === r * c ? 'correct' : 'incorrect',
      onFocus: () => onFocus({ r, c }),
      value: value || '',
      onChange: e => {
        const map = new Map(missing);
        map.set(`${r}.${c}`, parseInt(e.target.value));
        onChange(map);
      } }));

});

const NumberCell = memo(({ r, c }) => {
  if (c === 0 && r === 0) return 'X';
  if (r === 0) return c;
  if (c === 0) return r;
  return r * c;
});

const Board = memo(({ size, missing, focused, onFocus, onChange }) => /*#__PURE__*/
React.createElement("div", { className: "table", style: { '--cols': size + 1 } },
[...new Array(size + 1)].map((_, r) => [...new Array(size + 1)].map((__, c) => /*#__PURE__*/
React.createElement(Cell, _extends({ key: `${c}.${r}` }, { r, c, focused }),
c * r !== 0 && missing.has(`${r}.${c}`) ? /*#__PURE__*/
React.createElement(EmptyCell, { r, c, missing, onChange, onFocus }) : /*#__PURE__*/
React.createElement(NumberCell, { r, c }))))));






const Timer = ({ run, time, setTime }) => {
  const initial = useRef(Date.now());
  const interval = useRef();
  const format = num => String(num).padStart(2, '0');
  useEffect(() => {
    if (run) {
      initial.current = Date.now();
      interval.current = setInterval(() => {
        setTime(Math.floor((Date.now() - initial.current) / 1000));
      }, 100);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [run]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "timer" },
    format(Math.floor(time / 60)), ":", format(time % 60)));


};

const PanelItem = ({ label, text }) => /*#__PURE__*/
React.createElement("div", { className: "panel-item" }, /*#__PURE__*/React.createElement("span", null, label), text);


const Panel = ({ size, difficulty, missing, done, setDone }) => {
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(null);
  const onClick = e => {
    setDone(d => !d);
    if (!done) {
      let correct = 0;
      missing.forEach((value, key) => {
        const s = key.split('.');
        correct += parseInt(s[0]) * parseInt(s[1]) === value;
      });
      const coefficient = correct * size * (1 + difficulty);
      const score = Math.ceil(coefficient + Math.pow(coefficient, 2) / Math.max(1, time));
      setScore(score);
      party.sparkles(e.target, { count: 50 });
    } else {
      setScore(null);
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "panel" }, /*#__PURE__*/
    React.createElement(Timer, _extends({ run: !done }, { time, setTime })), /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement(PanelItem, { label: "Remaining", text: Array.from(missing.values()).filter(v => v === null).length }), /*#__PURE__*/
    React.createElement(PanelItem, { label: "Score", text: score !== null ? score : '----' })), /*#__PURE__*/

    React.createElement("button", { onClick: onClick }, done ? 'Start' : "I'm Done!")));


};

const Controls = ({ done, difficulty, setDifficulty, size, setSize }) => {
  const [v, s] = useState(size);
  const onSizeChange = e => setSize(parseInt(e.target.value));
  return /*#__PURE__*/(
    React.createElement("div", { className: 'controls' + (done ? '' : ' disabled') }, /*#__PURE__*/
    React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Difficulty:"), " ", difficulty * 100, "%"), /*#__PURE__*/
    React.createElement("input", { type: "range", value: difficulty * 100, onChange: e => setDifficulty(parseInt(e.target.value) / 100), min: 10, max: 90, step: 10 }), /*#__PURE__*/
    React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Board Size:"), " ", v, "X", v), /*#__PURE__*/
    React.createElement("input", { type: "range", value: v, onChange: e => s(e.target.value), onMouseUp: onSizeChange, onTouchEnd: onSizeChange, min: 3, max: 30, step: 1 })));


};

const App = () => {
  const [done, setDone] = useState(true);
  const [focused, setFocused] = useState({});
  const [missing, setMissing] = useState(new Map());
  const [difficulty, setDifficulty] = useState(0.3);
  const [size, setSize] = useState(8);

  useEffect(() => {
    setFocused({});
    if (!done) {
      setMissing(getMissing(size, difficulty));
    }
  }, [done]);

  return /*#__PURE__*/(
    React.createElement("div", { className: 'app' + (done ? ' done' : '') }, /*#__PURE__*/
    React.createElement(Board, { size, missing, focused, onFocus: setFocused, onChange: setMissing }), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Controls, { done, difficulty, setDifficulty, size, setSize }), /*#__PURE__*/
    React.createElement(Panel, { size, difficulty, missing, done, setDone }))));



};

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.body);