#!/bin/sh
# start.sh

# Run the insertData script
node src/data_dump.js

# Start the main application
node src/server.js