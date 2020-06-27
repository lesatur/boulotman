module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
   proxy: 'http://192.168.100.156:8000',

  }
}