gsap.registerPlugin(Draggable, InertiaPlugin, Flip);

const items = gsap.utils.toArray(".item");
const bgs = gsap.utils.toArray(".bg1, .bg2, .bg3");
gsap.set([bgs[0], bgs[1]], { scale: 2, opacity: 0 });

const panal = document.querySelector(".content-body");
const cards = document.querySelector(".item-list");
const spacer = document.createElement("div");
let bgIndex = bgs.length - 1;
let itemIndex;

function activate(index) {
  if (!items[index]) {
    return;
  }
  let item = items[index],
    img = item.querySelector(".item-img"),
    description = item.querySelector(".item-description"),
    itemGetter = gsap.getProperty(item),
    state = Flip.getState([item, img, description], {props: "borderRadius,maxWidth,zIndex"});
  // swap a spacer <div> into the item's spot, matching its width/height/marginLeft/marginRight to avoid collapsing
  gsap.set(spacer, {width: itemGetter("width"), height: itemGetter("height"), marginLeft: itemGetter("marginLeft") + "px", marginRight: itemGetter("marginRight") + "px"});
  item.parentNode.insertBefore(spacer, item);
  panal.appendChild(item);
  item.classList.add("active");
  // do a Flip animation to make it appear as if it was in the prior state
  Flip.from(state, {duration: 0.5, ease: "power1.inOut", nested: true});
  itemIndex = index;
  setTimeout(() => item.addEventListener("click", deactivate), 100); // since we're calling this from within a click event handler, wait 100ms before listening for another one to avoid an immediate trigger.
}

function deactivate() {
  let item = items[itemIndex],
    img = item.querySelector(".item-img"),
    description = item.querySelector(".item-description"),
    state = Flip.getState([item, img, description], {props: "borderRadius,maxWidth"});
  spacer.parentNode.insertBefore(item, spacer);
  spacer.parentNode.removeChild(spacer);
  item.classList.remove("active");
  Flip.from(state, {duration: 0.5, ease: "power1.inOut", nested: true});
  itemIndex = null;
  item.removeEventListener("click", deactivate);
}

Draggable.create((panal, cards), {
  type: "x",
  edgeResistance: 0.5,
  snap: { x: [0, -360, -680] },
  zIndexBoost: false,
  onDragEnd: function () {
    let index = this.endX === 0 ? 2 : this.endX === -360 ? 1 : 0;
    gsap.to(bgs, {
      scale: i => i === index ? 1 : 2,
      opacity: i => i === index ? 1 : 0
    });
  },
  onClick(e) {
    activate(items.indexOf(e.target.closest(".item")));
  },
  inertia: true,
  allowContextMenu: false,
  bounds: {
    minX: -cards.offsetWidth + panal.offsetWidth,
    maxX: 0
  },
});