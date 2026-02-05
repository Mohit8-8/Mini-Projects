# Tic Tac Toe Game

A simple, interactive Tic Tac Toe game built with vanilla HTML and JavaScript.

## Overview

This is a classic Tic Tac Toe game where two players (X and O) take turns marking spaces on a 3×3 grid, trying to get three of their marks in a row (horizontally, vertically, or diagonally).

## Features

- **Two-Player Gameplay**: Players alternate between X and O
- **Win Detection**: Automatically detects when a player wins
- **Tie Detection**: Identifies when the board is full with no winner
- **Simple UI**: Clean, user-friendly interface with a grid layout
- **Responsive**: Works smoothly in all modern browsers

## How to Play

1. Open `index.html` in your web browser
2. Player X goes first by clicking on an empty cell
3. Players take turns clicking on empty cells to mark them
4. The game announces when a player wins or if it's a tie
5. Refresh the page to play again

## Game Rules

- Players alternate turns between X and O
- A player wins by getting three of their marks in a row:
  - Horizontally (across)
  - Vertically (down)
  - Diagonally
- If all 9 cells are filled with no winner, the game is a tie
- Each cell can only be marked once

## Files

- **index.html** - The game board and HTML structure
- **script.js** - Game logic and event handling
- **readme.md** - This documentation file

## Game Logic

The game uses:

- An array to track the board state (9 cells)
- A `currentPlayer` variable to track whose turn it is
- A `checkWinner()` function that validates all winning conditions
- A `handleClick()` function to process player moves

## Winning Conditions

The game checks for wins across:

- 3 rows (top, middle, bottom)
- 3 columns (left, middle, right)
- 2 diagonals (top-left to bottom-right, top-right to bottom-left)
