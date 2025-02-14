# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js where the server fails to start because the specified port is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Problem

The `bug.js` file creates an HTTP server that listens on port 8080. If another application is already using this port, the server will fail to start and throw an error.

## Solution

The `bugSolution.js` file demonstrates how to handle this error gracefully. It attempts to start the server on the specified port. If the port is in use, it will try a different port.