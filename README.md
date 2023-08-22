# Flashcard-o-matic

Flashcard-o-matic is a web application designed to help students study with flashcards. Teachers can create decks of flashcards for different subjects, and students can study these decks to improve their knowledge.
Table of Contents

    Introduction
    Features
    Technologies Used
    Installation
    Usage
    API Endpoints
    Screens
    Contributing
    License
    Acknowledgements
    Contact

# Introduction

Flashcard-o-matic is a React-based web application that allows teachers to create decks of flashcards and students to study these decks. The application provides various screens for managing decks, adding cards, studying, and more.
Features

    Home screen displaying a list of decks with options to create, study, view, or delete a deck.
    Study screen for studying cards from a specific deck with a flip card mechanism.
    Create Deck screen for adding new decks with name and description fields.
    Deck screen to view all information about a specific deck, including cards, and options to edit, study, add cards, or delete the deck.
    Edit Deck screen for modifying information on an existing deck.
    Add Card screen for adding new cards to an existing deck.
    Edit Card screen to modify information on an existing card.

# Technologies Used

    React
    React Router
    Bootstrap 4 (for styling, but custom styling can be applied)
    json-server (for API server)

# Installation

Follow these steps to set up the project on your local machine:

    Download the Qualified assessment files to your computer.
    Open the terminal and navigate to the project directory.
    Run npm install to install the required dependencies.

# Usage

To run the application, use the following command:

Follow the instructions below to get this project up and running on your own machine:

    Download the Qualified assessment files to your computer.
    Run npm install to install the project.


bash

npm start

This will start two servers concurrently:

    An API server powered by json-server, running on http://localhost:5000.
    The React application running on http://localhost:3000.

The application can be accessed in your web browser at http://localhost:3000.
API Endpoints

The application uses two datasets, "decks" and "cards." You can interact with the API using the following functions:

    listDecks(): Get a list of all decks.
    createDeck(deck): Create a new deck.
    readDeck(deckId): Get information about a specific deck by ID.
    updateDeck(deck): Update an existing deck.
    deleteDeck(deckId): Delete a deck by ID.
    createCard(deckId, card): Add a new card to a specific deck.
    readCard(cardId): Get information about a specific card by ID.
    updateCard(card): Update an existing card.
    deleteCard(cardId): Delete a card by ID.

# Screens

![Home](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8ad6e17b7d849280a619e4bb69c26baa-home.png)

![Delete Deck Prompt](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/ae0a66039ae79eee10554cc7af2fcc20-lete-deck-prompt.png)

![Study](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/e5adaf57aef5e38f4dcd8e7efd0a5dc9-study-first-card.png)

![Next](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/5a7d4b1050a592638fc1cf0df3f10cd0-rst-card-flipped.png)

![Restart Prompt](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/59f672a4dae995dd7bfeed04ab020b70-y-restart-prompt.png)

![Not enough cards](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/4fea9f95eed721bd25bb2bdfe8f70d3f-not-enough-cards.png)

![Create Deck](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/c5806a5777aa468623767d8fa4fa8fe8-deck-create.png)

![Deck](![image](https://github.com/MangakingO/Flashcard-o-matic/assets/102126868/783da054-1d9a-4b71-917b-1f6feec263ef)

![Delete Card](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/987a95a7cc4470316b38425b8cdb7c84-lete-card-prompt.png)

![Edit Deck](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/6c34e4b94ba7e983719eda4aa6f60592-deck-edit.png)

![Add card](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/fcc7dde129ed17b6ee199313e1dbc542-card-add.png)

![Edit card](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/cd6a1f07574bf8544b0a30d45020a274-card-edit.png)



The application consists of the following screens:

    Home: Shows a list of decks with options to create, study, view, or delete a deck.
    Study: Allows the user to study the cards from a specified deck.
    Create Deck: Allows the user to create a new deck.
    Deck: Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck.
    Edit Deck: Allows the user to modify information on an existing deck.
    Add Card: Allows the user to add a new card to an existing deck.
    Edit Card: Allows the user to modify information on an existing card.

# Contributing

Contributions to the project are welcome. If you find any issues or want to add new features, feel free to create a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgements

This project was developed as part of the Thinkful curriculum.
