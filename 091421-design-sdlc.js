Describe features or components developed before

Design pattern used in the daily work
https://www.uxpin.com/studio/blog/react-design-patterns/
Design patterns are repeatable solutions to commonly occurring problems in software development.
Design patterns not only speed up the development process but also make the code easier to read and to maintain. 
Some common examples of design patterns include the Singleton pattern and the Gang-of-Four pattern.

In software development, design patterns are associated with two common roles.
- Offer a common platform to developers
Singleton: This pattern postulates the use of a single object. 
Developers implementing this pattern can easily communicate to other developers that a particular program follows the singleton pattern and they will understand what this means. 
- Ensure best practices
Design patterns have been created as a result of extensive research and testing. 
They not only allow developers to become easily accustomed to the development environment but also ensure that the best practices are being followed.
This results in fewer errors and saves time during debugging and figuring out problems that could have been easily avoided if an appropriate design pattern had been implemented.

Unidirectional Data Flow
The pattern of applying one-way mutations on an immutable data state is called Unidirectional Data Flow.
React does not support bi-directional binding to make sure you are following a clean data flow architecture. 
The major benefit of this approach is that data flows throughout your app in a single direction, giving you better control over it. 
In terms of React it means: state is passed to the view and to child components.

JSX - Full power of javascript
reusable react components - richer user interfaces for web apps
These React components can be considered as a small system in itself. Each component has its own state, input as well as output. 
The input of a component is taken in the form of props. The component may be considered as a black box. Each having its own state and lifecycle. Components are easy to compose.
The final react app consists of a highly maintainable code.

Component - stateful, stateless
The state is simply the data that is imported into a component. 
In stateless components, you can not reach this.state inside it.  such components always render the same thing or only what is passed to them via props. 
For a hierarchy of components, the best practice is to let parent components keep as much state as possible and make stateless child components. Data can be passed down via props. 

Conditional Rendering
In the process of writing React components, the need often arises to render a certain JSX code based on the state. This is achieved through conditional rendering. 

Render Props
sharing code between React components using a prop

Controlled Components
handling form state.

The controlled component takes the state through props.  It can notify any changes by means of callbacks like onChange. 
Parent components can control it by handling the callback and managing its own state; meanwhile, the new values are passed to the controlled component as props.
React Hooks
create your own hooks. This allows you to extract the component logic and create reusable functions.




What is a design system? A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.



singleton pattern
In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system. The term comes from the mathematical concept of a singleton.
The Singleton is a design pattern used in object-oriented programming that ensures only a single instance of an object exists within a system at any given time. The singleton is useful for things like loggers, state managers, and other objects that need to be globally accessible across an application.

In object-oriented programming, a singleton class is a class that can have only one object (an instance of the class) at a time.


A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and in this way one can ensure that they don't accidentally create, say, two Users in a single User application.

We start with a design pattern called a singleton. It is one of the most well-known patterns, and therefore it is a good starting point. In its core, it restricts a class to have just one instance and ensures that it is globally accessible

By design, singletons create an instance of a class if it does not yet exist. Otherwise, they return the reference to an existing instance.

https://dev.to/bricourse/making-your-app-really-sexy-with-a-react-singleton-hook-2f9n

What is a singleton hook
Singleton hooks very similar to React Context in terms of functionality. Each singleton hook has a body, you might think of it as of Context Provider body. Hook has a return value, it’s similar to the value provided by context. Using a singleton hook from a component is like consuming a context.
Singleton hooks are lazy. The body is not executed until the hook is called by some component or other hook. Once loaded, the hook body remains loaded forever. If you want to eager-load some Singleton hooks, use them at the top-level component of your App.
Singleton hooks do not require a provider or a special App structure. Under the hood, it uses useState/useRef/useEffect and some less-known react features for performance and portability.
It’s possible to mix into single app Singleton hooks, React-Redux hooks api, React Context hooks and any custom


HOC in react, why do we need to use them?

takes a component and returns a new component under a certain reusing component logic pattern

const EnhancedComponent = higherOrderComponent(WrappedComponent);




When do you need to use a class component, when do you use a functional component?


JSX

Team

Software Engineering

https://www.ntaskmanager.com/blog/scrum-meetings/
https://stackify.com/what-is-sdlc/

Daily tasks, like daily standup, assign tickets to work on, reviews

Sprint, feature, module


Software development life cycle and daily work details
Do you have any questions for me?
