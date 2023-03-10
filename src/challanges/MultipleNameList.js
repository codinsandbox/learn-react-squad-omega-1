//The challange here is to use a couple of things we have already tought you, to
//create a multiple user list component. 

//Global hint when dealing with complex data types, keep in mind that mutations will
//Try and create a separate component file when you feel the need to do so.

//not update our state, have a look at the material talking about this in (lesson 2 material)
//Dificulty lvl 1
//Requirements
//1. Keep it simple, just focus on the user name, no additional information
//2. It should look something this:
//3. What we want to aim for here is to have the ability to keep adding new users to our list
//Hints
//Remember destructuring (see lesson 1 material)
//Remember array methods (see lesson 1 material - 1 specific method needs to be used here)
//kyes - should mean something to you when dealing with a specific way of using a array method
//and maybe some sort of index can be used in this regard for now?

//Dificulty lvl 2
//Requirements
//1. All of the above done, now try to switch your user collection to an array that holds a more complex
//data type for each user, maybe think about having an id there?
//2. Now you we would like to have the posibility of editing our users/updating them, 
//we are still only focusing on the names
//Hints
//Again destructuring here will help you allot
//Also comparators between 2 values == or ===
//Remember the use of props and how they can be passed from a parrent component to a child
//Anything can be a prop, from functions to data
//Maybe we can use the new id's instead of some index in some key situation?

//Dificulty lvl 3
//Requirements
//1. How about adding more data to our users? (mail, age, etc) - I would have a look at inputs and forms
//see what different attributes I could use (see material from lesson 2)
//2. Handle updates for all the new fields
//3. Posibility of removing a user? - maybe another array method could help here?
//4. Maybe have a label next to each element
//Name: Boby
//Age: 22
//Email: bobsy@mail.com
//5. Show the data only if its avalible - no empty label if data is not there
//Here you should see how conditional rendering works
// {someBoolean ? <Component_1 /> : <Component_2 />} - see extra: conditional rendering (lesson 2 material)

//Dificulty lvl 4
//Well if you got this far very good!
//Requirements
//1. Lets have a state for our displayed users that allows us to switch between read a only view
//and a editing view - maybe conditional rendering can help us here to toggle between the states?
//2. Detect if a email for a user already exists and prevent the creation of a user with such a condition
//maybe switch the button to a different color? different text?
//3. Condtion what can be edited and what cant within the user editing view - maybe prevent the editing of the email?
//4. Add a sorting button that when pressed rearranges the user list in a alfabetical order 
//if you want to be more cool maybe make it adjustable by diferent filters :)

//And thats it not all challanges are needed to be done! do what ever you feel confortable doing! styling is not the focus but
//you can play with it if you want :)

