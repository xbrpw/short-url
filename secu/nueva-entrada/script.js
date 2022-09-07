// Requires an ES2015-compliant-enough browser (`const`, destructuring assignment of objects, & shorthand methods)

// Container Module
window.Blog = (function BlogSetup(React, markdownit) {
  "use strict";
  
  const md = markdownit();
  const PT = React.PropTypes;
  const {article, div, header, h1, fieldset, form, input, label, legend, section, span, textarea} = React.DOM;
  
  return React.createClass({
    propTypes: {
      title   : PT.string,
      content : PT.string
    },
    
    getInitialState() {
      return {
        title   : this.props.initialTitle,
        content : this.props.initialContent
      };
    },
    
    titleChange(e) {
      this.setState({title: e.target.value});
    },
    
    contentChange(e) {
      this.setState({content: e.target.value});
    },
    
    blogForm() {
      return form({className: "blog-form"},
        fieldset(null,
          legend(null, "Nueva entrada"),
          label(null,
            span(null, "Titulo"),
            input({ type        : "text"
                  , placeholder : "Titulo de la publicación"
                  , onInput     : this.titleChange
                  , value       : this.state.title
                  })
          ),
          label(null,
            span(null, "Content"),
            textarea({ placeholder : "Venga, ánimo, vámos a empezar."
                     , onChange    : this.contentChange
                     , value       : this.state.content
                     })
          )
        )
      );
    },
    
    blogRenderer() {
      return article({className: "blog-renderer"},
        header(null, 
          h1(null, this.state.title)
        ),
        section({
           dangerouslySetInnerHTML: {
             __html : md.render(this.state.content)
           }
        })
      );
    },
    
    render() {
      return div({className: "blog-app"},
        this.blogForm(),
        this.blogRenderer()
      )
    }
  });
}(this.React, this.markdownit));

console.log(Blog)

(function blogScenario(document, React, Blog) {
  "use strict";
  
  React.render(React.createElement(Blog, {
    initialTitle   : "Feliz día del maestro",
    initialContent : "Para 2023 celebraremos el Día del Maestro en lunes, si lunes 15 de mayo 2023"
  }), document.getElementById("container"));
}(document, React, Blog));