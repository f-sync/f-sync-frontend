# F•sync 🚀

View our demo on [Devpost](https://devpost.com/software/f-sync)!
And the live deployed site: [f-sync.vercel.app](https://f-sync.vercel.app/)

Backend deployed: (https://f-sync-backend.dulanvee.repl.co)[https://f-sync-backend.dulanvee.repl.co]

## Inspiration ✨
Fashion has a waste problem. The fashion industry is responsible for 10% of annual global carbon emissions. The problem of excess product is endemic in the garment industry, now costing the US retail industry as much as $50 billion a year. It has led to constant discounting, dumping of unsold clothes to lower-income countries and in the worst case, stock destruction i.e. burning of perfectly wearable clothes.

So, we came up with F•sync.

F•sync aims to address this fashion waste issue by enabling an inventory management tool that provides an accurate view of a brand’s total inventory and can be easily shared with all retailers, giving them the possibility to request any item they need with just one click. Rather than directly ordering from brands whenever stock is out and forcing the brand to manufacture more products, retailers will be able to request unsold/excess stock from other retailers. So, fewer products are manufactured and potentially wasted as a result.

This project is inspired by API integrations for inventory management across platforms like Shopify and Woocommerce. The solution is simple and efficient for brands working with retailers who also use these platforms and have them integrated amongst their POS (point of sale) systems.

## What it does 🧨
F-sync helps brands facilitate inventory in real-time across sales channels. Take for instance a fashion brand like Gucci that has Retailer A, Retailer B, and Retailer C. All retailers under the Gucci brand can view each other’s inventory. If Retailer A has a shortage in stock and Retailer B either has surplus/stale stock or stock that isn’t selling as fast as Retailer A - they can supply Retailer A with their stock. 

A retailer can make a request to another retailer for any items they need with just one click. Retailers can manage their own store inventory, which is automatically synchronized with a brand's global inventory. 

Brands can add retailers to have their inventory be tracked in their global inventory, as well as add new lines of products to their inventory which retailers can see and request. They can likewise request products from other retailers.

## How we built it 🤓
F•sync is divided into two parts: the client frontend and the server backend. 

We used Express for our backend webserver, and “Socket.io” to communicate between the frontend and the backend, and “MongoDB” for our database. We also incorporated the Twilio API (SendGrid) to send emails personalized through dynamic templates to the various companies that would use our product. For MongoDB, we are using two collections: one for brands and one for retailers. Each brand has basic information, a list of products with their global quantity and name, and a list of associated retailers. Likewise, retailers have basic information, but also have a list of brands they carry and a list of products in that specific brand they carry. This enabled us to minimize having the same information repeated and make it easy to look up any information about any brand or retailer, such as their inventory.

For the frontend, we used React JS combined with the Chakra UI and opened up "socket. io-client" connections to the backend. We chose sockets since, when events happened in the frontend, we can trigger other clients through events to update their view, enabling a real-time reflection of the global inventory of a product

## Challenges we ran into 🥊
This is one of the most significant projects we have ever done due to the amount of coding required. It's also the most complex web app we have ever developed. Normally, designing a large database schema and working with so many operations to modify many different parts of the database and synchronize everything together will take far longer than the scope of a short hackathon—the time and effort to write and test everything that we needed to access the database might be impossible to accomplish in 36 hours. It was a challenge to meet the 36 hour deadline, but doable if we planned everything out function by function, which it greatly aided in developing the reusable code that we needed for multiple database operations. As a result, we are amazed and proud of each of us and by the results of this project! 

Aside from database accessing, integration of frontend and backend was also a very challenging part of the project. With so many planned features and complex interactions in our app, we had a monumental amount of events we had to account for and test on the frontend. Using sockets and React's context hooks took some figuring out.

## Accomplishments that we're proud of 🥂
We are incredibly proud of one of our front-end members for learning how to use React.JS in 36 hours with Chakra UI. There were hundreds of lines of coding that made it look very challenging to do, and the project was enormous for 36 hours of coding. For the backend, there were more than 800 lines of code, and we had numerous fully developed pages in our frontend. Overall, this was the most complex project we've done. One thing that we're especially proud of is that we managed to correctly connect the front-end with backend coding and enable most features we planned on having. Though, we had to plan everything out thoroughly to make it possible to build our app in this period. Everyone here contributed the same amount of energy and time to make this project possible! 

## What we learned 🎓
In tackling this project, we learned the importance of sitting down, whiteboarding, pondering, designing the entire project and backend from scratch before starting. For a hackathon, a rough plan is often developed and there's a rush to start coding and figure it out as we go through the coding process. For the scale of our product, it would be impossible to wing it successfully in a limited amount of time. 

And when it was time to start coding, it was really easy to follow the plan laid out. As a result, some of the code had relatively few errors despite a large amount of code that we wrote. When any issues arose, previously flagged problematic areas we identified in the planning process helped us debug and fix things faster.

Lastly, it was also a challenge for a member of our team who learned React JS in 36 hours and contributed a fantastic amount of work. Overall, success comes from learning from mistakes and knowing how to adjust them. 

## What's next for F•sync ⏭
We will try it out with some brands to test the potential integration across different software platforms (e-commerce, POS, and other inventory management solutions). F•sync could become the next-generation inventory management app that provides smart production and inventory allocation analytics by unlocking the capabilities to ship-from-store, in-store track in real-time, and process payments. Helping brands reduce overstocking and overproducing, one step at a time. 

# Getting Started with Create React App 🏌️‍

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts 💱

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
