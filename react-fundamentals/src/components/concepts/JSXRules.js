import React from "react"; //see line 39. This needs to be imported or React wont work

const JSXRules = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not required</dt>
                    <dd>You can write in vanilla JS, but most people use JSX</dd>
                </dl>
            </div>
            <div>
                <NormalComponent />
            </div>
            <div>
                <CreateElementComponent />
            </div>
        </div>
    );
};

const NormalComponent = () => {
    return (
        <div style={{ border: '2px solid black' }}>
            <h1>Normal Function Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src='https://miro.medium.com/max/5736/1*Th_2G92t3x5mARCCuFE_Dg.jpeg' alt='alt_text' style={{ width: '350px', height: '250px' }} />
        </div>
    )
}

const CreateElementComponent = () => {
    return (
        React.createElement('div', { style: { border: '2px solid black' } },
            React.createElement('h1', null, 'Create Element Component'),
            React.createElement('p', null, 'This was constructed with createElement() in the return'),
            React.createElement('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIl6syJbYr2isoQNP7Uph6ihItnYAMA8b1Hg&usqp=CAU', style: { width: '350px', height: '250px' } }, null)
        )
    )
};
export default JSXRules;

/* Differences to be Aware Of
JSX allows us to write our JavaScript and HTML (sort of) in the same file.  This allows us to write more organized code, as any JavaScript and HTML
 that need to talk to each other can do so in the same file.  There are some differences to notes between JSX and HTML, and we highlight a few of them below:

---'className' instead of 'class'--Because 'class' is a reserved word in JavaScript, we can assign classes to our JSX elements with the 'className' attribute.

---Event handler differences--React camel cases all of its event handler names, unlike HTML.  For instance, React gives us access to 'onChange' rather than '
onchange', or 'onClick' instead of 'onclick'.  There are more event handlers out there, but React camel cases them.

---JavaScript interpolation.  We saw this a few pages ago, but JSX allows us to write JavaScript within braces, { }, 
and it interprets that JS in the context of the JSX.  This allows us to use variables and function names directly inside our JSX code.  
We'll see later how this allows us to build more dynamic components. */