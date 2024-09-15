import app from "./app"
import { CONFIG } from "./config"

const startServer = async () => {
    const PORT = CONFIG.PORT;
    try {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

startServer();