
let hr = React.createElement('hr');

let h2 = React.createElement('h2', {
    className: 'h2Style'
}, 'Topics covered');

let a = React.createElement('a', {
    href: '#'
}, ' Getting started with the web');

let b = React.createElement('a', {
    href: '#'
}, ' HTML — Structuring the web ');

let c = React.createElement('a', {
    href: '#'
}, ' CSS-Styling the web');

let p1 = React.createElement('p', {
    className: 'paragraph '
},'The following is a list of all the topics we cover in the MDN learning area.');
let p2 = React.createElement('p', {
    className: 'paragraph '
},a, 'Provides a practical introduction to web development for complete beginners');
let p3 = React.createElement('p', {
    className: 'paragraph '
}, b,'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');

let p4 = React.createElement('p', {
    className: 'paragraph '
},c, 'CSS is the language that we use to control our web contents style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.');


let div = React.createElement('div', {
    className: "divStyle"
}, [hr, h2, p1, p2, p3,p4]);

ReactDOM.render(div, document.getElementById('root'));