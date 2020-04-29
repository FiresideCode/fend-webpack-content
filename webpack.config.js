const path = require('path')
const express = require('express')

module.exports = {
  entry: './src/client/index.js'
}

module: {
  rules: [
          {
      test: '/\.js$/',
      exclude: /node_modules/,
      loader: "babel-loader"
          }
  ]
}