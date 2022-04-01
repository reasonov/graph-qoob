export const global = {
    getMediaUrl: (path) => {
        return (process.env.NODE_ENV === 'development') ? 'http://localhost:5000'+path : '/stat'+path;
    },
    getFullDate: (datetimestring) => {
        let date = new Date(datetimestring)
        let dateFormatter = new Intl.DateTimeFormat('ru-RU', {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        return dateFormatter.format(date)
    },
    getFullDateTime: (datetimestring) => {
        let date = new Date(datetimestring)
        let dateFormatter = new Intl.DateTimeFormat('ru-RU', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        })
        return dateFormatter.format(date)
    },
    formattedPrice(price) {
      let priceString = price.toString();
      priceString = priceString.split('').reverse().join('').replace(/([0-9]{3})/g, "$1 ").split('').reverse().join('');
      return priceString
    }
}