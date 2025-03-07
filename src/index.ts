import app from "./app";

const PORT = 3005;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log the server start event with the URL for easy access
  console.log(`Server is running on http://localhost:${PORT}`);
});