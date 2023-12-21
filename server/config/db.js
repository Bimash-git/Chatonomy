
const connectDB = async() => {
    try {
        console.log("Database connection initializing....");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;