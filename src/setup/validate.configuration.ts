export const validateConfiguration = () => {
    
    if (!process.env.PORT) {
        console.error("configuration property PORT is required");
        process.exit(1);
    }

    if (!process.env.DB_HOST) {
        console.error("configuration property DB_HOST is required");
        process.exit(1);
    }

    if (!process.env.DB_USERNAME) {
        console.error("configuration property DB_USERNAME is required");
        process.exit(1);
    }

    if (!process.env.DB_PASSWORD) {
        console.error("configuration property DB_PASSWORD is required");
        process.exit(1);
    }

    if (!process.env.DB_PORT) {
        console.error("configuration property DB_PORT is required");
        process.exit(1);
    }

    if (!process.env.DB_DATABASE) {
        console.error("configuration property DB_DATABASE is required");
        process.exit(1);
    }

    if (!process.env.JWT_SECRET) {
        console.error("configuration property JWT_SECRET is required");
        process.exit(1)
    }
}