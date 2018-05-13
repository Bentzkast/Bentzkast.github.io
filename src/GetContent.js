class GetContent {
  getContentText(path) {
    return new Promise((resolve, reject) => {
      fetch(path)
        .then(res => res.text())
        .then(text => resolve(text))
        .catch(err => reject(err));
    });
  }
}
export default GetContent;
