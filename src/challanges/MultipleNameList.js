//The challenge here is to use a couple of things we have already taught you, to
//create a multiple-user list component.

//Global hint when dealing with complex data types, keep in mind that mutations will
//not update our state, have a look at the material talking about this in (lesson 2 material)
//Try and create a separate component file when you feel the need to do so.

//Difficulty level 1
//Requirements
//1. Keep it simple, just focus on the user name, no additional information
//2. It should look something like this: https://github.com/codinsandbox/learn-react-squad-omega-1/blob/main/initial%20component.PNG
//this is meant to be the base component, just to have a starting idea, you will be responsible for how it will evolve from here :)
//3. What we want to aim for here is to have the ability to keep adding new users to our list
//Hints
//Remember destructuring (see lesson 1 material)
//Remember array methods (see lesson 1 material - 1 specific method needs to be used here)
//kyes - should mean something to you when dealing with a specific way of using an array method
//and maybe some sort of index can be used in this regard for now?

//Difficulty level 2
//Requirements
//1. All of the above done, now try to switch your user collection to an array that holds a more complex
//data type for each user, maybe think about having an id there?
//2. Now we would like to have the possibility of editing our users/updating them,
//we are still only focusing on the names
//Hints
//Again destructuring here will help you allot
//Also comparators between 2 values == or ===
//Remember the use of props and how they can be passed from a parent component to a child
//Anything can be a prop, from functions to data
//Maybe we can use the new ids instead of some index in some key situations?

//Difficulty level 3
//Requirements
//1. How about adding more data to our users? (mail, age, etc) - I would have a look at inputs and forms
//see what different attributes I could use (see material from lesson 2)
//2. Handle updates for all the new fields
//3. Possibility of removing a user? - maybe another array method could help here?
//4. Maybe have a label next to each element
//Name: Boby
//Age: 22
//Email: bobsy@mail.com
//5. Show the data only if it's available - no empty label if the data is not there
//Here you should see how conditional rendering works
// {someBoolean ? <Component_1 /> : <Component_2 />} - see extra: conditional rendering (lesson 2 material)

//Difficulty level 4
//Well if you got this far very good!
//Requirements
//1. Let's have a state for our displayed users that allow us to switch between read-only view
//and an editing view - maybe conditional rendering can help us here to toggle between the states?
//2. Detect if an email for a user already exists and prevent the creation of a user with such a condition
//maybe switch the button to a different color? different text?
//3. Condition what can be edited and what can't within the user editing view - maybe prevent the editing of the email?
//4. Add a sorting button that when pressed rearranges the user list in an alphabetical order
//if you want to be cooler maybe make it adjustable by different filters :)

//And that's it not all challenges are needed to be done! do whatever you feel comfortable doing! styling is not the focus but
//you can play with it if you want :)
