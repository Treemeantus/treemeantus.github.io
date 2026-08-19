(function () {
  function apply(cls, prefix, count) {
    var urls = [];
    for (var i = 1; i <= count; i++) urls.push(prefix + i + ".txt?v=8");
    Promise.all(urls.map(function (u) { return fetch(u).then(function (r) { return r.text(); }); }))
      .then(function (parts) {
        var data = "url(data:image/jpeg;base64," + parts.join("") + ")";
        document.querySelectorAll(cls).forEach(function (el) {
          el.style.backgroundImage = data;
        });
      })
      .catch(function () {});
  }
  apply(".img-cashews, .photo-cashews", "cashews", 6);
  apply(".img-raisins, .photo-raisins", "raisins", 5);
})();
