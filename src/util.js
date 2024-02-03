export default function getRandomInt(min, max) {
    
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("🚀 ~ getRandomInt ~ number:", number)
    
    return number;
  }
