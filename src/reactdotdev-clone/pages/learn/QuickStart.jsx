function QuickStart() {
  return (
    <>
      <h1>Quick Start</h1>
      <h3 className="normal">
        Welcome to the React documentation! This page will give you an
        introduction to 80% of the React concepts that you will use on a daily
        basis.
      </h3>
      <div className="highlighted">
        <h2 className="normal">You Will Learn:</h2>
        <ul className="keep-bullets">
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
        </ul>
      </div>
      <h2 className="normal">Creating and nesting components</h2>
      <p>
        React apps are made out of components. A component is a piece of the UI
        (user interface) that has its own logic and appearance. A component can
        be as small as a button, or as large as an entire page.
      </p>
      <p>React components are JavaScript functions that return markup:</p>
      <pre>
        {`function MyButton() {
  return (
    <button>I'm a button</button>
    );
  }`}
      </pre>
      <p>
        Now that you’ve declared <code>MyButton</code>, you can nest it into
        another component:
      </p>
      <pre>
        {`export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}
      </pre>
      <p>
        Notice that <code>{"<MyButton />"}</code> starts with a capital letter.
        That’s how you know it’s a React component. React component names must
        always start with a capital letter, while HTML tags must be lowercase.
      </p>
      <p>
        The <code>export default</code> keywords specify the main component in
        the file.
      </p>
      <h2 className="normal">Writing markup with JSX</h2>
      <p>
        The markup syntax you’ve seen above is called JSX. It is optional, but
        most React projects use JSX for its convenience.
      </p>
      <p>
        JSX is stricter than HTML. You have to close tags like{" "}
        <code>{"<br />"}</code>. Your component also can’t return multiple JSX
        tags. You have to wrap them into a shared parent, like a{" "}
        <code>{"<div>...</div>"}</code> or an empty <code>{"<>...</>"}</code>
        wrapper:
      </p>
      <pre>
        {`function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}`}
      </pre>
      <h2 className="normal">Adding styles</h2>
      <p>
        In React, you specify a CSS class with <code>{"className"}</code>. It
        works the same way as the HTML <code>{"class"}</code> attribute:
      </p>
      <pre>{`<img className="avatar" />`}</pre>
      <p>Then you write the CSS rules for it in a separate CSS file:</p>
      <pre>
        {`/* In your CSS */
.avatar {
  border-radius: 50%;
}`}
      </pre>
      <p>
        React does not prescribe how you add CSS files. In the simplest case,
        you’ll add a <code>{"<link>"}</code> tag to your HTML. If you use a
        build tool or a framework, consult its documentation to learn how to add
        a CSS file to your project.
      </p>
      <h2 className="normal">Displaying data</h2>
      <p>
        JSX lets you put markup into JavaScript. Curly braces let you “escape
        back” into JavaScript so that you can embed some variable from your code
        and display it to the user. For example, this will display{" "}
        <code>{"user.name"}</code>:
      </p>
      <pre>
        {`return (
  <h1>
    {user.name}
  </h1>
);`}
      </pre>
      <p>
        You can also “escape into JavaScript” from JSX attributes, but you have
        to use curly braces instead of quotes. For example,{" "}
        <code>{`className="avatar"`}</code>
        passes the "avatar" string as the CSS class, but{" "}
        <code>{"src={user.imageUrl}"}</code>
        reads the JavaScript <code>{"user.imageUrl"}</code> variable value, and
        then passes that value as the <code>{"src"}</code> attribute:
      </p>
      <pre>
        {`return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);`}
      </pre>
      <p>
        You can put more complex expressions inside the JSX curly braces too,
        for example, string concatenation:
      </p>
      <pre>
        {`const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}`}
      </pre>
      <p>
        In the above example, <code>{"style={{}}"}</code> is not a special
        syntax, but a regular
        <code>{"{}"}</code> object inside the <code>{"style={}"}</code> JSX
        curly braces. You can use the <code>{"style"}</code> attribute when your
        styles depend on JavaScript variables
      </p>
      <h2 className="normal">Conditional rendering</h2>
      <p>
        In React, there is no special syntax for writing conditions. Instead,
        you’ll use the same techniques as you use when writing regular
        JavaScript code. For example, you can use an <code>{"if"}</code>{" "}
        statement to conditionally include JSX:
      </p>
      <pre>
        {`let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);`}
      </pre>
      <p>
        If you prefer more compact code, you can use the conditional{" "}
        <code>{"?"}</code> operator. Unlike if, it works inside JSX:
      </p>
      <pre>
        {`<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>`}
      </pre>
      <p>
        When you don’t need the <code>{"else"}</code> branch, you can also use a
        shorter logical <code>{"&&"}</code> syntax:
      </p>
      <pre>
        {`<div>
  {isLoggedIn && <AdminPanel />}
</div>`}
      </pre>
      <h2 className="normal">Rendering lists</h2>
      <p>
        You will rely on JavaScript features like <code>{"for"}</code> loop and
        the array <code>{"for"}</code> function to render lists of components.
      </p>
      <p>For example, let’s say you have an array of products:</p>
      <pre>
        {`const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];`}
      </pre>
      <p>
        Inside your component, use the <code>{"map()"}</code> function to
        transform an array of products into an array of <code>{"<li>"}</code>{" "}
        items:
      </p>
      <pre>
        {`const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);`}
      </pre>
      <p>
        Notice how <code>{"<li>"}</code> has a <code>{'key'}</code> attribute. For each item in a list, you
        should pass a string or a number that uniquely identifies that item
        among its siblings. Usually, a key should be coming from your data, such
        as a database ID. React uses your keys to know what happened if you
        later insert, delete, or reorder the items.
      </p>
      <pre>
        {`const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
`}
      </pre>
    </>
  );
}

export default QuickStart;
