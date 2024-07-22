# React Native Movie App

This project is a React Native application that showcases movies using the TVmaze API. The app features an animated splash screen, a home screen displaying a list of movies, a search screen to find movies, and a details screen to show movie details.

## Features

- Animated Splash Screen
- Home Screen displaying movies
- Search Screen with search functionality
- Details Screen with detailed information about selected movies
- Custom Fonts

## Installation

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI (if using Expo)

### Setup

1. Install: 

npx create-expo-app movies
cd movies

2. Install dependencies:

npm install
or
yarn install

3. Install Expo CLI globally if you haven't already:

npm install -g expo-cli

4. Start the development server:

npx expo start

### Usage

# Splash Screen: 
The app starts with an animated splash screen that fades in and transitions to the home screen.

# Home Screen: 
Displays a list of movies fetched from the TVmaze API. Each movie shows an image thumbnail, title, and summary. Clicking on a movie navigates to the details screen.

# Search Screen: 
Includes a search bar to find movies. Search results are displayed similarly to the home screen. Users can navigate back to the home screen.

# Details Screen: 
Shows detailed information about the selected movie, including the image, summary, title, and other relevant details.

### Custom Fonts

Custom fonts are used in this project. Fonts are loaded using expo-font and expo-splash-screen to ensure fonts are ready before the app starts.

### API

This app uses the TVmaze API to fetch movie data.

Search endpoint: https://api.tvmaze.com/search/shows?q={search_term}

Example: https://api.tvmaze.com/search/shows?q=all

### Contributing

Contributions are welcome! Please fork the repository and create a pull request.

### License

This project is licensed under the MIT License.


## Contact

For any inquiries, please contact:

- Your Name - [abhijeetdrv@gmail.com](mailto:abhijeetdrv@gmail.com)
- Project Link - [https://github.com/Abhi3110200/movies](https://github.com/Abhi3110200/movies)

