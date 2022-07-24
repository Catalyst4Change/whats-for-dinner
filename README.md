"What's For Dinner?" solo project
Turing 2207 Mod 1
developed by Catalyst

This website was designed to releive the user of the burden of chosing what to make for dinner. 
At Iteration 0, it replicates the visual reference with a image background, header, and two dialog boxes. Having been initially intimidated by CSS & HTML, I'm proud of the way this came out. I'm aware FlexBox is doing most of the heavy lifting here, but it looks great.

At iteration 1, functionality is implimented. The meal type radio buttons recieve input, captured when the "Let's Cook!" button is pressed. It then chooses randomly from the respective meal type array and displays the result. This works regardless of what radio is chosen and displays one of each array when a full meal is indicated. This text replaces the cookpot vector image when implimented.

Iteration 2 was a partial success*. It is also a technical failure. My stretch-goal was to sort each meal selection by subcategories. I started by changing the meal strings into meal objects containing boolean values of each style of cookery.
I was hoping to capture the meal choice and pass that entire array to a function that would splice out any meal objects whose relevant keys return false, according to the style-choice radio selection. The mutated array would finally be sent to the function that chooses a random meal from that now curated array.

* I did not accomplish my goal of sorting the meals by subcatagory. However, in the process of trying I taught myself a lot about exponential convolutions - meaning I made it so complicated I couldn't figure out how to do what I wanted. I can't even imagine how I would sort and display the 'whole meal' option. With more time, instructuion, and help, I believe I could eventually figure this out.
My biggest issue in this project was trying to get the right information from the HTML radio buttons. They never seemed to return the data format that I expected. I also had to re-invoke the buttons' .value variable at every step, making the code very un-DRY. Whenever I tried to make it a global variable and reference it later, it returned undefined.
I left my goofy, broken code for review. I would be happy with guidance to make it work. I think I'm pretty close. Currently, the meal selection section still works great, but when a subcategory option is chosen, it will no longer generate meals.