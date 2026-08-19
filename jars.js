(function () {
  var urls = [];
  for (var i = 1; i <= 5; i++) urls.push("raisins" + i + ".txt?v=8");
  Promise.all(urls.map(function (u) { return fetch(u).then(function (r) { return r.text(); }); }))
    .then(function (parts) {
      var data = "url(data:image/jpeg;base64," + parts.join("") + ")";
      document.querySelectorAll(".img-raisins, .photo-raisins").forEach(function (el) {
        el.style.backgroundImage = data;
      });
    })
    .catch(function () {});
})();
