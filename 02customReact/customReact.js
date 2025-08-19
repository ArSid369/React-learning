function customRender(reactElement, mainContainer) {
    /*
    // Create the DOM html element based on the reactElement type
    const domElement = document.createElement(reactElement.type)
    // set the contents
    domElement.innerHTML = reactElement.children
    // define attributes
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    // append to the main container
    mainContainer.appendChild(domElement) 
    */
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
   };


//react jsx object
const reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    children: 'Visit Google'
};

//hooks root element
const mainContainer = document.querySelector('#root');

export default customRender(reactElement, mainContainer);