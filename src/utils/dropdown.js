export default function (scopeComponent = false) {
  if (!scopeComponent) scopeComponent = document;
  scopeComponent.querySelectorAll("[data-dropdown]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.currentTarget.querySelectorAll("[data-list]").forEach((listEl) => {
        if (listEl.style.display === "none") {
          listEl.style.display = "block";
        } else {
          listEl.style.display = "none";
        }
      });
    })
  );
}
