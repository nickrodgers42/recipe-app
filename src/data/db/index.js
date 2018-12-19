import mongoose from "mongoose";

export async function connect(options) {
    return mongoose.connect(
        "mongodb://localhost:27017/recipe-app",
        options
    );
}
