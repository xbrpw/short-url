const { floor, random } = Math;
const { innerWidth } = window;
const range = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => i);
const randomInt = (max) => floor(random() * max);
const randomItem = (arr) => arr[randomInt(arr.length)];
const people = [
  {
    name: "Allissa Kyte",
    avatarUrl:
      "https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Marie Goulding",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Georgie Arthur",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Edward Clifford",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Kaeden Christian",
    avatarUrl:
      "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Derrick Page",
    avatarUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Ciaran Henry",
    avatarUrl:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  },
  {
    name: "Emme Hess",
    avatarUrl:
      "https://images.unsplash.com/photo-1544726787-41dac82ea614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
  }
];
const postDates = [
  "just now",
  ...range(60).map((i) => `${i}m`),
  ...range(24).map((i) => `${i}h`),
  ...range(7).map((i) => `${i}d`),
  ...range(4).map((i) => `${i}w`)
];
var app = new Vue({
  el: "#app",
  data: {
    posts: range(40).map((i) => ({
      key: i,
      user: randomItem(people),
      text: paragraph(),
      title: randomSentence(false, false, true),
      tags: range(randomInt(5)).map(() => randomWord()),
      img: `https://picsum.photos/seed/${random()}/${innerWidth}/${floor(
        (innerWidth / 16) * 9
      )}`,
      likes: randomInt(200),
      date: randomItem(postDates),
      showImage: random() > 0.3,
      showTitle: random() > 0.3,
      comments:
        random() > 0.5
          ? []
          : range(randomInt(3)).map(() => ({
              user: randomItem(people),
              text: paragraph()
            })),
      totalComments: 3 + randomInt(20)
    })),
    trends: range(5).map(() => ({
      word: randomWord(),
      posts: 5000 + randomInt(5000)
    }))
  }
});
