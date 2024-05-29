module.exports = {
  "roots": [
    "src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": {
        "target": "es2017",
      }
    }
  },
}
