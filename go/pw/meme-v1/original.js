class Drawer {

  constructor(element, text = '') {
    // холст
    this.canvas = element;
    this.context = this.canvas.getContext('2d');
    this.padding = 10;
    // текст и шрифт
    this.text = text;
    this.fontSize = 30;
    this.context.font = `bold ${this.fontSize}px sans-serif`;
    this.context.textBaseline = 'top';
    // цвета
    this.textColor = '#151515';
    this.bgColor = '#FFF';
    this.context.textBaseline = 'center';
    this.textAlign = "center";
    // изображение
    this.image = null;
    this.imageLoaded = false;
    // первоначальная отрисовка
    this.render();
  }

  renderBackground() {
    this.context.fillStyle = this.bgColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  renderText() {
    this.context.fillStyle = this.textColor;
    this.context.fillText(this.text, this.padding, this.padding);
  }

  renderImage() {
    const imageRatio = this.image.width / this.image.height;
    const imageTop = this.padding * 2 + this.fontSize;
    // Простая отрисовка изображения по ширине холста
    this.context.drawImage(this.image, 0, imageTop, this.canvas.width, this.canvas.width / imageRatio);
  }

  setImage(src) {
    this.imageLoaded = false;
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
      this.render();
    };
    this.image.src = src;
  }

  readImage(file) {
    if (file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.onload = e => this.setImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      alert('Необхожимо загрузить изображение');
    }
  }

  setText(text) {
    this.text = text;
    this.render();
  }

  render() {
    this.renderBackground();
    this.renderText();
    if (this.imageLoaded) this.renderImage();
  }

  download() {
    var link = document.createElement('a');
    link.href = this.canvas.toDataURL('image/jpeg');
    link.download = 'picture.png';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }}



// DOM-элементы
const textInput = document.querySelector('input[type="text"]');
const fileInput = document.querySelector('input[type="file"]');
const canvas = document.querySelector('canvas');
const button = document.querySelector('button');

// Создаем экземпляр нашего "рисовальщика"
const drawer = new Drawer(canvas, textInput.value);

// Обработчик изменения текста в поле => перерисовать
textInput.addEventListener('keyup', function () {
  drawer.setText(textInput.value);
});

// Обработчик выбора файла => считать файл
fileInput.addEventListener('change', function (e) {
  const { files } = e.target;
  if (files && files.length) drawer.readImage(files[0]);
});

// Обработчик клика на кнопке => скачать
button.addEventListener('click', () => drawer.download());