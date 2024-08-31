(async () => {
    const fetch = (await import('node-fetch')).default;
  
    const API_KEY = '6d1e481669aea51ad1cb3d62bfb2ee6e'; 
    const city = 'Chennai'; 
  
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.current.temperature}°C`);
        console.log(`Weather: ${data.current.weather_descriptions[0]}`);
      })
      .catch(error => console.error('Error:', error));
  })();
  