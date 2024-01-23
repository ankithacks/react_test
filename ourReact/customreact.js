function customRender(reactElement, container){
    // const domElement=document.createElement(reactelement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children'){
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactelement={
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to use google'
}
const maincontainer=document.querySelector('#root')


// the same thing is written in REACT as:- 
// import react from React;
const anotherUser="github"
const customElement=react.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'click me to start google',
    // if there is any variable injection to be done in react then after the above steps where the tree is formed, react does it as:-
    anotherUser
)

customRender(reactelement, maincontainer)