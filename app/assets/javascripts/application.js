//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Top-level import (must be at the very top of the file)
import MultiselectAutocomplete from './components/multiselect-autocomplete/multiselect-autocomplete.js';

window.GOVUKPrototypeKit.documentReady(() => {

  // -----------------------------------------
  // Close on ESC key
  // -----------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeFilters();
    }
  });

  // -----------------------------------------
  // Utility: escape characters for attribute selectors and ids
  // -----------------------------------------
  function cssEscape(str) {
    return String(str).replace(/([ #;?%&,.+*~\\':"!^$[\>|/@])/g, '\\$1');
  }

  // -----------------------------------------
  // Update Applied Filters (adds removable chips)
  // -----------------------------------------
  function updateAppliedFilters() {
    const container = document.getElementById("applied-filters");
    const list = document.getElementById("applied-filters-list");
    list.innerHTML = ""; // clear existing

    // Collect selected filters
    const selected = [];

    // --- Funding (checkboxes) ---
    document.querySelectorAll('input[name="funding"]:checked').forEach(cb => {
      selected.push({ group: "funding", label: "Funding stream", value: cb.value });
    });

    // If nothing selected → hide section
    if (selected.length === 0) {
      container.style.display = "none";
      document.getElementById("clear-main-filters").style.display = "none";
      return;
    }

    container.style.display = "block";
    document.getElementById("clear-main-filters").style.display = "block";

    // Build GOV.UK tag elements with a remove button
    selected.forEach(item => {
      const tag = document.createElement("span");
      tag.className = "app-filter-chip govuk-!-margin-right-1 govuk-!-margin-bottom-1";
      tag.setAttribute("data-group", item.group);
      tag.setAttribute("data-value", item.value);

      // Visible label e.g. "Funding: HE"
      const label = document.createElement("span");
      label.className = "app-filter-chip__label";
      label.textContent = `${item.label}: ${item.value}`;

      // Remove button (×) with aria-label for SRs
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "app-filter-chip__remove";
      btn.setAttribute("aria-label", `Remove filter ${item.label}: ${item.value}`);
      btn.innerHTML = '<span aria-hidden="true">&times;</span>';

      tag.appendChild(btn);
      tag.appendChild(label);
      list.appendChild(tag);
    });
  }

  // -----------------------------------------
  // Initialise autocomplete components
  // -----------------------------------------
  const els = document.querySelectorAll('[data-module="multiselect-autocomplete"]');
  els.forEach(el => {
    const comp = new MultiselectAutocomplete(el);
    comp.init();
  });

  // -----------------------------------------
  // EXPOSE FILTER FUNCTIONS GLOBALLY
  // -----------------------------------------
  window.openFilters = function () {
    const panel = document.getElementById("filter-panel");
    const backdrop = document.getElementById("filter-backdrop");

    panel.classList.add("open");
    backdrop.classList.add("visible");
  };

  window.closeFilters = function () {
    const panel = document.getElementById("filter-panel");
    const backdrop = document.getElementById("filter-backdrop");

    panel.classList.remove("open");
    backdrop.classList.remove("visible");
  };

  window.applyFilters = function () {
    updateAppliedFilters();
    closeFilters();
  };

  window.clearAllFilters = function () {
    // clear checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

    // clear text inputs
    document.querySelectorAll('input[type="text"]').forEach(t => t.value = "");

    // clear selects
    document.querySelectorAll('select').forEach(s => s.selectedIndex = 0);

    // update the applied filters section
    updateAppliedFilters();
  };

  // -----------------------------------------
  // STEP 2: Delegated click handler to remove a single filter chip
  // -----------------------------------------
  const appliedList = document.getElementById("applied-filters-list");

  // Guard if element is not present on some templates
  if (appliedList) {
    appliedList.addEventListener("click", (e) => {
      const btn = e.target.closest(".app-filter-chip__remove");
      if (!btn) return;

      const chip = btn.closest(".app-filter-chip");
      if (!chip) return;

      const group = chip.getAttribute("data-group");
      const value = chip.getAttribute("data-value");

      // Uncheck the corresponding input in the filter panel
      // 1) Preferred: name/value
      let input = document.querySelector(`input[name="${cssEscape(group)}"][value="${cssEscape(value)}"]`);

      // 2) Fallback: id like funding-HE
      if (!input) {
        const id = `${group}-${value}`;
        input = document.getElementById(id);
      }

      if (input && "checked" in input) {
        input.checked = false;
      }

      // Re-render the applied filters
      updateAppliedFilters();
    });
  }

  // -----------------------------------------
  // Initial render on page load (in case of persisted state)
  // -----------------------------------------
  updateAppliedFilters();

}); // IMPORTANT: closes documentReady