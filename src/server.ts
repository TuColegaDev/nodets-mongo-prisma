import app from './app'

const server = 
    app.listen(app.get("port"), async() => {
        console.log(
            `✅ App is running: https://localhost:${app.get('port')}`,
            app.get("env")
        );
  });
  
export default server;