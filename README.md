# Interactive Quiz Game

A modern, responsive quiz application built with HTML, CSS, and JavaScript. Test your knowledge across multiple categories and difficulty levels with an engaging user interface and comprehensive scoring system.

## 🎯 Features

### Core Functionality
- **Multiple Categories**: General Knowledge, Science, History, and Geography
- **Three Difficulty Levels**: Easy, Medium, and Hard
- **Interactive UI**: Modern design with smooth animations and transitions
- **Real-time Timer**: 30-second countdown for each question
- **Score Tracking**: Dynamic scoring system with time bonuses
- **Progress Tracking**: Visual progress bar and question counter

### User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Loading Animations**: Smooth transitions between screens
- **Visual Feedback**: Color-coded correct/incorrect answers
- **Performance Messages**: Encouraging feedback based on performance
- **Retry Functionality**: Easy restart and navigation options

### Technical Features
- **Object-Oriented Design**: Clean, maintainable JavaScript code
- **Event-Driven Architecture**: Responsive user interactions
- **Local Storage Ready**: Easy to extend with persistent data
- **Modular Structure**: Easy to add new categories and questions

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start playing immediately!

### File Structure
```
Online Quiz Game/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎮 How to Play

1. **Welcome Screen**
   - Choose your preferred category (General, Science, History, Geography)
   - Select difficulty level (Easy, Medium, Hard)
   - Click "Start Quiz" to begin

2. **Quiz Session**
   - Read each question carefully
   - Click on your chosen answer
   - Watch the timer countdown (30 seconds per question)
   - Click "Next Question" to proceed

3. **Results Screen**
   - View your final score and percentage
   - See detailed statistics (correct/incorrect answers, time taken)
   - Get personalized performance feedback
   - Choose to retry or return to home

## 📊 Scoring System

### Point Calculation
- **Base Points**: 10 points per correct answer
- **Time Bonus**: Additional points for quick answers
- **Difficulty Multiplier**: 
  - Easy: 1x points
  - Medium: 1.5x points
  - Hard: 2x points

### Performance Levels
- **90%+**: Excellent - Outstanding performance!
- **70-89%**: Great Job - Solid understanding
- **50-69%**: Good Effort - Keep learning
- **<50%**: Keep Learning - Every attempt helps

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Modern color schemes
- **Smooth Animations**: Fade-in effects and transitions
- **Interactive Buttons**: Hover effects and state changes
- **Progress Indicators**: Real-time progress bar
- **Timer Warning**: Visual alerts when time is running low

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Flexible Layout**: Adapts to different viewport sizes
- **Touch-Friendly**: Large buttons for mobile interaction
- **Readable Typography**: Clear, accessible text

## 🔧 Customization

### Adding New Categories
1. Add category button in `index.html`
2. Add questions in `script.js` under `getQuestionsByCategory()`
3. Follow the existing question format

### Adding New Questions
```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0  // Index of correct answer (0-3)
}
```

### Modifying Styling
- Edit `styles.css` to customize colors, fonts, and layouts
- Use CSS variables for consistent theming
- Add new animations in the CSS file

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Classes, arrow functions, and modern syntax
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Typography (Poppins)

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Efficient DOM Manipulation**: Minimal reflows and repaints
- **Memory Management**: Proper cleanup of timers and event listeners

## 📈 Future Enhancements

### Potential Features
- **User Accounts**: Save progress and high scores
- **Leaderboards**: Compare scores with other players
- **Custom Quizzes**: Create your own question sets
- **Multiplayer Mode**: Real-time competitive play
- **Achievement System**: Unlock badges and rewards
- **Dark Mode**: Toggle between light and dark themes
- **Sound Effects**: Audio feedback for interactions
- **Offline Support**: Work without internet connection

### Technical Improvements
- **Local Storage**: Save user preferences and scores
- **Service Workers**: Enable offline functionality
- **Progressive Web App**: Install as native app
- **API Integration**: Fetch questions from external sources
- **Analytics**: Track user engagement and performance

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new questions and categories
- Improving the UI/UX design
- Optimizing performance
- Adding new features
- Fixing bugs and issues

