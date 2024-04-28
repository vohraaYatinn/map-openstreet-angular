import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect('mongodb+srv://root:root@cluster0.27sitra.mongodb.net/', {
        dbName: "geotracker",
    }).then((c) => {
        console.log("Database Connected", c.connection.host);
    }).catch((e) => {
        console.error("MongoDB Connection Error:", e);
    });
}
