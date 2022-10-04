# Custom Properties based Parallax

A Pen created on CodePen.io. Original URL: [https://codepen.io/Hornebom/pen/xdXVxK](https://codepen.io/Hornebom/pen/xdXVxK).

While researching about CSS custom properties I had the idea of building a parallax site based mostly on CSS. A first test can be found here ( http://codepen.io/Hornebom/pen/bWrXoW )

The approach was to leave most of the calculation of positioning the single elements to the browser itself. By changing just 6 css 'variables', which are used as basis for transforms, I want to overcome the common practice of updating inline styles on every parallax item.

Seems as in Firefox it's not possible to use custom properties for transforms on pseudo elements