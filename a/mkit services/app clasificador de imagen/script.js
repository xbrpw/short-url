const loadImage = (event, type) => {
  return new Promise((resolve, reject) => {
    const { files } = event[type === "browse" ? "target" : "dataTransfer"];
    if (files && files[0]) {
      const selectedFile = files[0];
      const reader = new FileReader();
      reader.addEventListener("load", e => {
        const src = e.target.result;
        resolve(src);
      });
      reader.addEventListener("error", () => {
        reject({ at: "load" });
      });
      reader.readAsDataURL(selectedFile);
    } else {
      reject({ at: "init" });
    }
  });
};

var app = new Vue({
  el: "#app",
  data: {
    imgUrl:
      "https://raw.githubusercontent.com/ml5js/ml5-examples/development/p5js/ImageClassification/ImageClassification/images/bird.jpg",
    classifierReady: false,
    classifier: null,
    imageLoaded: false,
    image: null,
    showImage: true,
    showDetails: false,
    label: null,
    probability: null,
    results: [],
    classifyingInProcess: false
  },
  methods: {
    onFinishLoading: function(e) {
      this.imageLoaded = true;
      this.image = e;
      if (this.classifierReady) {
        this.classify();
      }
    },
    onUpload: function(event, type) {
      this.imageLoaded = false;
      this.image = null;
      this.showImage = true;

      loadImage(event, type).then(src => {
        this.imgUrl = src;
      });
    },
    loadClassifier: function() {
      this.classifierReady = false;
      ml5.imageClassifier("MobileNet").then(classifier => {
        (this.classifierReady = true), (this.classifier = classifier);
        if (this.imageLoaded) {
          this.classify();
        }
      });
    },
    classify: function() {
      this.classifyingInProcess = true;
      this.classifier.classify(this.$refs.image).then(results => {
        this.label = results[0].label;
        this.probability = results[0].confidence.toFixed(4);
        this.results = results;
        this.classifyingInProcess = false;
        this.showDetails = true;
      });
    },
    showUploadWindow: function() {
      this.image = null;
      this.showImage = false;
      this.showDetails = false;
    }
  },
  mounted() {
    this.loadClassifier();
  }
});