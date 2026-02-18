/* global accessibleAutocomplete */

function MultiselectAutocomplete($module) {
  this.$module = $module;

  this.id = $module.dataset.id;
  this.name = $module.dataset.name;

  // JSON-parsed items list
  this.items = JSON.parse($module.dataset.items);

  this.selected = new Set();
}

MultiselectAutocomplete.prototype.init = function () {
  const container = this.$module;
  const selectedContainer = document.getElementById(`${this.id}-selected`);

  const renderSelected = () => {
    selectedContainer.innerHTML = "";

    this.selected.forEach(item => {
      const tag = document.createElement("div");
      tag.className = "govuk-tag govuk-tag--grey govuk-!-margin-right-1 govuk-!-margin-bottom-1";
      tag.style.display = "inline-block";

      tag.innerHTML = `
        ${item}
        <button type="button" class="govuk-link govuk-!-margin-left-1" data-remove="${item}">
          Remove
        </button>
        <input type="hidden" name="${this.name}" value="${item}">
      `;

      selectedContainer.appendChild(tag);
    });

    // Add remove binding
    selectedContainer.querySelectorAll("[data-remove]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.selected.delete(btn.dataset.remove);
        renderSelected();
      });
    });
  };

  accessibleAutocomplete({
    element: container,
    id: this.id,
    minLength: 1,
    showAllValues: true,
    source: (query, syncResults) => {
      syncResults(
        this.items.filter(i => i.toLowerCase().includes(query.toLowerCase()))
      );
    },
    onConfirm: (item) => {
      if (item && !this.selected.has(item)) {
        this.selected.add(item);
        renderSelected();
      }

      // Clear input field
      const input = document.querySelector(`#${this.id}`);
      if (input) input.value = "";
    }
  });
};

export default MultiselectAutocomplete;