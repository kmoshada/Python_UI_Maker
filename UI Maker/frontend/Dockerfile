# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application's code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Serve the built React app using a static file server
CMD ["npm", "start"]
